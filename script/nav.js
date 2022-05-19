(function () {
  'use strict'
  const menuOpen = document.querySelector(".header__button-open");
	const menuClosed = document.querySelector('.header__button-closed')
  const nav = document.querySelector(".header__nav-wrapper");
  const navBox = document.querySelector(".header__nav-box");
  const body = document.querySelector("body");
  const main = document.querySelector("main");

  menuOpen.addEventListener("click", function(e){
    e.preventDefault();
    nav.classList.add("nav--hide");
    nav.classList.remove("nav--close");
    body.classList.add("overflow");
    main.classList.add("overflow");
  });
	menuClosed.addEventListener("click", function(e){
    e.preventDefault();
    nav.classList.add("nav--animation-close");
    body.classList.remove("overflow");
    main.classList.remove("overflow");
    setTimeout(() => nav.classList.add("nav--close"), 500);
    setTimeout(() => nav.classList.remove("nav--animation-close"), 500);
    setTimeout(() => nav.classList.remove("nav--hide"), 500);
  });
  nav.addEventListener("click", function(e){
    e.preventDefault();
    nav.classList.add("nav--animation-close");
    body.classList.remove("overflow");
    main.classList.remove("overflow");
    setTimeout(() => nav.classList.add("nav--close"), 500);
    setTimeout(() => nav.classList.remove("nav--animation-close"), 500);
    setTimeout(() => nav.classList.remove("nav--hide"), 500);
  });
  navBox.addEventListener("click", function(e){
    e.stopPropagation();
  })
})();