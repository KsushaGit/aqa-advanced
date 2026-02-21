//Завдання 2

//Створіть функцію яка приймає один параметр: age.
//Усередині функції перевірте, чи age більше або рівне 18.
//Якщо age відповідає умові, поверніть true, інакше поверніть false.
//Викличте вашу функцію з аргументами 25 і 15, і виведіть результат 
// (чи є особа дорослою) в консоль для кожного випадку.

const isAdult =  (age) => {

 if (age >=18){
    console.log (`This person is adult : ${age} y.o`)
 } else {
    console.log (`This person is not adult : ${age} y.o`)
 }
return age
}
isAdult(15)
isAdult(25)


//version 2:
const canVote =  (age) => {

 if (age >=18){
    return true;
 } else{
     return false 
 }

}
console.log(canVote (15));
console.log(canVote (25));