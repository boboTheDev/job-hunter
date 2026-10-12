import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

const projectDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = path.join(projectDir, "index.html");
const pdfPath = path.join(projectDir, "output", "pdf", "minn-bo-bo-software-engineer-resume.pdf");
const requiredHeadings = [
  "Professional Summary",
  "Technical Skills",
  "Professional Experience",
  "Education",
  "Selected Engineering Project",
  "Selected Publications",
  "Selected Awards",
  "Certifications & Languages"
];
const requiredKeywords = [
  "Software Engineer",
  "Node.js",
  "TypeScript",
  "Express.js",
  "React",
  "PostgreSQL",
  "AWS",
  "Docker",
  "CI/CD",
  "REST APIs",
  "OAuth/SSO",
  "WebSockets",
  "MANGOs",
  "Jest",
  "unit testing",
  "integration testing"
];

const html = await readFile(htmlPath, "utf8");
const pdfBytes = new Uint8Array(await readFile(pdfPath));
const pdf = await getDocument({ data: pdfBytes }).promise;

const pageTexts = [];
const annotations = [];
for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
  const page = await pdf.getPage(pageNumber);
  const textContent = await page.getTextContent();
  pageTexts.push(textContent.items.map((item) => item.str).join(" ").replace(/\s+/g, " ").trim());
  annotations.push(...await page.getAnnotations());
}

const fullText = pageTexts.join("\n");
const failures = [];

if (pdf.numPages !== 2) {
  failures.push(`Expected 2 pages, found ${pdf.numPages}.`);
}

for (const heading of requiredHeadings) {
  if (!fullText.toLowerCase().includes(heading.toLowerCase())) failures.push(`Missing heading in extracted PDF text: ${heading}`);
}

for (const keyword of requiredKeywords) {
  if (!fullText.toLowerCase().includes(keyword.toLowerCase())) failures.push(`Missing ATS keyword: ${keyword}`);
}

const expectedLinks = [...html.matchAll(/href="(https?:\/\/[^"#]+|mailto:[^"#]+|tel:[^"#]+)"/g)].map((match) => match[1]);
const pdfLinks = annotations.map((annotation) => annotation.url || annotation.unsafeUrl).filter(Boolean);
for (const link of expectedLinks) {
  if (!pdfLinks.some((pdfLink) => pdfLink === link || pdfLink.startsWith(link))) {
    failures.push(`Missing clickable PDF link: ${link}`);
  }
}

if (failures.length > 0) {
  console.error(`Resume check failed:\n- ${failures.join("\n- ")}`);
  process.exit(1);
}

console.log(`Resume check passed: ${pdf.numPages} pages, ${fullText.length} extracted characters, ${pdfLinks.length} clickable links.`);
