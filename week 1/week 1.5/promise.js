// const fs = require("fs");

// function kiratReadsFile() {
//     return new Promise(function (resolve) {
//         fs.readFile("a.txt", "utf-8", function (err, data) {
//             resolve(data);
//         });
//     });
// }

// function onDone(data) {
//     console.log(data);
// }

// kiratReadsFile().then(onDone);


// Pending, Resolve
// let d = new Promise(function (resolve) {
//     setTimeout(function () {
//         resolve("foo");
//     }, 5000);

// });

// function onDone() {
//     console.log(d);
// }

// console.log(d);
// d.then(onDone);

// let p = new Promise(function (resolve) {
//     resolve("Hi there");
// });

// p.then(function () {
//     console.log(p);
// })

// function kiratAsyncFunction() {
//     let p = new Promise(function (resolve) {
//         resolve("Hi there");
//     });
//     return p;
// }

// kiratAsyncFunction().then(function (data) {
//     console.log(data);
// })

// const value = kiratAsyncFunction();
// value.then(function (data) {
//     console.log(data);
// });