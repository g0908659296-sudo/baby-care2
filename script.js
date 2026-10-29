// 請把 SYSTEM_URL 改成目前實際可用的新生兒衛教問答平台網址。
const SYSTEM_URL = "";
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".menu");
  const nav = document.querySelector("#nav");
  const link = document.querySelector("#system-link");
  if (button && nav) {
    button.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      button.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      nav.classList.remove("open"); button.setAttribute("aria-expanded", "false");
    }));
  }
  if (link && SYSTEM_URL.trim()) {
    try {
      const url = new URL(SYSTEM_URL);
      if (["http:", "https:"].includes(url.protocol)) {
        link.href = url.href; link.textContent = "前往問答平台 ↗";
        link.target = "_blank"; link.rel = "noopener noreferrer";
        link.classList.remove("disabled"); link.removeAttribute("aria-disabled");
      }
    } catch (e) { console.warn("請確認 SYSTEM_URL 格式。"); }
  }
});