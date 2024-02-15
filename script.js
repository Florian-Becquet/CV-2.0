var homeSectionHeight = document.querySelector('.home__header').offsetHeight;
var homeNav = document.querySelector('.home__nav');


// When the user scrolls down from the top of the document, resize the header's size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > (homeSectionHeight / 2) || document.documentElement.scrollTop > (homeSectionHeight / 2)) {
    homeNav.classList.add('scroll')
} else {
      homeNav.classList.remove('scroll')
  }
}