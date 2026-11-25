const navItems = [
  ["index.html", "Home"],
  ["about.html", "About"],
  ["history.html", "History"],
  ["types.html", "Types & Styles"],
  ["techniques.html", "Techniques"],
  ["sheltering.html", "Sheltering"],
  ["hazards.html", "Hazards"],
  ["records.html", "Records"],
  ["organizations.html", "Organizations"],
  ["stories.html", "Stories"],
  ["gallery.html", "Gallery"],
  ["updates.html", "Developments"],
  ["guidelines.html", "Guidelines"]
];

const footerGroups = [
  {
    title: "Explore",
    links: [
      ["about.html", "About Alpine Ascents"],
      ["history.html", "Mountaineering history"],
      ["types.html", "Climbing styles"],
      ["techniques.html", "Mountain techniques"],
      ["stories.html", "Climber stories"]
    ]
  },
  {
    title: "Mountain knowledge",
    links: [
      ["sheltering.html", "Sheltering"],
      ["hazards.html", "Mountain hazards"],
      ["guidelines.html", "Responsible climbing"],
      ["organizations.html", "Climbing organizations"],
      ["records.html", "Mountaineering records"]
    ]
  },
  {
    title: "More to discover",
    links: [
      ["gallery.html", "Photo gallery"],
      ["updates.html", "Developments"],
      ["index.html", "Home"]
    ]
  }
];

const currentPage = location.pathname.split("/").pop() || "index.html";

const header = document.getElementById("siteHeader");

if (header) {
  header.innerHTML = `
    <header class="site-header">
      <div class="header-inner">

        <a class="brand" href="index.html">
          <img src="image/logo.svg" alt="Alpine Ascents">
        </a>

        <div class="header-right">
          <nav class="main-nav" id="mainNav">
            ${navItems.map(([href, label]) =>
              `<a href="${href}" class="${currentPage === href ? 'active' : ''}">
                ${label}
              </a>`
            ).join("")}
          </nav>

          <button class="menu-toggle" id="menuToggle">☰</button>
        </div>

      </div>
    </header>
  `;
}


const footer = document.getElementById("siteFooter");

if (footer) {
  const arrowIcon = `<svg aria-hidden="true" viewBox="0 0 16 16" focusable="false"><path d="M3 8h9M8 3l5 5-5 5"/></svg>`;
  const mountainIcon = `<svg class="footer-mountain-icon" aria-hidden="true" viewBox="0 0 40 32" focusable="false"><path d="m2 29 11-19 6 10 5-8 14 17H2Z"/><path d="m9 17 4 2 3-2m4 7 4 2 3-2"/></svg>`;

  footer.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a class="footer-logo" href="index.html" aria-label="Alpine Ascents home">
              <img src="image/logo.svg" alt="Alpine Ascents">
            </a>
            <p>A guide to mountaineering, mountain knowledge and thoughtful adventures in the alpine world.</p>
            <div class="footer-principle">
              <span class="footer-principle-icon">${mountainIcon}</span>
              <span>Learn. Prepare. Respect.</span>
            </div>
          </div>
          ${footerGroups.map(({ title, links }) => `
            <nav class="footer-col" aria-label="${title}">
              <h4>${title}</h4>
              ${links.map(([href, label]) =>
                `<a href="${href}">${arrowIcon}<span>${label}</span></a>`
              ).join("")}
            </nav>
          `).join("")}
        </div>
        <div class="footer-bottom">
          <span>&copy; ${new Date().getFullYear()} Alpine Ascents. All rights reserved.</span>
          <span class="footer-disclaimer">Educational information only. Not a substitute for qualified instruction or current conditions.</span>
          <a class="footer-top-link" href="#siteHeader">${arrowIcon}<span>Back to top</span></a>
        </div>
      </div>
    </footer>
  `;
}