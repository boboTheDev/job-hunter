import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { getDocument } from "../../html-resume/node_modules/pdfjs-dist/legacy/build/pdf.mjs";

const projectDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const commonHeadings = [
  "Research Profile",
  "Technical Skills",
  "Professional Experience",
  "Education",
  "Selected Research & Engineering System",
  "Selected Publications",
  "Selected Awards",
  "Certifications & Languages",
];
const commonKeywords = [
  "MEng",
  "GPA: 4.00/4.00",
  "Node.js",
  "TypeScript",
  "React",
  "PostgreSQL",
  "AWS",
  "Docker",
  "CI/CD",
  "REST APIs",
  "OAuth/SSO",
  "WebSockets",
  "MANGOs",
];
const requiredLinks = [
  "mailto:minnbobo.official@gmail.com",
  "https://www.linkedin.com/in/minn-bo-bo-6b30b0187/",
  "https://github.com/boboTheDev/",
  "https://www.mangosgo.com/",
  "https://school.mangosgo.com/",
  "https://studio.mangosgo.com/",
  "https://ee.eng.chula.ac.th/lunchakorn-wuttisittikulkij/",
  "https://doi.org/10.1109/ECTI-CON64996.2025.11100953",
  "https://doi.org/10.1109/CCISP67522.2025.11282105",
];
const variants = [
  {
    file: "minn-bo-bo-phd-edge-cloud-networking-cv.pdf",
    keywords: ["Edge-Cloud", "Distributed Systems", "service placement", "resource orchestration", "MEC", "network optimization"],
  },
  {
    file: "minn-bo-bo-phd-digital-twin-iot-cps-cv.pdf",
    keywords: ["Digital Twins", "Cyber-Physical Systems", "UWB", "sensor-to-cloud", "Scene Studio", "Arduino"],
  },
  {
    file: "minn-bo-bo-phd-software-distributed-systems-cv.pdf",
    keywords: ["Software & Distributed Systems", "cloud-native architecture", "software architecture", "blockchain", "unit testing", "integration testing"],
  },
];

const failures = [];
for (const variant of variants) {
  const pdfPath = path.join(projectDir, "output", "pdf", variant.file);
  const pdf = await getDocument({ data: new Uint8Array(await readFile(pdfPath)) }).promise;
  const pageTexts = [];
  const annotations = [];

  if (pdf.numPages !== 2) failures.push(`${variant.file}: expected 2 pages, found ${pdf.numPages}.`);

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();
    const items = content.items.filter((item) => item.str.trim());
    pageTexts.push(items.map((item) => item.str).join(" ").replace(/\s+/g, " ").trim());
    annotations.push(...await page.getAnnotations());
    const bottomTextY = Math.min(...items.map((item) => item.transform[5]));
    if (bottomTextY < 48) failures.push(`${variant.file}: page ${pageNumber} content is too close to the bottom edge (${bottomTextY.toFixed(1)}pt).`);
  }

  const fullText = pageTexts.join("\n");
  for (const value of [...commonHeadings, ...commonKeywords, ...variant.keywords]) {
    if (!fullText.toLowerCase().includes(value.toLowerCase())) failures.push(`${variant.file}: missing expected text: ${value}`);
  }

  const pdfLinks = annotations.map((annotation) => annotation.url || annotation.unsafeUrl).filter(Boolean);
  for (const link of requiredLinks) {
    if (!pdfLinks.some((pdfLink) => pdfLink === link || pdfLink.startsWith(link))) failures.push(`${variant.file}: missing clickable link: ${link}`);
  }

  console.log(`${variant.file}: ${pdf.numPages} pages, ${fullText.length} characters, ${pdfLinks.length} clickable links.`);
}

if (failures.length > 0) {
  console.error(`CV variant checks failed:\n- ${failures.join("\n- ")}`);
  process.exit(1);
}

console.log("All three CV variants passed.");
