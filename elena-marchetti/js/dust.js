/* ==========================================================
   DUST — Floating film particles
   ========================================================== */
function initDust() {
  var container = document.getElementById('dust');
  if (!container) return;

  var count = 25;
  for (var i = 0; i < count; i++) {
    var p = document.createElement('div');
    p.className = 'dust-particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.top = Math.random() * 100 + '%';
    p.style.width = (1 + Math.random() * 2) + 'px';
    p.style.height = p.style.width;
    p.style.opacity = 0;
    p.style.animationDuration = (10 + Math.random() * 15) + 's';
    p.style.animationDelay = Math.random() * 8 + 's';
    container.appendChild(p);
  }
}
