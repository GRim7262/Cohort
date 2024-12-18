// JSON.parse

// const users = '{"name": "vinal", "age": 25, "gender": "male"}';

// const user = JSON.parse(users)
// console.log(user["gender"])

// JSON.stringify

const user = {
    name: "vinal",
    gender: "male"
}
console.log(user["name"])
const finalString = JSON.stringify(user)
console.log(finalString["name"])