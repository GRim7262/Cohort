// For Loop

// let number = 0;

// for (let i = 0; i <= 100; i++){
//     number += i;
// }
// console.log(number);


// Array

// const ages = [21, 22, 23, 24, 25];

// for (let i = 0; i < ages.length; i++){
//     if (ages[i] % 2 == 0) {
//         console.log(ages[i]);
//     }
// }

// const personArray = ["vinal", "vishu", "kalpana"];
// const genderArray = ["male", "male", "female"];

// for(i = 0; i < personArray.length; i++){
//     if(genderArray[i] == "female"){
//         console.log(personArray[i]);
//     }
// }

// const personArray = ["vinal", "vishu", "kalpana"];
// const genderArray = ["male", "male", "female"];

// for (let i = 0; i < personArray.length; i++) {
//     if (genderArray[i] == "male") {
//         console.log(personArray[i]);
//     }
// }

// Object

// const user1 = {
//     name: "vinal",
//     gender: "male"
// }

// console.log(user1["name"]);
// console.log(user1["gender"]);

// Object example

// const user = {
//     name: "vinal",
//     age: 25,
//     address: {
//         houseNumber: "11",
//         street: 1
//     }
// }

// console.log(user.address.houseNumber);

// console.log(user["address"]["street"]);

// Array of object

// const allusers = [{
//     name: "vinal",
//     gender: "male"
// }, {
//     name: "vishu",
//     gender: "male"
// }, {
//     name: "kalpana",
//     gender: "female"
// }]

// for(let i = 0; i < allusers.length; i++){
//     if(allusers[i]["gender"] == "male"){
//         console.log(allusers[i]["name"]);
//     }
// }

// Function

// function sum(a, b){
//     return a + b;
// }

// const ans = sum(1,1000);
// console.log(ans);

// Callback

// function sum(num1, num2, fnToCall){ //callback
//     let result =  num1 + num2;
//     fnToCall(result);   //callback
// }

// function displayResult(data){
//     console.log("Result of the sum is: " + data);
// }

// function displayResultPassive(data){
//     console.log("Sum's result is: " + data);
// }

// sum(1,2, displayResultPassive); // callback

// Callback - example

// function calculateArithmetic(a, b, arithmeticFinalFunction) {
//     const ans = arithmeticFinalFunction(a, b);
//     return ans;
// }

// function sum(a, b) {
//     return a + b;
// }

// const value = calculateArithmetic(1, 2, sum);
// console.log(value);

// Callback - example 2

// function greet() {
//     console.log("Hello World");
// }

// setTimeout(greet, 3000);