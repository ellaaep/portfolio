const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const navButton = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

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

const portfolioVideos = [
  {
    id: "akcni-reel",
    title: "Akční reel",
    category: "reel",
    year: null,
    meta: "Reel",
    src: "assets/media/videos/reels/akcni-reel.mp4",
    poster: "assets/media/posters/akcni-reel.webp",
    format: "portrait",
    featured: true,
    caption: 'Akční reel pro <a href="https://www.instagram.com/ostravske.akce/" target="_blank" rel="noreferrer">@ostravske.akce</a>, střižený tak, aby rychle vyvolal napjatou atmosféru.'
  },
  { id: "filler-reel", title: "Filler reel", category: "reel", year: null, src: "assets/media/videos/reels/filler-reel.mp4", poster: "assets/media/posters/filler-reel.webp", format: "portrait", featured: false },
  {
    id: "outro-2026",
    title: "Outro pro Ostravské akce",
    category: "graphic",
    year: 2026,
    meta: "Motion outro",
    src: "assets/media/videos/graphics/outro-2026.mp4",
    poster: "assets/media/posters/outro-2026.webp",
    format: "portrait",
    featured: true,
    caption: 'Vytvoření animovaného outra pro <a href="https://www.instagram.com/ostravske.akce/" target="_blank" rel="noreferrer">@ostravske.akce</a> jako výrazný závěr krátkých videí.'
  },
  { id: "edit-2026-01", title: "Edit 01", category: "edit", year: 2026, src: "assets/media/videos/edits/2026/edit-2026-01.mp4", poster: "assets/media/posters/edit-2026-01.webp", format: "landscape", featured: false },
  {
    id: "edit-2026-02",
    title: "The Office fan edit",
    category: "edit",
    year: 2026,
    meta: "Edit 02, 2026",
    src: "assets/media/videos/edits/2026/edit-2026-02.mp4",
    poster: "assets/media/posters/edit-2026-02.webp",
    format: "portrait",
    featured: true,
    caption: "Fan edit ze seriálu The Office na trendy TikTok hudbu, postavený na rytmu, reakcích a svižném střihu."
  },
  { id: "edit-2025-01", title: "Edit 01", category: "edit", year: 2025, src: "assets/media/videos/edits/2025/edit-2025-01.mp4", poster: "assets/media/posters/edit-2025-01.webp", format: "square", featured: false, timeline: false },
  { id: "edit-2025-02", title: "Edit 02", category: "edit", year: 2025, src: "assets/media/videos/edits/2025/edit-2025-02.mp4", poster: "assets/media/posters/edit-2025-02.webp", format: "portrait", featured: false },
  { id: "edit-2025-03", title: "Edit 03", category: "edit", year: 2025, src: "assets/media/videos/edits/2025/edit-2025-03.mp4", poster: "assets/media/posters/edit-2025-03.webp", format: "square", featured: false },
  { id: "edit-2024-01", title: "Edit 01", category: "edit", year: 2024, src: "assets/media/videos/edits/2024/edit-2024-01.mp4", poster: "assets/media/posters/edit-2024-01.webp", format: "portrait", featured: false },
  { id: "edit-2024-02", title: "Edit 02", category: "edit", year: 2024, src: "assets/media/videos/edits/2024/edit-2024-02.mp4", poster: "assets/media/posters/edit-2024-02.webp", format: "square", featured: false },
  { id: "edit-2023-01", title: "Edit 01", category: "edit", year: 2023, src: "assets/media/videos/edits/2023/edit-2023-01.mp4", poster: "assets/media/posters/edit-2023-01.webp", format: "portrait", featured: false },
  { id: "edit-2023-03", title: "Edit 03", category: "edit", year: 2023, src: "assets/media/videos/edits/2023/edit-2023-03.mp4", poster: "assets/media/posters/edit-2023-03.webp", format: "square", featured: false },
  { id: "edit-2023-04", title: "Edit 04", category: "edit", year: 2023, src: "assets/media/videos/edits/2023/edit-2023-04.mp4", poster: "assets/media/posters/edit-2023-04.webp", format: "square", featured: false },
  { id: "edit-2023-05", title: "Edit 05", category: "edit", year: 2023, src: "assets/media/videos/edits/2023/edit-2023-05.mp4", poster: "assets/media/posters/edit-2023-05.webp", format: "square", featured: false, timeline: false },
  { id: "edit-2023-06", title: "Edit 06", category: "edit", year: 2023, src: "assets/media/videos/edits/2023/edit-2023-06.mov", poster: "assets/media/posters/edit-2023-06.webp", format: "square", featured: false },
  { id: "edit-2022-01", title: "Edit 01", category: "edit", year: 2022, src: "assets/media/videos/edits/2022/edit-2022-01.mp4", poster: "assets/media/posters/edit-2022-01.webp", format: "square", featured: false },
];

