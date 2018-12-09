'use strict';

const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;

const adminLoginInput = prompt('Введите логин:');
console.log(adminLoginInput);

if (!adminLoginInput) {
  message = 'Отменено пользователем!';
} else if (adminLoginInput === ADMIN_LOGIN) {
  const adminPasswordInput = prompt('Введите пароль:');
  console.log(adminPasswordInput);

  if (!adminPasswordInput) {
    message = 'Отменено пользователем!';
  } else if (adminPasswordInput === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
  } else {
    message = 'Доступ запрещен, неверный пароль!';
  }
} else {
  message = 'Доступ запрещен, неверный логин!';
}

alert(message);
