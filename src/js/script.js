window.addEventListener('DOMContentLoaded', () => {
  /* hamburger menu */
  const hamburger = document.querySelector('.header-burger'),
    menu = document.querySelector('.header-menu'),
    menuLink = document.querySelectorAll('.header-nav__link');
  btnBuy = document.querySelectorAll('.header__btn-buy');
  logo = document.querySelectorAll('.header__logo');

  const showHamburger = () => {
    menu.classList.toggle('header-menu_active');
    hamburger.classList.toggle('header-burger_active');
  };

  const hideHamburger = () => {
    menu.classList.remove('header-menu_active');
    hamburger.classList.remove('header-burger_active');
  };

  hamburger.addEventListener('click', () => showHamburger());


  menu.addEventListener('click', (e) => {
    menuLink.forEach((link) => {
      if( e.target === link || btnBuy || logo || e.target !== link || btnBuy || logo) {
        hideHamburger()
      } else {
        throw new Error('Something going wrong...')
      }
     
    });
  });
});

/* Задачи */

/* curry */

const curry = (func) => {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
};

function sum(a, b, c) {
  return a + b + c;
}

const resultFromCurry = curry(sum);
console.log(resultFromCurry('A')('B')('C'));
console.log(resultFromCurry('A', 'B')('C'));
console.log(resultFromCurry('A', 'B', 'C'));

function abcdef(a, b, c, d, e, f) {
  return a + b + c + d + e + f;
}

const fromCurry = curry(abcdef);
console.log(fromCurry('A')('B')('C')('D')('E')('F'));
console.log(fromCurry('A', 'B', 'C')('D', 'E', 'F'));

/* улучшенная вторая функция: */
function drawRating(vote) {
  if (vote > 80) {
    return 5;
  }
  if (vote > 60) {
    return 4;
  }
  if (vote > 40) {
    return 3;
  }
  if (vote > 20) {
    return 2;
  } else {
    return 1;
  }
}

console.log(drawRating(0));
console.log(drawRating(1));
console.log(drawRating(50));
console.log(drawRating(99));
