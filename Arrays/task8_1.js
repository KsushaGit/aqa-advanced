// Створіть масив чисел за допомогою конструкції const numbers = [2, -5, 0, 7, -3, 0, 10, -8]
//Задайте змінні positiveCount, negativeCount та zeroCount зі значенням 0. 
// Вони будуть використовуватись для відстеження кількості позитивних, негативних 
// та нульових чисел в масиві.
// Використовуючи цикл for, пройдіться по кожному елементу масиву numbers.
//Перевірте чи число позитивне, негативне чи нульове, 
// та збільште відповідну змінну (positiveCount, negativeCount або zeroCount) на 1.
//Після завершення циклу виведіть значення змінних positiveCount, 
// negativeCount та zeroCount на консоль.
//Ваша програма повинна коректно підрахувати та вивести кількість позитивних, 
// негативних та нульових чисел в заданому масиві.

const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
var positiveCount =0;
var negativeCount =0;
var zeroCount = 0;

//const positiveArray =[] 
//console.log(positiveArray)
//for (let number =0; number< numbers.length;  number++) {
//if ( numbers[number] >0){
  //  positiveCount++;
    
//}
//const positiveArray =numbers.push(numbers[number])
//}


for (let number =0; number< numbers.length;  number++) {
if ( numbers[number] >0){
    positiveCount++;
}
}
for (let number of numbers ){
if (number <0){
    negativeCount++;
}
}

for (let number of numbers){
if (number == 0)
    zeroCount++;

}
console.log(`The quantiy of positive items: ${positiveCount}`)
console.log(`The quantiy of negative items: ${negativeCount}`)
console.log(`The quantiy of zero items: ${zeroCount}`)