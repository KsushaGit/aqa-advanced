// optional just my attempts to train recursion



// Sum numbers from N to 0
//Create a recursive function that returns the sum of all numbers from N down to 0.

const sum = (n) =>{
    if (n===0) return 0 ;// if we write n= 0 it will be an assignment, n===0 its a comparison
    return n+ sum(n-1);
    
}
console.log(sum (3));