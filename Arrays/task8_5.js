// Об'єднання масивів
//Вам потрібно створити програму, яка об'єднає два масиви в один
//Ось кроки, які вам потрібно виконати:
//Створіть два масиви, наприклад, firstArray і secondArray, 
// які містять деякі значення.
//Створіть новий масив, який містить всі елементи з обох вихідних масивів.
//Виведіть отриманий об'єднаний масив на консоль

const firstArray =["banana","orange", "cherry"]
const secondArray = [5,7,9,2,4]

const unitedArray = firstArray.concat(secondArray)
console.log(unitedArray)