import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const workspaceDir = path.resolve(projectDir, "..");
const dataArg = process.argv[2] || "data/huawei-fresh-graduate-program-2026.json";
const dataPath = path.resolve(projectDir, dataArg);

if (!existsSync(dataPath)) {
  console.error(`Cannot find cover letter data file: ${dataPath}`);
  process.exit(1);
}

const data = JSON.parse(readFileSync(dataPath, "utf8"));
const htmlOutputDir = path.join(workspaceDir, "output", "html");
const pdfOutputDir = path.join(workspaceDir, "output", "pdf");
const htmlOutputPath = path.join(htmlOutputDir, `${data.slug}.html`);
const pdfOutputPath = path.join(pdfOutputDir, `minn-bo-bo-cover-letter-${data.slug}.pdf`);

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function paragraph(text) {
  return `<p>${escapeHtml(text)}</p>`;
}

function buildHtml() {
  const applicant = data.applicant;
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(applicant.name)} | Cover Letter</title>
    <style>
      :root {
        --ink: #20272b;
        --muted: #526068;
        --accent: #b84f25;
        --paper: #ffffff;
        --canvas: #e8edef;
      }

      * {
        box-sizing: border-box;
      }

      html {
        background: var(--canvas);
        color: var(--ink);
        font-family: Arial, Helvetica, sans-serif;
        font-size: 11pt;
        line-height: 1.48;
        letter-spacing: 0;
      }

      body {
        margin: 0;
      }

      main {
        display: grid;
        justify-content: center;
        padding: 12mm 0;
      }

      article {
        width: 210mm;
        min-height: 297mm;
        padding: 18mm 18mm 16mm;
        overflow: hidden;
        background: var(--paper);
        box-shadow: 0 2mm 8mm rgb(29 43 48 / 16%);
      }

      header {
        margin-bottom: 8mm;
        padding-bottom: 4mm;
        border-bottom: 0.45mm solid var(--accent);
      }

      h1,
      p {
        margin-top: 0;
      }

      h1 {
        margin-bottom: 1.5mm;
        font-size: 24pt;
        line-height: 1;
      }

      .headline {
        margin-bottom: 2mm;
        color: var(--accent);
        font-weight: 700;
      }

      .contact {
        display: grid;
        gap: 0.8mm;
        color: var(--muted);
        font-size: 10pt;
        line-height: 1.25;
      }

      .date {
        margin-bottom: 7mm;
      }

      .recipient {
        margin-bottom: 7mm;
      }

      .letter p {
        margin-bottom: 4.5mm;
      }

      .closing {
        margin-top: 7mm;
      }

      @page {
        size: A4;
        margin: 0;
      }

      @media print {
        html,
        body {
          width: 210mm;
          background: var(--paper);
          print-color-adjust: exact;
          -webkit-print-color-adjust: exact;
        }

        main {
          display: block;
          padding: 0;
        }

        article {
          width: 210mm;
          height: 297mm;
          min-height: 297mm;
          box-shadow: none;
        }
      }
    </style>
  </head>
  <body>
    <main>
      <article aria-label="Cover letter for ${escapeHtml(data.company)}">
        <header>
          <h1>${escapeHtml(applicant.name)}</h1>
          <p class="headline">${escapeHtml(applicant.headline)}</p>
          <div class="contact">
            <span>${escapeHtml(applicant.location)}</span>
            <span>${escapeHtml(applicant.phone)} | ${escapeHtml(applicant.email)}</span>
            <span>${escapeHtml(applicant.linkedin)} | ${escapeHtml(applicant.github)}</span>
          </div>
        </header>
        <section class="letter">
          <p class="date">${escapeHtml(data.date)}</p>
          <p class="recipient">Dear ${escapeHtml(data.recipient)},</p>
          ${data.letter.map(paragraph).join("\n          ")}
          <p class="closing">Sincerely,<br />${escapeHtml(applicant.name)}</p>
        </section>
      </article>
    </main>
  </body>
</html>
`;
}

const browserCandidates = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "google-chrome",
  "chromium",
  "chromium-browser",
].filter(Boolean);

const browser = browserCandidates.find((candidate) =>
  candidate.includes("/") ? existsSync(candidate) : true,
);

if (!browser) {
  console.error("No compatible Chrome or Chromium executable found. Set CHROME_PATH and retry.");
  process.exit(1);
}

mkdirSync(htmlOutputDir, { recursive: true });
mkdirSync(pdfOutputDir, { recursive: true });
writeFileSync(htmlOutputPath, buildHtml());

const result = spawnSync(
  browser,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--no-margins",
    "--allow-file-access-from-files",
    `--print-to-pdf=${pdfOutputPath}`,
    new URL(`file://${htmlOutputPath}`).href,
  ],
  { encoding: "utf8" },
);

if (result.status !== 0) {
  console.error(result.stderr || result.stdout || "PDF export failed.");
  process.exit(result.status ?? 1);
}

console.log(`Wrote ${htmlOutputPath}`);
console.log(`Exported ${pdfOutputPath}`);
