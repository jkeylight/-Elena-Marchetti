/* ==========================================================
   APP.JS — Master Init
   ========================================================== */
document.addEventListener('DOMContentLoaded', function() {

  gsap.registerPlugin(ScrollTrigger);

  /* ====================================
     LENIS SMOOTH SCROLL
     ==================================== */
  window.lenis = null;
  var isMobile = window.innerWidth <= 1000;

  if (!isMobile && typeof Lenis !== 'undefined') {
    window.lenis = new Lenis({ lerp: 0.06, smoothWheel: true });
    window.lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function(time) { window.lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  /* ====================================
     INIT MODULES (pre-loader)
     ==================================== */
  initCursor();
  initDust();

  /* ====================================
     LOADER → THEN EVERYTHING ELSE
     ==================================== */
  initLoader(function() {
    document.getElementById('header').style.opacity = '1';
    initHorizontalScroll();
    initCredits();
    initArchive();
    if (window.lenis) window.lenis.start();
  });

  /* ====================================
     CREDITS — Vertical Roll
     ==================================== */
  function initCredits() {
    var creditsInner = document.querySelector('.credits-inner');
    var creditsSection = document.getElementById('credits');
    if (!creditsInner || !creditsSection) return;

    gsap.to(creditsInner, {
      y: function() { return -(creditsInner.scrollHeight - window.innerHeight); },
      ease: 'none',
      scrollTrigger: {
        trigger: creditsSection,
        start: 'top top',
        end: function() { return '+=' + creditsInner.scrollHeight; },
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true
      }
    });
  }

  /* ====================================
     MENU
     ==================================== */
  var menuOverlay = document.getElementById('menuOverlay');
  var menuTrigger = document.getElementById('menuTrigger');
  var menuClose = document.getElementById('menuClose');

  if (menuTrigger) {
    menuTrigger.addEventListener('click', function() {
      menuOverlay.classList.add('open');
      gsap.to(menuOverlay, { opacity: 1, y: 0, duration: 0.7, ease: 'power4.out' });
      gsap.from('.menu-item', { y: 60, opacity: 0, stagger: 0.07, duration: 0.5, ease: 'power3.out', delay: 0.2 });
      gsap.to(menuClose, { opacity: 1, duration: 0.5, delay: 0.3 });
      if (window.lenis) window.lenis.stop();
    });
  }

  if (menuClose) {
    menuClose.addEventListener('click', closeMenu);
  }

  function closeMenu() {
    gsap.to(menuOverlay, {
      opacity: 0, y: '-100%', duration: 0.5, ease: 'power4.in',
      onComplete: function() { menuOverlay.classList.remove('open'); }
    });
    if (window.lenis) window.lenis.start();
  }

  // Menu item clicks
  document.querySelectorAll('.menu-item').forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      var target = item.getAttribute('data-frame');
      closeMenu();

      setTimeout(function() {
        if (target === 'credits') {
          var creditsEl = document.getElementById('credits');
          if (creditsEl) {
            if (window.lenis) {
              window.lenis.scrollTo(creditsEl, { duration: 2 });
            } else {
              creditsEl.scrollIntoView({ behavior: 'smooth' });
            }
          }
        } else {
          scrollToFrame(parseInt(target));
        }
      }, 600);
    });
  });

  /* ====================================
     BRAND LOGO — SCROLL TO TOP
     ==================================== */
  var brandLogo = document.getElementById('brandLogo');
  if (brandLogo) {
    brandLogo.addEventListener('click', function(e) {
      e.preventDefault();
      // Close menu if open
      if (menuOverlay && menuOverlay.classList.contains('open')) {
        closeMenu();
        setTimeout(function() {
          scrollToTop();
        }, 600);
      } else {
        scrollToTop();
      }
    });
  }

  function scrollToTop() {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 2, easing: function(t) {
        return t < 0.5
          ? 4 * t * t * t
          : 1 - Math.pow(-2 * t + 2, 3) / 2;
      }});
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  /* ====================================
     IMAGE SCROLL REVEAL (subtle fade in)
     ==================================== */
  document.querySelectorAll('.frame-inner img').forEach(function(img) {
    gsap.fromTo(img,
      { opacity: 0.3, scale: 1.02 },
      {
        opacity: 1, scale: 1,
        duration: 0.8,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: img.closest('.film-frame'),
          containerAnimation: gsap.getById && gsap.getById('horizontalScrub'),
          start: 'left 80%',
          toggleActions: 'play none none none',
          horizontal: true
        }
      }
    );
  });

});
