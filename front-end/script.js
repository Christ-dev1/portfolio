// 1. Barres de compétences
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.skill-card').forEach(card => barObserver.observe(card));

// 2. Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (!href || href === '#') return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// 3. Nav active au scroll
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.getAttribute('id');
  });
  navLinks.forEach(l => {
    l.classList.remove('active');
    if (l.getAttribute('href') === '#' + current) l.classList.add('active');
  });
});

// 4. Scroll to top
const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', () => {
  if (topBtn) {
    if (window.scrollY > 400) topBtn.classList.remove('hidden');
    else topBtn.classList.add('hidden');
  }
});
topBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// 5. Formulaire contact
const form   = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  if (status) status.textContent = 'Envoi…';
  const btn = form.querySelector('button[type="submit"]');
  if (btn) btn.disabled = true;
  setTimeout(() => {
    if (status) status.textContent = '✓ Message envoyé — merci !';
    if (btn) btn.disabled = false;
    form.reset();
  }, 1200);
});