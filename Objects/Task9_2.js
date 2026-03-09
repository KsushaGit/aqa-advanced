// Створіть об'єкт book з такими властивостями:
// title: рядок, представляє назву книги.
// // author: рядок, представляє автора книги.
//year: рядок, представляє ім'я власника автомобіля
//Деструктуризуйте назву та автора книги з об'єкта book.
// Виведіть деструктуризовані змінні в консоль

var book = {
    //title:"Funny Story", 
    //author: "Emily Henry",
    year: 2023,

}
//object destructuring
const { title ="Empireland", author ="Sanghera", year} = book


console.log (title, author )
// Object destructuring — це синтаксис, який дозволяє 
// витягувати властивості з об’єкта і присвоювати їх змінним в один рядок.