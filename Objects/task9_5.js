// Створіть масив об'єктів users де обєкти мають довільні властивості 
// (наприклад, name, email, age, тощо).

// Використовуючи цикл for...of, переберіть всі елементи масиву 
// та виведіть їхні значення в консоль.
//Зробіть деструктуризацію в циклі

const users =[
    {firstName: "Ostap", city:"Kharkiv",age: 23},
    {firstName: "Taras", city: "Poltava", age: 24},
    {firstName: "Bulba", city: "Cherkassi", age: 30}
]

console.log (users)

// for (let number of numbers){

for (const user of users){ // перебір кожного елементу масиву
    const  { firstName, city, age} = user; // деструктуємо властивості object into var
    console.log( firstName, city, age)// data of each user
}
