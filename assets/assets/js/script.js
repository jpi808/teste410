const btnToggle = document.getElementById('menu-toggle')
const menuNav = document.getElementById('nav-menu')
btnToggle.addEventListener('click', () => {
    //  alert('clicou')
    menuNav.classList.toggle('show')

});

window.addEventListener('click', (e) => {
    if (!btnToggle.contains(e.target)) {
        menuNav.classList.remove('show')
    }
})