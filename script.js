// Toggle Burger Menu
const burgerMenu = document.getElementById('burgerMenu');
burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active');
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

// Scroll Down Button with smooth scrolling effect
const scrollDown = document.getElementById('scrollDown');
scrollDown.addEventListener('click', function () {
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
});

// Smooth scroll for anchor links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});