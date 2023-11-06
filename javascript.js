
//--------------------------SLIDER----------------------------------------

const sliderContent = document.querySelectorAll('.slider_content');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

function sliderResize() {
    width = document.querySelector('.slider_frame').offsetWidth;
    sliderLine.style.width = width * sliderContent + 'px';
    sliderContent.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    })
}

sliderResize();
window.addEventListener('resize', sliderResize);

document.querySelector(".button-prev").addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = sliderContent.length -1;
    }
    rollSlider();
});

document.querySelector(".button-next").addEventListener('click', function () {
    count++;
    if (count >= sliderContent.length) {
        count = 0;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}
// addEventListener('mouseover', );

//функция нажатия на кнопку слайдера

function pressButton() {
    let buttonNext = document.querySelector('.button-next');
    if (isSliderInTheViewport() && !document.querySelector('.slider_frame').matches(':hover')) {
        buttonNext.click();
    }
}

setInterval(pressButton, 2000);

function autoSlide() {
    if (isSliderInTheViewport()) {
        setInterval(pressButton, 1000);
    }
}
// console.log(addEventListener('scroll', autoSlide));

function isSliderInTheViewport() {
    let sliderFrame = document.querySelector('.slider_frame');
    let sliderPosition = sliderFrame.getBoundingClientRect();
    if (
        sliderPosition.top >= 0 &&
        sliderPosition.left >= 0 &&
        sliderPosition.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        sliderPosition.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
        return true;
    } else {
        return false;
    }
}