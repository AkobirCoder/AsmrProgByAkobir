let switchFrm = document.querySelector('#switch-frm');
let switchF1 = document.querySelector('#switch-f1');
let switchF2 = document.querySelector('#switch-f2');
let switchCircle = document.querySelectorAll('.switch-circle');
let switchBtn = document.querySelectorAll('.switch-btn');
let regFrm = document.querySelector('#register-form');
let logFrm = document.querySelector('#login-form');
let allButtons = document.querySelectorAll('.submit');

let getButtons = (e) => e.preventDefault();

let changeForm = (e) => {
    switchFrm.classList.add('is-gx');
    setTimeout (function () {
        switchFrm.classList.remove('is-gx');
    }, 1500);

    switchFrm.classList.toggle('is-txr');
    switchCircle[0].classList.toggle('is-txr');
    switchCircle[1].classList.toggle('is-txr');

    switchF1.classList.toggle('is-hidden');
    switchF2.classList.toggle('is-hidden');
    regFrm.classList.toggle('is-txl');
    logFrm.classList.toggle('is-txl');
    logFrm.classList.toggle('is-z200');
}

let mainF = (e) => {
    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', getButtons);
    }

    for (var i = 0; i < switchBtn.length; i++) {
        switchBtn[i].addEventListener('click', changeForm);
    }
}

window.addEventListener('load', mainF);