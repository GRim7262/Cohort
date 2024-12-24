const getAnimalData = async () => {
    const response = await fetch('https://fakerapi.it/api/v1/persons');
    const finalData = await response.json();
    document.getElementById("container").innerHTML = JSON.stringify(finalData.data);
}

// const getPromisifiedAnimalData = () => {
//     fetch('https://fakerapi.it/api/v1/persons').then((response) => {
//         response.json().then((finalData) => {
//             console.log(finalData)
//         })
//     })
// }