const profile = {
  name: "Minn Bo Bo",
  headline: "Software Engineer | Full-Stack, Cloud & DevOps",
  location: "Bangkok, Thailand",
  phone: "+95 9 799 500 874",
  email: "minnbobo.official@gmail.com",
  linkedin: "linkedin.com/in/minn-bo-bo-6b30b0187",
  github: "github.com/boboTheDev",
};

const skillGroups = [
  {
    label: "backend services",
    terms: ["node.js", "node", "typescript", "javascript", "express", "rest api", "rest apis", "api"],
  },
  {
    label: "frontend development",
    terms: ["react", "react native", "redux", "html", "css", "scss", "frontend"],
  },
  {
    label: "databases",
    terms: ["postgresql", "postgres", "mongodb", "sql", "database", "sequelize"],
  },
  {
    label: "cloud and DevOps",
    terms: ["aws", "docker", "nginx", "linux", "ci/cd", "github actions", "cloud", "devops"],
  },
  {
    label: "testing",
    terms: ["jest", "unit testing", "integration testing", "test", "testing", "qa"],
  },
  {
    label: "AI and document workflows",
    terms: ["ai", "machine learning", "deep learning", "llm", "nlp", "tensorflow", "document"],
  },
  {
    label: "security and research",
    terms: ["security", "authentication", "metaverse", "research", "tokenomics", "publication"],
  },
  {
    label: "health technology",
    terms: ["health", "healthcare", "medical", "patient", "clinical"],
  },
];

const form = document.querySelector("#letter-form");
const output = document.querySelector("#letter-output");
const signals = document.querySelector("#signals");
const wordCount = document.querySelector("#word-count");
const fileInput = document.querySelector("#file-input");

const fields = {
  role: document.querySelector("#role"),
  company: document.querySelector("#company"),
  manager: document.querySelector("#manager"),
  location: document.querySelector("#location"),
  companyNotes: document.querySelector("#company-notes"),
  jobDescription: document.querySelector("#job-description"),
};

function cleanText(value) {
  return value.replace(/\s+/g, " ").trim();
}

function sentence(value, fallback) {
  const text = cleanText(value || fallback);
  if (!text) return "";
  return /[.!?]$/.test(text) ? text : `${text}.`;
}