const featuredVideosContainer = document.querySelector("[data-featured-videos]");
const homeVideosContainer = document.querySelector("[data-home-videos]");
const videoYearsContainer = document.querySelector("[data-video-years]");
const videoYearSelect = document.querySelector("[data-video-year-select]");
const videoModal = document.querySelector("[data-video-modal]");
const videoModalTitle = document.querySelector("[data-video-modal-title]");
const videoModalMeta = document.querySelector("[data-video-modal-meta]");
const videoModalDescription = document.querySelector("[data-video-modal-description]");
const videoModalMedia = document.querySelector("[data-video-modal-media]");
const videoPlayer = document.querySelector("[data-video-player]");
let lastFocusedVideoTrigger = null;

const videoYearNotes = {
  2026: "Rok, kdy edity vznikaly hlavně pro radost, podle hudby a nápadů, které mě zrovna bavily.",
  2025: "V roce 2025 jsem edity dělala spíš pro radost a víc si hrála s atmosférou, rytmem a oblíbenými scénami.",
  2024: "V roce 2024 jsem se učila, aby střih působil plynuleji, a experimentovala jsem s různými vizuálními styly.",
  2023: "Rok dalšího zkoušení stylu, tempa a detailů, kdy jsem víc hledala, co mi ve videích sedí.",
  2022: "Začátek editování videí v After Effects. Začala jsem se učit práci s přechody a postupně chápat komplexnější efekty."
};

const renderFeaturedVideoCard = (video) => `
  <article class="motion-featured-item">
    <button class="motion-video-card motion-video-card-featured" type="button" data-video-id="${video.id}" data-format="${video.format}" aria-label="Přehrát ${video.title}">
      <span class="motion-poster-wrap" aria-hidden="true">
        <img src="${video.poster}" alt="" loading="lazy">
        <span class="motion-play-icon"></span>
      </span>
    </button>
    <div class="motion-featured-caption">
      <h3>${video.title}</h3>
      <p>${video.caption || ""}</p>
    </div>
  </article>
`;

const renderFeaturedVideos = () => {
  if (!featuredVideosContainer) return;
  featuredVideosContainer.innerHTML = portfolioVideos.filter((video) => video.featured).map(renderFeaturedVideoCard).join("");
};

const renderHomeVideos = () => {
  if (!homeVideosContainer) return;
  homeVideosContainer.innerHTML = portfolioVideos.filter((video) => video.featured).map((video) => `
    <button class="video-showcase-card" type="button" data-video-id="${video.id}" data-format="${video.format}" aria-label="Přehrát ${video.title}">
      <span class="video-showcase-poster" aria-hidden="true">
        <img src="${video.poster}" alt="" loading="lazy">
        <span class="motion-play-icon"></span>
      </span>
    </button>
  `).join("");
};

const renderVideoButton = (video) => `
  <button class="motion-video-card motion-video-card-timeline" type="button" data-video-id="${video.id}" data-format="${video.format}" aria-label="Přehrát ${video.title}">
    <span class="motion-poster-wrap" aria-hidden="true">
      <img src="${video.poster}" alt="" loading="lazy">
      <span class="motion-play-icon"></span>
    </span>
  </button>
`;

const renderVideoYearGroups = (activeYear = "2026") => {
  if (!videoYearsContainer) return;
  const selectedYear = Number(activeYear);
  const videos = portfolioVideos.filter((video) => video.category === "edit" && video.year === selectedYear && video.timeline !== false);
  videoYearsContainer.innerHTML = `
    <section class="motion-year-group" aria-label="Edity z roku ${selectedYear}">
      <p class="motion-year-note">${videoYearNotes[selectedYear] || ""}</p>
      <div class="motion-year-grid">${videos.map(renderVideoButton).join("")}</div>
    </section>
  `;
};

const openVideoModal = (video) => {
  if (!videoModal || !videoPlayer || !videoModalTitle || !videoModalMeta || !videoModalMedia) return;
  lastFocusedVideoTrigger = document.activeElement;
  videoModalTitle.textContent = video.title;
  videoModalMeta.textContent = "";
  if (videoModalDescription) videoModalDescription.innerHTML = video.caption || "";
  videoModalMedia.dataset.format = video.format;
  videoPlayer.setAttribute("src", video.src);
  videoPlayer.setAttribute("poster", video.poster);
  videoPlayer.load();
  videoModal.hidden = false;
  document.body.classList.add("video-modal-open");
  videoModal.querySelector("[data-video-close]")?.focus();
};

