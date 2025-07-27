/*
 * #2
 *
 * Для об'єкта з п.1 створіть метод fullName(), що повертає коректне повне ім'я, яке є конкатенацією firstName та lastName через пробіл.

 * Наприклад:
 * userObj.firstName ← 'John'
 * userObj.lastName  ← 'Smith'
 * userObj.fullName() → 'John Smith'.
 */

// console.log(userObj.fullName()) // John Smith

// task2.js
export const userObj = {
  firstName: "John",
  lastName: "Smith",
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
