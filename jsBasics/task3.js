//Створіть змінну яка буде символізувати вік певної персони.

//Після чого створіть булеву змінну яка буде визначати чи особа повнолітня 
// базуючись на заченні з попередньої змінної.
//Виведіть усі змінні в консоль


import chalk from 'chalk';

var age= 19;
var age1 = 17;
var isAdult= age >= 18;
var isAdult1= age1 >= 18;

console.log(age);
console.log(isAdult);
console.log("This person is adult:", isAdult);
console.log(chalk.red("This person is adult:"), isAdult1,"because the age is", chalk.red(age1));

// Variant 2
var age2 =16;
var isMore18 = true;

var canVote = age2 && isMore18; // sttrictly true
console.log("This person can vote:",canVote)






