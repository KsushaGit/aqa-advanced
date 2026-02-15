//Завдання 4.1

//π - число “пі”. Ви можете використати Math.PI у вашому дз для вираження цього числа

//Створіть змінну radius і присвойте їй числове значення радіуса кола.
//Обчисліть площу кола за формулою π * radius^2 і виведіть результат.
//Завдання 4.2

//Створіть змінну length і присвойте їй числове значення довжини прямокутника.
//Створіть змінну width і присвойте їй числове значення ширини прямокутника.
//Обчисліть площу прямокутника за формулою length * width і виведіть результат.
//Завдання 4.3

//Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
//Створіть змінну height і присвойте їй числове значення висоти циліндра.
//Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.
//Округліть кожне отримане значення до 2 значень після крапки

//4.1

var radius = 5.67688798;
const p = 3.14159;
var squareCircle = (radius*radius*p).toFixed(2);

console.log(`The square of circle is: ${squareCircle} cm2`);

//4.2
var length = 4;
var width = 12;
var squareRectangle = length * width;
console.log (`The square of rectangle is: ${squareRectangle} cm2`)

//4.3
var radiusCylinder = 5.1;
var heightCyliner = 20.5;
var volumeCylinder = ( p * radiusCylinder *radiusCylinder *heightCyliner).toFixed(2)
console.log(`The volume of Cylinder is: ${volumeCylinder} cm3`);