function titleCase(value) {
  return cleanText(value)
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function detectSignals(text) {
  const lowered = text.toLowerCase();
  return skillGroups
    .filter((group) => group.terms.some((term) => lowered.includes(term)))
    .map((group) => group.label);
}

function pickSpecificLine(jobDescription, companyNotes, role, company) {
  const source = `${companyNotes}\n${jobDescription}`;
  const lines = source
    .split(/\n+/)
    .map((line) => cleanText(line.replace(/^[-*\u2022]\s*/, "")))
    .filter((line) => line.length > 45 && line.length < 190);

  const preferred = lines.find((line) =>
    /build|develop|scale|maintain|cloud|api|platform|product|customer|data|security|ai/i.test(line),
  );

  if (preferred) return sentence(preferred);
  if (company && role) {
    return `The ${role} role at ${company} looks closely connected to the kind of practical engineering work I want to keep doing.`;
  }
  return "The role looks closely connected to the kind of practical engineering work I want to keep doing.";
}

function buildMatchPhrase(matches) {
  if (matches.length === 0) {
    return "backend services, full-stack applications, cloud infrastructure, and maintainable software delivery";
  }

  if (matches.length === 1) return matches[0];
  if (matches.length === 2) return `${matches[0]} and ${matches[1]}`;
  return `${matches.slice(0, -1).join(", ")}, and ${matches.at(-1)}`;
}

function buildLetter() {
  const role = cleanText(fields.role.value) || "Software Engineer";
  const company = cleanText(fields.company.value) || "your team";
  const manager = cleanText(fields.manager.value) || "Hiring Team";
  const location = cleanText(fields.location.value);
  const companyNotes = cleanText(fields.companyNotes.value);
  const jobDescription = fields.jobDescription.value;
  const matches = detectSignals(`${companyNotes}\n${jobDescription}`);
  const matchPhrase = buildMatchPhrase(matches.slice(0, 4));
  const specificLine = pickSpecificLine(jobDescription, companyNotes, role, company);
  const roleText = titleCase(role);
  const date = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());

  const locationLine = location ? `<p>${escapeHtml(location)}</p>` : "";
  const companyText = company === "your team" ? "your team" : company;

  const openingDetail = companyNotes
    ? sentence(companyNotes)
    : `The ${roleText} role looks like a strong place to apply my experience while continuing to grow with a focused engineering team.`;

  const paragraphs = [
    `I am interested in the ${roleText} role at ${companyText} because it connects strongly with the work I have been building toward: reliable full-stack systems, practical backend engineering, and technology that can support real users. ${openingDetail}`,
    `In my current work as a Software Engineer, I build and maintain TypeScript and Node.js backend services, REST APIs, PostgreSQL workflows, and production delivery pipelines using AWS, Docker, Nginx, Linux, GitHub Actions, and CI/CD practices. I also use Jest, unit testing, and integration testing to protect backend behaviour and improve release confidence. This gives me a solid foundation for the role's focus on ${matchPhrase}.`,
    `Beyond implementation, I bring experience from medical technology, AI utilities, document workflows, database design, and research-oriented engineering. ${specificLine} I enjoy roles where I can understand the product context, work carefully through technical details, and contribute code that is maintainable after the first release.`,
    `I would welcome the opportunity to discuss how my full-stack, cloud, DevOps, and AI-related experience can contribute to ${companyText}. Thank you for considering my application.`,
  ];

  output.innerHTML = `
    <div class="meta">
      <p>${profile.name}</p>
      <p>${profile.headline}</p>
      <p>${profile.location}</p>
      <p>${profile.phone} | ${profile.email}</p>
      <p>${profile.linkedin} | ${profile.github}</p>
      <p>${date}</p>
      ${locationLine}
    </div>
    <p class="greeting">Dear ${escapeHtml(manager)},</p>
    ${paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
    <p class="closing">Sincerely,<br />${profile.name}</p>
  `;

  renderSignals(matches);
  updateWordCount();
}

function renderSignals(matches) {
  signals.innerHTML = "";
  const items = matches.length > 0 ? matches : ["No strong keyword matches yet"];
  for (const item of items) {
    const chip = document.createElement("span");
    chip.textContent = item;
    signals.appendChild(chip);
  }
}

function updateWordCount() {
  const words = cleanText(output.innerText).split(" ").filter(Boolean);
  wordCount.textContent = `${words.length} words`;
}

function downloadLetter() {
  const blob = new Blob([output.innerText], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const company = cleanText(fields.company.value).toLowerCase().replace(/[^a-z0-9]+/g, "-") || "company";
  link.href = url;
  link.download = `minn-bo-bo-cover-letter-${company}.txt`;
  link.click();
  URL.revokeObjectURL(url);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  buildLetter();
});

output.addEventListener("input", updateWordCount);

for (const field of Object.values(fields)) {
  field.addEventListener("input", () => {
    renderSignals(detectSignals(`${fields.companyNotes.value}\n${fields.jobDescription.value}`));
  });
}

fileInput.addEventListener("change", async () => {
  const [file] = fileInput.files;
  if (!file) return;
  fields.jobDescription.value = await file.text();
  buildLetter();
});

document.querySelector("#copy-button").addEventListener("click", async () => {
  await navigator.clipboard.writeText(output.innerText);
});

document.querySelector("#download-button").addEventListener("click", downloadLetter);
document.querySelector("#print-button").addEventListener("click", () => window.print());
document.querySelector("#reset-button").addEventListener("click", () => {
  form.reset();
  buildLetter();
});

buildLetter();
