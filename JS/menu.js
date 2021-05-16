const mainContainer = document.querySelector('main');
const menuBtn = document.querySelector('.menu-btn');
const hamBtn = document.querySelector('.burger-btn');
const navigation = document.querySelector('.navigation');
const navMenu = document.querySelector('.nav-menu');
const items = document.querySelectorAll('.nav-menu__item');

function toggleMenu() {
  mainContainer.classList.toggle('hideMainContent')
  hamBtn.classList.toggle('open');
  navigation.classList.toggle('open');
  navMenu.classList.toggle('open');
  items.forEach((item) => item.classList.toggle('open'));
}

menuBtn.addEventListener('click', toggleMenu);