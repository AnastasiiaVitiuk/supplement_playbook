const about = document.querySelector('.about');
const navMenu = document.querySelector('.nav-menu');
about.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});