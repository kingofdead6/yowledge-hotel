    document.addEventListener('scroll', function() {
        const hero = document.querySelector('.hero');
        const scrollPosition = window.scrollY;
        const zoomFactor = 1 + scrollPosition / 10000; // Adjust the divisor to control zoom speed

        hero.style.backgroundSize = `${zoomFactor * 100}%`; // Adjust zoom level
    });


    document.addEventListener('DOMContentLoaded', function() {
        const faders = document.querySelectorAll('.fade-in-up');
        const options = {
            threshold: 0.1
        };
    
        const appearOnScroll = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            });
        }, options);
    
        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });
    });