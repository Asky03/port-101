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

// ===== Email button: Gmail on desktop, mail app on mobile (fallback to mailto) =====
(function () {
  const emailBtn = document.getElementById('emailBtn');
  if (!emailBtn) return;

  const EMAIL = 'Ashushekhar2442@gmail.com';
  const SUBJECT = 'Hello from your portfolio';
  const BODY = `Hi Ashu,

I saw your portfolio and would love to connect about...`;

  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;
  const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}&su=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;

  emailBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    // On mobile, prefer the default mail app
    if (isMobile) {
      window.location.href = mailto;
      return;
    }

    // On desktop, open Gmail compose in a new tab. If blocked, fall back to mailto.
    const win = window.open(gmailCompose, '_blank');
    if (!win || win.closed || typeof win.closed === 'undefined') {
      window.location.href = mailto;
    }
  });
})();

// ===== PRELOADER =====
// Plays once per browser session
(function(){
  const pre = document.getElementById('preloader');
  const fill = document.getElementById('plFill');
  const pct  = document.getElementById('plPct');
  if (!pre || sessionStorage.getItem('seenPreloader')) {
    pre?.classList.add('hide');
    return;
  }

  let p = 0, done = false;

  // Simulate work: quickly to 85%, then wait for real load -> 100
  const tick = () => {
    if (done) return;
    p += Math.max(1, (90 - p) * 0.06);      // ease-out approach to ~90
    if (p > 90) p = 90;
    fill.style.width = p.toFixed(0) + '%';
    if (pct) pct.textContent = p.toFixed(0) + '%';
    if (p < 90) requestAnimationFrame(tick);
  };
  tick();

  // When everything is loaded, finish to 100 then hide
  const finish = () => {
    if (done) return;
    done = true;
    let v = p;
    const anim = () => {
      v += (100 - v) * 0.18;
      if (v > 99.5) v = 100;
      fill.style.width = v.toFixed(0) + '%';
      if (pct) pct.textContent = v.toFixed(0) + '%';
      if (v < 100) requestAnimationFrame(anim);
      else {
        setTimeout(() => {
          pre.classList.add('hide');
          sessionStorage.setItem('seenPreloader','1');
        }, 200); // tiny pause for drama
      }
    };
    anim();
  };

  // Safety timeout (e.g., slow network) -> finish after 6s
  setTimeout(finish, 6000);
  // Real signal
  window.addEventListener('load', finish);
})();
