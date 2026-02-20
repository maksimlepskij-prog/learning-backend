/* 

JS являеться динамически типизированым. То есть тип данных переменной меняется динамически в момент присвоения либо смены её значения.
А не в момент обьявления.

*/

let userName; // Обьявляем переменную

userName = "Максим"; // Строка String

userName = 58; // number - число

// Как получить тип данных в консоль браузера?Используйте оператор typeof

console.log(typeof userName);

/*
Примитывные типы данных
Undefinded
Null 
Boolean
Number
BigInt
String
Symbol
Сложный тип
Omject
Fuction - тот же обьект
*/

// Undefinded - неопределенный тип

let number;
console.log(typeof number);

// null - ничего

let space = null;

// ошибка вывод object - нулл не являеться обьектом
console.log(typeof space);

// Boolean - принимает значение True or False

doYouLearnJS = true;

if (doYouLearnJS) {
  // Так как значение перменной true условие вернет нат "It's good"
  console.log("It's good");
} else {
  console.log("It's bad"); // Но если значение переменной false последует вывод It's bad
}

// Также можно использовать с оператором сравнения
let equal = 56 > 30;
console.log(equal); // вывод true

// Также есть тип даных infinity - бесконечность
// NaN - вычеслительная ошибка

/* Техническое ограничение JS тип даных number не может содержать числа больше чем 9007199254740991 
    или меньше чем -9007199254740991
*/

// BigInt

const bigInteger = 112317727410471471289891274812471289489n;
console.log(typeof bigInteger);

// String

// let realName = "Max";
// console.log(typeof realName);

// let userAge = "34";
// let userInfo = `Возраст:${userAge}`;
// console.log(userInfo);

// Object

let userInfo = {
  userName: "zom1xx",
  age: 18,
};
console.log(userInfo);

// Symbol

let id = Symbol("id");
console.log(typeof id);

// function - похож на обьект

let funcVariable = function name(params) {
  // код функции
};
console.log(typeof funcVariable);

// Преобразование типов

let infoUser = 12;
infoUser = String(infoUser);
console.log(typeof infoUser);

infoAge = "12";
infoAge = Number(infoAge);
console.log(typeof infoAge);
// В js есть автоматическое преобразование

let solutionEx = "40" / 2;
console.log(solutionEx);
console.log(typeof solutionEx);

// let userHeight = 0 / 145;

// console.log(userHeight);
