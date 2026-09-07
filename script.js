const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));

const nav = document.getElementById("nav");
const menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", () => {
  const open = nav.style.display === "flex";
  nav.style.display = open ? "" : "flex";
  if (!open) {
    nav.style.position = "absolute";
    nav.style.top = "64px";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.padding = "18px 24px";
    nav.style.flexDirection = "column";
    nav.style.background = "rgba(3,12,28,.98)";
  }
});

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 850) nav.style.display = "";
  });
});

const deployBtn = document.getElementById("deployBtn");
const status = document.getElementById("deployStatus");
const steps = document.querySelectorAll(".pipe-step");

deployBtn.addEventListener("click", async () => {
  deployBtn.disabled = true;
  deployBtn.textContent = "Deploying...";
  const messages = [
    "Git push detected...",
    "Building static assets...",
    "Running tests...",
    "Uploading files to Amazon S3...",
    "Invalidating CloudFront cache...",
    "Deployment complete — CloudNova is LIVE! 🚀"
  ];

  steps.forEach(s => s.style.animation = "none");

  for (let i = 0; i < messages.length; i++) {
    status.textContent = messages[i];
    if (steps[i]) {
      steps[i].animate(
        [{transform:"scale(1)",boxShadow:"none"},{transform:"scale(1.06)",boxShadow:"0 0 28px rgba(24,201,255,.35)"},{transform:"scale(1)",boxShadow:"none"}],
        {duration:550}
      );
    }
    await new Promise(r => setTimeout(r, 700));
  }

  deployBtn.disabled = false;
  deployBtn.textContent = "↻ Simulate Again";
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "home";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 160) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
});
