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

const currentPage = location.pathname.split("/").pop() || "index.html";

const header = document.getElementById("siteHeader");

if (header) {
  header.innerHTML = `
    <header class="site-header">
      <div class="header-inner">

        <a class="brand" href="index.html">
          <img src="assets/logo.svg" alt="Alpine Ascents">
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