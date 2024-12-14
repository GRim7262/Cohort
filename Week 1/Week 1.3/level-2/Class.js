// const dog = {
//     name: "doggie",
//     speaks: "bhow bhow",
//     legCount: 4
// }

// const cat = {
//     name: "cat",
//     speaks: "meow",
//     legCount: 4
// }

// console.log("Animal " + dog["name"] +
//     " speaks " + dog["speaks"] + " and has " +
//     dog["legCount"] + " legs");

// function printStr(animal){
//     console.log("Animal " + animal["name"] + " Speaks " + animal["speaks"])
// }

// printStr(dog)
// printStr(cat)

// Don't do above thing - Use class

// class Animal {
//     constructor(name, legCount, speaks) {
//         this.name = name;
//         this.legCount = legCount;
//         this.speaks = speaks;
//     }

//     static myType() {
//         console.log("Animal")
//     }

//     speak() {
//         console.log("Hi there " + this.speaks)
//     }
// }

// const dog = new Animal("Dog", 4, "bhow bhow") // create object
// const cat = new Animal("Cat", 4, "Meow")
// cat.speak() // call function on object
// Animal.myType()