const variants = {
  edge: {
    headline: "Software Engineer & Researcher | Edge-Cloud, Distributed Systems & Networking",
    profile:
      "Electrical and Computer Engineering researcher and software engineer with an MEng GPA of 4.00/4.00 and production experience spanning distributed web services, cloud infrastructure, real-time communication, and networked applications. Primary developer of the three-platform MANGOs educational metaverse ecosystem and first author of two IEEE papers on authentication and tokenomics for interconnected metaverses.",
    interests:
      "Distributed systems; edge-cloud and fog computing; service placement and resource orchestration; multi-cloud systems; MEC; network optimization; IoT; digital twins; dependable experimental platforms.",
    skills: [
      ["Systems & Backend", "Node.js, TypeScript, Express.js, Flask, REST APIs, OAuth/SSO, WebSockets, Azure Functions"],
      ["Cloud & DevOps", "AWS, EC2, IAM, S3, Route 53, CloudWatch, Docker, Docker Compose, Nginx, Linux, GitHub Actions, CI/CD"],
      ["Data", "PostgreSQL, MongoDB, Microsoft SQL Server, InterSystems Caché, Sequelize ORM, SQL"],
      ["Frontend", "React, React Native, Redux Toolkit, JavaScript, HTML, CSS, SCSS"],
      ["Testing", "Jest, unit testing, integration testing, API validation, production troubleshooting"],
      ["Additional", "Python, C++, InterSystems ObjectScript, TensorFlow, TensorFlow.js, document processing"],
    ],
    projectTitle: "MANGOs Distributed Education Ecosystem - Primary Developer",
    projectBullets: [
      "Architected, built, and continue to own the frontend, backend, APIs, socket communication, data structures, databases, storage, deployment, and infrastructure of three integrated production platforms.",
      "Implemented shared authentication and authorization, metaverse and organization registries, public API integrations, messaging, marketplace services, and real-time cross-platform workflows for networked academic environments.",
      "Built MANGOs School and Scene Studio as research-capable systems with learner progress, versioned publishing, shared sessions, and structured World, canvas, plot, and interaction models; content and 3D/Unity assets are produced by collaborators.",
    ],
    awardOrder: ["iot", "ai", "blockchain"],
  },
  iot: {
    headline: "Software Engineer & Researcher | Digital Twins, IoT & Cyber-Physical Systems",
    profile:
      "Electrical and Computer Engineering researcher and software engineer with an MEng GPA of 4.00/4.00, combining IoT and cloud experience with end-to-end development of real-time virtual-world and digital-twin infrastructure. Primary developer of the MANGOs ecosystem, including its learning platform and browser-based Scene Studio, with experience translating research concepts into deployed systems.",
    interests:
      "Digital twins; cyber-physical systems; IoT and sensor-to-cloud platforms; UWB-enabled sensing and localization; real-time systems; immersive simulation; edge-cloud integration; applied AI.",
    skills: [
      ["IoT & Real-Time", "Arduino, microcontrollers, sensor-to-cloud workflows, WebSockets, OAuth/SSO, real-time sessions, REST APIs, UWB/IoT research"],
      ["Digital-Twin Platforms", "scene manifests, GLB asset workflows, versioned publishing, interactions, Worlds, canvases, plots, storage"],
      ["Software", "TypeScript, JavaScript, Python, C++, Node.js, Express.js, Flask, React, Redux Toolkit"],
      ["Cloud & DevOps", "AWS, EC2, S3, IAM, CloudWatch, Docker, Docker Compose, Nginx, Linux, GitHub Actions, CI/CD"],
      ["Data", "PostgreSQL, MongoDB, Microsoft SQL Server, Sequelize ORM, SQL, structured data models"],
      ["AI & Testing", "TensorFlow, TensorFlow.js, deep learning, Jest, unit testing, integration testing"],
    ],
    projectTitle: "MANGOs Scene Studio & Educational Metaverse Ecosystem - Primary Developer",
    projectBullets: [
      "Built the full browser-based Scene Studio software platform: scene manifests, asset ingestion, draft and release versioning, camera and interaction models, decoration policies, Worlds, canvases, claimable plots, and shared sessions.",
      "Own all application screens, backend services, real-time sockets, public API integrations, databases, storage, deployment, and infrastructure across Scene Studio, MANGOs School, and the core MANGOs identity ecosystem.",
      "Designed the software boundary between web platforms and collaborator-produced course content, 3D scenes/assets, and Unity metaverses, enabling independently authored content to participate in a shared authenticated ecosystem.",
    ],
    awardOrder: ["iot", "ai", "blockchain"],
  },
  software: {
    headline: "Software Engineer & Researcher | Software & Distributed Systems",
    profile:
      "Software engineer and Electrical and Computer Engineering researcher with an MEng GPA of 4.00/4.00. Builds production systems across frontend, backend, data, cloud infrastructure, DevOps, and real-time communication. Primary developer of three integrated MANGOs platforms and first author of two IEEE publications on identity, interoperability, and tokenomics for interconnected metaverses.",
    interests:
      "Distributed software systems; cloud-native architecture; secure identity and interoperability; scalable web platforms; software architecture; DevOps; blockchain ecosystems; reliability and performance engineering.",
    skills: [
      ["Backend", "Node.js, TypeScript, Express.js, Flask, REST APIs, OAuth/SSO, WebSockets, Sequelize ORM, Azure Functions"],
      ["Frontend", "React, React Native, Redux Toolkit, JavaScript, HTML, CSS, SCSS"],
      ["Data", "PostgreSQL, MongoDB, Microsoft SQL Server, InterSystems Caché, SQL, data modelling"],
      ["Cloud & DevOps", "AWS, EC2, IAM, S3, Route 53, CloudWatch, Docker, Docker Compose, Nginx, Linux, GitHub Actions, CI/CD"],
      ["Quality", "Jest, unit testing, integration testing, API validation, deployment and recovery practices"],
      ["Research & AI", "Python, C++, TensorFlow, TensorFlow.js, blockchain/tokenomics, document processing"],
    ],
    projectTitle: "MANGOs Multi-Platform Software Ecosystem - Primary Developer",
    projectBullets: [
      "Architected, built, and continue to operate three integrated platforms, owning every application screen plus backend services, APIs, socket communication, data models, databases, storage, deployments, and infrastructure.",
      "Implemented centralized identity and OAuth/SSO, role-based administration, metaverse registries, avatars, social messaging, marketplace and wallet workflows, public API integrations, and organization-aware learning services.",
      "Built the School course-management and progress systems and the Scene Studio authoring and versioned-publishing workflows; established clean integration boundaries for course authors, 3D artists, and Unity-metaverse collaborators.",
    ],
    awardOrder: ["blockchain", "ai", "iot"],
  },
};

