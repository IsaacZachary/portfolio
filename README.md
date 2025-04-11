# Isaac Zachary - Developer Portfolio 👨‍💻

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![GitHub Stars](https://img.shields.io/github/stars/IsaacZachary/portfolio?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)
![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=for-the-badge)

A modern, interactive developer portfolio showcasing my skills, projects, and professional journey. Built with a terminal-inspired UI and responsive design.

🔗 **Live Demo**: [https://isaaczachary.netlify.app/](https://izach.netlify.app/)

![Portfolio Screenshot](./assets/portfolio-screenshot.png)

## ✨ Features

- **Terminal-inspired UI** with interactive command-line elements
- **Dark/Light mode toggle** with system preference detection
- **Responsive design** that works on all devices
- **Animated elements** with ScrollReveal and custom animations
- **GitHub integration** displaying real-time stats
- **Project showcase** with hover effects and details
- **Contact form** with validation
- **SEO optimized** with proper meta tags

## 🚀 Quick Start

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

## 🛠️ Project Structure

```
portfolio/
│
├── 📁 assets/                  # Static assets (images, icons)
│   ├── profile-pic.png        # Profile picture
│   ├── about-pic.png          # About section image
│   └── project-*.png          # Project screenshots
│
├── 📁 css/                     # Stylesheets
│   ├── all.min.css            # Font Awesome icons
│   ├── style.css              # Main styles
│   └── mediaqueries.css       # Responsive styles
│
├── 📁 js/                      # JavaScript files
│   ├── motion.js              # Animations and scroll effects
│   └── script.js              # Main functionality
│
├── 📁 webfonts/                # Font files
├── index.html                 # Main HTML file
└── README.md                  # Project documentation
```

## 🎨 Design System

### UI Components
- **Terminal Windows**: Interactive command-line interfaces throughout the site
- **Skill Tags**: Color-coded badges for technologies
- **Timeline**: Visual representation of experience and education
- **Project Cards**: Interactive cards with hover effects

### Color Palette
| Color          | Hex       | Usage                |
|----------------|-----------|----------------------|
| Primary        | `#2563eb` | Buttons, links       |
| Terminal Green | `#50fa7b` | Success, commands    |
| Terminal Red   | `#ff5555` | Errors, warnings     |
| Terminal Purple| `#bd93f9` | Accents, highlights  |

## 🖥️ Tech Stack

**Frontend:**
- HTML5, CSS3, JavaScript
- Font Awesome for icons
- ScrollReveal for animations
- Typed.js for terminal typing effects

**Tools:**
- VS Code
- Git & GitHub
- Netlify for deployment

## 📸 Screenshots

### Light Mode
![Light Mode Screenshot](./assets/light-mode-screenshot.png)

### Dark Mode
![Dark Mode Screenshot](./assets/dark-mode-screenshot.png)

### Mobile View
![Mobile Screenshot](./assets/mobile-screenshot.png)

## 🎥 Demo Video

[![Portfolio Demo Video](https://img.youtube.com/vi/YOUR_VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID)

## 🌟 Highlights

1. **Interactive Terminal UI**
   - Realistic command-line interface elements
   - Animated cursor and typing effects
   - Theme switching via terminal command

2. **Dynamic GitHub Integration**
   ```javascript
   // Fetches GitHub stats from API
   async function fetchGitHubStats() {
     const response = await fetch('https://api.github.com/users/IsaacZachary');
     const data = await response.json();
     document.getElementById('github-repos').textContent = data.public_repos;
   }
   ```

3. **Responsive Design**
   - Mobile-first approach
   - Flexible grid layouts
   - Adaptive typography

## 🛠️ Development

### Built With
- [Font Awesome](https://fontawesome.com/) - Icon library
- [ScrollReveal](https://scrollrevealjs.org/) - Scroll animations
- [Typed.js](https://github.com/mattboldt/typed.js/) - Typing animations

### Custom Components
1. **Terminal Window Component**
   ```html
   <div class="terminal-window">
     <div class="terminal-header">
       <div class="terminal-buttons">
         <span class="terminal-btn red"></span>
         <span class="terminal-btn yellow"></span>
         <span class="terminal-btn green"></span>
       </div>
       <div class="terminal-title">isaac_zachary --profile</div>
     </div>
     <div class="terminal-body">
       <!-- Content here -->
     </div>
   </div>
   ```

2. **Project Card Component**
   ```html
   <div class="project-card">
     <div class="project-img-container">
       <img src="./assets/project-1.png" class="project-img">
       <div class="project-overlay">
         <h3>Project Title</h3>
         <div class="project-links">
           <a href="#"><i class="fab fa-github"></i></a>
           <a href="#"><i class="fas fa-external-link-alt"></i></a>
         </div>
       </div>
     </div>
   </div>
   ```

## 🚀 Deployment

1. **Netlify**
   - Connect your GitHub repository
   - Set build command: `npm run build` (if applicable)
   - Set publish directory: `/` (root)
   - Enable automatic deploys

2. **GitHub Pages**
   ```bash
   git checkout -b gh-pages
   git push origin gh-pages
   ```
   Then enable in repository settings.

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please make sure to update tests as appropriate.

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📬 Contact

Isaac Zachary - [isaaczachary18@gmail.com](mailto:isaaczachary18@gmail.com)

Project Link: [https://github.com/IsaacZachary/portfolio](https://github.com/IsaacZachary/portfolio)

## 🙏 Acknowledgments

- [Font Awesome](https://fontawesome.com/) for icons
- [ScrollReveal](https://scrollrevealjs.org/) for animations
- [Shields.io](https://shields.io/) for badges
- Inspiration from various terminal-style portfolios
```
