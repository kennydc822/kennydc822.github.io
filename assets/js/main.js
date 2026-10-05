const header = document.querySelector("[data-header]");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const revealTargets = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px" },
  );

  revealTargets.forEach((target) => revealObserver.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const themeImage = document.querySelector("#theme-preview-image");
const themeCaption = document.querySelector("#theme-preview-caption");
const themeChoices = document.querySelectorAll("[data-theme]");
const themeNames = {
  original: "原版風格",
  classic: "經典茶樓",
  midnight: "夜海青瓷",
  jade: "玉石晨光",
};
const themeSources = {
  original: "assets/images/taiwan-ready-original-20261005r4.jpg",
  classic: "assets/images/taiwan-ready-classic-20261005r4.jpg",
  midnight: "assets/images/taiwan-ready-midnight-20261005r4.jpg",
  jade: "assets/images/taiwan-ready-20261005r2.jpg",
};

// Keep the current preview visible until the next screenshot has loaded.
let latestThemeRequest = 0;
themeChoices.forEach((button) => {
  button.addEventListener("click", () => {
    const theme = button.dataset.theme;
    if (!themeImage || !themeCaption || !themeNames[theme]) return;
    const request = ++latestThemeRequest;
    const preview = new Image();
    preview.onload = () => {
      if (request !== latestThemeRequest) return;
      themeImage.src = preview.src;
      themeImage.dataset.captureTheme = theme;
      themeImage.alt = `${themeNames[theme]}：牌桌、牌背及環境的遊戲畫面`;
      themeCaption.textContent = `${themeNames[theme]} · 牌桌與環境預覽`;
      themeChoices.forEach((choice) => {
        choice.setAttribute("aria-pressed", String(choice === button));
      });
    };
    preview.onerror = () => {
      if (request !== latestThemeRequest) return;
      themeCaption.textContent = "暫時未能載入此主題畫面，請再試一次。";
    };
    preview.src = themeSources[theme];
  });
});
