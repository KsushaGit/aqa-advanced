//Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів)
//  книг та повертати найдавнішу книгу за роком видання. Викличте його в коді передавши
//  масив книг (серед них мають бути екземляри обох класів Book та EBook)

import {Ebook} from "./Ebook.js";
import {Book} from "./Book.js";// this is a call to a parent class from another file, Book-parent class

export class Task1 {
static booksMethod () {
        const book1 = new Book("Funny Story","Emily Henry", 2026);
        const book2 = new Book("","Jim Collins", 2000);
        const book3 = new Book("Good to Creat","Jim Collins", 1990);
        const eBook1 = new Ebook("Atomic Habits", "James Clear", 2018, "pdf");
        

        const shelf= [ book1,book2,book3,eBook1];
        shelf.sort ((a,b) => {
            return a.year -b.year;
        });

        const oldestBook = shelf[0]// 1st element of this array
        console.log(`This is the oldest book ${oldestBook.title}, ${oldestBook.year}`)
        
        for (let book of shelf){
            console.log(`sorting of all books: ${book.title} : ${book.year}`);
        }
    }
}
Task1.booksMethod()