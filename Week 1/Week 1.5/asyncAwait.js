function kiratAsyncFunction() {
    let p = new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Hi there");
        }, 1000);
    });
    return p;
}

async function main() {
    let value = await kiratAsyncFunction(); // no callbacks & .then syntax
    console.log(value);
}

main();

console.log("after main");