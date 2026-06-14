/* ==========================================================
   HORIZONTAL SCROLL — GSAP ScrollTrigger Filmstrip
   ========================================================== */
function initHorizontalScroll() {
  var track = document.getElementById('filmTrack');
  var wrapper = document.getElementById('filmWrapper');
  if (!track || !wrapper) return;

  var sprocketTop = document.getElementById('sprocketTop');
  var sprocketBottom = document.getElementById('sprocketBottom');

  function getScrollAmount() {
    return track.scrollWidth - window.innerWidth;
  }

  // Pin and scrub
  gsap.to(track, {
    x: function() { return -getScrollAmount(); },
    ease: 'none',
    scrollTrigger: {
      trigger: wrapper,
      start: 'top top',
      end: function() { return '+=' + getScrollAmount(); },
      pin: true,
      scrub: 0.5,
      invalidateOnRefresh: true,
      onEnter: function() {
        if (sprocketTop) sprocketTop.classList.add('visible');
        if (sprocketBottom) sprocketBottom.classList.add('visible');
      },
      onLeave: function() {
        if (sprocketTop) sprocketTop.classList.remove('visible');
        if (sprocketBottom) sprocketBottom.classList.remove('visible');
      },
      onEnterBack: function() {
        if (sprocketTop) sprocketTop.classList.add('visible');
        if (sprocketBottom) sprocketBottom.classList.add('visible');
      },
      onLeaveBack: function() {
        if (sprocketTop) sprocketTop.classList.remove('visible');
        if (sprocketBottom) sprocketBottom.classList.remove('visible');
      }
    }
  });

  // Frame counter on scroll
  var frames = document.querySelectorAll('.film-frame');
  ScrollTrigger.create({
    trigger: wrapper,
    start: 'top top',
    end: function() { return '+=' + getScrollAmount(); },
    onUpdate: function(self) {
      var idx = Math.round(self.progress * (frames.length - 1));
      // Optional: update any counter UI here
    }
  });
}

/* Navigate to a specific frame index */
function scrollToFrame(index) {
  var track = document.getElementById('filmTrack');
  var wrapper = document.getElementById('filmWrapper');
  var frames = document.querySelectorAll('.film-frame');

  if (!track || !wrapper || index >= frames.length) return;

  var frameLeft = frames[index].offsetLeft;
  var targetScroll = wrapper.offsetTop + frameLeft;

  if (window.lenis) {
    window.lenis.scrollTo(targetScroll, { duration: 2 });
  } else {
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  }
}
