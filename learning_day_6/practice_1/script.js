// Синтаксис условия

let message = "Never Give Up!";

if (2 > 1) {
  console.log(message);
}

// Возможность использования арифметических значений в коде

let num_1 = 30;
let num_2 = 20;

if (num_1 === num_2) {
  console.log(message);
}

// Условие ничего не выведет так как условия не выполняеться 30 равно 20 false

// Упрощоная надпись

if (3 > 1) console.log(message);

// Блок else

let car = "toyota";
let engine = "6L";

if (car === "4L") {
  console.log("Engine have 4L");
} else {
  console.log("It is wrong");
}
// Вывод it is wrong такак как условие не выполнилось.

// Конструкция else if

num_1 = 10;
num_2 = 15;

if (num_1 > num_2) {
  console.log("15 меньше 10");
} else if (num_1 === num_2) {
  console.log("10 ровно 15");
} else if (num_1 < num_2) {
  console.log("10 меньше 15");
} else {
  console.log("Ни одно условие не было выполнено");
}

// Условие ?

let solution = 5 > 1 ? "Больше" : "Меньше";
console.log(solution);