const experience = `
  <section aria-labelledby="experience-heading">
    <h2 id="experience-heading">Professional Experience</h2>
    <article class="entry">
      <header class="entry-header"><div><h3>Software Engineer - Full Stack &amp; DevOps</h3><p class="organization">Terrafirma | Software delivery for <a href="https://williamgreen.com.au/">William Green</a>, Australia</p></div><p class="date">Aug 2024 - Present</p></header>
      <ul>
        <li>Develop and maintain production full-stack systems for an Australian dental equipment distribution and servicing company.</li>
        <li>Build TypeScript and Node.js backend services, REST APIs, and PostgreSQL data workflows.</li>
        <li>Support delivery with AWS, Docker Compose, Nginx, Linux, GitHub Actions, CI/CD, Jest, unit testing, and integration testing.</li>
      </ul>
    </article>
    <article class="entry">
      <header class="entry-header"><div><h3>Full-Stack Developer &amp; DevOps Engineer</h3><p class="organization"><a href="https://ibeky.com/">iBeky</a> | Medical services technology</p></div><p class="date">Oct 2023 - Aug 2024</p></header>
      <ul>
        <li>Led Node.js backend development for internal web and mobile projects using Express.js and Jest.</li>
        <li>Provisioned AWS environments, configured Nginx reverse proxies, and administered databases and disaster-response procedures.</li>
        <li>Built Python utilities and Flask applications for AI-enabled document and data workflows.</li>
      </ul>
    </article>
    <article class="entry">
      <header class="entry-header"><div><h3>Junior Full-Stack Developer</h3><p class="organization"><a href="https://www.jonda.health/">Jonda Health</a> | Singapore healthcare technology</p></div><p class="date">Jan 2023 - Oct 2023</p></header>
      <ul>
        <li>Served as principal backend developer for JondaX, guided interns, developed Python document-processing tools, and integrated AWS services.</li>
      </ul>
    </article>
    <article class="entry compact-entry">
      <header class="entry-header"><div><h3>Backend Developer &amp; Database Designer</h3><p class="organization">Australian learning management system startup</p></div><p class="date">2021 - 2022</p></header>
      <p>Designed database systems, secure routes, permission models, and REST-based Azure Functions with Node.js, Express.js, Sequelize ORM, and JavaScript.</p>
    </article>
  </section>`;

const awards = {
  blockchain: `<li><strong>Third Prize, Huawei Developer Competition Asia Pacific</strong> (2024)<p class="award-description">Developed a blockchain-powered academic publishing platform on Huawei Cloud for research publishing, academic integrity, reputation, and revenue workflows. <a href="https://competition.intl.huaweicloud.com/intl/en-us/information/1201724782/html10">Competition result</a>.</p></li>`,
  ai: `<li><strong>Merit Award, Asia Pacific ICT Alliance Awards</strong> (2023)<p class="award-description">Led a two-stage deep learning system for lung segmentation and pulmonary tuberculosis detection from chest X-rays, integrated into a doctor-patient cloud ecosystem. <a href="https://apicta2023.hk/winners">Official winner list</a>.</p></li>`,
  iot: `<li><strong>First Prize, APT IoT Smart Challenge for Agri-Tech</strong> (2022)<p class="award-description">Developed AWS-backed cloud infrastructure and a deep learning component for an Arduino- and microcontroller-integrated smart greenhouse system.</p></li>`,
};

