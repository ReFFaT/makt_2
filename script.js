
let header__burger = document.querySelector('.navigation__burger');
let header_menu = document.querySelector('.navigation__menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.navigation__ul');

header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}

header__list.onclick = function () {
    header__list.classList.remove('active');
}
