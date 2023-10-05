'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let element = document.getElementById("text");
element.value = "従業員番号を入力してください";

function gators(){
    document.getElementsByClassName("bluebox")[0].innerText = "入会ありがとうございました";
}

const target = document.getElementsByClassName("gator_button")[0];
target.addEventListener("click", gators);

const images = ["img/01.png","img/02.png","img/03.png","img/04.png"];
const slideImg = document.getElementById("slide_img");
const prev = document.getElementById("prev");
const page = document.getElementById("page");
const next = document.getElementById("next");
let counter = 0;

page.textContent = `1/${images.length}`;

next.addEventListener("click", function() {
    if(counter + 1 < images.length) {
        counter++;
        slideImg.src = images[counter];
    }
    page.textContent = `${counter + 1}/${images.length}`;
});

prev.addEventListener("click", function() {
    if(counter > 0) {
        counter--;
        slideImg.src = images[counter];
    }
    page.textContent = `${counter + 1}/${images.length}`;
});
