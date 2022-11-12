
// greeting inside the console 
console.log("Hello World");

// this is some practice 

let primes = [2,3,5,7];
console.log("Some prime numbers include : " + primes)


console.log("The last prime in our array is : " + primes[primes.length-1]);

console.log("The prime in the 0th index is : " + primes[0]);

function fact(x) { // function for factorial
    if (x>1) return x * fact(x-1)
    else return 1;
}

console.log("4! is equal to : " + fact(4));

const plus1 = x => x + 1; 
const square = x => x * x; 

console.log("3 + 1 = " + plus1(3)); 
console.log("4^2 =  " + square(4)); 


function sumArray(array){ // function that adds the elements inside an array
    // variable that stores the sum 
    let sum = 0; 
    for (let x of array) {
        sum = sum + x; 
    }
    console.log(sum);
}

console.log("The sum of the prime numbers = ");
sumArray(primes);



