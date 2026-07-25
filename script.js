/*
  ============================================================
  EDITABLE PORTFOLIO CONTENT
  Update the arrays below to change projects, skills, certifications or feedback.
  ============================================================
*/

const projects = [
  {
    number: "01",
    type: "Platform transformation",
    title: "SAP GTS version upgrade",
    summary:
      "Coordinated the move from GTS 2020 to 2023 across technical teams and business stakeholders, owning test readiness, transport tracking, CAB documentation, and hypercare.",
    impact: "Clear path from SIT to production",
    tags: ["GTS", "SIT & UAT", "CAB", "Cross functional delivery"],
  },
  {
    number: "02",
    type: "Pricing & billing",
    title: "Smarter invoice workflows",
    summary:
      "Shaped pricing and output improvements for complex order to cash scenarios, including a customer-specific workflow that turns invoices with 100+ item lines into a concise business-ready format.",
    impact: "Less manual review at scale",
    tags: ["SAP SD", "Pricing", "Billing", "Output"],
  },
  {
    number: "03",
    type: "New business model",
    title: "Third-party revenue flow",
    summary:
      "Translated a multiparty product, installation, and subscription model into an end-to-end SAP design spanning sales orders, procurement, fulfillment, and customer billing.",
    impact: "One process across O2C and P2P",
    tags: ["O2C", "P2P", "Functional design", "Integration"],
  },
  {
    number: "04",
    type: "Pricing transformation",
    title: "Tariff surcharge & refund process",
    summary:
      "Translated changing tariff requirements into an SAP pricing solution, supporting the surcharge rollout and shaping a controlled refund process for qualifying orders placed before the policy change.",
    impact: "Consistent pricing with auditable exceptions",
    tags: ["SAP SD", "Pricing", "Credit process", "Stakeholder alignment"],
  },
  {
    number: "05",
    type: "Production support & enhancement delivery",
    title: "From root cause to reliable release",
    summary:
      "Troubleshoot day to day production failures, identify root causes, and provide practical resolutions. For custom-report enhancements, document functional specifications, collaborate with ABAP developers, execute testing, complete CAB governance, and support the release through production.",
    impact: "End to end ownership from incident to deployment",
    tags: ["Root-cause analysis", "Functional specs", "ABAP collaboration", "CAB"],
  },
];

const expertise = [
  {
    label: "Functional",
    title: "SAP SD & Order-to-Cash",
    items: [
      "Sales orders, deliveries & billing",
      "Pricing procedures & condition records",
      "Outputs, copy controls & partner functions",
      "Credit and consignment processes",
    ],
  },
  {
    label: "Platforms",
    title: "Connected SAP landscape",
    items: [
      "SAP ECC and S/4HANA exposure",
      "SAP GTS trade compliance",
      "MDG master-data flows",
      "CPQ and middleware integrations",
    ],
  },
  {
    label: "Delivery",
    title: "From ambiguity to release",
    items: [
      "Requirements & functional specifications",
      "Root-cause analysis",
      "SIT, UAT & defect coordination",
      "CAB, deployment & hypercare",
    ],
  },
];

/*
  Replace the placeholder below when you receive a certification.
  Set verificationUrl to the public credential-verification link supplied
  by SAP, Credly, or another certification provider.
*/
const certifications = [
  {
    title: "SAP Certified Associate — SAP S/4HANA Sales",
    provider: "SAP",
    issued: "Placeholder issue date",
    credentialId: "Placeholder credential ID",
    description:
      "Placeholder certification entry demonstrating SAP S/4HANA Sales and order-to-cash knowledge.",
    verificationUrl: "https://www.sap.com/",
    skills: ["SAP S/4HANA", "Sales", "Order-to-Cash"],
  },
];

/*
  Preview examples only. Replace these with feedback reviewed and approved
  by the named colleagues before presenting them as published endorsements.
*/
const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet. Ea enim esse aut similique odio ut corporis doloremque. Ut unde optio et ipsa tempore et error porro eum iure dolor ex eveniet porro id officia sint et voluptatem internos. ",
    name: "Manager name · Example",
    role: "Manager · Company",
    relationship: "Managed Adithya during SAP production support",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet. Ea enim esse aut similique odio ut corporis doloremque. Ut unde optio et ipsa tempore et error porro eum iure dolor ex eveniet porro id officia sint et voluptatem internos. ",
    name: "Business colleague name · Example",
    role: "Business Process Owner · Company",
    relationship: "Collaborated on SAP pricing and order-to-cash enhancements",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet. Ea enim esse aut similique odio ut corporis doloremque. Ut unde optio et ipsa tempore et error porro eum iure dolor ex eveniet porro id officia sint et voluptatem internos. ",
    name: "Technical colleague name · Example",
    role: "SAP ABAP Developer · Company",
    relationship: "Collaborated on custom reports and SAP enhancements",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet. Ea enim esse aut similique odio ut corporis doloremque. Ut unde optio et ipsa tempore et error porro eum iure dolor ex eveniet porro id officia sint et voluptatem internos. ",
    name: "Project colleague name · Example",
    role: "Project Manager · Company",
    relationship: "Collaborated on an SAP platform upgrade",
  },
];

/*
  OPTIONAL GOOGLE SHEETS INTEGRATION

  Paste the deployed Google Apps Script Web App URL between the quotes.
  Leave it blank to use only the testimonials array above.

  Expected JSON:
  [
    {
      "quote": "Feedback text",
      "name": "Person name",
      "role": "Role · Company",
      "relationship": "How you worked together",
      "approved": true
    }
  ]
*/
const GOOGLE_SHEETS_FEED_URL = "";

