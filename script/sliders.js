(function () {
  'use strict';
	const DESKTOP_WIDTH_1 = 1024;
	const DESKTOP_WIDTH_2 = 1300;
	const DESKTOP_WIDTH_3 = 1440;
	const HORIZONTAL_PADDING_MOBILE = 20;
  const WIDTH = 560;

	const sliderList = document.querySelector('.slider__list');
  const slides = document.querySelectorAll('.slider__item');
  const sliderBtnPrev = document.querySelector('.slider__btn-prev');
	const sliderBtnNext = document.querySelector('.slider__btn-next');

	const indexArray = [];
	let shift = 0;
	let slideWidth;
  let positionStart = 0;
  let positionEnd = 0;

	if (sliderList != null) {

		defineSlideWidth();

		// ОПРЕДДЕЛЯЕМ ШИРИНУ И ВЫСОТУ СЛАЙДА
		function defineSlideWidth() {
			for (let i = 0; i < slides.length; i++) {
				if (window.screen.width < DESKTOP_WIDTH_1) {
					slideWidth = window.screen.width - HORIZONTAL_PADDING_MOBILE * 2;
				} else if (window.screen.width > DESKTOP_WIDTH_3) {
					slideWidth = window.screen.width / 4 - HORIZONTAL_PADDING_MOBILE * 2;
				} else if (window.screen.width > DESKTOP_WIDTH_2) {
					slideWidth = window.screen.width / 3 - HORIZONTAL_PADDING_MOBILE * 2;
				} else  {
					slideWidth = window.screen.width / 2 - HORIZONTAL_PADDING_MOBILE * 2;
				}

				slides[i].style.width = `${slideWidth}px`;
			}
			const slidesHeight = slides[0].getBoundingClientRect();

			sliderList.style.width = `${slideWidth-5}px`;
			sliderList.style.height = `${slidesHeight.height}px`;
		}

		window.addEventListener('resize', () => {
			defineSlideWidth();
		});

		// ОПРЕДЕЛЯЕМ ИНДЕКСЫ СЛАЙДОВ
		slides.forEach((_, index) => {
			indexArray.push(index);
		});

		// ЗАДАЁМ ИНДЕКСЫ СЛАЙДОВ И ДОТСОВ И СМЕЩЕНИЕ СЛАЙДАМ
		for (const index of indexArray) {
			slides[index].dataset.index = index;
			
			if (slides.length != 1) {
				if (index != (slides.length - 1)) {
					slides[index].style.left = `${slideWidth * index}px`;
				} else {
					slides[index].style.left = `-${slideWidth * 1}px`;
				}			
			}
		}

		if (slides.length > 1) {
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

			function showSlide(indexArray) {
				for (let i = 0; i < slides.length; i++) {
					slides[i].dataset.index = indexArray[i];

					if (indexArray[i] != 0) {
						slides[i].style.zIndex = `0`;
					} else {
						slides[i].style.zIndex = `1`;
					}

					if (indexArray[i] != (slides.length - 1)) {
						slides[i].style.left = `${slideWidth * indexArray[i]}px`;
					} else {
						slides[i].style.left = `-${slideWidth}px`;
					}
				}
			};			
		}
	}
})();