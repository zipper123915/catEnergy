import './router';

const nav = document.querySelector('.header__nav');

nav.classList.remove('header__nav--open');

const burgerMenu = document.querySelector('.header__burger-menu');

burgerMenu.classList.remove('header__burger-menu--open');

burgerMenu.addEventListener('click', event => {
    const target = event.currentTarget;
    
    target.classList.toggle('header__burger-menu--open');
    nav.classList.toggle('header__nav--open');
});
