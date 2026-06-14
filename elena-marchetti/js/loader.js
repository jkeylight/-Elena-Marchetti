/* ==========================================================
   LOADER — Film Leader Countdown 5 → 1
   ========================================================== */
function initLoader(onComplete) {
  var loader = document.getElementById('loader');
  var num = document.getElementById('leaderNum');

  if (!loader || !num) {
    if (onComplete) onComplete();
    return;
  }

  var tl = gsap.timeline({
    onComplete: function() {
      loader.style.display = 'none';
      if (onComplete) onComplete();
    }
  });

  // Countdown 5 → 1
  var numbers = [5, 4, 3, 2, 1];
  numbers.forEach(function(n) {
    tl.call(function() { num.textContent = n; })
      .fromTo(num, { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1, duration: 0.2, ease: 'power2.out' })
      .to({}, { duration: 0.45 })
      .to(num, { opacity: 0, duration: 0.12 });
  });

  // Final flash
  tl.to(loader, { backgroundColor: '#F0E4CF', duration: 0.06 })
    .to({}, { duration: 0.12 })
    .to(loader, { backgroundColor: '#000000', duration: 0.25 })
    .to({}, { duration: 0.3 })
    .to(loader, { opacity: 0, duration: 0.5, ease: 'power2.in' });
}
