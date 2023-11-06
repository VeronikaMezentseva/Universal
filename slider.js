let svgArr = [
  document.querySelectorAll('.slider-button1 .display-none'), 
  document.querySelectorAll('.slider-button2 .display-none'), 
  document.querySelectorAll('.slider-button3 .display-none'), 
  document.querySelectorAll('.slider-button4 .display-none'), 
  document.querySelectorAll('.slider-button5 .display-none'), 
];

let arr = svgArr[0].classList;
// console.log(svgArr[0]);

// svgArr.forEach(function(currentValue) {
//   currentValue.forEach(function(item) {
//     console.log(item.classList.toggle('display-none'));
//   });
// });

// svgArr.forEach(function(item, i) {
//   item[i].classList.remove('display-none');
//   console.log(item);
// });

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

let sliderButtons = [
  document.querySelector('.slider-button1'), 
  document.querySelector('.slider-button2'), 
  document.querySelector('.slider-button3'), 
  document.querySelector('.slider-button4'), 
  document.querySelector('.slider-button5')
];

//перелистывание по нажатию кнопок

let buttonIndex = 0;
let nextButtonIndex = 0;
let prevButtonIndex = 0;
let flag = false;

sliderButtons.forEach(function(item, buttonIndex) {
  item.addEventListener('click', function() {
    sliderLine.style.transform = 'translate(-' + buttonIndex * width + 'px)';
    nextButtonIndex = buttonIndex + 1;
    console.log(buttonIndex);
    svgArr[buttonIndex].forEach(function(itemSvg) {
      itemSvg.classList.remove('display-none');
    });
    if (flag) {
      svgArr[prevButtonIndex].forEach(function(itemSvg) {
        itemSvg.classList.add('display-none');
      });
    }
    flag = true;
    prevButtonIndex = buttonIndex;
  });
});

//перелистывания по таймеру

function pressNextButton() {
  if (nextButtonIndex > sliderButtons.length - 1) {
    nextButtonIndex = 0;
  }
    if (isSliderInTheViewport() && !document.querySelector('.slider_frame').matches(':hover')) {
      sliderButtons[nextButtonIndex].click();
    }
}

setInterval(pressNextButton, 4000);

const sliderContent = document.querySelectorAll('.slider_content');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

function sliderResize() {
  width = document.querySelector('.slider_frame').offsetWidth;
  sliderLine.style.width = width * sliderContent.length + 'px';
  sliderContent.forEach(item => {
      item.style.width = width + 'px';
      item.style.height = 'auto';
  })
}

sliderResize();
window.addEventListener('resize', sliderResize);
