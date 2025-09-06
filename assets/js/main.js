// Active link highlight while scrolling
const sections = [...document.querySelectorAll('section.page')];
const navLinks = [...document.querySelectorAll('.links a[href^="#"]')];

const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const id = `#${e.target.id}`;
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === id));
  });
}, { rootMargin: '-40% 0px -50% 0px', threshold: 0.01 });

sections.forEach(s => io.observe(s));

// Navbar border on scroll
const nav = document.getElementById('nav');
document.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 12);
});

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const linksWrap = document.getElementById('links');
menuBtn?.addEventListener('click', () => {
  if (!linksWrap) return;
  linksWrap.style.display = linksWrap.style.display === 'flex' ? 'none' : 'flex';
});

// Reveal-on-view
const revs = [...document.querySelectorAll('.reveal')];
const io2 = new IntersectionObserver((es) => {
  es.forEach(x => { if (x.isIntersecting) x.target.classList.add('visible'); });
}, { threshold: .2 });
revs.forEach(r => io2.observe(r));

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();



