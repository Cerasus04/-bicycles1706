'use strict';


(function () {
  var headerNav = document.querySelector('.header__nav');
  var headerToggle = document.querySelector('.header__toggle');
  var promoBlock = document.querySelector('.promo');
  var listItems = headerNav.querySelectorAll('.header__link');

  headerNav.classList.remove('header__nav--nojs');
  headerNav.classList.add('header__nav--closed');
  promoBlock.classList.remove('promo--nojs');

  var onMenuClick = function () {
    if (headerNav.classList.contains('header__nav--closed')) {
      headerNav.classList.remove('header__nav--closed');
      headerNav.classList.add('header__nav--opened');
    } else {
      headerNav.classList.add('header__nav--closed');
      headerNav.classList.remove('header__nav--opened');
    }
  };

  for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', onMenuClick);
  }

  headerToggle.addEventListener('click', onMenuClick);

})();