const variant = variants[window.RESUME_VARIANT];
if (!variant) throw new Error(`Unknown resume variant: ${window.RESUME_VARIANT}`);

const skillHtml = variant.skills
  .map(([label, value]) => `<p><strong>${label}:</strong> ${value}</p>`)
  .join("");

document.getElementById("resume").innerHTML = `
  <article class="resume-page page-one" aria-label="CV page 1">
    <header class="identity">
      <div><h1>Minn Bo Bo</h1><p class="headline">${variant.headline}</p></div>
      <address class="contact">
        <span>Bangkok, Thailand</span>
        <a href="tel:+66803791601">+66 803791601</a>
        <a href="mailto:minnbobo.official@gmail.com">minnbobo.official@gmail.com</a>
        <a href="https://www.linkedin.com/in/minn-bo-bo-6b30b0187/">linkedin.com/in/minn-bo-bo-6b30b0187</a>
        <a href="https://github.com/boboTheDev/">github.com/boboTheDev</a>
      </address>
    </header>
    <section aria-labelledby="profile-heading">
      <h2 id="profile-heading">Research Profile</h2>
      <p>${variant.profile}</p>
      <p class="research-interests"><strong>Research interests:</strong> ${variant.interests}</p>
    </section>
    <section aria-labelledby="skills-heading"><h2 id="skills-heading">Technical Skills</h2><div class="skill-groups">${skillHtml}</div></section>
    ${experience}
  </article>

  <article class="resume-page page-two" aria-label="CV page 2">
    <section aria-labelledby="education-heading">
      <h2 id="education-heading">Education</h2>
      <article class="entry education-entry"><header class="entry-header"><div><h3>Master of Engineering, Electrical Engineering | GPA: 4.00/4.00</h3><p class="organization"><a href="https://www.chula.ac.th/en/">Chulalongkorn University</a>, Thailand | Telecommunication and Networking Systems</p></div><p class="date">2024 - 2026</p></header></article>
      <article class="entry education-entry"><header class="entry-header"><div><h3>BEng (Hons), Electrical and Electronic Engineering - First Class</h3><p class="organization"><a href="https://www.ljmu.ac.uk/">Liverpool John Moores University</a>, United Kingdom</p></div><p class="date">2022 - 2024</p></header></article>
      <article class="entry education-entry"><header class="entry-header"><div><h3>Electronic and Communication Engineering</h3><p class="organization"><a href="https://ytu.edu.mm/">Yangon Technological University</a>, Myanmar | Transferred</p></div><p class="date">2016 - 2022</p></header></article>
    </section>

    <section aria-labelledby="project-heading">
      <h2 id="project-heading">Selected Research &amp; Engineering System</h2>
      <article class="entry">
        <header class="entry-header"><div><h3>${variant.projectTitle}</h3><p class="organization"><a href="https://www.mangosgo.com/">MANGOs</a> | <a href="https://school.mangosgo.com/">School</a> | <a href="https://studio.mangosgo.com/">Scene Studio</a> | Chulalongkorn University</p><p class="organization">Mentored by <a href="https://ee.eng.chula.ac.th/lunchakorn-wuttisittikulkij/">Professor Lunchakorn Wuttisittikulkij</a></p></div></header>
        <ul>${variant.projectBullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>
      </article>
    </section>

    <section aria-labelledby="publications-heading">
      <h2 id="publications-heading">Selected Publications</h2>
      <ol class="publications">
        <li><strong>M. B. Bo</strong> et al., "Authentication and Identification System for Interconnected Metaverses: Consideration and Implementation," IEEE ECTI-CON, 2025. <a href="https://doi.org/10.1109/ECTI-CON64996.2025.11100953">doi:10.1109/ECTI-CON64996.2025.11100953</a><p class="publication-note">Designed and implemented identity management and interoperability across participating virtual environments.</p></li>
        <li><strong>M. B. Bo</strong> et al., "Design and Implementation of Tokenomics and Ecosystem Model for Interconnected Metaverses," IEEE CCISP, 2025, pp. 225-229. <a href="https://doi.org/10.1109/CCISP67522.2025.11282105">doi:10.1109/CCISP67522.2025.11282105</a><p class="publication-note">Designed and implemented an ecosystem framework for participation, incentives, and value exchange.</p></li>
      </ol>
    </section>

    <section aria-labelledby="awards-heading"><h2 id="awards-heading">Selected Awards</h2><ul class="awards">${variant.awardOrder.map((key) => awards[key]).join("")}</ul></section>

    <section class="credentials" aria-labelledby="credentials-heading">
      <h2 id="credentials-heading">Certifications &amp; Languages</h2>
      <p><strong>Certifications:</strong> DevOps on AWS Specialization; Deep Learning Specialization; DeepLearning.AI TensorFlow Developer Professional Certificate; TensorFlow: Advanced Techniques Specialization.</p>
      <p><strong>Languages:</strong> Burmese (native); English (IELTS 8, official test; Diploma in English, Wall Street English).</p>
    </section>
  </article>`;
