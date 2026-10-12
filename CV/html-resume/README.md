# HTML Resume

An ATS-oriented, two-page A4 resume built with semantic HTML and print CSS.

## Commands

```bash
npm install
npm run export
npm run check
```

`npm run export` uses the locally installed Google Chrome, Microsoft Edge, or Chromium browser. Set `CHROME_PATH` when the browser is installed elsewhere.

The source document is `index.html`. The generated PDF is written to:

```text
output/pdf/minn-bo-bo-software-engineer-resume.pdf
```

Open `index.html` directly in a browser for the screen preview. Review `CONTENT_REVIEW.md` before using the PDF for applications.
