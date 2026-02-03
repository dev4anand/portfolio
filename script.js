// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Observe all elements with the 'hidden' class
document.querySelectorAll('.hidden').forEach((el) => {
    observer.observe(el);
});

// Dynamic Greeting in Console
console.log("%cHello! Welcome to Anand Dev's Portfolio.", "color: #a855f7; font-size: 16px; font-weight: bold;");

// Space Theme Animations
function createStars() {
    const container = document.getElementById('space-background');
    if (!container) return;

    // Create static stars
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.opacity = Math.random();
        // Vary size slightly
        const size = Math.random() * 2 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';

        container.appendChild(star);
    }
}

function createShootingStar() {
    const container = document.getElementById('space-background');
    if (!container) return;

    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';

    // Random start position
    shootingStar.style.left = Math.random() * 100 + '%';
    shootingStar.style.top = Math.random() * 50 + '%'; // Mostly top half

    // Random duration
    const duration = Math.random() * 2 + 2; // 2-4s
    shootingStar.style.animationDuration = duration + 's';

    container.appendChild(shootingStar);

    // Remove after animation
    setTimeout(() => {
        shootingStar.remove();
    }, duration * 1000);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    // Spawn a shooting star every 2-5 seconds
    setInterval(createShootingStar, 3000);
});
