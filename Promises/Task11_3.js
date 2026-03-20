// використовуючи конструкцію async/await для функції що виконує запити

 async function openLink (url) {// Функція, яка робить запит до URL і повертає Promise
   const response = await fetch(url) // fetch сам по собі повертає Promise
   
        if (!response.ok) {
            throw new Error ("S,th went wrong"+ response.status);
        }
      return response.json();// отримуємо object, json
};
function getToDo (){
    return openLink("https://jsonplaceholder.typicode.com/todos/1")
}
function getUser(){
    return openLink("https://jsonplaceholder.typicode.com/users/1")
}

// array- масив з функціями

const array =[
    getToDo(),
    getUser(),
]

getToDo()
    .then (data => {
        console.log ("data received from TOdo")
        console.log (data);// тут текст відповіді
    })
    .catch (error => {
        console.log ( " error during opening the link")
        console.log (error.message);
    })

    getUser()
    .then (data => {
        console.log ("data received from User")
        console.log (data);// тут текст відповіді
    })
    .catch (error => {
        console.log ( " error during opening the link")
        console.log (error.message);
    })


    const allResult = Promise.all(array)
        .then (data => {
        console.log ("data received from allResult")
        console.log (data);// тут текст відповіді
    })
    .catch (error => {
        console.log ( " error during opening the link")
        console.log (error.message);
    })
    const raceResult =Promise.race(array)
    .then (data => {
        console.log ("data received from  raceResult")
        console.log (data);// тут текст відповіді
    })
    .catch (error => {
        console.log ( " error during opening the link")
        console.log (error.message);
    })

