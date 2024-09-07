const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
function changeLanguage(lang) {
    if (lang === 'es') {
        window.location.href = 'index-es.html'; 
    }
     if (lang === 'en') {
        window.location.href = 'index.html'; 
    }
    
}
