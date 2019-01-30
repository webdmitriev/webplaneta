'use strict';

var leftBorderWidth = 1; // переменная видна везде в коде
let second = 2; // переменная видна только внутри {}
const pi = 3.14; // const нельзя переписать, определена навсегда

// console.log(leftBorderWidth);

var number = 5; // числовая переменная
var string = "Hello!"; // строковая переменная
var sym = Symbol(); // 
var boolean = true; // логический тип данных true & false
null; // чего-то в коде просто не существует
undefined; // переменная существует но не имеет никакого значения
// ---
var obj = {}; // коллекция данных, ключ: значение
let persone = {
  name: "Oleg",
  age: 28,
  isMarried: false
};
console.log(persone["name"]);
// ---
let arr = ['plum.png', 'orange.jpg', 'apple.bmp']; // массив для хранения данных
console.log(arr[1]);

// alert("Hello world!");
// let answer = confirm("Web Developer?");
// console.log(answer);

// let answer = prompt("Вам есть 18?", "Да");
// let answer = +prompt("Вам есть 18?", "Да"); -- +prompt преобразует в число
// console.log(typeof (answer));


// console.log("arr" + " - object");
// console.log(4 + " - object");

let incr = 10,
  decr = 10;
console.log(incr++);
console.log(decr--);
console.log(incr);
console.log(decr);