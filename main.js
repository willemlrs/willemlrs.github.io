// Fade sections in on scroll, and mark the current section in the pill nav.
(function () {
  var sections = Array.prototype.slice.call(document.querySelectorAll('main > section'));
  var links = Array.prototype.slice.call(document.querySelectorAll('.pill a'));
  var targets = links.map(function (a) { return a.dataset.target; });

  if (!('IntersectionObserver' in window)) {
    sections.forEach(function (s) { s.classList.add('in'); });
    return;
  }

  // Only sections that start below the fold fade in; visible content is never hidden.
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var below = reduced ? [] : sections.filter(function (s) { return s.getBoundingClientRect().top > window.innerHeight; });
  below.forEach(function (s) { s.classList.add('pre'); });

  var reveal = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); reveal.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  below.forEach(function (s) { reveal.observe(s); });

  // Sections without their own pill entry (Writing, Education, Recognition)
  // keep the last pill entry above them active.
  function setActive(id) {
    links.forEach(function (a) {
      if (a.dataset.target === id) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  }

  function update() {
    var line = window.innerHeight * 0.35;
    var current = null;
    sections.forEach(function (s) {
      if (targets.indexOf(s.id) !== -1 && s.getBoundingClientRect().top <= line) current = s.id;
    });
    var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if (atBottom) current = 'contact';
    setActive(current);
  }

  window.addEventListener('scroll', function () { window.requestAnimationFrame(update); }, { passive: true });
  update();
})();
