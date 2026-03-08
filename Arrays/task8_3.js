// Обчислення суми елементів масиву
// Вам потрібно створити програму, яка обчислює суму всіх елементів у масиві 
// за допомогою методу reduce.
// Ось кроки, які вам потрібно виконати:

//Створіть масив чисел, наприклад, [10, 20, 30, 40, 50].
//Використовуючи метод reduce, обчисліть суму всіх елементів масиву.
//Виведіть отриману суму на консоль.


const array =[10, 20, 30, 40, 50]

// const smth = (a, b) => a * b;
const sumElements = array.reduce((accumulator,numbers) => accumulator + numbers, 0);
console.log(`This is a sum of elements:` +" "+ sumElements)

// second variant

const sumElements2 =array.reduce(myFunction,0)// adding 0 - is safe , in case we will have an empty array

function myFunction (acc, num){
     return acc+num;
}
console.log (`${sumElements2}`)