const closeVideoModal = () => {
  if (!videoModal || !videoPlayer || videoModal.hidden) return;
  videoPlayer.pause();
  videoPlayer.removeAttribute("src");
  videoPlayer.removeAttribute("poster");
  videoPlayer.load();
  videoModal.hidden = true;
  document.body.classList.remove("video-modal-open");
  lastFocusedVideoTrigger?.focus?.();
};

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-video-id]");
  if (!trigger) return;
  const video = portfolioVideos.find((item) => item.id === trigger.dataset.videoId);
  if (video) openVideoModal(video);
});

videoModal?.querySelectorAll("[data-video-close]").forEach((closeTrigger) => closeTrigger.addEventListener("click", closeVideoModal));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeVideoModal();
});

const cleanLongDashes = () => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  let node = walker.nextNode();

  while (node) {
    const parent = node.parentElement;
    if (parent && !parent.closest("script, style, code, pre") && (node.nodeValue.includes("—") || node.nodeValue.includes("–"))) {
      textNodes.push(node);
    }
    node = walker.nextNode();
  }

  textNodes.forEach((textNode) => {
    textNode.nodeValue = textNode.nodeValue.replace(/\s*—\s*/g, ", ").replace(/\s*–\s*/g, " - ");
  });
};

const addMobileFeaturedLink = () => {
  const handDrawnLink = document.querySelector(".featured-web-button.click-arrow-link");
  if (!handDrawnLink || document.querySelector(".featured-web-mobile-link")) return;

  const mobileLink = document.createElement("a");
  mobileLink.className = "text-link featured-web-mobile-link";
  mobileLink.href = handDrawnLink.getAttribute("href") || "weby.html";
  mobileLink.textContent = "Prohlédnout weby";
  handDrawnLink.insertAdjacentElement("afterend", mobileLink);
};

const enhanceSiteFooter = () => {
  const footer = document.querySelector(".site-footer");
  if (!footer || footer.querySelector(".footer-shell")) return;
  document.body.id ||= "top";

  footer.innerHTML = `
    <div class="footer-shell">
      <div class="footer-brand">
        <strong>Eliška Turková</strong>
        <span>Web development, UI/UX design, video editing a vizuální obsah.</span>
      </div>
      <nav class="footer-column" aria-label="Odkazy ve footeru">
        <strong>Portfolio</strong>
        <a href="weby.html">Weby</a>
        <a href="work.html">Video</a>
        <a href="pricing.html">Ceník</a>
        <a href="about.html">O mně</a>
      </nav>
    <div class="footer-socials">
  <strong>Kontakt a sítě</strong>
  <a href="mailto:turkova.profi@gmail.com">turkova.profi@gmail.com</a>
  <a href="https://www.instagram.com/turkovq/" target="_blank" rel="noreferrer">Instagram</a>
  <a href="https://github.com/ellaaep" target="_blank" rel="noreferrer">GitHub</a>
</div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Eliška Turková</span>
        <a href="#top">Zpět nahoru ↑</a>
      </div>
    </div>
  `;
};

