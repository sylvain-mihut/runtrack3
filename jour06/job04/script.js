const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    links.classList.toggle('hidden-links');
});