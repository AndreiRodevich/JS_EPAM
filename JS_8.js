//В попробуйте catch конструкцию завернуть код: console.log (a),
//пусть a = 3. И вывести ошибку - 'let перед использованием нужно объявить'
try {
    console.log(a);
    let a = 3;
  } catch(err) {
    alert('let перед использованием нужно объявить');
}

//При выполнении 1/0 выводить ошибку 'на ноль делить нельзя'
let y = prompt();
try {
    let x = 1/y;
    if (y == 0) {
      throw new SyntaxError("на ноль делить нельзя");
      }
    } catch(err) {
    if (y == 0) {
      alert("на ноль делить нельзя");
      } else {
        throw err;
      }
}