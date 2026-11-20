// Highlight the section currently in view in the section nav.
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.toc a'));
  var sections = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });
  var bar = document.querySelector('.toc ul');
  var current = null;

  function update() {
    var line = window.innerHeight * 0.3;
    var id = null;
    sections.forEach(function (s) {
      if (s && s.getBoundingClientRect().top <= line) id = s.id;
    });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      id = sections[sections.length - 1].id;
    }
    if (id === current) return;
    current = id;
    links.forEach(function (a) {
      var on = a.getAttribute('href') === '#' + id;
      if (on) {
        a.setAttribute('aria-current', 'true');
        // On the mobile bar, keep the active item visible without moving the page.
        if (bar.scrollWidth > bar.clientWidth) {
          bar.scrollLeft = a.offsetLeft - (bar.clientWidth - a.offsetWidth) / 2;
        }
      } else {
        a.removeAttribute('aria-current');
      }
    });
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () { ticking = false; update(); });
  }, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
