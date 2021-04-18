const menu = document.getElementById("nav-menu")
const btnMenu = document.getElementById("btn-menu");

btnMenu.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active')
        btnMenu.src = "/img/menu.png"
    } else {
        menu.classList.add('active')
        btnMenu.src = "/img/close.png"
    }
});