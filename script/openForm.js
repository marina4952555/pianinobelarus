(function () {
  'use strict'
  const formOpen = document.querySelectorAll(".product__button");
  const orderForm = document.querySelector(".order-form");
  const orderFormBox = document.querySelector(".order-form__box");
  const formClose = document.querySelector(".order-form__close");
  const body = document.querySelector("body");
  const main = document.querySelector("main");
  
  for (let i = 0; i < formOpen.length; i++) {
    formOpen[i].addEventListener("click", function(e){
      e.preventDefault();
      orderForm.classList.add("order-form--hide");
      body.classList.add("overflow");
      main.classList.add("overflow");
    });    
  }
  formClose.addEventListener("click", function(e){
    e.preventDefault();
    orderForm.classList.remove("order-form--hide");
    body.classList.remove("overflow");
    main.classList.remove("overflow");
  });

  orderForm.addEventListener("click", function(e){
    e.preventDefault();
    orderForm.classList.remove("order-form--hide");
    body.classList.remove("overflow");
    main.classList.remove("overflow");
  });

  orderFormBox.addEventListener("click", function(e){
    e.stopPropagation();
  })
})();