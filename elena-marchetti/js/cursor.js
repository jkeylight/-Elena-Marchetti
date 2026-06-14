/* ==========================================================
   CURSOR — Ivory dot + ring, lerp 0.08
   ========================================================== */
function initCursor() {
  if (window.innerWidth <= 1000) return;

  var dot = document.querySelector('.cursor-dot');
  var ring = document.querySelector('.cursor-ring');
  var mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', function(e) {
    mx = e.clientX;
    my = e.clientY;
    gsap.set(dot, { x: mx - 4, y: my - 4 });
  });

  function moveRing() {
    rx += (mx - rx) * 0.08;
    ry += (my - ry) * 0.08;
    gsap.set(ring, { x: rx - 16, y: ry - 16 });
    requestAnimationFrame(moveRing);
  }
  moveRing();

  var interactives = document.querySelectorAll(
    'a, .menu-trigger, .menu-close, .menu-item, .archive-row, .film-frame'
  );
  interactives.forEach(function(el) {
    el.addEventListener('mouseenter', function() { ring.classList.add('grow'); });
    el.addEventListener('mouseleave', function() { ring.classList.remove('grow'); });
  });
}
