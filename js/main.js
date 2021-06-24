'use strict';

(function () {
  const headerNav = document.querySelector('.header__nav');
  const headerToggle = document.querySelector('.header__toggle');
  const promoBlock = document.querySelector('.promo');
  const listItems = headerNav.querySelectorAll('.header__link');

  headerNav.classList.remove('header__nav--nojs');
  headerNav.classList.add('header__nav--closed');
  promoBlock.classList.remove('promo--nojs');

  const onMenuClick = function () {
    if (headerNav.classList.contains('header__nav--closed')) {
      headerNav.classList.remove('header__nav--closed');
      headerNav.classList.add('header__nav--opened');
    } else {
      headerNav.classList.add('header__nav--closed');
      headerNav.classList.remove('header__nav--opened');
    }
  };

  for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', onMenuClick);
  }

  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }

  headerToggle.addEventListener('click', onMenuClick);

})();
