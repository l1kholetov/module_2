"use strict";

const str = "teSt";

// console.log(str[2]);

// С помощью console.dir(Number) можно узнать различные методы в консоли браузера

// console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("q"));

const logg = "Hello world";

console.log(logg.slice(6, 11));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));
// Этот метод, несмотря на поддержку браузерами, сейчас устарел и использование его в современном коде не рекомендуется.
// Вместо него наиболее предпочтительно использовать substring или slice .

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
// console.log(parseInt(test));
console.log(parseFloat(test));
