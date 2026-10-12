# PhD CV Variants

Three two-page A4 CVs tailored to the European doctoral-researcher campaign:

1. `edge-cloud-networking.html` - edge/cloud, distributed systems, networking, orchestration, and MEC.
2. `digital-twin-iot-cps.html` - digital twins, IoT, cyber-physical systems, UWB interests, and real-time platforms.
3. `software-distributed-systems.html` - software architecture, distributed platforms, cloud engineering, DevOps, and blockchain ecosystems.

All shared content is defined in `resume.js`; visual rules are in `styles.css`.

## Commands

```bash
npm run export
npm run check
```

The checker reuses `pdfjs-dist` installed in the sibling `html-resume` project. All final files are written inside this project:

```text
output/pdf/minn-bo-bo-phd-edge-cloud-networking-cv.pdf
output/pdf/minn-bo-bo-phd-digital-twin-iot-cps-cv.pdf
output/pdf/minn-bo-bo-phd-software-distributed-systems-cv.pdf
```

Temporary visual-QA renders belong under `tmp/pdfs/`.

## Content boundaries

- MANGOs software, screens, backend, real-time communication, data, storage, APIs, deployment, and infrastructure are attributed to Minn Bo Bo as primary developer.
- Course content, 3D scenes/assets, and Unity metaverses are credited to collaborators.
- The IoT variant names UWB as a research interest only because implementation details are not yet documented.
- No unverified user, traffic, uptime, performance, or deployment metrics are claimed.
- No unpublished manuscript is listed until its title and status are confirmed.
