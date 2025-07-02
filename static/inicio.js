// Animación de puntos de datos
document.addEventListener('DOMContentLoaded', function() {
    // Animación para puntos de datos en hero
    const dataPoints = document.querySelectorAll('.data-point');
    dataPoints.forEach(point => {
        point.style.animationDelay = `${Math.random() * 4}s`;
    });
    
    // Animación para conexiones
    const connections = document.querySelectorAll('.connection');
    connections.forEach((conn, index) => {
        conn.style.animationDelay = `${index * 0.5}s`;
    });
    
    // Efecto hover para tarjetas de características
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    // Efecto de selección para planes de precios
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remover selección previa
            pricingCards.forEach(c => c.classList.remove('selected'));
            
            // Agregar selección actual
            this.classList.add('selected');
        });
    });
    
    // Animación para el holograma
    const hologramLayers = document.querySelectorAll('.hologram-layer');
    hologramLayers.forEach(layer => {
        layer.style.animationDuration = `${15 + Math.random() * 10}s`;
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
            contactForm.reset();
        });
    }
    
    // Efecto parallax para el hero
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
        }
        
        const dataVisualization = document.querySelector('.data-visualization');
        if (dataVisualization) {
            dataVisualization.style.transform = `translateY(${scrollPosition * 0.1}px)`;
        }
    });
});

// En static/inicio.js - Agregar estas funciones
document.addEventListener('DOMContentLoaded', function() {
    // Animar valores de KPI
    const kpiValues = document.querySelectorAll('.kpi-value');
    kpiValues.forEach(value => {
        const target = parseInt(value.getAttribute('data-target'));
        const duration = 2000; // 2 segundos
        const steps = 50;
        const increment = target / steps;
        let current = 0;
        let stepCount = 0;
        
        const timer = setInterval(() => {
            current += increment;
            stepCount++;
            
            if (stepCount >= steps) {
                current = target;
                clearInterval(timer);
            }
            
            // Formatear números grandes
            if (target > 1000) {
                value.textContent = Math.floor(current).toLocaleString();
            } else if (target > 10) {
                value.textContent = Math.floor(current);
            } else {
                value.textContent = current.toFixed(1);
            }
        }, duration / steps);
    });
    
    // Animación de barras del gráfico
    const bars = document.querySelectorAll('.bar');
    setTimeout(() => {
        bars.forEach(bar => {
            const height = bar.style.height;
            bar.style.height = '0%';
            
            setTimeout(() => {
                bar.style.height = height;
            }, 200);
        });
    }, 500);
    
    // Animación de mapa de calor
    const heatmapCells = document.querySelectorAll('.heatmap-cell');
    setInterval(() => {
        heatmapCells.forEach(cell => {
            const newIntensity = Math.random() * 0.7 + 0.3;
            cell.style.setProperty('--intensity', newIntensity);
        });
    }, 3000);
    
    // Actualizar hora en tiempo real
    function updateLiveTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        document.querySelector('.live-time').textContent = timeString;
    }
    
    updateLiveTime();
    setInterval(updateLiveTime, 60000); // Actualizar cada minuto
});