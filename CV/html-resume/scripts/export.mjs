import { mkdirSync, existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const htmlPath = path.join(projectDir, "index.html");
const outputDir = path.join(projectDir, "output", "pdf");
const outputPath = path.join(
  outputDir,
  "minn-bo-bo-software-engineer-resume.pdf",
);

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
  console.error(
    "No compatible Chrome or Chromium executable found. Set CHROME_PATH and retry.",
  );
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });

const result = spawnSync(
  browser,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--no-margins",
    "--allow-file-access-from-files",
    `--print-to-pdf=${outputPath}`,
    new URL(`file://${htmlPath}`).href,
  ],
  { encoding: "utf8" },
);

if (result.status !== 0) {
  console.error(
    result.error?.message ||
      result.stderr ||
      result.stdout ||
      `PDF export failed with status ${result.status}.`,
  );
  process.exit(result.status ?? 1);
}

console.log(`Exported ${outputPath}`);
