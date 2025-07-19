const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${i * 0.4}s`;
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.3 });

reveals.forEach((el) => observer.observe(el));

var typed = new Typed('#element', {
    strings: ['Web Developer.', 'Video Editor.', 'Music Producer.', 'Film Maker.'],
    typeSpeed: 50,
    loop: true
});