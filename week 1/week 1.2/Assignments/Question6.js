// WAP that prints all the male people's first name given a complex object

const allUser = [{
    firstName: "vinal",
    gender: "male"
}, {
    firstName: "kalpana",
    gender: "female"
}, {
    firstName: "vishu",
    gender: "male"
}, {
    firstName: "khandusing",
    gender: "male"
},]

for (let i = 0; i < allUser.length; i++) {
    if (allUser[i].gender == "male") {
        console.log(allUser[i].firstName);
    }
}
