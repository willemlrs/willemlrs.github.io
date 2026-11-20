# willemlrs.github.io

Personal site. Static HTML/CSS, no build step: `index.html`, `style.css`, `main.js`.
Served by GitHub Pages from `main` (root).

## Update the CV
Replace `assets/Willem_Larras_CV.pdf` and push.

## Add a photo
Put `assets/portrait.jpg` (square) in place and uncomment the `<img class="portrait">`
line at the top of the hero in `index.html`.

## Publish a note (Writing)
1. Copy `writing/_template.md` to `writing/<slug>.md` and write in Markdown.
   GitHub Pages renders it with `_layouts/note.html` at `/writing/<slug>.html`.
2. Add a line to the `<ol class="notes">` list in `index.html` (newest first):
   `<li><a href="writing/<slug>.html">Title</a> <time datetime="2026-12-01">Dec 2026</time></li>`
   The "Notes coming soon" line hides itself once the list is not empty.

## Preview locally
`python3 -m http.server 8000` then open http://localhost:8000
(Markdown notes only render once pushed, since Jekyll runs on GitHub.)

## Share image
`assets/og.svg` is the source of `assets/og.png` (1200×630).
