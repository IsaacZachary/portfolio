/**
 * Isaac Zachary Portfolio - Core JavaScript
 * Focus: Reliability, Performance, and Theme Consistency
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Theme
    initTheme();

    // 2. Navigation Highlighting
    highlightActiveLink();

    // 3. Setup Event Listeners
    setupEventListeners();
});

/**
 * Initialize theme from localStorage or system preference
 */
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const theme = savedTheme || systemTheme;
    
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcons(theme);
}

/**
 * Toggle between light and dark themes
 */
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcons(newTheme);
}

/**
 * Update all theme toggle icons on the page
 */
function updateThemeIcons(theme) {
    const icons = document.querySelectorAll('.theme-toggle i');
    icons.forEach(icon => {
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
}

/**
 * Mobile Menu Toggle
 */
function toggleMenu() {
    const menuLinks = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    
    if (menuLinks && hamburgerIcon) {
        menuLinks.classList.toggle('open');
        hamburgerIcon.classList.toggle('open');
        
        // Prevent background scrolling when menu is open
        document.body.style.overflow = menuLinks.classList.contains('open') ? 'hidden' : '';
    }
}

/**
 * Highlight the active link in the navigation based on current URL
 */
function highlightActiveLink() {
    const path = window.location.pathname;
    const page = path.split("/").pop() || 'index.html';
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === page) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Setup global event listeners
 */
function setupEventListeners() {
    // Theme toggle buttons
    const themeButtons = document.querySelectorAll('.theme-toggle');
    themeButtons.forEach(btn => {
        btn.addEventListener('click', toggleTheme);
    });

    // Close mobile menu on Esc key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const menuLinks = document.querySelector('.menu-links');
            if (menuLinks && menuLinks.classList.contains('open')) {
                toggleMenu();
            }
        }
    });
}

// Ensure toggleTheme is globally available for legacy onclick attributes if needed
window.toggleTheme = toggleTheme;
window.toggleMenu = toggleMenu;