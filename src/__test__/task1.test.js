import { userObj1 } from '../task1';  // Шлях може бути іншим залежно від вашої структури файлів

describe('userObj properties tests', () => {
  test('userObj has required properties', () => {
    expect(userObj1).toHaveProperty('firstName');
    expect(userObj1).toHaveProperty('lastName');
    expect(userObj1).toHaveProperty('age');
  });

  test('firstName, lastName are strings; age is a number', () => {
    expect(typeof userObj1.firstName).toBe('string');
    expect(typeof userObj1.lastName).toBe('string');
    expect(typeof userObj1.age).toBe('number');
  });

  test('age is a valid number', () => {
    expect(userObj1.age).toBeGreaterThanOrEqual(0);  // Перевірка, що вік не менше 0
    expect(userObj1.age).toBeLessThanOrEqual(122);  // Перевірка, що вік не більше 122
  });
});
