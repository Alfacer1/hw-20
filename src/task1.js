/*
 * #1
 *
 * Створіть об'єкт userObj, що описує людину.
 *
 * Наступні поля обов'язкові:
 * firstName - будь-яке ім'я, рядок
 * lastName - будь-яке прізвище, рядок
 * age - будь-який вік, число
 */

// console.log(userObj)

export const userObj1 = {
  firstName: "John",
  lastName: "Smith",
  age: 30,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
