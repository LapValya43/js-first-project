// 1. Переменные и вывод в консоль
const userName = "Валентина";  // Замените "Ваше имя" на ваше имя
console.log(`Привет, ${userName}!`);

// 2. Условия
const age = 25;  // Ваш возраст
if (age >= 18) {
  console.log("Добро пожаловать!");
} else {
  console.log("Доступ запрещен.");
}

// 3. Цикл for
for (let i = 0; i < 5; i++) {
  console.log(`Шаг ${i}`);
}

// 4. Функция
function sum(a, b) {
  return a + b;
}
console.log(sum(3, 7)); // Должно вывести 10