"use strict";
const bodyWidth = document.body.clientWidth;

$(document).ready(function () {
   $('.latest__columns').slick({
      arrows: true,
      // dots: true,
      // slidesToShow: 1,
      centerMode: false,
   });
   if (bodyWidth > 767) {
      $('.latest__columns').slick('unslick');
   }
});

//анимация при сролле

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index],
            animItemHeight = animItem.offsetHeight,
            animItemOffset = offset(animItem).top,
            animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active');
         } else {
            if (!animItem.classList.contains('_anim-no-hide')) {
               animItem.classList.remove('_active');
            }
         }
      }
   }
   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
   }
   setTimeout(() => {
      animOnScroll();
   }, 300);
}
//анимация при сролле

const menu = document.querySelector('.header__menus'),
   menuClose = menu.querySelectorAll('span'),
   menuActive = document.querySelector('.header__menu'),
   menuText = document.querySelector('.header__menu-title'),
   body = document.querySelector('body');

menuActive.addEventListener('click', () => {
   if (!menu.classList.contains('show-menu')) {
      menu.classList.add('show-menu');
      menuActive.classList.add('show-menu');
      menuText.classList.add('show-menu');
   } else {
      menu.classList.remove('show-menu');
      menuActive.classList.remove('show-menu');
      menuText.classList.remove('show-menu');
   } if (menu.classList.contains('show-menu')) {
      body.style.overflow = 'hidden';
   } else {
      body.style.overflow = '';
   }

});





