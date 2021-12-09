//Создать объект car, добавить к нему свойство color со значением 'черный'
let car = {   
color: "чёрный"
};
  
//Изменить свойство color объекта car на 'зеленый'
car.color = "зелёный";

//В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя
let v = 150;
function vvv() {
  console.log(v);
}
vvv();
car.power = vvv();

//На склад принимают груши и яблоки, напишите функцию, которая возвращает результат сложения количества принятых груш и яблок

let a = prompt('Введите количество принятых яблок:', );
let b = prompt('Введите количество принятых груш:', );
function sum(a, b) {
    return Number(a) + Number(b);
    };
let result = sum(a, b);
alert(result); 

//В терминале оплаты сохранено ваше имя, напишите функцию для определения имени в терминале(если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)
function checkName(name) {
  if (name == 'Andrei') {
    return confirm( 'привет ' +name);
  } else {
    return confirm('нет такого имени');
  }
};
let name = prompt('What is your name?', '');
if (checkName(name) == true);

//Напишите функцию вычисления типа аргумента и вывод типа в консоль
let name = 'Andrei';
function check(name){
  return console.log(typeof name);
}
check(name);
//Напишите функцию, которая определяет является ли число простым или нет
var num = prompt();
function isPrime(num) {
  if(num < 2) return alert("Число не простое");
  if(num == 2) return alert("Число простое");
  for(var i = 2; i < num; i++) {
    if(num % i === 0) return alert("Число не простое");
  }
  return alert("Число простое");
}
isPrime(num);

