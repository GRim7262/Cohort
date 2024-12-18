// Sync Function
// function findSum(n) {
//     let ans = 0;
//     for (let i = 0; i <= n; i++) {
//         ans += i;
//     }
//     return ans;
// }

// console.log(findSum(100));

// Async - setTimeout Function

// function findSum(n) {
//     let ans = 0;
//     for (let i = 0; i <= n; i++) {
//         ans += i;
//     }
//     return ans;
//     // console.log(ans);
// }

// function findSumTill100() {
//     console.log(findSum(100));
//     // return findSum(100);
// }

// setTimeout(findSumTill100, 1000);
// console.log("Hello world");

// fs.readFile

// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function (err, data) {
//     console.log(data);
// })

// Bad example - Our own async function

// const fs = require("fs");

// function kiratReadsFile() {
//     return new Promise(function(resolve){
//     fs.readFile("a.txt", "utf-8", function(err, data){
//         resolve(data);
//     })
//     })
// }

// function onDone(data) {
//     console.log(data);
// }

// kiratReadsFile().then(onDone);

// const p = new Promise(function (resolve) {
//     resolve("Hi there");
// })

// p.then(function () {
//     console.log(p)
// });

// Promise function

// function kiratAsyncFunction() {
//     return new Promise(function (resolve) {
//         resolve("Hi there");
//     })
// }

// kiratAsyncFunction().then(function (data) {
//     console.log(data);
// })

// Promise function - 2

// function kiratAsyncFunction() {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, 2000);
//     })
// }

// kiratAsyncFunction().then(function () {
//     console.log("Hi there");
// })

// Normal promisified syntax

// function kiratAsyncFunction() {
//     return new Promise(function (resolve) {
//         resolve("Hi there");
//     })
// }

// function main() {
//     kiratAsyncFunction().then(function (data) {
//         console.log(data);
//     })
// }

// main();

// Async/Await syntax

// function kiratAsyncFunction() {
//     return new Promise(function (resolve) {
//         resolve("Hi there");
//     })
// }

// async function main() {
//     const value = await kiratAsyncFunction();
//     console.log(value);
// }

// main();

// Async/Await Function - 2

function kiratAsyncFunction() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Hi there");
        }, 3000);
    })
}

async function main() {
    // const value = await kiratAsyncFunction();
    // console.log(value);
    let value = await kiratAsyncFunction();
    console.log(value);
    console.log("Hi there 1");
}

main();
console.log("after main");