let radioButton1 = document.querySelector('#radio_rec1');
let radioButton2 = document.querySelector('#radio_rec2');
let radioButton3 = document.querySelector('#radio_rec3');
let radioButton4 = document.querySelector('#radio_rec4');
let radioButton5 = document.querySelector('#radio_rec5');

let radioButtons = [radioButton1, radioButton2, radioButton3, radioButton4, radioButton5];
let urlRecBgImages = ["url('images/content/rec_bg1.png')", "url('images/content/rec_bg2.png')", "url('images/content/rec_bg3.png')", "url('images/content/rec_bg4.png')", "url('images/content/rec_bg5.png')", ]
let rec = document.querySelector('.recomended')

function makeCheckedRadioButton() {
    radioButton1.checked = true;
}

window.onload = function() {
    makeCheckedRadioButton();
}

function changeBg () {
    let previewBg = document.querySelector('.preview');
    let i = 0;
    for (radio of radioButtons) {
        if (radio.checked) {
            break;
        }
        i++;
    }
    previewBg.style.backgroundImage = urlRecBgImages[i];
}

rec.addEventListener('click', ()=> changeBg());