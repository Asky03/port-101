// ===============================
// Active link highlight while scrolling
// ===============================
const sections = [...document.querySelectorAll('section.page')];
const navLinks = [...document.querySelectorAll('.links a[href^="#"]')];

if (sections.length && navLinks.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const id = `#${e.target.id}`;
        navLinks.forEach((a) =>
          a.classList.toggle('active', a.getAttribute('href') === id)
        );
      });
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: 0.01 }
  );

  sections.forEach((s) => io.observe(s));
}

// ===============================
// Navbar border on scroll
// ===============================
const nav = document.getElementById('nav');
document.addEventListener(
  'scroll',
  () => {
    nav?.classList.toggle('scrolled', window.scrollY > 12);
  },
  { passive: true }
);

// ===============================
// Mobile menu toggle
// ===============================
const menuBtn = document.getElementById('menuBtn');
const linksWrap = document.getElementById('links');

menuBtn?.addEventListener('click', () => {
  if (!linksWrap) return;

  const isOpen =
    getComputedStyle(linksWrap).display !== 'none' &&
    linksWrap.style.display !== 'none';

  linksWrap.style.display = isOpen ? 'none' : 'flex';
  menuBtn.setAttribute('aria-expanded', String(!isOpen));
});

// ===============================
// Reveal-on-view
// ===============================
const revs = [...document.querySelectorAll('.reveal')];

if (revs.length) {
  const io2 = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // reveal once
      });
    },
    { threshold: 0.16, rootMargin: '0px 0px -6% 0px' }
  );

  revs.forEach((r) => io2.observe(r));
}

// ===============================
// Footer year
// ===============================
const y = document.getElementById('year');
if (y) y.textContent = String(new Date().getFullYear());

// ===============================
// DOMContentLoaded: View Projects + scroll glow
// ===============================
document.addEventListener('DOMContentLoaded', function () {
  // View Projects button
  const btn = document.getElementById('view-projects-btn');
  if (btn) {
    btn.addEventListener('click', function () {
      const projectsSection = document.getElementById('projects');

      if (projectsSection) {
        const prefersReducedMotion = window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        ).matches;

        projectsSection.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start',
        });
      } else {
        window.location.href = '/projects.html'; // fallback page if section absent
      }
    });
  }

  // Blue scroll glow effect
  const glow = document.querySelector('.scroll-glow');
  if (glow) {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (!prefersReducedMotion) {
      let rafId = null;

      function updateGlow() {
        const scrollY = window.scrollY || window.pageYOffset;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const percent = docHeight > 0 ? scrollY / docHeight : 0.4;

        // Clamp glow Y between 10% and 80%
        const yPos = 10 + percent * 70;
        glow.style.setProperty('--glow-y', yPos + '%');

        rafId = null;
      }

      window.addEventListener(
        'scroll',
        function () {
          if (rafId !== null) return;
          rafId = window.requestAnimationFrame(updateGlow);
        },
        { passive: true }
      );

      updateGlow();
    }
  }
});

// ===============================
// Email button: Gmail on desktop, mail app on mobile (fallback mailto)
// ===============================
(function () {
  const emailBtn = document.getElementById('emailBtn');
  if (!emailBtn) return;

  const EMAIL = 'Ashushekhar2442@gmail.com';
  const SUBJECT = 'Hello from your portfolio';
  const BODY = `Hi Ashu,

I saw your portfolio and would love to connect about...`;

  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
    SUBJECT
  )}&body=${encodeURIComponent(BODY)}`;

  const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    EMAIL
  )}&su=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;

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

// ===============================
// PRELOADER (plays once per browser session)
// ===============================
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

  // Simulate load to ~90%
  const tick = () => {
    if (done) return;

    p += Math.max(1, (90 - p) * 0.06);
    if (p > 90) p = 90;

    if (fill) fill.style.width = p.toFixed(0) + '%';
    if (pct) pct.textContent = p.toFixed(0) + '%';

    if (p < 90) requestAnimationFrame(tick);
  };
  tick();

  // Finish to 100 and hide
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
  window.addEventListener('load', finish);
})();

// ===============================
// Certifications Carousel + Flip Cards
// ===============================
(function () {
  const track = document.getElementById('certTrack');
  const prevBtn = document.getElementById('certPrev');
  const nextBtn = document.getElementById('certNext');
  const viewport = document.getElementById('certViewport');

  if (!track || !prevBtn || !nextBtn || !viewport) return;

  const cards = Array.from(track.querySelectorAll('.cert-card'));
  let currentIndex = 0;

  function getStep() {
    if (!cards.length) return 0;

    const card = cards[0];
    const trackStyles = window.getComputedStyle(track);
    const cardWidth = card.getBoundingClientRect().width;
    const gap = parseFloat(trackStyles.gap || '18');

    return cardWidth + gap;
  }

  function maxIndex() {
    const step = getStep();
    if (!step) return 0;

    const visibleWidth = viewport.clientWidth;
    const totalWidth = track.scrollWidth;

    return Math.max(0, Math.ceil((totalWidth - visibleWidth) / step));
  }

  function updateCarousel() {
    const max = maxIndex();
    if (currentIndex > max) currentIndex = max;

    const x = currentIndex * getStep();
    track.style.transform = `translateX(-${x}px)`;

    prevBtn.disabled = currentIndex <= 0;
    nextBtn.disabled = currentIndex >= max;
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = Math.max(0, currentIndex - 1);
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = Math.min(maxIndex(), currentIndex + 1);
    updateCarousel();
  });

  cards.forEach((card) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return; // don't flip if user clicked link
      card.classList.toggle('is-flipped');
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('is-flipped');
      }

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        currentIndex = Math.min(maxIndex(), currentIndex + 1);
        updateCarousel();
      }

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        currentIndex = Math.max(0, currentIndex - 1);
        updateCarousel();
      }
    });
  });

  window.addEventListener('resize', updateCarousel, { passive: true });

  updateCarousel();
})();