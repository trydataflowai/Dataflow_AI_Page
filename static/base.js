// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
// En tu archivo JavaScript principal (ej. static/js/main.js)
window.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

  // Solo aplicar efecto en escritorio
if (window.innerWidth >= 992) {
    window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    });
    }

  // Actualizar al cambiar tamaño de ventana
    window.addEventListener('resize', () => {
    if (window.innerWidth < 992) {
        navbar.classList.remove('scrolled');
    }
});
});
// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
        }
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
    }
});

// Floating particles effect
document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.createElement('div');
    particlesContainer.classList.add('particles-container');
    document.body.appendChild(particlesContainer);
    
    // Create particles
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 5 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const animationDuration = Math.random() * 15 + 5;
        const animationDelay = Math.random() * 5;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDuration = `${animationDuration}s`;
        particle.style.animationDelay = `${animationDelay}s`;
        particle.style.backgroundColor = i % 3 === 0 ? 'var(--accent)' : i % 3 === 1 ? 'var(--primary)' : 'var(--secondary)';
        
        particlesContainer.appendChild(particle);
    }
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        navbar.style.padding = '5px 0'; /* Reducir padding al hacer scroll */
        navbar.style.backgroundColor = 'rgba(15, 12, 41, 0.98)';
        navbar.classList.add('scrolled'); // Agrega clase para el logo reducido
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        navbar.style.padding = '10px 0'; /* Padding normal */
        navbar.style.backgroundColor = 'rgba(15, 12, 41, 0.9)';
        navbar.classList.remove('scrolled'); // Remueve clase para tamaño normal
    }
});