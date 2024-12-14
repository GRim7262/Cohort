// Loop - Calculate sum form 0 to 100

// let sum = 0;

// for (let i = 0; i <= 1000; i++) {
//     sum += i;
// }

// console.log(sum);

// Function - Calculate sum form 0 to 100

// function findSum(n) {
//     let ans = 0;
//     for (let i = 0; i <= n; i++) {
//         ans += i;
//     }
//     return ans;
// }

// const value = findSum(1000);
// console.log(value);

// const value2 = findSum(100);
// console.log(value2);

// Callbacks - without callback

// - Finds the square root of the input
// function square(n) {
//     return n * n;
// }

// function cube(n) {
//     return n * n * n;
// }

// - Finds the sum of the squares of the inputs
// function sumOfSquares(a, b) {
//     const val1 = square(a);
//     const val2 = square(b);

//     return val1 + val2;
// }

// function sumOfCubes(a, b) {
//     const val1 = cube(a);
//     const val2 = cube(b);

//     return val1 + val2;
// }

// const value = sumOfSquares(1, 2);
// console.log(value);

// const value2 = sumOfCubes(2, 2);
// console.log(value2);

// with Callback

function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}

function sumOfSomething(a, b, fn) {
    const val1 = fn(a);
    const val2 = fn(b);

    return val1 + val2;
}

const ans = sumOfSomething(1, 2, square);
console.log(ans);

const ans2 = sumOfSomething(2, 2, cube);
console.log(ans2);

// Anonymous function 
const ans3 = sumOfSomething(2, 2, function (n) { // notice, we did not named the function
    // and ran it inside argument
    return n * n * n;
});
console.log(ans3);