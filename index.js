// 1. Переменные и вывод в консоль
const userName = "Валентина";
console.log(`1. Приветствие: Привет, ${userName}!`);

// 2. Условия
const age = 25;
console.log(`2. Проверка возраста: ${age >= 18 ? "Добро пожаловать!" : "Доступ запрещен."}`);

// 3. Цикл for
console.log("3. Цикл for:");
for (let i = 0; i < 5; i++) {
  console.log(`   Шаг ${i}`);
}

// 4. Функция для сложения двух чисел
console.log(`4. Сумма чисел 3 и 7: ${sum(3, 7)}`);

// 5. Функция для проверки палиндрома
console.log(`5. Проверка палиндрома:`);
console.log(`   "топот" — ${isPalindrome("топот")}`);
console.log(`   "привет" — ${isPalindrome("привет")}`);

// 6. Функция для проверки простого числа
console.log(`6. Проверка простого числа:`);
console.log(`   7 — ${isPrime(7)}`);
console.log(`   10 — ${isPrime(10)}`);