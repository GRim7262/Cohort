// function onDone() {
//     console.log("Hi there");
// }

// setTimeout(onDone, 1000);

// console.log("After setTimeout");

// const fs = require("fs");

// const a = 1;
// console.log(a);

// fs.readFile("a.txt", "utf-8", function (err, data) {
//     console.log("Data read from file is: ");
//     console.log(data);
// })

// let ans = 0;
// for (let i = 0; i <= 100; i++) {
//     ans += i;
// }

// console.log(ans);

// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function (err, data) {
//     console.log(data);
// })

// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function (err, data) {
//     console.log("Promisified version");
//     console.log(data);
// })

// function myOwnSetTimeout(fn, duration) {
//     setTimeout(fn, duration);
// }

// myOwnSetTimeout(function () {
//     console.log("Hi there");
// }, 1000);

setTimeout(function () {
    console.log("hi there");

    setTimeout(function () {
        console.log("inside the second one");
    }, 2000)

}, 1000)