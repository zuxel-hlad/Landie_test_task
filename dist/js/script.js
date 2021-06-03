window.addEventListener('DOMContentLoaded', () => {
  /* hamburger menu */
  const hamburger = document.querySelector('.header-burger'),
    menu = document.querySelector('.header-menu'),
    menuLink = document.querySelectorAll('.header-nav__link');
  btnBuy = document.querySelectorAll('.header__btn-buy');
  logo = document.querySelectorAll('.header__logo');

  const showHamburger = () => {
    menu.classList.add('header-menu_active');
    hamburger.classList.add('header-burger_active');
  };

  const hideHamburger = () => {
    menu.classList.remove('header-menu_active');
    hamburger.classList.remove('header-burger_active');
  };

  hamburger.addEventListener('click', (e) => showHamburger());

  menu.addEventListener('click', (e) => {
    menuLink.forEach((link) => {
      e.target === link || btnBuy || logo || e.target !== link || btnBuy || logo
        ? hideHamburger()
        : false;
    });
  });
});
