<p align="center"><img src="assets/v2/brand/iz-lockup.webp" alt="Isaac Zachary" width="420"></p>

<p align="center">
  <b>One engineer. The whole mob.</b><br>
  Personal portfolio of <b>Isaac Zachary</b>: software engineer, DevOps practitioner, network & security systems specialist, and founder & lead engineer of <a href="https://mobkazi.com">MobKazi</a>.
</p>

<p align="center">
  <a href="https://izach.netlify.app">izach.netlify.app</a> ·
  <a href="https://linkedin.com/in/isaaczachary">LinkedIn</a> ·
  <a href="https://github.com/IsaacZachary">GitHub</a> ·
  <a href="pdf/Isaac_Zachary_CV.pdf">CV (PDF)</a>
</p>

---

## v2: what's new

The site is a fast, single-file app with a corporate light theme by default and a dark mode toggle.

- **Sidebar navigation** with hash routes for every section: `#home`, `#about`, `#inspiration`, `#experience`, `#projects`, `#mobkazi`, `#designs`, `#learning`, `#writing`, `#resume`, `#contact`
- **Light / dark theme**, remembered per visitor
- **3D hero:** a perspective stage that combines the MobKazi workspace photo, a live typing terminal and floating status cards, with mouse parallax
- **Animated CI/CD pipeline** showing commit → build → test → scan → deploy → monitor
- **Command palette:** press `⌘K`, `Ctrl+K` or `/`. Try `projects`, `theme`, `cv` or `sudo hire isaac`
- **Keyboard shortcuts:** `g` then `h`/`a`/`i`/`e`/`p`/`m`/`d`/`l`/`w`/`r`/`c` jumps to a page
- **Life & Work** photo journal (building, in the field, events, travel, portraits) with filters and lightbox
- **Inspiration** page: Newton, Tesla, Garvey, Musk, Zuckerberg, Jobs, Marcus Aurelius and Kafka, with sourced quotes, short stories and why each matters, plus a rotating "daily fuel" quote on the home page
- **Design gallery** with 32 MobKazi ad videos (Motion & ads) and 101 print/digital designs, including the MobKazi marketing set, with category filters
- **Learning Hub** covering Isaac's Academy courses, the PLP mentoring highlight and a DevOps roadmap with progress (the overall % is calculated from the stages)
- **Documents** page: CV, degree, KCSE/KCPE, certificates and recommendation letters to view or download (IDs and referees' private contacts redacted), stored in `docs/`
- **Floating WhatsApp button** with personal (Kenya), Qatar and MobKazi lines
- **Publications**: the Computer Packages tutorial booklet (85 pages) and the MobKazi Business Profile, readable and downloadable
- **Printable resume** view, plus a downloadable PDF CV
- **Contact form** through Formspree, with WhatsApp, phone and email links
- 3D tilt cards, scroll reveals and `prefers-reduced-motion` support
- No build step and no framework. One `index.html` with inline CSS and JS, plus optimised WebP assets

## Visitor analytics

Visits are counted with [GoatCounter](https://www.goatcounter.com) (free, open source, no cookies, no consent banner needed). Every page of the single-page app is counted separately (`/home`, `/writing`, `/article/<slug>`, `/academy/<course>`…).

- Dashboard (visitors, countries, referrers, devices, top pages): `https://izach.goatcounter.com`
- The site code is `GOAT_CODE` in `index.html`. Tracking is skipped on localhost.
- The public "visits" counter in the sidebar and footer appears once **Settings → Allow adding visitor counts on your website** is turned on in GoatCounter.
- The **"visitors from" marquee** on Home (countries with flags) is served by the Netlify Function `netlify/functions/visitors.mjs` at `/api/visitors`, which reads GoatCounter's API with the `GOATCOUNTER_TOKEN` environment variable (set in Netlify → Site configuration → Environment variables). The token never reaches the browser; responses are cached for 10 minutes.

## Writing & Academy

- **Articles** open inside the site at `#article/<slug>` with a reading-progress bar, table of contents, copy-code buttons, share/print and previous/next. Bodies live in `assets/v2/content-articles.js`.
- **Code playground** on the Writing page: edit a Dockerfile, Compose file, Nginx config, GitHub Actions workflow or Python health check and run a simulated deploy.
- **Isaac's Academy** at `#academy/<course>/<unit>`: the free 10-unit Computer Packages track (based on the 85-page booklet) and the 8-module M-PESA coffee-kiosk workshop, each unit with objectives, lesson, hands-on lab and a quick check. Progress is saved in the browser (`localStorage`). Content lives in `assets/v2/content-academy.js`.
- The old standalone `learning.html` and `writing.html` now redirect into the site; the originals are kept in `legacy/`.

## Media & document viewer

Every image, ad film, PDF and certificate opens in one in-page viewer instead of downloading:

- **Images & videos**: full-screen preview with prev/next (arrow keys, swipe on mobile), plus **Download**, **Share** (native share sheet with the file on mobile, copy-link fallback), **Print** and open-in-new-tab
- **PDFs** (CV, degree, letters, certificates, booklet, business profile): rendered inline with pdf.js (zoom in/out, all pages), falling back to the browser's PDF viewer; Print / Download / Share from the toolbar
- **Online certificates** (Coursera, Google, LinkedIn…): open as a verification card linking to the issuer's page
- Shimmer placeholders, lazy/async image decoding, preloading of neighbouring items, and long-lived cache headers (`_headers`) so media appears near-instantly on repeat visits; PDFs are served `Content-Disposition: inline`

## Walkthrough video

A 90-second tour of every page on desktop and mobile, in light and dark mode: [`assets/videos/portfolio-v2-walkthrough.mp4`](assets/videos/portfolio-v2-walkthrough.mp4)

## Structure

```
portfolio/
├── index.html                # the whole v2 site (all views, styles, scripts)
├── learning.html             # Isaac's Academy LMS (linked from #learning)
├── writing.html              # full articles + code playground (linked from #writing)
├── about.html, projects.html, experience.html, contact.html,
│   creative-designs.html, resume.html   # redirects to the matching #view
├── favicon.ico
├── assets/
│   ├── v2/brand/             # >iz logo set, product logos, favicons, og-image
│   ├── v2/projects/          # optimised project screenshots & photos
│   ├── v2/designs/           # gallery images (-sm = thumbnail)
│   └── …                     # original v1 assets (kept for learning/writing pages)
├── pdf/Isaac_Zachary_CV.pdf  # current CV
├── legacy/                   # archived v1 pages
└── docker/                   # Docker / nginx setup
```

## Run locally

```bash
git clone https://github.com/IsaacZachary/portfolio.git
cd portfolio
python3 -m http.server 8080   # then open http://localhost:8080
```

You can also just open `index.html` in a browser.

## Deploy

Netlify deploys automatically on every push to `main` (publish directory `/`, no build command).
Docker is still available. See the `docker/` folder.

## Updating content

All content lives in the data arrays at the top of the `<script>` in `index.html`:

| What | Array |
|---|---|
| Projects (+ filter category, screenshot, links) | `projects` |
| Experience timeline & resume entries | `jobs` |
| Education & certifications | `certs` |
| Skills | `skills` |
| Recommendations | `quotes` |
| Client logos | `clients` |
| Documents (PDFs in `docs/`, thumbnails in `docs/thumbs/`) | `docs` |
| Design gallery | `designs` (images in `assets/v2/designs/`) |
| Life & Work photos | `life` (images in `assets/v2/life/`) |
| Articles | `articles` |
| Inspiration (quotes, stories) | `icons` |
| DevOps roadmap | `road` |

Brand colours are CSS variables at the top of the stylesheet (`--teal`, `--blue`, `--amber`), with a `[data-theme="dark"]` block for dark mode.

## Brand

The `>iz` mark combines a terminal prompt with Isaac's initials, in the teal → blue → amber gradient.

| Light | Dark | Glyph |
|---|---|---|
| <img src="assets/v2/brand/iz-light.webp" width="72"> | <img src="assets/v2/brand/iz-dark.webp" width="72"> | <img src="assets/v2/brand/iz-glyph.webp" width="72"> |

## Contact

- Email: izachdev@gmail.com · mobkazitechnologies@gmail.com · dev.mobkazi@gmail.com · isaaczachary18@gmail.com
- WhatsApp: +254 759 325 915 (Kenya) · +974 3315 3663 (Qatar) · +254 101 029 951 (MobKazi support)
- LinkedIn: [in/isaaczachary](https://linkedin.com/in/isaaczachary)

## License

MIT. © Isaac Zachary
