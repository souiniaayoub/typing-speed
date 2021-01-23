"use strict";
const text = document.getElementsByClassName('text')[0];
const textarea = document.getElementById('typetext');
const reset = document.getElementsByClassName('reset')[0];
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const millisec = document.getElementById('millisec');
const textstring = text.textContent;

let startrace = false;
let time = 0;
let counter;
reset.addEventListener('click', () => {
    startrace = false;
    time = 0;
    min.textContent = "00";
    sec.textContent = "00";
    millisec.textContent = "00";
    textarea.value = "";
    textarea.style.borderColor = "gray";
    clearInterval(counter);
});
textarea.addEventListener('keydown', (e) => {
    if (!startrace) {
        startrace = true;
        counter = setInterval(() => {
            min.textContent = (parseInt(time / 60000) < 9) ? "0" + parseInt(time / 60000) : parseInt(time / 60000);
            sec.textContent = (parseInt(time / 1000) % 60 < 9) ? "0" + parseInt(time / 1000) % 60 : parseInt(time / 1000) % 60;
            millisec.textContent = (parseInt((time % 1000) / 10) < 9) ? "0" + parseInt((time % 1000) / 10) : parseInt((time % 1000) / 10);
            time += 10;
        }, 10);
    }
});
textarea.addEventListener('keyup', (e) => {
    if (textarea.value !== textstring.substr(0, textarea.value.length)) {
        textarea.style.borderColor = "red";
    } else {
        textarea.style.borderColor = "green";
        if (textarea.value.length == textstring.length) {
            startrace = false;
            clearInterval(counter);
        }
    }
});