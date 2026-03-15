//В окремому файлі створіть клас "Електронна книга" (EBook), 
// який буде успадковувати властивості та методи класу Book. 
// Додайте до класу EBook нову властивість, наприклад, "формат файлу".
//  Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація 
// про екземляр EBook (все те саме що і для Book але ще формат файлу). 
// Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo

//Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook.
//  В сеттерах необхідно додати валідацію для переданих значень.
//  Використовуйте їх для зміни та отримання значень властивостей.

//Створіть статичний метод для EBook який буде приймати як аргументи 
// екземпляр класу Book і формат файлу як рядок
//  та повертати екземпляр класу EBook

import { Book } from "./Book.js";
export class Ebook extends Book {// we export to allow parent to import it
    
    constructor (title, author,year,formatFile){
        super (title, author, year) // we inherit, call parent  constructor
        this.formatFile = formatFile;
               
    }

    static eBookMethod(book, formatFile) {// метод перетворює Book → Ebook.
        const ebook = new Ebook (book.title,book.author,book.year,formatFile)// instance of EBook class
        return ebook;
    }
    // getter
   
    get formatFile(){
        return this._formatFile; // це як віконце: ти питаєш, що всередині, і тобі показують.
        //Наприклад: «Яка назва книги?» → getter повертає назву.
        // _fromatFile - схованa внутрішня змінна
    }
    
    set formatFile(value){ //setter перевіряє
        if (value !==  "pdf" && value!== "epub" && value!== "fb"){
            console.log (" Your book is in a wrong format")
        } else 
     this._formatFile = value;//_це приватна змінна, не чіпай її напряму, тільки через getter/setter
        // ми зберігаємо значення всередині сейфу, setter doesnt return-  геттер може його повертати
    }

    printInfoEBook(){ // method
        console.log(`This is all information we have aboout eBook: ${this.title},${this.author},${this.year},${this.formatFile}`)

    }
}

const eBook1= new Ebook ("Choice", " Edit Eger", 1999,"pdf")// instance of our class, exzemplar
const eBook2= new Ebook ("Choice1", " Edite Eger", 1999,"abd")

eBook1.printInfoEBook()
eBook2.printInfoEBook()