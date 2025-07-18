document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    const body = document.body;

    // --- Navbar Scroll Effect ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Background tone change
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = window.scrollY / scrollHeight;

        const startColor = [33, 33, 33];
        const endColor = [50, 20, 20];

        const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * scrollProgress);
        const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * scrollProgress);
        const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * scrollProgress);

        body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
});
