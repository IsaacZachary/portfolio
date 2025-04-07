// Enhanced Motion with Terminal Elements
document.addEventListener('DOMContentLoaded', function() {
    // Terminal cursor animation
    const cursor = document.querySelector('.terminal-cursor');
    if (cursor) {
        setInterval(() => {
            cursor.style.visibility = cursor.style.visibility === 'hidden' ? 'visible' : 'hidden';
        }, 500);
    }
    
    // Scroll reveal for terminal elements
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: false
    });
    
    sr.reveal('.terminal-window', { origin: 'left' });
    sr.reveal('.github-card', { origin: 'right' });
    sr.reveal('.details-container', { interval: 200 });
    
    // Enhanced hover effects for terminal buttons
    document.querySelectorAll('.terminal-btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'scale(1.1)';
            btn.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'scale(1)';
            btn.style.boxShadow = 'none';
        });
    });
    
    // Parallax effect for profile section
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const profileSection = document.querySelector('#profile');
        if (profileSection) {
            const profileContent = profileSection.querySelector('.profile-content');
            if (profileContent) {
                profileContent.style.transform = `translateY(${scrollPosition * 0.1}px)`;
            }
        }
    });
});