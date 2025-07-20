// Script propre pour le dashboard OSOM
document.addEventListener('DOMContentLoaded', function() {
    console.log('Dashboard OSOM loading...');

    // Counter Animations
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const start = performance.now();
        
        function updateCounter(currentTime) {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(target * easeOutQuart);
            
            element.textContent = current.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }
        
        requestAnimationFrame(updateCounter);
    }
    
    // Intersection Observer pour déclencher les animations
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.metric-number[data-target]');
                counters.forEach((counter, index) => {
                    setTimeout(() => {
                        animateCounter(counter);
                    }, index * 200);
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observer le hero section
    const heroSection = document.querySelector('.osom-header');
    if (heroSection) {
        observer.observe(heroSection);
    }
    
    // Système de tooltips interactifs
    function createTooltip() {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        document.body.appendChild(tooltip);
        return tooltip;
    }
    
    const tooltip = createTooltip();
    
    // Gestion des éléments cliquables
    document.querySelectorAll('.clickable').forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            const tooltipText = e.target.getAttribute('data-tooltip');
            if (tooltipText) {
                tooltip.innerHTML = tooltipText;
                tooltip.classList.add('show');
                
                // Positionnement du tooltip
                const rect = e.target.getBoundingClientRect();
                tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
                tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
            }
        });
        
        element.addEventListener('mouseleave', () => {
            tooltip.classList.remove('show');
        });
    });

    console.log('Dashboard OSOM loaded successfully!');
});