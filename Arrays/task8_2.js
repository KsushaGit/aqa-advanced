//Вам потрібно створити програму, яка мутує значення кожного елемента в масиві
// за допомогою методу map.
//Ось кроки, які вам потрібно виконати:
//Створіть початковий масив, наприклад, [1, 2, 3, 4, 5].
//Створіть новий масив, де кожне значення це елемент вихідного масиву 
// помножений на значення індексу відповідного елемента початкового масиву.
//Виведіть новий масив на консоль.

const numbers = [6,3,7,9,2]

const newArr = numbers.map(myFunction)// map sends element and index

// if the same const newArr = numbers.map((num, index) => num* index)
//const arr2 =numbers.map((num) => num * 2) optional 

function myFunction (num,i){//element and index
    return num *i
}
console.log(numbers)
console.log(newArr)
//console.log(arr2)