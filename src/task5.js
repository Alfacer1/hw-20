/*
 * #5
 *
 * Створіть функцію weekFn(n), яка приймає номер дня тижня, а повертає його назву.
 * Якщо вводиться рядок, будь-яке дробове число або число поза діапазоном 1...7 - функція повинна повернути null.
 *
 * Наприклад:
 * 1   → 'Понеділок'
 * 2   → 'Вівторок'
 * ...
 * 7   → 'Неділя'
 * 9   → null
 * 1.5 → null
 * '2' → null
 * У реалізації функції обов'язково мають бути використані оператори switch / case / default.
 */

// console.log(weekFn(1))   // 'Понеділок'
// console.log(weekFn(3))   // 'Середа'
// console.log(weekFn(7))   // 'Неділя'
// console.log(weekFn(9))   // null
// console.log(weekFn(1.5)) // null
// console.log(weekFn('2')) // null

export function weekFn(n) {
  if ((typeof n !== "number" && !Number.isInteger(n) && n < 1) || n > 7) {
    return null;
  }

  switch (n) {
    case 1:
      return "Понеділок";
    case 2:
      return "Вівторок";
    case 3:
      return "Середа";
    case 4:
      return "Четвер";
    case 5:
      return "П'ятниця";
    case 6:
      return "Субота";
    case 7:
      return "Неділя";
    default:
      return null;
  }
}

console.log(weekFn(1)); // 'Понеділок'
console.log(weekFn(3)); // 'Середа'
console.log(weekFn(7)); // 'Неділя'
console.log(weekFn(9)); // null
console.log(weekFn(1.5)); // null
console.log(weekFn("2")); // null


