const switchMode = document.querySelector('.menu__switch');
const iconMoon = document.querySelector('.menu__icon');
const bgHero = document.querySelector('.bg-mode');
const bgNav = document.querySelector('.bg-mode-nav');
const searchDarkMode = document.querySelector('.hero__search_tools');
const inputDarkMode = document.querySelector('.hero__search_tools input');
const iconDarkMode = document.querySelector('.hero__search_tools i');

iconDarkMode.classList.add('color-icon');
inputDarkMode.classList.add('color-input');


switchMode.addEventListener('click', () => {

    iconMoon.classList.toggle('icon-dark-mode');
    bgHero.classList.toggle('bg-dark-mode-hero');
    bgNav.classList.toggle('bg-dark-mode-nav_cart_wigets');
    inputDarkMode.classList.toggle('bg-dark-mode-nav_cart_wigets');
    inputDarkMode.classList.toggle('bg-dark-mode-input');
    searchDarkMode.classList.toggle('bg-dark-mode-nav_cart_wigets');
    iconDarkMode.classList.toggle('bg-dark-mode-icon');
    iconDarkMode.classList.toggle('color-icon');
    inputDarkMode.classList.toggle('color-input')
})