/*
  ============================================================
  PAGE RENDERING — no changes are normally needed below here.
  ============================================================
*/

const projectList = document.querySelector("#project-list");
const expertiseGrid = document.querySelector("#expertise-grid");
const certificationGrid = document.querySelector("#certification-grid");
const feedbackContent = document.querySelector("#feedback-content");
const allFeedbackGrid = document.querySelector("#all-feedback-grid");

function escapeHTML(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderProjects() {
  if (!projectList) return;
  
  projectList.innerHTML = projects
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-number">${escapeHTML(project.number)}</div>
          <div class="project-main">
            <p>${escapeHTML(project.type)}</p>
            <h3>${escapeHTML(project.title)}</h3>
            <span>${escapeHTML(project.summary)}</span>
          </div>
          <div class="project-result">
            <small>Outcome</small>
            <strong>${escapeHTML(project.impact)}</strong>
            <div class="tag-list">
              ${project.tags
                .map((tag) => `<span>${escapeHTML(tag)}</span>`)
                .join("")}
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderExpertise() {
  if (!expertiseGrid) return;
  
  expertiseGrid.innerHTML = expertise
    .map(
      (group, index) => `
        <article class="expertise-card">
          <div class="expertise-label">
            <span>0${index + 1}</span>
            <small>${escapeHTML(group.label)}</small>
          </div>
          <h3>${escapeHTML(group.title)}</h3>
          <ul>
            ${group.items
              .map((item) => `<li>${escapeHTML(item)}</li>`)
              .join("")}
          </ul>
        </article>
      `,
    )
    .join("");
}

function renderCertifications() {
  if (!certificationGrid) return;
  
  certificationGrid.innerHTML = certifications
    .map(
      (certification) => `
        <article class="certification-card">
          <div class="certification-provider">
            <span>${escapeHTML(certification.provider)}</span>
            <small>Credential</small>
          </div>
          <h3>${escapeHTML(certification.title)}</h3>
          <p>${escapeHTML(certification.description)}</p>
          <dl>
            <div>
              <dt>Issued</dt>
              <dd>${escapeHTML(certification.issued)}</dd>
            </div>
            <div>
              <dt>Credential ID</dt>
              <dd>${escapeHTML(certification.credentialId)}</dd>
            </div>
          </dl>
          <div class="tag-list certification-tags">
            ${certification.skills
              .map((skill) => `<span>${escapeHTML(skill)}</span>`)
              .join("")}
          </div>
          <a
            class="verify-link"
            href="${escapeHTML(certification.verificationUrl)}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Verify ${escapeHTML(certification.title)} on the provider website"
          >
            Verify credential <span aria-hidden="true">↗</span>
          </a>
        </article>
      `,
    )
    .join("");
}

function renderTestimonials(items, note = "") {
  if (!feedbackContent || !items.length) return;

  const featuredItems = items.slice(0, 2);

  feedbackContent.innerHTML = `
    <div>
      <div class="testimonial-grid">
        ${featuredItems
          .map(
            (item) => `
              <figure class="testimonial-card">
                <blockquote>“${escapeHTML(item.quote)}”</blockquote>
                <figcaption>
                  <strong>${escapeHTML(item.name)}</strong>
                  <span>${escapeHTML(item.role)}</span>
                  <small>${escapeHTML(item.relationship)}</small>
                </figcaption>
              </figure>
            `,
          )
          .join("")}
      </div>
      ${
        items.length > 2
          ? `
            <div class="feedback-actions">
              <a
                class="view-feedback"
                href="./feedback.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                View all feedback <span aria-hidden="true">↗</span>
              </a>
            </div>
          `
          : ""
      }
      ${note ? `<p class="feedback-note">${escapeHTML(note)}</p>` : ""}
    </div>
  `;
}

function renderAllTestimonials(items) {
  if (!allFeedbackGrid) return;

  allFeedbackGrid.innerHTML = items
    .map(
      (item) => `
        <figure class="testimonial-card">
          <blockquote>“${escapeHTML(item.quote)}”</blockquote>
          <figcaption>
            <strong>${escapeHTML(item.name)}</strong>
            <span>${escapeHTML(item.role)}</span>
            <small>${escapeHTML(item.relationship)}</small>
          </figcaption>
        </figure>
      `,
    )
    .join("");
}

function displayTestimonials(items, note = "") {
  renderTestimonials(items, note);
  renderAllTestimonials(items);
}

async function loadTestimonials() {
  if (!GOOGLE_SHEETS_FEED_URL) {
    renderTestimonials(testimonials);
    return;
  }

  try {
    const response = await fetch(GOOGLE_SHEETS_FEED_URL);
    if (!response.ok) throw new Error("Feedback request failed");

    const data = await response.json();
    const approvedFeedback = data.filter(
      (item) =>
        item &&
        item.approved !== false &&
        item.quote &&
        item.name,
    );

    renderTestimonials(
      approvedFeedback.length ? approvedFeedback : testimonials,
    );
  } catch (error) {
    console.warn("Could not load Google Sheets feedback:", error);
    renderTestimonials(
      testimonials,
      testimonials.length
        ? "Showing saved feedback because the live feed is unavailable."
        : "",
    );
  }
}

function enableRevealAnimations() {
  const items = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  items.forEach((item) => observer.observe(item));
}

renderProjects();
renderExpertise();
renderCertifications();
loadTestimonials();
enableRevealAnimations();
