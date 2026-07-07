const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const navButton = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const videoLoadMoreButton = document.querySelector(".video-load-more");
const moreVideos = document.querySelector("#more-videos");

const setTheme = (theme) => {
  root.dataset.theme = theme;
  themeButton?.setAttribute("aria-label", theme === "dark" ? "Tmavý režim" : "Světlý režim");
};

const savedTheme = localStorage.getItem("portfolio-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(savedTheme || (prefersDark ? "dark" : "light"));

themeButton?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  localStorage.setItem("portfolio-theme", nextTheme);
});

navButton?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open") ?? false;
  navButton.setAttribute("aria-expanded", String(isOpen));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navButton?.setAttribute("aria-expanded", "false");
  });
});

videoLoadMoreButton?.addEventListener("click", () => {
  if (!moreVideos) return;

  const isExpanded = videoLoadMoreButton.getAttribute("aria-expanded") === "true";
  const nextExpanded = !isExpanded;
  moreVideos.hidden = !nextExpanded;
  videoLoadMoreButton.setAttribute("aria-expanded", String(nextExpanded));
  videoLoadMoreButton.textContent = nextExpanded ? "Zobrazit méně" : "Otevřít další";
});
