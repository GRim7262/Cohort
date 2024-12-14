function square(n) {
    console.log("Square called");
    return n * n;
}

function cube(n) {
    console.log("Cube called");
    return n * n * n;
}

function sumOfSomething(a, b, cb) {
    const val1 = cb(a);
    const val2 = cb(b);
    return val1 + val2;
}

console.log(sumOfSomething(1, 2, square));
console.log(sumOfSomething(1, 2, cube));