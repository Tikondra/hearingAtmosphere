'use strict';

// меню
(function () {
  var menu = document.querySelector('.navigation');
  var menuBtn = document.querySelector('.header__nav-btn');
  var btnSvg = document.querySelector('.ham1');

  menuBtn.addEventListener('click', function () {
    menu.classList.toggle('navigation--show');
    menuBtn.classList.toggle('header__nav-btn--active');
    btnSvg.classList.toggle('active');
  });
})();

if (document.querySelector('.filters')) {
  // фильтр
  var filters = document.querySelector('.filters');
  var filterOpen = document.querySelector('.catalog__filter-btn');
  var filterClose = filters.querySelector('.filters__btn-close');

  filterOpen.addEventListener('click', function () {
    filters.classList.add('filters--open');
  });

  filterClose.addEventListener('click', function () {
    filters.classList.remove('filters--open');
  });
};

if (document.querySelector('.card-description')) {
  var description = document.querySelector('.card-description');
  var openBtn = description.querySelector('.card-description__open');
  var descriptionList = description.querySelector('.card-description__list');

  openBtn.addEventListener('click', function () {
    descriptionList.classList.toggle('card-description__list--show');
    openBtn.classList.toggle('card-description__open--active');
    description.classList.toggle('card-description--show');
  })
}
