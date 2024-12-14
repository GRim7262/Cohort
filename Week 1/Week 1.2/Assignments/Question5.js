// WAP that prints the biggest number in  an array

const number = [8, 4, 10]
let max = number[0];

for (let i = 0; i < number.length; i++) {
    if (number[i] > max) {
        max = number[i]
    }
}

console.log(max);