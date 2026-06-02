const DEFAULT_SITE_URL = "https://majidalichanna.vercel.app";
const DEFAULT_GITHUB_URL = "https://github.com/MajidAli2";
const DEFAULT_LINKEDIN_URL = "https://www.linkedin.com/in/majid-ali-28755738a";

const siteUrl = (import.meta.env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, "");
const githubUrl = (import.meta.env.VITE_GITHUB_URL || DEFAULT_GITHUB_URL).replace(/\/$/, "");
const linkedinUrl = (import.meta.env.VITE_LINKEDIN_URL || DEFAULT_LINKEDIN_URL).replace(/\/$/, "");
const instagramUrl = (import.meta.env.VITE_INSTAGRAM_URL || "").replace(/\/$/, "");
const profileImage = `${siteUrl}/New%20folder/majid.jpeg`;
const isGitHubPages = typeof window !== "undefined" && window.location.hostname.endsWith("github.io");

const metaDefinitions = [
  ["description", "Majid Ali's portfolio with projects, skills, resume, GitHub, LinkedIn, and contact details for software, AI, cybersecurity, and development work."],
  ["robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"],
  ["author", "Majid Ali"],
  ["theme-color", "#020617"],
  ["og:type", "website"],
  ["og:site_name", "Majid Ali Portfolio"],
  ["og:title", "Majid Ali | Portfolio"],
  ["og:description", "Portfolio of Majid Ali with projects, skills, resume, and links to GitHub and LinkedIn."],
  ["og:url", siteUrl],
  ["og:image", profileImage],
  ["og:image:alt", "Majid Ali portfolio profile image"],
  ["twitter:card", "summary_large_image"],
  ["twitter:title", "Majid Ali | Portfolio"],
  ["twitter:description", "Portfolio of Majid Ali with projects, skills, resume, and social links."],
  ["twitter:image", profileImage],
];

const socialLinks = [githubUrl, linkedinUrl, instagramUrl].filter(Boolean);

function upsertMeta(name, content, attribute = "name") {
  if (!content) return;
  const selector = `meta[${attribute}="${name}"]`;
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let link = document.head.querySelector(`link[rel="${rel}"]`);

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
}

function upsertStructuredData() {
  const schemaId = "majid-ali-person-schema";
  let script = document.head.querySelector(`script[data-schema-id="${schemaId}"]`);

  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.schemaId = schemaId;
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Majid Ali",
    alternateName: ["Majid Ali Channa", "majid ali"],
    url: siteUrl,
    image: profileImage,
    jobTitle: "Computer Science Student",
    description: "Majid Ali's personal portfolio showcasing software development, AI, cybersecurity, and project work.",
    sameAs: socialLinks,
  });
}

export function setupSeo() {
  document.title = "Majid Ali | Portfolio, Projects, GitHub, LinkedIn";
  upsertMeta("description", metaDefinitions[0][1]);
  upsertMeta("robots", isGitHubPages ? "noindex, nofollow" : metaDefinitions[1][1]);
  upsertMeta("author", metaDefinitions[2][1]);
  upsertMeta("theme-color", metaDefinitions[3][1]);

  for (const [name, content] of metaDefinitions.slice(4)) {
    upsertMeta(name, content, "property");
  }

  upsertLink("canonical", siteUrl);
  upsertStructuredData();
}