/* ==========================================================
   ARCHIVE — Hover background reveal
   ========================================================== */
function initArchive() {
  var bgImg = document.getElementById('archiveBgImg');
  var bgContainer = document.querySelector('.archive-bg');
  var rows = document.querySelectorAll('.archive-row');

  if (!bgImg || !bgContainer || rows.length === 0) return;

  rows.forEach(function(row) {
    row.addEventListener('mouseenter', function() {
      var src = row.getAttribute('data-img');
      if (src) {
        bgImg.src = src;
        gsap.to(bgContainer, { opacity: 1, duration: 0.8, ease: 'power2.inOut' });
      }
    });

    row.addEventListener('mouseleave', function() {
      gsap.to(bgContainer, { opacity: 0, duration: 0.8, ease: 'power2.inOut' });
    });

    // Mobile: tap to toggle
    row.addEventListener('click', function(e) {
      e.stopPropagation();
      var src = row.getAttribute('data-img');
      if (!src) return;

      if (bgContainer.style.opacity === '1' || bgContainer._activeRow === row) {
        gsap.to(bgContainer, { opacity: 0, duration: 0.6 });
        bgContainer._activeRow = null;
      } else {
        bgImg.src = src;
        gsap.to(bgContainer, { opacity: 1, duration: 0.6 });
        bgContainer._activeRow = row;
      }
    });
  });

  // Close on outside tap (mobile)
  document.addEventListener('click', function() {
    if (bgContainer._activeRow) {
      gsap.to(bgContainer, { opacity: 0, duration: 0.6 });
      bgContainer._activeRow = null;
    }
  });
}
