// Enhanced Theme Switcher with Terminal Style
document.addEventListener('DOMContentLoaded', function() {
  const terminalToggle = document.querySelector('.terminal-toggle');
  const html = document.documentElement;
  
  // Initialize theme from localStorage
  const savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);
  if (terminalToggle) {
    updateThemeToggleText(savedTheme);
  }
  
  if (terminalToggle) {
    terminalToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeToggleText(newTheme);
    });
  }
  
  function updateThemeToggleText(theme) {
      const prompt = terminalToggle.querySelector('.terminal-prompt');
      const command = terminalToggle.querySelector('.terminal-command');
      
      if (theme === 'dark') {
          prompt.textContent = '[dark]';
          command.textContent = '';
      } else {
          prompt.textContent = '[light]';
          command.textContent = '';
      }
  }
  
  // Highlight current page in navigation
  highlightCurrentPage();
  
  // GitHub Stats Fetch
  fetchGitHubStats();
  
  // Typed.js Animation
  if (document.querySelector('.typed-text')) {
      new Typed('.typed-text', {
          strings: ['connect --with=isaac_zachary', 'ping linkedin.com/in/isaaczachary', 'ssh git@github.com/IsaacZachary'],
          typeSpeed: 50,
          backSpeed: 30,
          loop: true,
          showCursor: false
      });
  }
  
  // Interactive roadmap progress
  updateRoadmapProgress();
});

// Fetch GitHub Stats
async function fetchGitHubStats() {
  try {
      const reposEl = document.getElementById('github-repos');
      const starsEl = document.getElementById('github-stars');
      const commitsEl = document.getElementById('github-commits');
      
      if (!reposEl && !starsEl && !commitsEl) return;
      
      const response = await fetch('https://api.github.com/users/IsaacZachary');
      const data = await response.json();
      
      if (reposEl) reposEl.textContent = data.public_repos || '--';
      if (starsEl) starsEl.textContent = '--'; // Need another endpoint for stars
      
      // Fetch commit count (this would require a backend service)
      // For demo purposes, we'll simulate it
      simulateCommitCount();
  } catch (error) {
      console.error('Error fetching GitHub stats:', error);
  }
}

function simulateCommitCount() {
  // In a real implementation, you'd call a backend service that checks your commit history
  const commitsEl = document.getElementById('github-commits');
  if (commitsEl) {
    const commitCount = Math.floor(Math.random() * 500) + 100; // Random number for demo
    commitsEl.textContent = commitCount;
  }
}

// Enhanced Mobile Menu Toggle
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  
  // Toggle body scroll when menu is open
  document.body.style.overflow = menu.classList.contains("open") ? "hidden" : "auto";
}

// Close mobile menu when clicking on links
document.querySelectorAll('.menu-links a').forEach(link => {
  link.addEventListener('click', toggleMenu);
});

// Experience Tab System
document.addEventListener('DOMContentLoaded', function() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  
  tabBtns.forEach(btn => {
      btn.addEventListener('click', function() {
          // Remove active class from all buttons and contents
          document.querySelectorAll('.tab-btn, .tab-content').forEach(el => {
              el.classList.remove('active');
          });
          
          // Add active class to clicked elements
          this.classList.add('active');
          const tabId = this.getAttribute('data-tab');
          document.getElementById(tabId).classList.add('active');
      });
  });
  
  // Activate first tab by default
  if (tabBtns.length > 0) {
      tabBtns[0].click();
  }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
          });
      }
  });
});

// Scroll-to-Top Button
window.addEventListener('scroll', function() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.style.display = window.pageYOffset > 300 ? 'flex' : 'none';
  }
});

const backToTopBtn = document.getElementById('back-to-top');
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Highlight current page in navigation
function highlightCurrentPage() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Interactive roadmap progress
function updateRoadmapProgress() {
  const progressElement = document.querySelector('.progress-value');
  const progressFill = document.querySelector('.progress-fill');
  
  if (progressElement && progressFill) {
    // Calculate based on completed steps
    const totalSteps = document.querySelectorAll('.roadmap-steps .step').length;
    const completedSteps = document.querySelectorAll('.roadmap-steps .step.completed').length;
    const progress = Math.round((completedSteps / totalSteps) * 100);
    
    progressElement.textContent = `${progress}%`;
    progressFill.style.width = `${progress}%`;
  }
}

// Form Submission Handling (Netlify compatible)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });
      
      if (response.ok) {
        submitBtn.textContent = 'Message Sent!';
        this.reset();
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      submitBtn.textContent = 'Error - Try Again';
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 3000);
    }
  });
}

// Set current year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Animation on Scroll
document.addEventListener('DOMContentLoaded', function() {
  const animateOnScroll = (elements, animationClass) => {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add(animationClass);
                  observer.unobserve(entry.target);
              }
          });
      }, { threshold: 0.1 });
      
      elements.forEach(element => observer.observe(element));
  };

  // Animate these elements when they come into view
  animateOnScroll(document.querySelectorAll('.details-container'), 'animate-fade-up');
  animateOnScroll(document.querySelectorAll('.project-card, .certification-card'), 'animate-fade-in');
  animateOnScroll(document.querySelectorAll('.education-card'), 'animate-fade-up');
});

// Project Card Hover Effects
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = card.offsetWidth / 2;
      const centerY = card.offsetHeight / 2;
      const angleX = (y - centerY) / 20;
      const angleY = (centerX - x) / 20;
      
      card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
  });
  
  card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  });
});

// Button Ripple Effects
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      button.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
  });
});