const installBubbleFilter = () => {
  if (document.querySelector(".bubble-goo-defs")) return;
  const wrapper = document.createElement("div");
  wrapper.className = "bubble-goo-defs";
  wrapper.setAttribute("aria-hidden", "true");
  wrapper.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" focusable="false">
      <defs>
        <filter id="portfolio-bubble-goo" x="-100%" y="-300%" width="300%" height="700%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo"></feColorMatrix>
          <feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite>
        </filter>
      </defs>
    </svg>
  `;
  document.body.appendChild(wrapper);
};

const enhanceBubbleButtons = () => {
  installBubbleFilter();
  document.querySelectorAll("a.button, button.button, a.text-link, button.send-mail-btn, a.featured-web-cta-button").forEach((button) => {
    if (button.classList.contains("bubble-button")) return;

    const label = document.createElement("span");
    label.className = "bubble-button__label";
    while (button.firstChild) label.appendChild(button.firstChild);

    const effect = document.createElement("span");
    effect.className = "bubble-button__effect";
    effect.setAttribute("aria-hidden", "true");
    effect.innerHTML = `
      <span class="bubble-button__particle top-left bubble-one"></span>
      <span class="bubble-button__particle top-left bubble-two"></span>
      <span class="bubble-button__particle top-left bubble-three"></span>
      <span class="bubble-button__core"></span>
      <span class="bubble-button__particle bottom-right bubble-one"></span>
      <span class="bubble-button__particle bottom-right bubble-two"></span>
      <span class="bubble-button__particle bottom-right bubble-three"></span>
    `;

    button.classList.add("bubble-button");
    button.append(label, effect);
  });
};

const setupYearPicker = () => {
  if (!videoYearSelect || videoYearSelect.closest(".motion-year-picker")) return;
  const wrapper = document.createElement("div");
  wrapper.className = "motion-year-picker";

  const button = document.createElement("button");
  button.className = "motion-year-picker__button";
  button.type = "button";
  button.setAttribute("aria-haspopup", "listbox");
  button.setAttribute("aria-expanded", "false");
  button.textContent = videoYearSelect.value;

  const menu = document.createElement("div");
  menu.className = "motion-year-picker__menu";
  menu.setAttribute("role", "listbox");
  menu.hidden = true;

  [...videoYearSelect.options].forEach((option) => {
    const item = document.createElement("button");
    item.className = "motion-year-picker__option";
    item.type = "button";
    item.setAttribute("role", "option");
    item.dataset.value = option.value;
    item.textContent = option.textContent;
    item.setAttribute("aria-selected", String(option.selected));
    menu.appendChild(item);
  });

  videoYearSelect.insertAdjacentElement("beforebegin", wrapper);
  wrapper.append(videoYearSelect, button, menu);

  const closeMenu = () => {
    menu.hidden = true;
    button.setAttribute("aria-expanded", "false");
  };

  const openMenu = () => {
    menu.hidden = false;
    button.setAttribute("aria-expanded", "true");
  };

  const setYear = (value) => {
    videoYearSelect.value = value;
    button.textContent = value;
    menu.querySelectorAll(".motion-year-picker__option").forEach((item) => {
      item.setAttribute("aria-selected", String(item.dataset.value === value));
    });
    renderVideoYearGroups(value);
    setupMediaCarousels();
    closeMenu();
  };

  button.addEventListener("click", () => {
    if (menu.hidden) openMenu();
    else closeMenu();
  });

  menu.addEventListener("click", (event) => {
    const item = event.target.closest(".motion-year-picker__option");
    if (item?.dataset.value) setYear(item.dataset.value);
  });

  document.addEventListener("click", (event) => {
    if (!wrapper.contains(event.target)) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
};

const setupMediaCarousels = () => {
  document.querySelectorAll(".motion-year-grid").forEach((grid, index) => {
    if (grid.closest(".media-arrow-carousel") || grid.children.length < 2) return;

    const wrapper = document.createElement("div");
    wrapper.className = "media-arrow-carousel";

    const previousButton = document.createElement("button");
    previousButton.className = "media-arrow-carousel__button media-arrow-carousel__button--previous";
    previousButton.type = "button";
    previousButton.setAttribute("aria-label", "Předchozí ukázka");
    previousButton.textContent = "‹";

    const nextButton = document.createElement("button");
    nextButton.className = "media-arrow-carousel__button media-arrow-carousel__button--next";
    nextButton.type = "button";
    nextButton.setAttribute("aria-label", "Další ukázka");
    nextButton.textContent = "›";

    grid.parentNode.insertBefore(wrapper, grid);
    wrapper.append(previousButton, grid, nextButton);

    const getStep = () => {
      const firstItem = grid.firstElementChild;
      if (!firstItem) return grid.clientWidth;
      const styles = window.getComputedStyle(grid);
      const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
      return firstItem.getBoundingClientRect().width + gap;
    };

    const updateButtons = () => {
      const maxScroll = Math.max(0, grid.scrollWidth - grid.clientWidth);
      wrapper.classList.toggle("is-scrollable", maxScroll > 2);
      previousButton.disabled = grid.scrollLeft <= 2;
      nextButton.disabled = grid.scrollLeft >= maxScroll - 2;
    };

    previousButton.addEventListener("click", () => grid.scrollBy({ left: -getStep(), behavior: "smooth" }));
    nextButton.addEventListener("click", () => grid.scrollBy({ left: getStep(), behavior: "smooth" }));
    grid.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    requestAnimationFrame(updateButtons);
    wrapper.dataset.carouselIndex = String(index);
  });
};

cleanLongDashes();
renderFeaturedVideos();
renderHomeVideos();
renderVideoYearGroups(videoYearSelect?.value || "2026");
videoYearSelect?.addEventListener("change", () => {
  renderVideoYearGroups(videoYearSelect.value);
  setupMediaCarousels();
});
setupYearPicker();
addMobileFeaturedLink();
enhanceSiteFooter();
enhanceBubbleButtons();
setupMediaCarousels();
