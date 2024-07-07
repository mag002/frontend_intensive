// // Async-await: Provide a way to handle promises with a syntax that looks synchronus

// // function a(){
// //     b(); // 2000ms
// //     c(); // 1000ms
// //     d(); // 15ms
// // }


// // firstFunction().then(data => {
// //     return secondFunction(data)
// // }).then(secondData => {
// //     return thirdFunction(secondData);
// // }).then(finalResult => {
// //     console.log(finalResult)
// // }).catch(e => {
// //     console.log(e)
// // })

// /**
//  firstFunction().then(data => {
//      return secondFunction(data)
//  }).then(secondData => {
//      return thirdFunction(secondData);
//  }).then(finalResult => {
//      console.log(finalResult)
//  }).catch(e => {
//      console.log(e)
//  })

//  async function fetchAllData(){
//     const data = await firstFunction();
//     const secondData = await secondFunction(data);
//     const finalResult = await thirdFunction(secondResult);
//     console.log(finalResult)
//  }

//  */


// const fetchData = async () => {
//     try {
//         console.log("START")
//         const response = await fetch('https://jsonplaceholder.typicode.com/odos/1');
//         console.log('response', respons);
//         if (response.status === 404) {
//             throw new Error('Page not found')
//         }
//         const data = await response.json();
//         console.log('data', data);
//     } catch (e) {
//         console.error("ERROR", e)
//     }
// }

// fetchData();


// setTimeout(console.log("1"), 1000);
// console.log("2")
// setTimeout(console.log("3"), 1000);


// // 2 1 3


// /**
// synchronusSetTimeOut(console.log("1"), 1000);
// console.log("2")
// synchronusSetTimeOut(console.log("3"),1000);
//  * 


// // 1000ms wait => 1
// // 2
// // 1000ms wait => 3
//  */


// HOF
// Callback
// Promises
const synchronusSetTimeOut = (callback, ms, isSuccess) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isSuccess) {
                callback();
                resolve();
            } else {
                reject("MOCK FAIL");
            }
        }, ms)
    })
}
//async-await
async function main() {
    try {
        await synchronusSetTimeOut(() => console.log("1"), 1000);
        console.log("2");
        await synchronusSetTimeOut(() => console.log("3"), 1000, false);
        console.log("DONE")

    } catch (e) {
        console.log("ERROR", e)
    }
}
main();


const delay = ms => {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}
