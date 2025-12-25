// =====================================================
// Section toggle (shared)
// =====================================================
function showSection(sectionId, btn) {
  // Hide all sections
  document.querySelectorAll(".toggle-section").forEach(el =>
    el.classList.remove("active")
  );

  // Deactivate all buttons
  document.querySelectorAll(".toggle-btn").forEach(b =>
    b.classList.remove("active")
  );

  // Activate selected section
  document.getElementById(sectionId).classList.add("active");
  btn.classList.add("active");

  // Lazy-load content based on section
  if (sectionId === "experience") {
    initTimeline(
      "#experience",
      loadExperience,
      "#experience-content"
    );
  }

  if (sectionId === "certifications") {
    initTimeline(
      "#certifications",
      loadCertification,
      "#certification-content"
    );
  }
}

// =====================================================
// Generic timeline initializer (shared logic)
// =====================================================
function initTimeline(sectionSelector, loaderFn) {
  let activePoint = document.querySelector(
    `${sectionSelector} .timeline-point.active`
  );

  if (!activePoint) {
    activePoint = document.querySelector(
      `${sectionSelector} .timeline-point`
    );
    if (activePoint) activePoint.classList.add("active");
  }

  if (activePoint) {
    loaderFn(
      activePoint.querySelector(".year").textContent,
      activePoint
    );
  }
}

// =====================================================
// Experience data
// =====================================================
const experiences = {
  "2021 - Present": `
    <h3>Data Engineer @ AXA Ireland</h3>
    <p><em>2021 - Present</em></p>
    <ul>
      <li>Partnered with a Data Scientist to build a GenAI-powered application for Claims Handlers.</li>
      <li>Built MLOps pipelines automating training and inference.</li>
      <li>Designed automated data pipelines for actuarial analytics.</li>
    </ul>
  `,
  "2022 - 2023": `
    <h3>Data Analyst @ Huawei</h3>
    <p><em>Sep 2022 - Jul 2023</em></p>
    <ul>
      <li>Automated daily operational checks using Python.</li>
      <li>Migrated bash and SQL processes to Irish servers.</li>
      <li>Improved app downloads by 12%.</li>
    </ul>
  `,
  "2021 - 2022": `
    <h3>Data Engineer @ Itaú Unibanco</h3>
    <p><em>Feb 2021 - Apr 2022</em></p>
    <ul>
      <li>Built Python ETL pipelines.</li>
      <li>Modernized legacy DataStage pipelines.</li>
      <li>Designed AWS-based data infrastructure.</li>
    </ul>
  `,
  "2018 - 2021": `
    <h3>Data Analyst @ Itaú Unibanco</h3>
    <p><em>Aug 2018 - Jan 2021</em></p>
    <ul>
      <li>Reduced processing time from 2h to 15min.</li>
      <li>Saved R$2M monthly through analytics.</li>
      <li>Improved NPS and contact rates.</li>
    </ul>
  `,
  "2016 - 2018": `
    <h3>Data Governance @ Itaú Unibanco</h3>
    <p><em>Dec 2016 - Aug 2018</em></p>
    <ul>
      <li>Migrated Access databases to SAS.</li>
      <li>Built dashboards used by 30+ employees.</li>
      <li>Reduced incidents by 20%.</li>
    </ul>
  `,
  "2015 - 2016": `
    <h3>Web Developer Intern @ Secretaria Municipal de Saúde</h3>
    <p><em>Mar 2015 - Dec 2016</em></p>
    <ul>
      <li>Developed PHP clock-in system used across São Paulo.</li>
    </ul>
  `
};

// =====================================================
// Certifications data
// =====================================================
const certifications = {
  "Feb 2025": `
    <h3>Astronomer Certification for Apache Airflow Fundamentals</h3>
    <p><em>Online Course · Feb 2025</em></p>
    <ul>
      <li>Airflow DAGs, operators, scheduling.</li>
      <li>Production-ready pipeline best practices.</li>
      <li>Monitoring and troubleshooting workflows.</li>
    </ul>
  `,
  "Jan 2025": `
    <h3>Free Data Engineering Bootcamp</h3>
    <p><em>Online Course · Jan 2025</em></p>
    <ul>
      <li>Data modeling for analytics platforms.</li>
      <li>Apache Spark fundamentals.</li>
      <li>Industry insights from senior FAANG-level engineer.</li>
    </ul>
  `,
  "Jun 2024": `
    <h3>Azure Data Fundamentals (DP-900)</h3>
    <p><em>Microsoft · Jun 2024</em></p>
    <ul>
      <li>Relational vs non-relational data.</li>
      <li>Analytical workloads in Azure.</li>
      <li>SQL querying fundamentals.</li>
    </ul>
  `,
  "Dec 2023": `
    <h3>Azure Fundamentals (AZ-900)</h3>
    <p><em>Microsoft · Dec 2023</em></p>
    <ul>
      <li>Core cloud concepts.</li>
      <li>Azure services and governance.</li>
    </ul>
  `
};

// =====================================================
// Loaders (shared behavior, isolated state)
// =====================================================
function loadExperience(year, element) {
  const container = document.getElementById("experience-content");

  document
    .querySelectorAll("#experience .timeline-point")
    .forEach(p => p.classList.remove("active"));

  element.classList.add("active");
  swapContent(container, experiences[year]);
}

function loadCertification(year, element) {
  const container = document.getElementById("certification-content");

  document
    .querySelectorAll("#certifications .timeline-point")
    .forEach(p => p.classList.remove("active"));

  element.classList.add("active");
  swapContent(container, certifications[year]);
}

// =====================================================
// Shared content transition
// =====================================================
function swapContent(container, html) {
  container.classList.add("fade-out");

  setTimeout(() => {
    container.innerHTML = html;
    container.classList.remove("fade-out");
  }, 150);
}

// =====================================================
// Initial load (experience only)
// =====================================================
document.addEventListener("DOMContentLoaded", () => {
  initTimeline("#experience", loadExperience);
});
