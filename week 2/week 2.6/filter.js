// given an input array, give me back all the even values from it

const arr = [1, 2, 3, 4, 5];
// const evenArr = [];

// filter function

// function filterArr(n) {
//     if (n % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(arr.filter(filterArr));

console.log(arr.filter((n) => {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}))

const firstName = ['vinal', 'suyog', 'monti', 'gaurav'];

console.log(firstName.filter((n) => {
    if (n.startsWith('v')) {
        return true;
    } else {
        return false;
    }
}));


// map function
// arr.map((i) => {
//     if (arr[i] % 2 === 0) {
//         evenArr.push(arr[i]);
//     }
// })

// console.log(evenArr);

// normal solution
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         evenArr.push(arr[i]);
//     }
// }

// console.log(evenArr);