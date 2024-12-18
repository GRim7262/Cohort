function objectMethods(obj){
    console.log("Original Object:", obj)

    let keys = Object.keys(obj)
    console.log("After Object.keys():", keys)

    let values = Object.values(obj)
    console.log("After Object.values():", values)

    let entries = Object.entries(obj)
    console.log("After Object.entries():", entries)

    let hasProp = Object.hasOwnProperty("property")
    console.log("After hasOwnProperty():", hasProp)

    let newObj = Object.assign({}, obj, {newProperty: "newValue"})
    console.log("After Object.assign():", newObj)
}

const sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
}

objectMethods(sampleObject)

// let obj = {
//     name: "vinal"
// }

// console.log(obj.hasOwnProperty("name"))

// const obj = {
//     key1: "value1",
//     key2: "value2",
//     key3: "value3"
// }

// let newObj = Object.assign({}, obj, {newProperty: "newValue"})
// console.log("After Object.assign():", newObj)