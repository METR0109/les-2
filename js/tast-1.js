// ! Масиви і функції
//TODO:=========task-01=================
// Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.

// const styles = ['Jazz', 'Bluz'];

// styles.push('Rock-n-Roll');
// // styles[1] = 'Classic';
// // console.log(styles.length);
// // console.log(styles);
// styles.unshift('Tehno');
// const index = styles.indexOf('Bluz');
// styles[index] = 'Classic';
// const indx = styles.indexOf('Classic');
// if (indx !== -1) {
//   styles.splice(indx, 1);
// }

// console.log(styles.join(' '));
// console.log(styles.shift());
// // console.log(index);
// // console.log(indx);
// console.log(styles);

// for (const style of styles) {
//   console.log(style);
// }

//TODO:=========task-2=================
// Знайти всі елементи масиву, що містять задану підстроку, та об'єднати їх у новий масив, після чого вивести у консоль лог повідомлення "Масив елементів, що містять підстроку substring: ..." Результат повинен бути розділений комами та пробілами.(використати indexOf)

// const wordsArray = ['JavaScript', 'HTML', 'CSS', 'React'];
// const substring = 'S';
// const arr = [];

// for (const word of wordsArray) {
//   if (word.includes(substring)) {
//     arr.push(word);
//   }
// }

// console.log(`Масив елементів, що містять підстроку substring: ${substring}: ${arr.join(',')}`);

//TODO:=========task-3=================
// Створити масив з 10-ти чисел. Напиши функцію яуа буде шукати найбільше число.
// const numbersArray = [1, 0, 5, 46, 23, 15, 4, 800, 7];

// // function findMaxNumber(array) {
// //   const max = Math.max(...array);
// //   return max;
// // }
// // console.log(findMaxNumber(numbersArray));

// function findMaxNumber(array) {
//   const max = array[0];
//   for (const number of array) {
//     if (max < number) {
//       max = number;
//     }
//   }
//   return max;
// }

// console.log(findMaxNumber(numbersArray));

//TODO:=========task-4=================
// Створи 2 масиви чисел. Обьеднай їх за допомогою методу масиву. Створи нові масив і за допомогою циклу for або for..of, в перший масив збери усі парні числи, а в другій усі не парні і виведи їх в консоль.

// const firstArray = [1, 2, 3, 5, 4];
// const secondArray = [10, 21, 33, 55, 44];

// const united = firstArray.concat(secondArray);

// let oddNumArr = [];
// let evenNumArr = [];

// for (const number of united) {
//   if (number % 2 === 0) {
//     evenNumArr.push(number);
//   } else {
//     oddNumArr.push(number);
//   }
// }

// console.log(oddNumArr, evenNumArr);

//TODO:============task-05==============
// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа

function min(a, b) {
  return Math.min(a, b);
}
console.log(min(5, 9));
