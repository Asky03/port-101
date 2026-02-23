// Active link highlight while scrolling
const sections = [...document.querySelectorAll('section.page')];
const navLinks = [...document.querySelectorAll('.links a[href^="#"]')];

const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const id = `#${e.target.id}`;
    navLinks.forEach((a) => {
      a.classList.toggle('active', a.getAttribute('href') === id);
    });
  });
}, { rootMargin: '-40% 0px -50% 0px', threshold: 0.01 });

sections.forEach((s) => io.observe(s));

// Navbar border on scroll
const nav = document.getElementById('nav');
document.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', window.scrollY > 12);
}, { passive: true });

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const linksWrap = document.getElementById('links');

menuBtn?.addEventListener('click', () => {
  if (!linksWrap) return;

  const isOpen = linksWrap.style.display === 'flex';
  linksWrap.style.display = isOpen ? 'none' : 'flex';
  menuBtn.setAttribute('aria-expanded', String(!isOpen));
});

// Close mobile menu when clicking a nav link
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (!linksWrap || !menuBtn) return;
    if (window.innerWidth <= 900) {
      linksWrap.style.display = 'none';
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
});

// ===== Scroll Fade / Reveal =====
(function () {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fadeTargets = [
    ...document.querySelectorAll('.reveal, .fade-on-scroll, [data-fade]')
  ];

  // Optional stagger support:
  // Put data-stagger on a parent and its children will animate one after another
  document.querySelectorAll('[data-stagger]').forEach((parent) => {
    const children = [...parent.children];
    children.forEach((child, index) => {
      if (
        !child.classList.contains('reveal') &&
        !child.classList.contains('fade-on-scroll') &&
        !child.hasAttribute('data-fade')
      ) {
        child.classList.add('fade-on-scroll');
      }
      child.style.transitionDelay = `${index * 90}ms`;
      if (!fadeTargets.includes(child)) fadeTargets.push(child);
    });
  });

  if (prefersReducedMotion) {
    fadeTargets.forEach((el) => el.classList.add('visible'));
    return;
  }

  const io2 = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // reveal once
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -8% 0px'
  });

  fadeTargets.forEach((el) => io2.observe(el));
})();

// Footer year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// View Projects button scroll/redirect + scroll glow
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('view-projects-btn');
  if (btn) {
    btn.addEventListener('click', function () {
      var projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        projectsSection.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
      } else {
        window.location.href = '/projects.html';
      }
    });
  }

  // Blue scroll-glow effect
  var glow = document.querySelector('.scroll-glow');
  if (glow) {
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      let rafId = null;

      function updateGlow() {
        var scrollY = window.scrollY || window.pageYOffset;
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        var percent = docHeight > 0 ? scrollY / docHeight : 0.4;

        // Clamp between 10% and 80%
        var yPos = 10 + percent * 70;
        glow.style.setProperty('--glow-y', yPos + '%');

        rafId = null;
      }

      window.addEventListener('scroll', function () {
        if (rafId) return;
        rafId = window.requestAnimationFrame(updateGlow);
      }, { passive: true });

      updateGlow();
    }
  }
});

// Email button: Gmail on desktop, mail app on mobile (fallback to mailto)
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

    if (isMobile) {
      window.location.href = mailto;
      return;
    }

    const win = window.open(gmailCompose, '_blank');
    if (!win || win.closed || typeof win.closed === 'undefined') {
      window.location.href = mailto;
    }
  });
})();

// ===== PRELOADER =====
// Plays once per browser session
(function () {
  const pre = document.getElementById('preloader');
  const fill = document.getElementById('plFill');
  const pct = document.getElementById('plPct');

  if (!pre || sessionStorage.getItem('seenPreloader')) {
    pre?.classList.add('hide');
    return;
  }

  let p = 0;
  let done = false;

  // Simulate work: quickly to ~90%, then wait for real load -> 100
  const tick = () => {
    if (done) return;

    p += Math.max(1, (90 - p) * 0.06);
    if (p > 90) p = 90;

    if (fill) fill.style.width = p.toFixed(0) + '%';
    if (pct) pct.textContent = p.toFixed(0) + '%';

    if (p < 90) requestAnimationFrame(tick);
  };
  tick();

  const finish = () => {
    if (done) return;
    done = true;

    let v = p;
    const anim = () => {
      v += (100 - v) * 0.18;
      if (v > 99.5) v = 100;

      if (fill) fill.style.width = v.toFixed(0) + '%';
      if (pct) pct.textContent = v.toFixed(0) + '%';

      if (v < 100) {
        requestAnimationFrame(anim);
      } else {
        setTimeout(() => {
          pre.classList.add('hide');
          sessionStorage.setItem('seenPreloader', '1');
        }, 200);
      }
    };

    anim();
  };

  setTimeout(finish, 6000); // safety timeout
  window.addEventListener('load', finish); // real signal
})();