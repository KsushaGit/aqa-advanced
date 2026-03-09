//Створіть об'єкт person з такими властивостями:
//firstName: рядок, представляє ім'я особи.
//lastName: рядок, представляє прізвище особи.
//age: число, представляє вік особи.

//Додайте до об'єкта person властивість email, яка буде містити електронну пошту особи.
//Видаліть властивість age з об'єкта person.
//Виведіть оновлений об'єкт person в консоль.

var person = {
    firstName: "Harry",
    lastName: "Style",
    age: 34,

}
person.email = "harrystyle@ukr.net" // add email
delete person.age //deleting key

console.log(person)

// option 2 with destructurisation

var person1 = {
    firstName: "Tina",
    lastName: "Karol",
    age: 42,
}

const {age, ...rest }  = person1; //deleting from person 1 
const singer = {email: "tina@ukr.net",...person1} //adding

console.log(singer)