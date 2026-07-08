const contentStyles = document.createElement("link");
contentStyles.rel = "stylesheet";
contentStyles.href = "assets/content-overrides.css?v=20260708-copy-v3";
document.head.appendChild(contentStyles);

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
    src: "assets/media/videos/reels/akcni-reel.mp4",
    poster: "assets/media/posters/akcni-reel.webp",
    format: "portrait",
    featured: true,
  },
  {
    id: "filler-reel",
    title: "Filler reel",
    category: "reel",
    year: null,
    src: "assets/media/videos/reels/filler-reel.mp4",
    poster: "assets/media/posters/filler-reel.webp",
    format: "portrait",
    featured: false,
  },
  {
    id: "outro-2026",
    title: "Outro 2026",
    category: "graphic",
    year: 2026,
    src: "assets/media/videos/graphics/outro-2026.mp4",
    poster: "assets/media/posters/outro-2026.webp",
    format: "portrait",
    featured: true,
  },
  {
    id: "edit-2026-01",
    title: "Edit 01",
    category: "edit",
    year: 2026,
    src: "assets/media/videos/edits/2026/edit-2026-01.mp4",
    poster: "assets/media/posters/edit-2026-01.webp",
    format: "landscape",
    featured: false,
  },
  {
    id: "edit-2026-02",
    title: "Edit 02",
    category: "edit",
    year: 2026,
    src: "assets/media/videos/edits/2026/edit-2026-02.mp4",
    poster: "assets/media/posters/edit-2026-02.webp",
    format: "square",
    featured: true,
  },
  {
    id: "edit-2025-01",
    title: "Edit 01",
    category: "edit",
    year: 2025,
    src: "assets/media/videos/edits/2025/edit-2025-01.mp4",
    poster: "assets/media/posters/edit-2025-01.webp",
    format: "square",
    featured: false,
  },
  {
    id: "edit-2025-02",
    title: "Edit 02",
    category: "edit",
    year: 2025,
    src: "assets/media/videos/edits/2025/edit-2025-02.mp4",
    poster: "assets/media/posters/edit-2025-02.webp",
    format: "portrait",
    featured: false,
  },
  {
    id: "edit-2025-03",
    title: "Edit 03",
    category: "edit",
    year: 2025,
    src: "assets/media/videos/edits/2025/edit-2025-03.mp4",
    poster: "assets/media/posters/edit-2025-03.webp",
    format: "square",
    featured: false,
  },
  {
    id: "edit-2024-01",
    title: "Edit 01",
    category: "edit",
    year: 2024,
    src: "assets/media/videos/edits/2024/edit-2024-01.mp4",
    poster: "assets/media/posters/edit-2024-01.webp",
    format: "portrait",
    featured: false,
  },
  {
    id: "edit-2024-02",
    title: "Edit 02",
    category: "edit",
    year: 2024,
    src: "assets/media/videos/edits/2024/edit-2024-02.mp4",
    poster: "assets/media/posters/edit-2024-02.webp",
    format: "square",
    featured: false,
  },
  {
    id: "edit-2023-01",
    title: "Edit 01",
    category: "edit",
    year: 2023,
    src: "assets/media/videos/edits/2023/edit-2023-01.mp4",
    poster: "assets/media/posters/edit-2023-01.webp",
    format: "portrait",
    featured: false,
  },
  {
    id: "edit-2023-03",
    title: "Edit 03",
    category: "edit",
    year: 2023,
    src: "assets/media/videos/edits/2023/edit-2023-03.mp4",
    poster: "assets/media/posters/edit-2023-03.webp",
    format: "square",
    featured: false,
  },
  {
    id: "edit-2023-04",
    title: "Edit 04",
    category: "edit",
    year: 2023,
    src: "assets/media/videos/edits/2023/edit-2023-04.mp4",
    poster: "assets/media/posters/edit-2023-04.webp",
    format: "square",
    featured: false,
  },
  {
    id: "edit-2023-05",
    title: "Edit 05",
    category: "edit",
    year: 2023,
    src: "assets/media/videos/edits/2023/edit-2023-05.mp4",
    poster: "assets/media/posters/edit-2023-05.webp",
    format: "square",
    featured: false,
  },
  {
    id: "edit-2023-06",
    title: "Edit 06",
    category: "edit",
    year: 2023,
    src: "assets/media/videos/edits/2023/edit-2023-06.mov",
    poster: "assets/media/posters/edit-2023-06.webp",
    format: "square",
    featured: false,
  },
  {
    id: "edit-2022-01",
    title: "Edit 01",
    category: "edit",
    year: 2022,
    src: "assets/media/videos/edits/2022/edit-2022-01.mp4",
    poster: "assets/media/posters/edit-2022-01.webp",
    format: "square",
    featured: false,
  },
];

const videoYearsContainer = document.querySelector("[data-video-years]");
const videoYearSelect = document.querySelector("[data-video-year-select]");
const videoModal = document.querySelector("[data-video-modal]");
const videoModalTitle = document.querySelector("[data-video-modal-title]");
const videoModalMeta = document.querySelector("[data-video-modal-meta]");
const videoModalMedia = document.querySelector("[data-video-modal-media]");
const videoPlayer = document.querySelector("[data-video-player]");
let lastFocusedVideoTrigger = null;

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
  const videos = portfolioVideos.filter(
    (video) => video.category === "edit" && video.year === selectedYear,
  );

  videoYearsContainer.innerHTML = `
    <section class="motion-year-group" aria-label="Edity z roku ${selectedYear}">
      <div class="motion-year-grid">
        ${videos.map((video) => renderVideoButton(video)).join("")}
      </div>
    </section>
  `;
};

const openVideoModal = (video) => {
  if (!videoModal || !videoPlayer || !videoModalTitle || !videoModalMeta || !videoModalMedia) return;

  lastFocusedVideoTrigger = document.activeElement;
  videoModalTitle.textContent = video.title;
  videoModalMeta.textContent = video.year ? String(video.year) : "Vybraná práce";
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

renderVideoYearGroups(videoYearSelect?.value || "2026");

videoYearSelect?.addEventListener("change", () => {
  renderVideoYearGroups(videoYearSelect.value);
});

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-video-id]");
  if (!trigger) return;

  const video = portfolioVideos.find((item) => item.id === trigger.dataset.videoId);
  if (video) openVideoModal(video);
});

videoModal?.querySelectorAll("[data-video-close]").forEach((closeTrigger) => {
  closeTrigger.addEventListener("click", closeVideoModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeVideoModal();
});
