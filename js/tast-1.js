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

// function min(a = 10, b = 5) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return 'Not a number';
//   }
//   return Math.min(a, b);
// }
// console.log(min(7, 20));

//TODO:=========task-06=================
//Напишіть функцію calculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function calculateAverage() {
//   let total = 0;
//   let count = 0;
//   for (const arg of arguments) {
//     if (typeof arg !== 'number') {
//       continue;
//     }
//     total += arg;
//     count += 1;
//   }
//   return Math.floor(total / count);
// }
// console.log(calculateAverage(2, 20, 45));
// console.log(calculateAverage(4, 5, 10, 20, 30));
// console.log(calculateAverage(5, 5, 5, 5, '5'));

// * Літерал об'єкта
//TODO:============task-1=========================
// Створіть об'єкт "людина" з властивостями "ім'я", "хобі" і "вік". Напишіть метод "greet", який буде виводити на екран привітання з ім'ям людини.
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'

// const human = {
//   userName: 'Bob',
//   hobby: 'Football',
//   age: 30,
//   greet() {
//     console.log(`hello ${this.userName}`);
//   },
// };
// console.log(human.userName);
// console.log(human.greet());
// console.log(human['age']);
// console.log(human['hobby']);
// human.mood = 'happy';
// human.hobby = 'skydiving';
// console.log(human);
// console.log(human.hobby);

// const newHuman = Object.create(human);
// newHuman.userName = 'Mango';
// // console.log(newHuman);
// // console.log(newHuman.greet());

// // window.console.log(1);

// for (const key in newHuman) {
//   if (newHuman.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

//TODO:============task-2==============================================
// 4. Створіть об'єкт "кошик" зі списком товарів та їх цін. Напишіть метод "calculateTotal", який буде обчислювати загальну суму товарів у кошику.

// const cart = {
//   products: ['apple', 'banana', 'kivi'],
//   price: [30, 70, 60],
//   calculateTotal() {
//     let total = 0;
//     for (const num of this.price) {
//       total += num;
//     }
//     return total;
//   },
// };
// console.log(cart.calculateTotal());

//TODO:============task-3==============================================
// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance".
//  Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок,
//  та метод "withdraw", який дозволяє знімати гроші з рахунку.
//  Методи повинні спрацьовувати при натисканні на кнопки “поповнити рахунок”
// та отримати ‘готівку’ відповідно.Після проведення операції виводити повідомлення про залишок на рахунку.

// const bankAccount = {
//   ownerName: '',
//   accountNumber: null,
//   balance: 0,
//   deposit(sum) {
//     this.balance += sum;
//     return `Ваш рахунок поповнено на сумму: ${sum}$, Ваш баланс складає ${this.balance}$`;
//   },
//   withGrow(sum) {
//     if (this.balance < sum) {
//       return 'Недостатньо коштів';
//     }
//     this.balance -= sum;
//     return `Знято: ${sum}$, Ваш баланс складає ${this.balance}$`;
//   },
// };

// // console.log(bankAccount.deposit(1000));
// // console.log(bankAccount.withGrow(1000));

// const userAndrii = Object.create(bankAccount);
// userAndrii.ownerName = 'Andrii';
// userAndrii.accountNumber = 1;
// userAndrii.balance = 1000;
// // console.log(userAndrii);
// console.log(userAndrii.deposit(1000));
// console.log(userAndrii.withGrow(200));
