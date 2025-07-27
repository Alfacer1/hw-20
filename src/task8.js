
/*
 * #8
 *
 * Створіть основну функцію mainFunc(a, b, callback), яка приймає три параметри:
 * a - число,
 * b - число,
 * callback - функція зворотнього виклику, що обробляє параметри a і b.
 *
 * Реалізуйте перевірку: якщо третім параметром передається не функція, потрібно повернути false.
 */

// function mainFunc(a, b, cb) { }

/*
 * Реалізуйте callback функції (cbRandom, cbPow, cbAdd) до основної функції (mainFunc), що повертатимуть відповідні результати обчислень.
 * Використовуйте Math для піднесення до ступеня (Math.pow) та генерації випадкових чисел (Math.floor, Math.random).
 */

// cbRandom(a, b) - обчислює і повертає довільне ціле число в діапазоні між a і b включно.
// function cbRandom(min, max) { }

// cbPow(a, b) - обчислює і повертає результат піднесення числа a у ступінь b.
// function cbPow(num, pow) { }

// cbAdd(a, b) - обчислює і повертає суму двох чисел a і b.
// function cbAdd(a, b) { }

/*
 * mainFunc() повинна повертати результат роботи переданої їй поворотної функції, наприклад:
 * mainFunc(2, 5, cbRandom) → випадково від 2 до 5 включно
 * mainFunc(10, 30, cbRandom) → випадково 10..30 включно
 * mainFunc(2, 5, cbPow) → 32
 * mainFunc(2, 5, cbAdd) → 7
 * mainFunc(2, 5, 'not a func') → false
 */

// console.log(mainFunc(2, 5, cbRandom)) // цілі числа в діапазоні 2..5
// console.log(mainFunc(2, 5, cbPow)) // 32
// console.log(mainFunc(2, 5, cbAdd)) // 7
// console.log(mainFunc(2, 5, 'not a func')) // false

export function mainFunc(a, b, callback) {
  if (typeof callback !== "function") {
    return false;
  }
  return callback(a, b);
}

export function cbRandom(min, max) {
  // Math.random() дає [0, 1), тому домножуємо і округлюємо
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function cbPow(num, pow) {
  return Math.pow(num, pow);
}

export function cbAdd(a, b) {
  return a + b;
}

console.log(mainFunc(2, 5, cbRandom)); // цілі числа в діапазоні 2..5
console.log(mainFunc(2, 5, cbPow)); // 32
console.log(mainFunc(2, 5, cbAdd)); // 7
console.log(mainFunc(2, 5, "not a func")); // false