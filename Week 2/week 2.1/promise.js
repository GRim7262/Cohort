// function myOwnSetTimeout(duration) {
//     const p = new Promise(function (resolve) {
//         setTimeout(resolve, 1000);
//     });
//     return p;
// }

// myOwnSetTimeout(1000).then(function () {
//     console.log("Log the first thing");
// }, 1000);

// promisify function

function promisifiedMyOwnSetTimeout(duration) {
    const p = new Promise(function (resolve) {
        setTimeout(resolve, duration);
    });
    return p;
}

promisifiedMyOwnSetTimeout(3000).then(function () {
    console.log("Hi there");
});