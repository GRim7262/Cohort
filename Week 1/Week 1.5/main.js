// Synchronous way

// function sum(n) {
//     let finalSum = 0;
//     for (let i = 0; i <= n; i++) {
//         finalSum += i;
//     }
//     return finalSum;
// }

// console.log(sum(100));

// Asynchronous Way

// function sum(n) {
//     let finalSum = 0;
//     for (let i = 0; i <= n; i++) {
//         finalSum += i;
//     }
//     return finalSum;
// }

// function findSumTill100() {
//     console.log(sum(100));
// }

// setTimeout(findSumTill100, 1000);
// console.log("Hello");

// Async Function - filesystem

const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) {
    console.log(data);
});

console.log("Hi there");