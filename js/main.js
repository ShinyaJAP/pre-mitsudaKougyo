function hamburger() {
    document.getElementById('nav_f').classList.toggle('slidex');
    document.getElementById('line1').classList.toggle('menuBar_1');
    document.getElementById('line2').classList.toggle('menuBar_2');
    document.getElementById('line3').classList.toggle('menuBar_3');

}
document.getElementById('target').addEventListener('click', function () {
    　　hamburger();
    });

let list = document.getElementsByClassName('list');

for (let i = 0; i < list.length; i++) {
　　list[i].addEventListener('click', function () {
　　　　hamburger();
    });
}


window.addEventListener("scroll", function(){
  var header = document.querySelector(".headerIndex");
  header.classList.toggle("color_change", window.scrollY > 500)
});
window.addEventListener("scroll", function(){
  var header = document.querySelector(".headerIndex2");
  header.classList.toggle("color_change2", window.scrollY > 43)
});

// window.addEventListener('scroll', function() {
//     let scroll = window.pageYOffset;
//     const headerIndex = document.getElementsByClassName('.headerIndex');
//     if (scroll > 500) {
//         changeColor();
//     }
// });
// function chageColor() {
//   headerIndex.classList.toggle("color_change");
// }
// window.addEventListener('scroll', function () {
//     let scroll = window.pageYOffset;
//     if (scroll > 500) {
//       const elements = document.getElementById('header_index');
//         elements.style.backgroundColor = 'rgb(173 173 173 / 20%)';
//     } else if (scroll < 500){
//       elements.style.backgroundColor = 'rgb(173 173 173 / 67%)';
//     }
//   });


// アコーディオンメニュー
const menu = document.querySelectorAll('.js-menu');
const arrows = document.querySelectorAll('.arrow');     
function toggle(getIcon) {
    const content = this.nextElementSibling;
    content.classList.toggle('active');
    // const direction = this.querySelector("i.fas").toggle;
    arrows.classList.toggle('active_arrow');
    
for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click', toggle);
  }
}

// const menu = document.querySelectorAll('.js-menu');    

// function toggle() {
//     const content = this.nextElementSibling;
//     content.classList.toggle('active');
//     const arrow = document.querySelectorAll('.arrow');
//     arrow.classList.toggle('active_arrow');
// }
// for (let i = 0; i < menu.length; i++) {
//     menu[i].addEventListener('click', toggle);
//   }
  
// let arrow = document.querySelectorAll('.arrow');
// function rotation() {
//   console.log(arrow[1]);
//   arrow[1].push('active_arrow')
// console.log(arrow);
// }
// rotation();

function clearText() {
  var request = document.getElementById('request');
  request.value = '';
  var name = document.getElementById('name');
  name.value = '';
  var number = document.getElementById('number');
  number.value = '';
}

 

