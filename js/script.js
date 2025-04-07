// Enhanced Theme Switcher with Terminal Style
document.addEventListener('DOMContentLoaded', function() {
  const terminalToggle = document.querySelector('.terminal-toggle');
  const html = document.documentElement;
  
  // Initialize theme from localStorage
  const savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);
  updateThemeToggleText(savedTheme);
  
  terminalToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeToggleText(newTheme);
  });
  
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
});

// Fetch GitHub Stats
async function fetchGitHubStats() {
  try {
      const response = await fetch('https://api.github.com/users/IsaacZachary');
      const data = await response.json();
      
      document.getElementById('github-repos').textContent = data.public_repos || '--';
      document.getElementById('github-stars').textContent = '--'; // Need another endpoint for stars
      
      // Fetch commit count (this would require a backend service)
      // For demo purposes, we'll simulate it
      simulateCommitCount();
  } catch (error) {
      console.error('Error fetching GitHub stats:', error);
  }
}

function simulateCommitCount() {
  // In a real implementation, you'd call a backend service that checks your commit history
  const commitCount = Math.floor(Math.random() * 500) + 100; // Random number for demo
  document.getElementById('github-commits').textContent = commitCount;
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
  backToTopBtn.style.display = window.pageYOffset > 300 ? 'flex' : 'none';
});

document.getElementById('back-to-top').addEventListener('click', function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});

// Form Submission Handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const formData = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          message: document.getElementById('message').value
      };
      
      // Here you would typically send the data to a server
      console.log('Form submitted:', formData);
      
      // Show success message
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
  });
}

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

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