# The Quvoh website

Single-page informational site for The Quvoh, a private kubo-style stay in Arayat, Pampanga. Plain HTML, CSS, and one ES module; no build step.

- `index.html` is the page; `assets/styles.css` and `assets/main.js` (menu, lightbox, inquiry draft)
- `npm test` runs the inquiry logic tests (Node 20+)
- Deployed on GitHub Pages (https://trstnsnhn.github.io/quvoh-school/) from `main`; asset paths are relative because the site is served under `/quvoh-school/`
- `PRODUCT.md` and `DESIGN.md` record product facts and the design system

The inquiry form only prepares a message for the guest to copy and send through Facebook Messenger or Instagram. Nothing is sent or stored.

Icons: Phosphor Icons (MIT licence), https://phosphoricons.com. Fonts: Bricolage Grotesque and Figtree (SIL Open Font License) via Fontsource.
