"use strict";

// 1) Выводится 5
let x = 5;

// alert(x++);

// 2) Выводится NaN
const y = [] + false - null + true;
console.log(y);

// 3) Выводится 2
let z = 1;
let k = z = 2;
alert(k);

// 4) Выводится 12
const l = [] + 1 + 2;
console.log(l);

// 5) Выводится 1
alert("1"[0]);

// 6) Выводится null
// 2 && 1 && null && 0 && undefined

// 7)
const a = 1,
      b = 1;
console.log(!!(a && b)); //Вывод true
console.log(a && b); //Вывод 1

// 8) Выводится 3
//alert( null || 2 && 3 || 4);

// 9) Выводится false
const c = [1, 2, 3];
const d = [1, 2, 3];
(c == d) ? console.log("true"): console.log('false');

// 10) Выводится Infinity
alert(+"Infinity");

// 11) Ёжик < яблоко
const f = "Ёжик",
      g = "яблоко";
(f > g) ? console.log("true"): console.log("false");

// 12) Выводится 2
// console.log(0 || "" || 2 || undefined || true || false);
