(function () {
  'use strict'
  const popupOpen1 = document.querySelector(".goszakupki__img--1");
	const popupOpen2 = document.querySelector(".goszakupki__img--2");
  const popup1 = document.querySelector(".popup--1");
	const popup2 = document.querySelector(".popup--2");
  const popupBox = document.querySelectorAll(".popup__box");
  const popupClose1 = document.querySelector(".popup__close--1");
	const popupClose2 = document.querySelector(".popup__close--2");
  const body = document.querySelector("body");
  const main = document.querySelector("main");
  
	popupOpen1.addEventListener("click", function(e){
		e.preventDefault();
		popup1.classList.add("popup--hide");
		body.classList.add("overflow");
		main.classList.add("overflow");
	});

	popupOpen2.addEventListener("click", function(e){
		e.preventDefault();
		popup2.classList.add("popup--hide");
		body.classList.add("overflow");
		main.classList.add("overflow");
	});

  popupClose1.addEventListener("click", function(e){
    e.preventDefault();
    popup1.classList.remove("popup--hide");
    bodyScroll();
  });

  popupClose2.addEventListener("click", function(e){
    e.preventDefault();
    popup2.classList.remove("popup--hide");
    bodyScroll();
  });

  popup1.addEventListener("click", function(e){
    e.preventDefault();
    orderForm.classList.remove("popup--hide");
    bodyScroll();
  });

	popup2.addEventListener("click", function(e){
    e.preventDefault();
    orderForm.classList.remove("popup--hide");
    bodyScroll();
  });

  function bodyScroll() {
    body.classList.remove("overflow");
    main.classList.remove("overflow");
  }

	for (let i = 0; i < popupBox.length; i++) {
		popupBox[i].addEventListener("click", function(e){
			e.stopPropagation();
		})
	}
})();