// # Declaring Functions 

// #### 1. Multiply - Function Declaration
//     * Create a function that multiples a number by another number.

function multiply(number1, number2) {
    console.log(number1 * number2);

}
multiply(3, 5);

// #### 2. Multiply - Function Declarations as Values
//     * Rework the syntax of the above function so that the function declaration is stored as a value.
const two = function (number1, number2) {
    console.log(number1 * number2);
}
two(5, 5);



// #### 3. Multiply - Arrow Function
//     * Rework the syntax of the function declaration so that is uses the arrow function shorthand.

const number = (one, two) => {
    const multiply = one * two;
    console.log("Two numbers multiplied and the answer is ", multiply);
}
number(4, 5);



// #### 4. Declarations
//     * Create functions(using all three declarations) to check the remainder of division given two numbers.

function testone(number1, number2) {
    console.log(number1 % number2);

}
multiply(10, 5);
