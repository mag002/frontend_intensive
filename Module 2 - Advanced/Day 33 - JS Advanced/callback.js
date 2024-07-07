// Callback: Is a function passed as an argument to another function, to be executed later // Handle asynchronus

function fetchData(callback) {
    setTimeout(() => {
        callback('Data fetched')
    }, 1000)
}

fetchData(data => console.log(data))


// ** Callback Hell
firstFunction(result => {
    secondFunction((result, nextResult) => {
        thirdFunction((nextResult, finalResult) => {
            console.log(finalResult);
        })
    })
})