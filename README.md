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
- **Design gallery** with 24 MobKazi ad videos (Motion & ads) and 61 print/digital designs, including the MobKazi marketing set,, category filters and a keyboard-friendly lightbox
- **Learning Hub** covering Isaac's Academy courses, the PLP mentoring highlight and a DevOps roadmap with progress (the overall % is calculated from the stages)
- **Documents** page: CV, degree, KCSE/KCPE, certificates and recommendation letters to view or download (IDs and referees' private contacts redacted), stored in `docs/`
- **Floating WhatsApp button** with personal (Kenya), Qatar and MobKazi lines
- **Publications**: the Computer Packages tutorial booklet (85 pages) and the MobKazi Business Profile, readable and downloadable
- **Printable resume** view, plus a downloadable PDF CV
- **Contact form** through Formspree, with WhatsApp, phone and email links
- 3D tilt cards, scroll reveals and `prefers-reduced-motion` support
- No build step and no framework. One `index.html` with inline CSS and JS, plus optimised WebP assets

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
