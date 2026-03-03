//Створіть функцію divide, яка приймає два параметри: numerator і denominator 
// та повертає як результат виконання число отримане від ділення.
//У функції треба поділити numerator на denominator і повернути результат.

//Додайте валідацію в функції. У разі,
//якщо denominator дорівнює 0
//або хоча б один з аргументів не є числом, викиньте помилку з інформативним повідомленням,
//Викличте функцію divide з різними значеннями numerator і denominator, 
// включаючи випадок, коли denominator дорівнює 0 або один з аргументів не є числом.

//Огорніть кожен окремий виклик функції divide в try…catch.
// Використовуючи блок finally, виведіть повідомлення "Робота завершена" в консоль,
//  навіть якщо помилка виникла або не виникла.

const divide =(numerator, denominator) =>{
    
     
    if (denominator ===0){
        throw new Error ("Your denominator is 0,  msg from functions" )
    } else if ((typeof numerator !== "number") || ( typeof denominator !== "number")){
        throw new Error ("Your denominator or numerator is not a number: ${numerator}, ${denominator}, msg from functions")
      }  else{
    let division = numerator/denominator;
    console.log (`${division}`) 
    return division

 } }
 // calls the functions via try catch
  try { divide (8,0)
 } catch (error){
    console.log("Denominator cannot be zero")
    } finally {
  // (Optional) always runs, error or not
  console.log("Done!");
}
try { divide ("djd",7)
 } catch (error){
    console.log("Your numerator is not a number")
    } finally {
  // (Optional) always runs, error or not
  console.log("Done!");
}

try {divide (1,10)
} catch (error) {
    console.log("Smth is wrong")
}finally {
    console.log("Done")
}


