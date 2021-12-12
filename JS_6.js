//Создать 2 объекта: animal и cat, объект animal добавить свойство move, объект cat должен наследовать свойство move
let animal = {eats: 'yes'};
animal.move = 3;
let cat = {jumps: 'yes'};
cat.__proto__ = animal;
alert(cat.move);
                                                                                                                          