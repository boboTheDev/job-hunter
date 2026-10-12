# MANGOs Project Notes

Last reviewed: 2026-10-08 (Asia/Bangkok)

## Quick ownership summary

| Area | Minn Bo Bo's ownership | Exclusions / collaborators |
| --- | --- | --- |
| Overall role | Primary developer of MANGOs, MANGOs School, and MANGOs Scene Studio; ongoing owner and developer | Work is guided by [Professor Lunchakorn Wuttisittikulkij](https://ee.eng.chula.ac.th/lunchakorn-wuttisittikulkij/), Department of Electrical Engineering, Chulalongkorn University |
| Product and UI | All application screens, frontend architecture, and user workflows across the three platforms | None reported |
| Backend and communication | Backend services, APIs, public API integrations, authentication, authorization, and real-time/socket communication | None reported |
| Data and platform | Data structures, databases, storage, deployment, cloud/infrastructure, and operations | None reported |
| MANGOs School | Entire software platform, including learner, instructor, organization, and administrator functionality | Actual course content is produced by instructors/partners |
| Scene Studio | Entire software platform, including 3D-content workflows, manifests, publishing, interactions, Worlds, canvases, plots, and shared sessions | Actual 3D scenes and 3D assets are produced by collaborators |
| Unity metaverses | Integration/platform side where applicable | Unity metaverse production is handled by other contributors |
| Public disclosure | All three public product links and the described responsibilities may be shared | Usage and outcome metrics are not yet confirmed |

### One-paragraph handoff

Minn Bo Bo is the primary and continuing developer of the three-platform MANGOs educational metaverse ecosystem. He owns all application screens and the end-to-end software stack: frontend, backend, real-time socket communication, public API integrations, authentication and authorization, data structures, databases, storage, deployment, infrastructure, and operations. He built the full MANGOs School software product but not its course content, and he built the full Scene Studio software product but not the 3D scenes/assets or Unity metaverses created by collaborators. The work is mentored by Professor Lunchakorn Wuttisittikulkij at Chulalongkorn University's Department of Electrical Engineering. Dates should not be used until intentionally supplied; measurable scale and impact are still to be established.

## Provenance and scope

- User-provided context: Minn Bo Bo worked on these projects during and after his master's degree and continues to work on them as their primary developer.
- Publicly reviewed systems:
  - [MANGOs](https://www.mangosgo.com/)
  - [MANGOs School](https://school.mangosgo.com/)
  - [MANGOs Scene Studio](https://studio.mangosgo.com/)
- The feature notes below come from public pages, public API responses, and the production browser bundles referenced by those pages. No authenticated or private areas were accessed.
- Minn confirms ownership of the platforms' software and infrastructure. Product features may be attributed to him at the engineering level, subject to the exclusions above. Dates, usage metrics, and measured outcomes remain intentionally unspecified.
- Live catalog counts are crawl snapshots and will change as the platforms grow.

## Ecosystem overview

The three applications form a connected educational-metaverse ecosystem:

1. **MANGOs** is the identity, ecosystem, and discovery layer. It describes itself as the "Metaverse of Academic Nexus for Global Opportunities" and connects users, academic metaverses, avatars, social features, and ecosystem services.
2. **MANGOs School** is the learning-management layer. It provides course discovery, enrollment, structured lessons, assessment, progress tracking, and organization-specific schools.
3. **MANGOs Scene Studio** is the 3D content and world-authoring layer. It supports publishing scenes, composing Worlds, and allocating customizable plots.

Both School and Scene Studio visibly integrate with MANGOs authentication. School exposes a "Login with MANGOs Auth" flow, while Scene Studio redirects unauthenticated users to the MANGOs login service and returns them to the requested Studio page.

## 1. MANGOs core platform

Primary link: [www.mangosgo.com](https://www.mangosgo.com/)

### Public product positioning

- A virtual education ecosystem built around immersive VR/XR learning, research, and collaboration across universities.
- Intended to reduce distance between academic communities by giving students and educators shared virtual spaces in which to meet, learn, collaborate, and build.
- The public site includes partner-metaverse discovery, project activities, research and innovation, a demo, and contact information.
- The homepage presents the platform as a combination of virtual reality, multiplayer networking, and academic partnerships.

### Observed platform capabilities

- Central account registration and login, email verification, password recovery, and profile management.
- LINE authorization and OAuth-style access for connected metaverse clients.
- Metaverse-client registry with client metadata, versions, maintainers, roles, role assignments, images, URLs, and serial numbers.
- Public partner-metaverse catalog and links into individual metaverse experiences or associated schools.
- Avatar library, uploaded avatars, digital-twin upload, default-avatar selection, and avatar hosting.
- Friends, friend requests, user profiles, conversations, and messaging.
- Marketplace browsing, item purchase, purchase history, gifting/receivers, seller tools, and avatar-library integration.
- MANGOs Gold wallet, transaction history, and login claims.
- Gamified achievement area ("Réussite") with at least one memory game and leaderboard.
- Administrative functions for users, invitations, sellers, metaverse clients, maintainers, roles, and releases.

### Public snapshot

- On 2026-10-08, the public metaverse-client endpoint returned **186 client records**. This is a registry count, not a verified count of active production worlds.
- Records span academic, medical, cultural, training, company, and other virtual environments. Public examples included ChulaVerse areas, a Multiverse Hospital, NPRU Metaverse, and other partner experiences.

### Research connection already present in the CV

The MANGOs homepage lists Minn's 2025 paper, **"Authentication and Identification System for Interconnected Metaverses: Consideration and Implementation."** The existing CV also includes it and describes the work as an authentication and identification system addressing identity management and interoperability across participating virtual environments. This is strong public evidence connecting his research to the platform's cross-metaverse identity layer.

The CV also lists **"Design and Implementation of Tokenomics and Ecosystem Model for Interconnected Metaverses"** (2025), which aligns with the publicly visible MANGOs Gold, transactions, marketplace, participation, and ecosystem concepts. Minn confirms primary development ownership of the production platform; document which research concepts were deployed if making a direct research-to-production claim.

### Client-side implementation signals

The public production bundle indicates a React single-page application using React Router, Redux with persisted state, TanStack Query, Axios, and utility-class styling. It calls a versioned API at `api.mangosgo.com`. Minn confirms that he owns the platform's frontend, backend, data, storage, communication, and infrastructure layers.

## 2. MANGOs School

Primary link: [school.mangosgo.com](https://school.mangosgo.com/)

### Product purpose

- A role-based learning platform connected to the broader MANGOs ecosystem.
- Public messaging emphasizes project-first lessons, live critique/studio learning, immersive media, and learning through virtual worlds.
- Supports public course and school discovery before login, then authenticated learning and administration workflows.
- Provides English and Thai interfaces.

### Learner capabilities

- Browse and search published courses and organizations/schools.
- Preview course descriptions, modules, and lessons without logging in.
- Enroll in courses and resume enrolled learning.
- Complete reading, video, and quiz lessons.
- Follow sequential learning rules that lock later lessons until prerequisites are complete.
- Track course, module, lesson, and video-watch progress.
- Answer checkpoint questions that pause a video and require a response before continuing.
- Use video subtitles.
- Submit single-choice and multiple-choice quizzes, see scores and passing thresholds, and retry where allowed.
- Download completion certificates when configured.

### Instructor and administrator capabilities

- Student, instructor, and administrator roles.
- Instructor dashboard for creating and editing courses.
- Course builder with modules and ordered lessons.
- Course import/update from JSON.
- Cover-image, content-image, subtitle, and certificate-template management.
- Strict course ordering and strict video-watch-progress settings.
- Enrollment lists and per-learner progress views.
- Organization-specific course management.
- Administrative management for organizations and organization groups.
- Public and exclusive organization/school configurations, including branding images, logos, hero images, and theme colors.

### Public snapshot

- On 2026-10-08, the public endpoints returned **22 published courses** and **13 organizations**.
- The visible subject range included Python, Blender and 3D modelling, emergency training, robotics, osteoporosis education, digital twins, and MANGOs ecosystem material.
- Visible organizations included the Thailand Metaverse Organization, Thai Osteoporosis Foundation, MEA Digital Twin Center, Chula Spark, IntaniaVerse, the Metaverse Technology Club RTNA, and MANGOs Tutorial.

### Client-side implementation signals

The public browser code indicates React, Material UI/Emotion, Redux with persisted state, TanStack Query, Axios, and internationalization. It communicates with a versioned API at `apischool.mangosgo.com` and uses MANGOs OAuth for shared sign-in. Minn confirms ownership of this software platform; instructors and partners own the actual course content.

## 3. MANGOs Scene Studio

Primary link: [studio.mangosgo.com](https://studio.mangosgo.com/)

The supplied HTTP URL redirects to HTTPS.

### Product purpose and content model

- A browser-based catalog, authoring, and publishing environment for MANGOs 3D content.
- The public catalog distinguishes three content levels:
  - **Studios/MANGOs hubs:** collections that group related scenes and Worlds.
  - **Scenes:** shared public 3D spaces that visitors can explore and, where enabled, decorate.
  - **Worlds:** neighborhoods made of canvases and private plots that users can reserve, claim, customize, and visit.

### Scene authoring and publishing capabilities

- Draft editing, saving, validation, publishing, and versioned releases.
- 3D/base-model asset uploads and scene bundle management.
- Bundle loading policies including initial, nearby, and on-demand loading.
- Scene bounds, ground level, background color, and access configuration.
- Preset camera positions, look-at targets, and a default camera.
- Click interactions and tooltips targeted at named nodes inside GLB models.
- Link, media, focus, panel, and extension-style interaction types are represented in the public client schema.
- Decoration sockets and bounded decoration areas.
- Placement policies controlling where users may position and scale models.
- Decoration access policies for authenticated users, plot owners, assigned owners, or collaborators.
- Direct manifest/extension configuration for advanced authoring.
- Public scene runtime with an optional call/room capability, suggesting live shared-session support.

### World and plot capabilities

- Worlds contain one or more canvases arranged as grids of plots.
- Plot states include available, reserved, configuring, claimed, and disabled.
- A user can reserve a plot while selecting a template, claim it, visit it, or release the claim.
- Worlds can offer multiple published scene templates for plots.
- The interface distinguishes the current user's plots and prevents duplicate claims where a World is configured for one plot per person.

### Studio and administration capabilities

- Studio overview with totals for scenes, Worlds, hubs, and drafts.
- Recently updated content and authoring status.
- Hub, scene, and World management.
- User access distinguishes general authenticated users, Studio authors, and MANGOs administrators.
- Administrative hub and World-canvas management.

### Public snapshot

- On 2026-10-08, the public catalog contained **10 published entries** across Studios, Scenes, and Worlds.
- Examples included an education Studio for NPRU, an AI Education Studio, a Defence Technology Studio, shared scenes, and Worlds exposing between 5 and 98 available plots.

### Client-side implementation signals

The public production code indicates a React/Vite client with utility-class styling, typed runtime validation, a versioned same-origin API, and shared MANGOs authentication. Public schemas and page code show structured scene manifests, draft revisions, release publishing, GLB-oriented interactions, asset upload, and plot workflows. Minn confirms ownership of the Studio software and infrastructure; collaborators create the 3D scenes/assets and Unity metaverses.

## Confirmed personal contribution

- Primary developer and continuing software owner across all three integrated platforms.
- Architected and implemented all application screens and frontend workflows.
- Implemented backend services, APIs, public API integrations, authentication and authorization, and real-time socket communication.
- Designed and operated the data structures, databases, storage, deployment, infrastructure, and operational environment.
- Implemented all MANGOs School software capabilities; did not author the actual course content.
- Implemented all MANGOs Scene Studio software capabilities; did not create the actual 3D scenes/assets or Unity metaverses.
- All three product links and the responsibilities above are approved for public use.
- Work was conducted under the mentorship of [Professor Lunchakorn Wuttisittikulkij](https://ee.eng.chula.ac.th/lunchakorn-wuttisittikulkij/) at Chulalongkorn University's Department of Electrical Engineering.

## Remaining evidence to collect

Do not invent these. Add them when defensible evidence becomes available:

1. Registered and active users.
2. Participating organizations, institutions, and production metaverses attributable to Minn's delivery period.
3. API traffic, concurrent socket sessions, stored assets, database size, and uptime/reliability figures.
4. Deployment frequency, lead time, incident recovery, or infrastructure cost improvements.
5. Performance, security, usability, or workflow improvements with before/after evidence.
6. Exact backend, database, storage, hosting, socket, observability, and deployment technologies suitable for public disclosure.
7. Which authentication and tokenomics research components map directly to the current production implementation.

## CV-ready project description

> **Primary Developer — MANGOs Educational Metaverse Ecosystem**
>
> - Architected, built, and continue to own all application screens, frontends, backend services, real-time socket communication, APIs, data structures, databases, storage, deployment, and infrastructure across three integrated platforms.
> - Built MANGOs identity and ecosystem services plus MANGOs School: cross-platform authentication, metaverse registry, social and marketplace services, organizations, course administration, progress tracking, video checkpoints, quizzes, certificates, bilingual UX, and public API integrations.
> - Built Scene Studio's browser-based 3D workflows, including scene manifests, asset ingestion, draft and version publishing, interactions, decoration rules, Worlds, canvases, plots, and shared sessions; collaborated with specialists who create course content, 3D scenes and assets, and Unity metaverses.

## Public sources reviewed

- [MANGOs home](https://www.mangosgo.com/)
- [MANGOs About](https://www.mangosgo.com/about)
- [MANGOs catalog](https://www.mangosgo.com/catalog)
- [MANGOs activities](https://www.mangosgo.com/activities)
- [MANGOs demo](https://www.mangosgo.com/demo)
- [MANGOs public metaverse-client endpoint](https://api.mangosgo.com/api/v1/metaverse-clients)
- [MANGOs School](https://school.mangosgo.com/)
- [MANGOs School public courses endpoint](https://apischool.mangosgo.com/api/v1/public/courses)
- [MANGOs School public organizations endpoint](https://apischool.mangosgo.com/api/v1/public/organizations)
- [MANGOs Scene Studio](https://studio.mangosgo.com/)
- [MANGOs Scene Studio public catalog endpoint](https://studio.mangosgo.com/api/v1/catalog?page=1&pageSize=24)
