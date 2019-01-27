'use strict';

let userInput = '';
const numbers = [];
let total = 0;
let i = 0;
let message;

do {
  userInput = prompt('Введите число:');
  userInput = Number(userInput);
  if (Number.isNaN(userInput)) {
    message = 'Было введено не число, попробуйте еще раз';
    alert(message);
  } else if (!userInput) {
    message = 'Отменено пользователем!';
    alert(message);
    break;
  } else {
    numbers[i] = userInput;
    i += 1;
    console.log('Пользователь ввел: ', userInput);
    console.log('Индекс: ', i);
    console.log('Массив: ', numbers);
  }
} while (userInput);

if (numbers.length > 0) {
  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
    console.log(numbers[i]);
    console.log('Общая сумма чисел: ', total);
  }
  alert(`Общая сумма чисел равна ${total}`);
} else {
  message = 'Не введено ни одного числа!';
  alert(message);
}
