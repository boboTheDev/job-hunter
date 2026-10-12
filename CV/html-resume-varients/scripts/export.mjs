import { existsSync, mkdirSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const projectDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = path.join(projectDir, "output", "pdf");
const variants = [
  ["edge-cloud-networking.html", "minn-bo-bo-phd-edge-cloud-networking-cv.pdf"],
  ["digital-twin-iot-cps.html", "minn-bo-bo-phd-digital-twin-iot-cps-cv.pdf"],
  ["software-distributed-systems.html", "minn-bo-bo-phd-software-distributed-systems-cv.pdf"],
];

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

mkdirSync(outputDir, { recursive: true });

for (const [htmlName, pdfName] of variants) {
  const htmlPath = path.join(projectDir, htmlName);
  const outputPath = path.join(outputDir, pdfName);
  const relativeOutput = path.relative(projectDir, outputPath);
  if (relativeOutput.startsWith("..") || path.isAbsolute(relativeOutput)) {
    throw new Error(`Refusing to write outside the variants project: ${outputPath}`);
  }

  const result = spawnSync(
    browser,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      "--no-margins",
      "--allow-file-access-from-files",
      "--run-all-compositor-stages-before-draw",
      "--virtual-time-budget=1000",
      `--print-to-pdf=${outputPath}`,
      pathToFileURL(htmlPath).href,
    ],
    { encoding: "utf8" },
  );

  if (result.status !== 0) {
    console.error(result.error?.message || result.stderr || result.stdout || `PDF export failed with status ${result.status}.`);
    process.exit(result.status ?? 1);
  }

  console.log(`Exported ${outputPath}`);
}
