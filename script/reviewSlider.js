(function () {
  'use strict';
  
  const WIDTH_1 = 600;
  const WIDTH_2 = 800;
  const WIDTH_3 = 1000;
  const HORIZONTAL_PADDING_MOBILE = 12;
  const HORIZONTAL_PADDING_DESKTOP = 210;

  const slider = document.querySelector('.slider__list');
  const slides = document.querySelectorAll('.slider__item');
  const sliderBtnPrev = document.querySelector('.slider__btn-prev');
  const sliderBtnNext = document.querySelector('.slider__btn-next');

  const indexArray = [];
  let shift = 0;
  let numberActiveIndex = 1;
  let sliderWidth;
  let slideWidth;
  let positionStart = 0;
  let positionEnd = 0;

  if (slider != null) {
    defineSlideWidth();

    window.addEventListener('resize', () => {
      defineSlideWidth();
    });
    
    // ОПРЕДЕЛЯЕМ ШИРИНУ СЛАЙДЕРА И СЛАЙДА
    function defineSlideWidth() {
      if (window.screen.width < WIDTH_3) {
        sliderWidth = window.screen.width - HORIZONTAL_PADDING_MOBILE * 2;

        if (window.screen.width > WIDTH_2) {
          numberActiveIndex = 3;
        } else if (window.screen.width > WIDTH_1) {
          numberActiveIndex = 2;
        } else {
          numberActiveIndex = 1;
        }
      } else if(window.screen.width > 1300) {
        sliderWidth = 1200;
        numberActiveIndex = 4;
      } else {
        sliderWidth = window.screen.width - HORIZONTAL_PADDING_DESKTOP;
        numberActiveIndex = 3;
      }

      slideWidth = sliderWidth/numberActiveIndex;

      slider.style.width = `${sliderWidth}px`;
      
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.width = `${slideWidth}px`;	
      }
    }

    // ОПРЕДЕЛЯЕМ ИНДЕКСЫ СЛАЙДОВ
    slides.forEach((_, index) => {
      indexArray.push(index);
    });

    // ЗАДАЁМ ИНДЕКСЫ СЛАЙДАМ
    for (const index of indexArray) {
      slides[index].dataset.index = index;

      if (slides.length < numberActiveIndex) {
        slides[index].style.left = `${slideWidth * index + 1}px`;
      } else {
        if (index != (slides.length - 1)) {
          slides[index].style.left = `${slideWidth * index}px`;
        } else {
          slides[index].style.left = `-${slideWidth * 1}px`;
        }				
      }
    }

    if (slides.length > numberActiveIndex) {
      // ПЕРЕКЛЮЧЕНИЕ КНОПКОЙ ВПЕРЁД
      sliderBtnNext.addEventListener('click', () => {
        showNextSlide(indexArray);
      });

      // ПЕРЕКЛЮЧЕНИЕ КНОПКОЙ НАЗАД
      sliderBtnPrev.addEventListener('click', () => {
        showPrevSlide(indexArray);
      });

      // ПЕРЕКЛЮЧЕНИЕ ТАЧЕМ
      for (let i = 0; i < slides.length; i++) {
        slides[i].addEventListener('touchstart', (e) => {
          positionStart = e.touches[0].pageX;

          function handleTouchEnd(e) {
            positionEnd = e.changedTouches[0].pageX;
            shift = positionEnd - positionStart;
            
            if (shift < 0 && Math.abs(shift) > 40 ) {
              showNextSlide(indexArray);
            } else if (shift > 0 && Math.abs(shift) > 40 ) {
              showPrevSlide(indexArray);
            }

            slides[i].removeEventListener('touchend', handleTouchEnd);
          }

          slides[i].addEventListener('touchend', handleTouchEnd);
        });
      }

      function showNextSlide(indexArray) {
        indexArray.unshift(indexArray[indexArray.length - 1]);
        indexArray.pop(indexArray[indexArray.length - 1]);
        showSlide(indexArray);
      }

      function showPrevSlide(indexArray) {
        indexArray.push(indexArray[0]);
        indexArray.shift(indexArray[0]);
        showSlide(indexArray);
      }

      function showSlide() {
        for (let i = 0; i < slides.length; i++) {
          slides[i].dataset.index = indexArray[i];

          if (indexArray[i] > numberActiveIndex - 1) {
            slides[i].style.opacity = '0';
          } else {
            slides[i].style.opacity = '1';
          }

          if (indexArray[i] != (slides.length - 1)) {
            slides[i].style.left = `${slideWidth * indexArray[i]}px`;
          } else {
            slides[i].style.left = `-${slideWidth}px`;
          }
        }
      };
    } else {
      sliderBtnNext.style.display = 'none';
      sliderBtnPrev.style.display = 'none';
    }
  }
})();
(function () {
  'use strict'
  const popupOpenList = document.querySelectorAll(".review__img");
  const popupList = document.querySelectorAll(".popup");
  const popupBox = document.querySelectorAll(".popup__box");
  const popupCloseList = document.querySelectorAll(".popup__close");
  const body = document.querySelector("body");
  const main = document.querySelector("main");
  
  for (let i = 0; i < popupOpenList.length; i++) {
    popupOpenList[i].addEventListener('click', function(e) {
      popupList[i].classList.add("popup--hide");
      body.classList.add("overflow");
		  main.classList.add("overflow");
    })
  }

  for (let i = 0; i < popupCloseList.length; i++) {
    popupCloseList[i].addEventListener('click', function(e) {
      popupList[i].classList.remove("popup--hide");
      bodyScroll();
    })
  }

  for (let i = 0; i < popupList.length; i++) {
    popupList[i].addEventListener('click', function(e) {
      popupList[i].classList.remove("popup--hide");
      bodyScroll();
    })
  }

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