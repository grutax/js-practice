const sliderContainer = document.querySelector('.slider-container');

const leftSide = document.querySelector('.left-side');
const rightSide = document.querySelector('.right-side');

const downButton = document.querySelector('.down-button');
const upButton = document.querySelector('.up-button');

const slidesLength = leftSide.querySelectorAll('div').length;

let activeSlide = 0;
leftSide.style.top = `-${(slidesLength - 1) * 100}vh`;

downButton.addEventListener('click', () => changeSlide('down'));
upButton.addEventListener('click', () => changeSlide('up'));

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;

    if (direction === 'down') {
        activeSlide = activeSlide === 0 ? slidesLength - 1 : activeSlide - 1;
    }

    if (direction === 'up') {
        activeSlide = activeSlide === slidesLength - 1 ? 0 : activeSlide + 1;
    }

    rightSide.style.transform = `translateY(-${activeSlide * sliderHeight}px)`;
    leftSide.style.transform = `translateY(${activeSlide * sliderHeight}px)`;
}