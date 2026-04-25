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
    initTimeline("#experience", loadExperience);
  }

  if (sectionId === "certifications") {
    initTimeline("#certifications", loadCertification);
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
  "2023 - Present": `
    <h3>Data Engineer @ AXA Ireland</h3>
    <p><em>Aug 2023 - Present</em></p>
    <ul>
      <li>Partnered with a Data Scientist to build a GenAI-powered application for Claims Handlers, improving document summarization and chatbot-based query resolution.</li>
      <li>Built an MLOps pipeline automating model training and inference, enabling early claim settlements and delivering significant cost savings.</li>
      <li>Designed and deployed automated data pipelines to support actuarial analytics and reporting.</li>
    </ul>
  `,
  "2022 - 2023": `
    <h3>Data Analyst @ Huawei</h3>
    <p><em>Sep 2022 - Jul 2023</em></p>
    <ul>
      <li>Increased downloads for 3 gaming applications by 12% through targeted ad audience analysis.</li>
      <li>Developed a Python automation script to monitor 30+ daily processes, feeding an internal FineBI performance report.</li>
      <li>Collaborated with SRE teams in Germany on the migration of 50+ processes to servers in Ireland, improving process performance.</li>
    </ul>
  `,
  "2021 - 2022": `
    <h3>Data Engineer @ Itaú Unibanco</h3>
    <p><em>Feb 2021 - Apr 2022</em></p>
    <ul>
      <li>Built a Python-based partner rewards system integrating data from 5 sources, boosting brand marketing performance by 5%.</li>
      <li>Modernized 5 legacy IBM DataStage pipelines to Python and Hadoop, in preparation for migrating all on-premises data to AWS.</li>
      <li>Collaborated with 4 Data Engineers to migrate data infrastructure to AWS, building services with S3, Redshift, and Glue.</li>
    </ul>
  `,
  "2018 - 2021": `
    <h3>Data Analyst @ Itaú Unibanco</h3>
    <p><em>Aug 2018 - Jan 2021</em></p>
    <ul>
      <li>Migrated card inventory process from Hadoop to SQL Server, reducing execution time from 2 hours to 15 minutes.</li>
      <li>Optimized card production using Python, reducing ink usage and saving R$2M (~$400K) per month.</li>
      <li>Improved customer contact success by 15% through Python-based email quality analysis and call center collaboration.</li>
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
  "Jan 2026": `
    <h3>Databricks Certified Data Engineer Associate</h3>
    <p><em>Databricks · Jan 2026</em></p>
    <ul>
      <li>Lakehouse Platform architecture and Delta Lake management.</li>
      <li>ETL pipelines with Delta Live Tables (DLT) and Medallion Architecture.</li>
      <li>Data governance with Unity Catalog and SQL warehouse optimization.</li>
    </ul>
  `,
  "Feb 2025": `
    <h3>Astronomer Certification for Apache Airflow Fundamentals</h3>
    <p><em>Astronomer · Feb 2025</em></p>
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
  "Sep 2024": `
  <h3>Azure Data Engineer Associate (DP-203)</h3>
  <p><em>Microsoft · Sep 2024</em></p>
  <ul>
    <li>Designing and implementing data ingestion and transformation pipelines using Azure data services.</li>
    <li>Building and optimizing data storage solutions for analytical workloads.</li>
    <li>Implementing data security, monitoring, and performance tuning in Azure-based data platforms.</li>
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
  `,
  "Sep 2022": `
  <h3>Databricks Lakehouse Fundamentals</h3>
  <p><em>Databricks · Sep 2022</em></p>
  <ul>
    <li>Core concepts of the Lakehouse architecture combining data lakes and data warehouses.</li>
    <li>Introduction to Apache Spark and Databricks workspace fundamentals.</li>
    <li>Understanding Delta Lake features such as ACID transactions, versioning, and schema enforcement.</li>
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
  if (!container.innerHTML.trim()) {
    container.innerHTML = html;
    return;
  }

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
