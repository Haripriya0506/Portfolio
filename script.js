// Typed Text Effect// Mobile Navbar Toggle
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("nav-open");
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("nav-open");
    }
  });
}

// Smooth Scroll for Anchor Links
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    if (targetId && targetId.length > 1) {
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const offsetTop = targetEl.offsetTop - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  });
});

// Reveal Cards on Scroll
const revealElements = document.querySelectorAll(
  ".card, .hero-content, .about-content, .contact-content"
);

revealElements.forEach((el) => el.classList.add("reveal-hidden"));

const observerOptions = {
  root: null,
  threshold: 0.15,
};

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal-show");
      obs.unobserve(entry.target);
    }
  });
}, observerOptions);

revealElements.forEach((el) => observer.observe(el));

// Dynamic Year in Footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

