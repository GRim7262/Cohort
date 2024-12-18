// Regular function to calculate the sum of two numbers
function sum(a, b) {
    return a + b; // Adds the two numbers and returns the result
}

console.log(sum(2, 2)); // Output: 4

// Arrow function with a block body to calculate the sum of two numbers
const arrowSum = (a, b) => {
    return a + b; // Adds the two numbers and returns the result
}

console.log(arrowSum(3, 3)); // Output: 6

// Arrow function with a concise body to calculate the sum of two numbers
// When there's only one expression, the `return` keyword and curly braces can be omitted
const arrowSum2 = (a, b) => a + b;

console.log(arrowSum2(10, 10)); // Output: 20
