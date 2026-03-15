// У вас має бути 3 файли Book.js,EBook.js, task1.js
//Завдання 1

//Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання".
// Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. 
// Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.


//Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook. 
// В сеттерах необхідно додати валідацію для переданих значень. 
// Використовуйте їх для зміни та отримання значень властивостей.

export class Book {
    constructor(title, author, year) {//method, It is used to initialize object properties
        // "назва", "автор" і "рік видання"
        this.title = title;
        this.author = author;
        this.year = year;
    }

     get title(){
        return this._title;
    }
    set title(value){
        if (value.length <3){
            console.log("Your title is too short")
            return; // це не повертає значення, просто вихід із функції
        }
        this._title =value;
    }


    printInfo(){
        console.log(`This is a full description of the book: ${this.title}, ${this.author}, ${this.year}`) 
    }

}

 /*
const book1 = new Book("Funny Story","Emily Henry", 2026) // we  created an object of the class
const book2 = new Book("Good to Creat","Jim Collins", 2000)
const book3 = new Book("G","Jim Collins", 2000)

book1.printInfo();
book2.printInfo();
book3.printInfo();
*/