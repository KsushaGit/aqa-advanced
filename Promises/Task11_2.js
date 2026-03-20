// В цьому завданні вам потрібно використовувати then() та catch() 
// для обробки результатів виконання промісу

// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
//<https://jsonplaceholder.typicode.com/todos/1>

//Функція повинна повертати як результат Promise що повертає об’єкт todo

//Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// <https://jsonplaceholder.typicode.com/users/1>
// Функція повинна повертати як результат Promise що повертає об’єкт user

//Викорситайте методи Promise.all та Promise.race передавши
//  їм як аргумент масив з викликами функцій з п.п. 1-2. 
// Присвойте значення отримані від цих виразів до змінних

function openLink (url) {// Функція, яка робить запит до URL і повертає Promise
    return fetch (url) // fetch сам по собі повертає Promise
    .then (response =>  {
        if (!response.ok) {
            throw new Error ("S,th went wrong"+ response.status);
        }
      return response.json();// отримуємо object, json
});
}
// Використання функції
openLink ("https://jsonplaceholder.typicode.com/todos/1")
    .then (data => {
        console.log ("data received from TOdo")
        console.log (data);// тут текст відповіді
    })
    .catch (error => {
        console.log ( " error during opening the link")
        console.log (error.message);
    })
openLink ("https://jsonplaceholder.typicode.com/users/1")
    .then (data => {
        console.log ("data received from User")
        console.log (data);// тут текст відповіді
    })
    .catch (error => {
        console.log ( " error during opening the link")
        console.log (error.message);
    })

const links =[
    openLink ("https://jsonplaceholder.typicode.com/todos/1"),
    openLink ("https://jsonplaceholder.typicode.com/users/1")
]

const allResult = Promise.all(links)
const raceResult =Promise.race(links)

allResult.then(data => { 
    console.log("Promise.all result:", data)
})

raceResult.then(data => {
    console.log("Promise.race result:", data)
})