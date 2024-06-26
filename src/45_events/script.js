"use strict";

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function () {
//   alert('Click');
// };

// btn.onclick = function () {
//   alert('Secons click');
// };

let i = 0;
const deleteElement = (event) => {//можно также назвать просто "e"
  console.log(event.currentTarget);
  console.log(event.type);
  // i++;
  // if (i == 1) {
  //   btn.removeEventListener('click', deleteElement);
  // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
  btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', function(e) {
  e.preventDefault();

  console.log(e.target);
});
