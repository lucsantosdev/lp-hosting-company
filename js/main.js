const metrics = [
  { label: "Availability", value: "99.99%" },
  { label: "Global PoPs", value: "42" },
  { label: "SLA Response", value: "15 min" },
  { label: "Data Centers", value: "18" },
];

const metricNodes = document.querySelectorAll("#metrics .metric-card");
let metricIndex = 0;

setInterval(() => {
  metricNodes.forEach((node, idx) => {
    const metric = metrics[(metricIndex + idx) % metrics.length];
    node.querySelector(".metric-label").textContent = metric.label;
    node.querySelector(".metric-value").textContent = metric.value;
  });
  metricIndex = (metricIndex + 1) % metrics.length;
}, 4000);

const navToggle = document.querySelector(".nav-toggle");
const navItems = document.querySelector(".navbar-items");

if (navToggle && navItems) {
  navToggle.addEventListener("click", () => {
    const isOpen = navItems.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  navItems.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      navItems.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
    }
  });
}
