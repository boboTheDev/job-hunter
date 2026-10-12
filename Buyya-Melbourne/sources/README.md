# Source corpus

This folder preserves the locally extractable corpus behind the summaries.

- `research_admission.txt` is the live frame target reached from `http://www.cloudbus.org/research_admission.txt` on 7 October 2026. It matches `docs/buyya-admission-guide.md` byte-for-byte except for the final newline.
- `pdf-text/` contains full mechanical text extraction from all nine linked PDFs. Extraction can lose columns, ligatures, table structure, and figure meaning; cite and inspect the original PDFs for authoritative content.
- The four University admissions/research pages and two CLOUDS project pages are dynamic webpages. Their checked URLs, retrieved facts, dates, summaries, and critical notes are recorded in `summaries/01` through `04`, `07`, and `15` rather than copied as unstable raw HTML.

## Crawl coverage

All 15 direct URLs in `docs/buyya-instruction.md` were visited:

- 1 CLOUDS admission link (a forwarding frameset whose target was saved locally);
- 3 University of Melbourne pages;
- 2 CLOUDS project pages;
- 9 research PDFs, all downloaded and extracted.

Additional current University application, fees/scholarship, and international-entry pages were checked to distinguish live 2026 requirements from the historical lab note. Recent primary research was also checked to avoid claiming novelty already covered by ReinFog or contemporary safe/sustainable resource-management work.
