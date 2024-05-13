"use strict";

const myFactorial = (n) => {
  if ( n >= 1) {
    return n * myFactorial(n - 1);
  } else {
    return 1;
  }
};

function factorial(n) {
  if (typeof(n) !== 'number' || !Number.isInteger(n)) {
    return "Ошибка, проверьте данные";
  }

  if (n >= 1) {
    return n * factorial(n - 1);
  } else {
    return 1;
  }

  // Более короткий вариант, который вы можете встретить
  // Но не учитывает отрицательные значения
  // return n ? n * factorial(n - 1) : 1;
}

console.log(factorial(-5));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
