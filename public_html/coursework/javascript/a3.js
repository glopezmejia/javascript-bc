
//experimenting with the code in the book 
let now = new Date();
console.log("This website was opened at " + now);

console.log("Hi, welcome to Assignment 3");

let num1 = 0xff;
console.log(num1 + " in hexadecimal is : 0xff");

let num2 = 1.478223E-32; 
console.log("num2 is a floating point number : " + num2);

let num3 = Math.pow(89.4,4);
console.log("89 to the power of 4 is : " + num3);

console.log("let's round that up to : " + Math.round(num3));

console.log("The biggest number between " + num1 + " , " + num2 + ", and " + num3 + " is : " + Math.max(num1,num2,num3));

console.log("The smallest is : " + Math.min(num1, num2, num3));

console.log("Square root of " + num1 + " = " + Math.sqrt(num1));

console.log(Number.MAX_VALUE + " is the MAX value");







//lecture 3 demo:

const additionButton = document.querySelector("#computeAddition");
const subtractionButton = document.querySelector("#computeSubtraction");
const multiplicationButton = document.querySelector("#computeMultiplication");
const divisionButton = document.querySelector("#computeDivision");
const exponentButton = document.querySelector("#computeExponent");
const squareRootButton = document.querySelector("#computeSquareRoot");


const add = function () {

    const input1 = document.querySelector("#input1")
    const value1 = input1.value

    const input2 = document.querySelector("#input2")
    const value2 = input2.value

    let addition = value1 + value2
    addition = parseInt(value1) + parseInt(value2)
    addition = Number(value1) + Number(value2)
    addition = +value1 + +value2

    const additionInput = document.querySelector("#result")
    additionInput.value = addition

}

const subtract = function () {
    
    const input1 = document.querySelector("#input1")
    const value1 = input1.value

    const input2 = document.querySelector("#input2")
    const value2 = input2.value

    let subtraction = parseInt(value1) - parseInt(value2);

    const subtractionInput = document.querySelector("#result");
    subtractionInput.value = subtraction;
}

const multiply = function () {
    
    const input1 = document.querySelector("#input1")
    const value1 = input1.value

    const input2 = document.querySelector("#input2")
    const value2 = input2.value

    let multplication = parseInt(value1) * parseInt(value2);

    const multiplicationInput = document.querySelector("#result");
    multiplicationInput.value = multplication;
}

const divide = function () {
    
    const input1 = document.querySelector("#input1")
    const value1 = input1.value

    const input2 = document.querySelector("#input2")
    const value2 = input2.value

    let division = parseInt(value1) / parseInt(value2);

    const divisionInput = document.querySelector("#result");
    divisionInput.value = division;
}

const powerOf = function () {
    
    const input1 = document.querySelector("#input1")
    const value1 = input1.value

    const input2 = document.querySelector("#input2")
    const value2 = input2.value

    let expression1 = Math.pow(parseInt(value1), parseInt(value2));

    const expression1Input = document.querySelector("#result");
    expression1Input.value = expression1;
}


const squareRootOf = function () {
    
    const input1 = document.querySelector("#input1")
    const value1 = input1.value

    //no input 2 required for this operation

    let expression2 = Math.sqrt(parseInt(value1));

    const expression2Input = document.querySelector("#result");
    expression2Input.value = expression2;
}



additionButton.addEventListener("click", add)
subtractionButton.addEventListener("click", subtract)
multiplicationButton.addEventListener("click", multiply)
divisionButton.addEventListener("click", divide)
exponentButton.addEventListener("click", powerOf)
squareRootButton.addEventListener("click", squareRootOf)
