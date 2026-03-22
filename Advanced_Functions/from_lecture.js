function result(res){ // res=sum
    console.log ("Result is",res)

}

function calculate (a,b, callback){
   
    const sum = a+b;
     return callback (sum)

}
calculate (4,5,result)// callback is HOF, result is callback

//HOF 
// higher-order function (HOF) is ANY function that
//takes another function as an argument, or returns a function.
// A callback is just a function that is passed into another function to be executed later.
//A HOF is the function that receives the callback or returns a function.

//Callbacks are the passengers.
//HOFs are the drivers.

//Щоб бути HOF, функція повинна виконати ХОЧ ОДНЕ з:
//прийняти функцію як аргумент
//повернути функцію

//Callback = recipe , HOF = chef
//The chef takes your recipe and decides when and how to cook it.


function processArray(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];

// Використання високорівневої функції з колбеком для обробки масиву
const squaredNumbers = processArray(numbers, function (x) {
  return x * x;
});

console.log(squaredNumbers);


// Anonymised function- wt name
const greet = function () { //no name function ()
  console.log("Hello");
}
setTimeout(function() { // анонімна функція використовується як колбек зазвичай, вона одноразова, не треа ім"я
  console.log("Done!");
}, 1000);

// IIFE- immediately invoked function expression,
//  просто функція, яка: визначена і одразу ВИКЛИКАНА
//  Тобтнаписав → і вона відразу запустилсь
(function() { // спереду дужка
  console.log("IIFE running!");
})();// оці дужки запускають функцію

(function() {
  console.log("I did my job and gone!");
})(); // існує тільки всередині IIFE — це безпечний ізольований блок.

// Amnonym function
() => console.log("Hello");

// IIEF - launches itself
(() => console.log("Hi"))();

// Closures = функція з пам’яттю
// It is used for private variables or functions that “remember” something.
// A closure allows you to preserve state.
// A function remembers the variables of its outer function.
function makeCounter() {
  let count = 0;

  return function() { //функція без імені (callback), яка повертається.
    count += 1;
    return count;
  };
}

const counter = makeCounter();// тепер самостійна функція, яку можна викликати.І вона пам’ятає змінну count, 
// навіть після того, як makeCounter() закінчила роботу.

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// one more example
function greet1(name) {
    return function (message){
        console.log (`Hello ${name}, ${message}`)
    }

}
const greetJohn = greet1 ("JoHn");// Ця внутрішня функція пам’ятає name,
//  навіть після того, як greet вже закінчилася
greetJohn ("How are you doing? ") ;
greetJohn (" Good buy");

//Currying is the process of transforming a function that takes multiple arguments 
// into a sequence of functions, each taking one argument.
//In other words:
// Instead of calling f(a, b, c), you call f(a)(b)(c).
//Створює reusable функції

function add (a){
    return function(b){
        return a+b;
    }

}
const add5= add(4)// closure, return a new function, which remembers a value
console.log(add5(5))//9 this is b argument
console.log(add5(10))//14 again b argument
// we create new re-usable function add5
// this is for Api or validation
// we can create like pattern for functions


// Composition
//Function composition – це коли ми об’єднуємо кілька функцій у 
// одну, щоб результат однієї функції передавався наступній.
//f(g(x)) → композиція

function double(x) {
    return x *2;
}

function square (x){
    return x *x
}
// composition :square first, double next

const doubleSquare = (x) => double(square(x));
console.log(doubleSquare(4)) // (4*4)*2=32

//just one more example
const trim = str => str.trim();
const toLower = str => str.toLowerCase();
const removeSpaces = str => str.replace(/\s/g, "");
// define compose
const compose = (f, g) => (x) => f(g(x));
const cleanInput = compose(removeSpaces, compose(toLower, trim));

console.log(cleanInput("  Hello World  ")); // "helloworld"

// Recursion is when a function calls itself.
// Think of it like a worker asking the same worker to do a 
// smaller piece of the task until it’s done. (Matryoshka)
// Base case → stops the recursion
//Recursive case → function calls itself with a smaller/simpler input

function factorial(n) {
  if (n === 0) return 1; // base case, when to stop calling itself.
  return n * factorial(n - 1); // recursive case
}

console.log(factorial(5)); // 120

