// active navbar


function bindEvents() {
    const openNavBar = document.querySelector('#btn_navbar');
    const closeNavBar = document.querySelector('#close_navbar');
    const blurNavBar = document.querySelector('.blur-navbar');

    openNavBar.addEventListener('click', activeNavBar);
    closeNavBar.addEventListener('click', activeNavBar);
    blurNavBar.addEventListener('click', activeNavBar);
}

function activeNavBar() {
    const blurNavBar = document.querySelector('.blur-navbar');
    const navbar = document.querySelector('.container-navbar');

    blurNavBar.classList.toggle('active');
    navbar.classList.toggle('active');
}

bindEvents();