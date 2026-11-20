# willemlrs.github.io

Personal site. Static HTML/CSS, no build step: `index.html`, `style.css`, `main.js`.
Served by GitHub Pages from `main` (root).

## Update the CV
Replace `assets/Willem_Larras_CV.pdf` and push.

## Add a photo
Put `assets/portrait.jpg` (square) in place and uncomment the `<img class="portrait">`
line at the top of `.intro` in `index.html`.

## Publish a note (Writing)
The Writing section is removed from the home page until there is a first note.
1. Copy `writing/_template.md` to `writing/<slug>.md` and write in Markdown.
   GitHub Pages renders it with `_layouts/note.html` at `/writing/<slug>.html`.
2. Add a "Writing" section in `index.html` (a `.rows` list like Projects) and a
   matching entry in the `.toc` nav.

## Preview locally
`python3 -m http.server 8000` then open http://localhost:8000
(Markdown notes only render once pushed, since Jekyll runs on GitHub.)

## Share image
`assets/og.svg` is the source of `assets/og.png` (1200×630).
