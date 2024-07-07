// Promises: Provide a way to handle asynchronus operations in a more manageable and readable way

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched")
        }, 1000)
    })
};

// firstFunction(result => {
//     secondFunction((result, nextResult) => {
//         thirdFunction((nextResult, finalResult) => {
//             console.log(finalResult);
//         })
//     })
// })

fetchData().then(data => console.log(data))

// ** Promise chain
// ** (Promise Hell)
firstFunction().then(data => {
    return secondFunction(data)
}).then(secondData => {
    return thirdFunction(secondData);
}).then(finalResult => {
    console.log(finalResult)
}).catch(e => {
    console.log(e)
})