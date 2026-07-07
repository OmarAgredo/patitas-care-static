// Shared WhatsApp destination for all appointment buttons.
const whatsappUrl =
  "https://wa.me/573001112233?text=Hola,%20quiero%20agendar%20una%20cita%20para%20mi%20mascota";

// Mobile menu toggle.
const menuToggle = document.querySelector(".menu-toggle");
const navPanel = document.querySelector("#primary-menu");
const navLinks = document.querySelectorAll(".nav-panel a");

menuToggle?.addEventListener("click", () => {
  const isOpen = navPanel.classList.toggle("is-open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menu" : "Abrir menu");
  document.body.classList.toggle("menu-open", isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navPanel.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Abrir menu");
    document.body.classList.remove("menu-open");
  });
});

// Smooth scroll behavior for internal navigation links.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const target = targetId ? document.querySelector(targetId) : null;

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// FAQ accordion interaction.
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const isOpen = item.classList.contains("is-open");

    document.querySelectorAll(".faq-item").forEach((faqItem) => {
      faqItem.classList.remove("is-open");
      faqItem.querySelector(".faq-question")?.setAttribute("aria-expanded", "false");
      const indicator = faqItem.querySelector(".faq-question span");
      if (indicator) indicator.textContent = "+";
    });

    if (!isOpen) {
      item.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
      const indicator = button.querySelector("span");
      if (indicator) indicator.textContent = "-";
    }
  });
});

// Contact form demo response.
const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  contactForm.reset();
  formMessage.textContent =
    "Gracias por escribirnos. Te contactaremos pronto para ayudarte con tu mascota.";
});

// Keep WhatsApp CTA links consistent if future buttons use the data attribute.
document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
  link.setAttribute("href", whatsappUrl);
});
