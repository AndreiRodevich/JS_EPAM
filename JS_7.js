//Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярное выражение, которое найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'
let str = 'ahb acb aeb aeeb adcb axeb';
let result = str.match( /a\Sb./ig );
alert(result);

//Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные
let str = '2+3 223 2223';
let result = str.match( /2\+3/ig );
alert(result);

//Получить день, месяц и год текущей даты и по отдельности вывести в консоль
var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();
alert(day + "/" + month + "/" + year);
console.log(day);
console.log(month);
console.log(year);