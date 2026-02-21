// Створіть функцію яка приймає два параметри: width і height.
//Усередині функції обчисліть площу прямокутника, перемноживши width на height 
// та поверніть результат з функції.
//Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника)
//  в консоль.
//Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)



// Declarative function

squareRectangle (4,8);
function squareRectangle (width, height){
    let square = width*height;
    console.log (` Square is ${square}, counted via declarative function`);
    return square;
} 

// Functions expression or anonymous function

const squareRectangle1 = function(width,height) {
   let square =  width*height;
    console.log (`${square } is via expression (anonymous) function` );
    return square;
}
squareRectangle1(6,7)

const result = squareRectangle3 (7,9)
console.log (result)
function squareRectangle3(width,height){
    return width*height;
}


// Arrow function
const squareRectangle2 = (width, height) => {
let square =  width*height;
    console.log (`${square } is via Arrow function` );
    return square;

}
squareRectangle2(18,7)
// just shorter way of arrow function
const squareRect = (width, height) => width*height
console.log (squareRect(10,10))