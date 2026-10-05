// Inquiry draft logic (pure, tested in tests/inquiry.test.mjs) plus page wiring.
export const MAX_GUESTS = 8;

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function formatDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}

// Google Apps Script web app URL that appends inquiries to the sheet (see google-apps-script/Code.gs).
// Leave empty to skip saving.
export const SHEET_ENDPOINT = "https://script.google.com/macros/s/AKfycbzCyeAoeaL1YB0Kav0PubuVW_dNnSERmk8DZjoIV957tr8GCgpO61gRrJKhQHwgxzD0/exec";
export const MESSENGER_URL = "https://m.me/61566061342446";

export function messengerLink(text) {
  return `${MESSENGER_URL}?text=${encodeURIComponent(text)}`;
}

export function validateInquiry({ name, contact, checkIn, checkOut, guests }, today) {
  const errors = {};
  if (!(name || "").trim()) errors.name = "Enter your name.";
  if (!(contact || "").trim()) errors.contact = "Enter a phone number, email, or Facebook name.";
  if (!checkIn) errors.checkIn = "Choose a check-in date.";
  else if (today && checkIn < today) errors.checkIn = "Choose a check-in date from today onward.";
  if (!checkOut) errors.checkOut = "Choose a check-out date.";
  else if (checkIn && checkOut <= checkIn) errors.checkOut = "Choose a check-out date after your check-in date.";
  const n = Number(guests);
  if (!guests || !Number.isInteger(n) || n < 1 || n > MAX_GUESTS) errors.guests = "Choose between 1 and 8 guests.";
  return errors;
}

export function buildMessage({ name, checkIn, checkOut, guests, message }) {
  const who = (name || "").trim();
  const lines = [
    who ? `Hi! This is ${who}. I would like to ask about a stay at The Quvoh.` : "Hi! I would like to ask about a stay at The Quvoh.",
    `Preferred check-in: ${formatDate(checkIn)}, 2:00 p.m.`,
    `Preferred check-out: ${formatDate(checkOut)}, 12:00 noon`,
    `Number of guests: ${Number(guests)}`,
  ];
  const note = (message || "").trim();
  if (note) lines.push(`Question: ${note}`);
  lines.push("Is the place available?");
  return lines.join("\n");
}

function localToday() {
  const t = new Date();
  return new Date(t.getTime() - t.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

function initMenu() {
  const menu = document.getElementById("menu");
  const openBtn = document.querySelector("[data-menu-open]");
  if (!menu || !openBtn) return;
  openBtn.addEventListener("click", () => menu.showModal());
  menu.querySelector("[data-menu-close]").addEventListener("click", () => menu.close());
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) menu.close(); });
  menu.addEventListener("close", () => openBtn.focus({ preventScroll: true }));
}

function initActiveNav() {
  if (!("IntersectionObserver" in window)) return;
  const links = [...document.querySelectorAll(".primary-nav a, .menu-links a")];
  const sections = [...new Set(links.map((a) => a.getAttribute("href")))].map((h) => document.querySelector(h)).filter(Boolean);
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const id = `#${entry.target.id}`;
      for (const a of links) {
        if (a.getAttribute("href") === id) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      }
    }
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => io.observe(s));
}

function initStickyHeader() {
  const header = document.querySelector(".site-header");
  const hero = document.getElementById("home");
  if (!header || !hero || !("IntersectionObserver" in window)) return;
  // Solid background once the hero has scrolled up under the header.
  const io = new IntersectionObserver(([entry]) => {
    header.classList.toggle("is-solid", !entry.isIntersecting);
  }, { rootMargin: `-${header.offsetHeight}px 0px 0px 0px` });
  io.observe(hero);
}

function initLightbox() {
  const box = document.getElementById("lightbox");
  if (!box) return;
  const img = box.querySelector("[data-lightbox-img]");
  const cap = box.querySelector("[data-lightbox-caption]");
  let opener = null;
  document.querySelectorAll(".tile button[data-full]").forEach((btn) => {
    btn.addEventListener("click", () => {
      opener = btn;
      img.src = btn.dataset.full;
      img.alt = btn.querySelector("img").alt;
      cap.textContent = btn.dataset.caption;
      box.showModal();
    });
  });
  box.querySelector("[data-lightbox-close]").addEventListener("click", () => box.close());
  box.addEventListener("click", (e) => { if (e.target === box) box.close(); });
  box.addEventListener("close", () => { if (opener) opener.focus({ preventScroll: true }); });
}

