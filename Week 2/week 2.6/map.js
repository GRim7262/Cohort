// given an array, give me back a new array in which every value is multiplied by 2

const arr1 = [1, 2, 3, 4, 5];

// solution
// const arr2 = [];
// for (let i = 0; i < arr1.length; i++) {
//     arr2.push(arr1[i] * 2);
// }

// console.log(arr2);

// other solution
// const transform = (i) => {
//     return i * 2;
// }

// console.log(arr1.map(function transform(i) {
//     return i * 2
// }));

console.log(arr1.map((i) => i * 2));