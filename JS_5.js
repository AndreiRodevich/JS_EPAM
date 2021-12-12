//Дан массив состоящий из названий фильмов, выполните перебор массива с выводом в консоль названия каждого фильма
let films = ["Green Mile", "Shawshank Redemption", "1+1"];
films.forEach(function(entry) {
console.log(entry);   
});

//Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив
let carmod = ["WV", "BMW", "FORD"];
let str = carmod + "";
console.log(str);
console.log(str.split('-'));

//Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello
let friend_name = ['Anadrei', 'Roma', 'Dima'];
let name_hello = friend_name.map(nameItem => {
    return (nameItem + ' Hello')
});
alert(name_hello);

//Преобразовать числовой массив в Boolean
let array = [1, 2, 3];
alert(typeof array);
let new_array = Boolean(array);
alert(typeof new_array);

//Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию
let number_array = [1,6,7,8,3,4,5,6];
number_array.sort((a, b) => a - b);
alert(number_array);

//Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3
let number_array = [1,6,7,8,3,4,5,6];
let new_number_array = number_array.filter(function(number) {
    return number > 3;
});
alert(new_number_array);

//Написать функцию, которая принимает два параметра - массив и число и выводит индекс элемента массива равный числу
function check(number, array) {
    let number = 1;
    let array = ['Andrei', 'Dima'];
    if (number == index[array]);
    return alert(array())
}

//Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10
for (let i = 15; i > 10; i--) {
  alert(i);
}

//Реализовать цикл, который выводит в консоль простые числа
var num = prompt();
function isPrime(num) {
  if(num < 2) return;
  if(num == 2) return console.log(num);
  for(var i = 2; i < num; i++) {
    if(num % i === 0) return;
  }
  return console.log(num);
}
isPrime(num);

//Реализовать цикл, который выводит в консоль нечетные числа
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;
  alert(i);
}