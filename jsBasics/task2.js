// concatenation of strings
//Створіть дві змінні, які містять імена двох осіб. 
// Використовуючи конкатенацію рядків, створіть новий рядок,
//  який містить вітання для обох осіб. 
// Виведіть результат в консоль. 
// Потім використайте шаблонний рядок для створення того ж вітання. 
// Виведіть результат в консоль

let person1 = "Harry"
let person2 = "Megan"

let greeting = "Hello"+ " " + person1 + ", " + "Hello"+ " " + person2 +"!"
console.log(greeting)
console.log (`Hello ${person1}, Hello ${person2}!`)