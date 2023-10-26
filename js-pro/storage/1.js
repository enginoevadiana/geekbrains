// Установка значения в LocalStorage (DeveloperTools->Applications->LocalStorage)

localStorage.setItem('username', 'John');

// Получение значения из LocalStorage
let storedUsername = localStorage.getItem('username');
console.log('Значение из localStorage:', storedUsername);

// Удаление значения из LocalStorage
localStorage.removeItem('username');

// Проверка, что значение удалено из LocalStorage
let storedUsername2 = localStorage.getItem('username');
console.log('Значение из localStorage:', storedUsername2);

// Очистка LocalStorage
localStorage.clear;

// Проверка, что LocalStorage пуст
console.log('LocalStorage:', localStorage);