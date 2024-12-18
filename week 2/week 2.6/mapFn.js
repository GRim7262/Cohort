// create a map function that takes 2 inputs
// an array, and a transformation callback function and
// transform the array into a new one using transformation function

const mapFunction = (arr, transformCb) => {
    const finalArr = [];
    for (let i = 0; i < arr.length; i++) {
        finalArr.push(transformCb(arr[i], i, arr));
    }
    return finalArr;
}

const newArr = [1, 2, 3, 4, 5];

const transformedArray = mapFunction(newArr, (i) => i * 2);
console.log(transformedArray);