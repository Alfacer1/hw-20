
/*
 * #6
 *
 * створіть функцію ageClassification(n), яка буде як параметр приймати будь-які числа і повертатиме рядок згідно з такими умовами, n:
 * менше 0   - null (зверніть увагу, що це саме null, а не рядок)
 * 0..24     - 'Дитинство'
 * 24+...44  - 'Молодість'
 * 44+..65   - 'Зрілість'
 * 65+..75   - 'Старість'
 * 75+..90   - 'Довголіття'
 * 90+..122  - 'Рекорд'
 * понад 122 - null (зверніть увагу, що це саме null, а не рядок)
 *
 * При виконанні завдання допускається використовувати тільки тернарний оператор ?.
 * Використання операторів if, switch - заборонено.
 */

// console.log('    -1 :', ageClassification(-1)) // -1 : null
// console.log('     0 :', ageClassification(0)) // 0 : null
// console.log('     1 :', ageClassification(1)) // 1 : Дитинство
// console.log('    24 :', ageClassification(24)) // 24 : Дитинство
// console.log(' 24.01 :', ageClassification(24.01)) // 24.01 : Молодість
// console.log('    44 :', ageClassification(44)) // 44 : Молодість
// console.log(' 44.01 :', ageClassification(44.01)) // 44.01 : Зрілість
// console.log('    65 :', ageClassification(65)) // 65 : Зрілість
// console.log('  65.1 :', ageClassification(65.1)) // 65.1 : Старість
// console.log('    75 :', ageClassification(75)) // 75 : Старість
// console.log(' 75.01 :', ageClassification(75.01)) // 75.01 : Довголіття
// console.log('    90 :', ageClassification(90)) // 90 : Довголіття
// console.log(' 90.01 :', ageClassification(90.01)) // 90.01 : Рекорд
// console.log('   122 :', ageClassification(122)) // 122 : Рекорд
// console.log('122.01 :', ageClassification(122.01)) // 122.01 : null
// console.log('   150 :', ageClassification(150)) // 150 : null

/*
 Блок тестирования, везде должны быть true:
 console.log('    -1 :', ageClassification(-1) === null); // -1 : null
 console.log('     0 :', ageClassification(0) === null) // 0 : null
 console.log('     1 :', ageClassification(1) === 'Дитинство'); // 1 : Дитинство
 console.log('    24 :', ageClassification(24) === 'Дитинство'); // 24 : Дитинство
 console.log(' 24.01 :', ageClassification(24.01) === 'Молодість'); // 24.01 : Молодість
 console.log('    44 :', ageClassification(44) === 'Молодість'); // 44 : Молодість
 console.log(' 44.01 :', ageClassification(44.01) === 'Зрілість'); // 44.01 : Зрілість
 console.log('    65 :', ageClassification(65) === 'Зрілість'); // 65 : Зрілість
 console.log('  65.1 :', ageClassification(65.1) === 'Старість'); // 65.1 : Старість
 console.log('    75 :', ageClassification(75) === 'Старість'); // 75 : Старість
 console.log(' 75.01 :', ageClassification(75.01) === 'Довголіття'); // 75.01 : Довголіття
 console.log('    90 :', ageClassification(90) === 'Довголіття'); // 90 : Довголіття
 console.log(' 90.01 :', ageClassification(90.01) === 'Рекорд'); // 90.01 : Рекорд
 console.log('   122 :', ageClassification(122) === 'Рекорд'); // 122 : Рекорд
 console.log('122.01 :', ageClassification(122.01) === null); // 122.01 : null
 console.log('   150 :', ageClassification(150) === null); // 150 : null
*/

export function ageClassification(n) {
  return n < 0 || n > 122
    ? null
    : n === 0
    ? 'Дитинство' 
    : n <= 24
    ? "Дитинство"
    : n <= 44
    ? "Молодість"
    : n <= 65
    ? "Зрілість"
    : n <= 75
    ? "Старість"
    : n <= 90
    ? "Довголіття"
    : n <= 122
    ? "Рекорд"
    : null;
}

console.log("    -1 :", ageClassification(-1)); // -1 : null
console.log("     0 :", ageClassification(0)); // 0 : null
console.log("     1 :", ageClassification(1)); // 1 : Дитинство
console.log("    24 :", ageClassification(24)); // 24 : Дитинство
console.log(" 24.01 :", ageClassification(24.01)); // 24.01 : Молодість
console.log("    44 :", ageClassification(44)); // 44 : Молодість
console.log(" 44.01 :", ageClassification(44.01)); // 44.01 : Зрілість
console.log("    65 :", ageClassification(65)); // 65 : Зрілість
console.log("  65.1 :", ageClassification(65.1)); // 65.1 : Старість
console.log("    75 :", ageClassification(75)); // 75 : Старість
console.log(" 75.01 :", ageClassification(75.01)); // 75.01 : Довголіття
console.log("    90 :", ageClassification(90)); // 90 : Довголіття
console.log(" 90.01 :", ageClassification(90.01)); // 90.01 : Рекорд
console.log("   122 :", ageClassification(122)); // 122 : Рекорд
console.log("122.01 :", ageClassification(122.01)); // 122.01 : null
console.log("   150 :", ageClassification(150)); // 150 : null