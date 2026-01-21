# Isaac Zachary - Developer Portfolio 👨‍💻

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![GitHub Stars](https://img.shields.io/github/stars/IsaacZachary/portfolio?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

A professional, multi-page developer portfolio showcasing DevOps skills, projects, and professional journey. Built with a GitHub-inspired Engineering UI, Docker support, and responsive design.

🔗 **Live Demo**: [My Website](https://isaaczachary.github.io)

## ✨ Features

- **GitHub-inspired Engineering UI** for high technical credibility
- **Multi-page structure** (Home, About, Projects, Experience, Writing, Contact)
- **Dark/Light mode toggle** with persistent theme storage
- **Responsive design** optimized for mobile, tablet, and desktop
- **Interactive code playground** with CodeMirror editor
- **Docker support** for easy deployment
- **GitHub integration** displaying real-time stats
- **Project showcase** with detailed descriptions and tech stacks
- **Contact form** with Netlify integration
- **SEO optimized** with proper meta tags

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/IsaacZachary/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   ```bash
   # For Linux/macOS
   open index.html

   # For Windows
   start index.html
   ```

### Docker Deployment

See [README-docker.md](./README-docker.md) for detailed Docker instructions.

**Quick Docker commands:**
```bash
# Production
docker-compose up -d --build

# Development (with live reload)
docker-compose -f docker-compose.dev.yml up -d

# Using deployment script
./deploy.sh prod
```

## 🛠️ Project Structure

```
portfolio/
│
├── 📁 assets/                  # Static assets (images, icons)
│   ├── profile-pic.png        # Profile picture
│   ├── about-pic.png          # About section image
│   └── project-*.png          # Project screenshots
│
├── 📁 components/              # Shared components
│   ├── navigation.html         # Navigation component
│   └── footer.html            # Footer component
│
├── 📁 css/                     # Stylesheets
│   ├── style.css              # Main styles
│   └── mediaqueries.css       # Responsive styles
│
├── 📁 js/                      # JavaScript files
│   ├── data.js                # Portfolio data
│   ├── motion.js              # Animations and scroll effects
│   ├── script.js              # Main functionality
│   └── playground.js          # Code playground logic
│
├── 📁 nginx/                   # Nginx configuration
│   └── nginx.conf             # Production nginx config
│
├── 📁 pdf/                     # Resume/CV files
│
├── 📄 index.html              # Home/Landing page
├── 📄 about.html              # About & Journey page
├── 📄 projects.html           # Projects & Tech Stack page
├── 📄 experience.html         # Experience & Skills page
├── 📄 writing.html            # Articles & Roadmap page
├── 📄 contact.html            # Contact & Resume page
│
├── 🐳 Dockerfile               # Production Docker image
├── 🐳 docker-compose.yml      # Production compose file
├── 🐳 docker-compose.dev.yml  # Development compose file
├── 🐳 .dockerignore           # Docker ignore file
├── 🚀 deploy.sh               # Deployment script
│
├── 📖 README.md               # This file
└── 📖 README-docker.md        # Docker documentation
```

## 📄 Pages Overview

### Home (`index.html`)
- Hero section with whoami cards
- Floating tech stack logos
- Featured projects showcase
- Currently learning section

### About (`about.html`)
- Professional journey
- Education timeline
- Background and transition story

### Projects (`projects.html`)
- Detailed project descriptions
- Tech stack breakdown
- Key learnings from each project
- Links to GitHub repositories

### Experience (`experience.html`)
- Professional timeline
- Skills categorized by experience level
- Technology badges

### Writing (`writing.html`)
- Technical articles
- Interactive code playground
- DevOps learning roadmap
- Learning resources

### Contact (`contact.html`)
- Contact form (Netlify)
- Social links
- Resume download

## 🎨 Design System

### UI Components
- **GitHub-style Cards**: Organized, bento-box layouts for project details
- **Status Indicators**: Live "Available for opportunities" indicators
- **Skill Badges**: Royal blue technical tags (GitHub aesthetic)
- **Timeline**: Horizontal and vertical technical evolution timelines
- **Project Cards**: High-impact cards with tech-stack overlays
- **Code Playground**: Professional editor with JetBrains Mono integration

### Color Palette (GitHub Option B)
| Color          | Hex       | Usage                |
|----------------|-----------|----------------------|
| GitHub Blue    | `#58a6ff` | Accents (Dark Mode)  |
| GitHub Blue    | `#0969da` | Accents (Light Mode) |
| Success Green  | `#2ea44f` | Status, commands     |
| Danger Red     | `#da3633` | Errors, warnings     |

## 🖥️ Tech Stack

**Frontend:**
- HTML5, CSS3, Vanilla JavaScript
- Font Awesome for icons
- CodeMirror for code playground
- ScrollReveal for animations
- Typed.js for terminal typing effects

**DevOps:**
- Docker & Docker Compose
- Nginx for static hosting
- Multi-stage builds
- Health checks

**Tools:**
- VS Code
- Git & GitHub
- Netlify/GitHub Pages for deployment

## 🌟 Featured Projects

### ISP Management System
Containerized multi-tenant ERP with Docker, RADIUS concepts, and time-based accounting.

**Tech:** Docker, Django REST, PostgreSQL, Redis, Nginx, Cloudflare

### Smart AI Product Recommender
Terminal-style UX with multilingual queries and AI-assisted recommendations.

**Tech:** FastAPI, React, OpenAI API, Python, Docker

### TechCareAfrica Helpdesk
Django-based support workflow with ticketing, user roles, and dashboards.

**Tech:** Python, Django, Bootstrap, PostgreSQL

### Drowsy Driver Detection
Real-time webcam inference with alert, microsleep, and yawning detection.

**Tech:** Python, TensorFlow, OpenCV, Computer Vision

**GitHub:** [IsaacZachary/DrowsyDriverDetection](https://github.com/IsaacZachary/DrowsyDriverDetection)

### Coffee Kiosk
E-commerce platform with M-Pesa integration and Dockerized deployment.

**Tech:** React, TypeScript, Node.js, Docker, M-Pesa API, Supabase

**GitHub:** [IsaacZachary/CoffeeKiosk](https://github.com/IsaacZachary/CoffeeKiosk)

**Live Demo:** [coffee-kiosk-frontend.onrender.com](https://coffee-kiosk-frontend.onrender.com)

## 🚀 Deployment

### Option 1: Docker (Recommended)

See [README-docker.md](./README-docker.md) for complete Docker deployment guide.

### Option 2: Static Hosting

**Netlify:**
1. Connect GitHub repository
2. Set publish directory: `/` (root)
3. Enable automatic deploys

**GitHub Pages:**
```bash
git checkout -b gh-pages
git push origin gh-pages
```
Then enable in repository settings.

## 📝 Updating Content

### Update Projects
Edit `js/data.js` and `projects.html`

### Update Experience
Edit `experience.html` and `js/data.js`

### Update Images
Replace files in `assets/` directory and update references in HTML

### Update Articles
Edit `writing.html` - articles are embedded in the page

## 🛠️ Development

### Built With
- [Font Awesome](https://fontawesome.com/) - Icon library
- [CodeMirror](https://codemirror.net/) - Code editor
- [ScrollReveal](https://scrollrevealjs.org/) - Scroll animations
- [Typed.js](https://github.com/mattboldt/typed.js/) - Typing animations

### Custom Features
1. **Interactive Code Playground** - Edit Docker, Nginx, Python examples with JetBrains Mono
2. **GitHub UI Components** - Consistent engineering-first aesthetic
3. **Theme Toggle** - Persistent dark/light mode
4. **Responsive Navigation** - Mobile hamburger menu

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📬 Contact

Isaac Zachary - [isaaczachary18@gmail.com](mailto:isaaczachary18@gmail.com)

- **LinkedIn:** [linkedin.com/in/isaaczachary](https://linkedin.com/in/isaaczachary)
- **GitHub:** [github.com/IsaacZachary](https://github.com/IsaacZachary)
- **Portfolio:** [isaaczachary.github.io](https://isaaczachary.github.io)

## 🙏 Acknowledgments

- [Font Awesome](https://fontawesome.com/) for icons
- [CodeMirror](https://codemirror.net/) for code editor
- [ScrollReveal](https://scrollrevealjs.org/) for animations
- [Shields.io](https://shields.io/) for badges
- Inspiration from terminal-style portfolios

---

**Status:** ✅ Production Ready | **Last Updated:** January 2025