// Returns a status line for the guest. Saving never blocks the Messenger step.
async function saveToSheet(payload) {
  if (!SHEET_ENDPOINT) return "";
  try {
    // text/plain keeps this a simple request, so Apps Script needs no CORS preflight.
    const res = await fetch(SHEET_ENDPOINT, { method: "POST", body: JSON.stringify(payload) });
    const out = await res.json();
    if (!out.ok) throw new Error(out.error || "save failed");
    return "Your details were sent to the host.";
  } catch {
    return "We could not save your details, so please send the message below on Messenger.";
  }
}

// Background slideshow: crossfades on its own; stops while the tab is hidden or the visitor prefers reduced motion.
function initCarousel() {
  const slides = [...document.querySelectorAll("[data-slides] img")];
  if (slides.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const INTERVAL_MS = 6000;
  let index = 0;
  let timer = null;
  const next = () => {
    slides[index].classList.remove("is-active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("is-active");
  };
  const start = () => { clearInterval(timer); timer = document.hidden ? null : setInterval(next, INTERVAL_MS); };
  document.addEventListener("visibilitychange", start);
  start();
}

function initInquiry() {
  const form = document.getElementById("inquiry");
  if (!form) return;
  const ready = document.querySelector("[data-ready]");
  const draft = document.querySelector("[data-draft]");
  const status = document.querySelector("[data-copy-status]");
  const summary = form.querySelector("[data-error-summary]");
  const saveStatus = document.querySelector("[data-save-status]");
  const messenger = document.querySelector("[data-messenger]");
  const submitBtn = form.querySelector("[data-submit]");
  const fields = { name: form.elements.name, contact: form.contact, checkIn: form.checkIn, checkOut: form.checkOut, guests: form.guests };
  const today = localToday();
  form.checkIn.min = today;
  form.checkIn.addEventListener("change", () => { form.checkOut.min = form.checkIn.value || today; });

  const showErrors = (errors) => {
    for (const [key, input] of Object.entries(fields)) {
      const el = document.getElementById(input.getAttribute("aria-describedby"));
      const msg = errors[key];
      if (msg) input.setAttribute("aria-invalid", "true");
      else input.removeAttribute("aria-invalid");
      el.textContent = msg || "";
      el.hidden = !msg;
    }
    const count = Object.keys(errors).length;
    summary.hidden = count === 0;
    summary.textContent = count ? `Check ${count} ${count === 1 ? "field" : "fields"} before preparing your message.` : "";
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (submitBtn.getAttribute("aria-busy") === "true") return;
    const data = {
      name: fields.name.value, contact: form.contact.value,
      checkIn: form.checkIn.value, checkOut: form.checkOut.value, guests: form.guests.value, message: form.message.value,
    };
    const errors = validateInquiry(data, today);
    showErrors(errors);
    if (Object.keys(errors).length) { summary.focus(); return; }
    submitBtn.setAttribute("aria-busy", "true");
    saveStatus.textContent = await saveToSheet({ ...data, website: form.website.value });
    submitBtn.removeAttribute("aria-busy");
    draft.value = buildMessage(data);
    messenger.href = messengerLink(draft.value);
    status.textContent = "";
    form.hidden = true;
    ready.hidden = false;
    ready.focus();
  });

  form.addEventListener("reset", () => showErrors({}));

  document.querySelector("[data-edit]").addEventListener("click", () => {
    ready.hidden = true;
    form.hidden = false;
    form.checkIn.focus();
  });

  document.querySelector("[data-copy]").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(draft.value);
      status.textContent = "Message copied. Paste it into Messenger if it is not filled in.";
    } catch {
      draft.focus();
      draft.select();
      status.textContent = "Select the message and copy it manually.";
    }
  });
}

if (typeof document !== "undefined") {
  initMenu();
  initActiveNav();
  initStickyHeader();
  initCarousel();
  initLightbox();
  initInquiry();
}
