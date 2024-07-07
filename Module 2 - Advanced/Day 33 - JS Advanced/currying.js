// Currying is a technique where a function with multiples parametes is transformed into a new squence of functions
// add(1,5) => 6
// add(1)(5) => 6


// function add(x){
//     return function(y){
//         return x+y
//     }
// }

// add(x,y)
// add5(y) +5 => add(5,y)
// add8(y) +8 => add(8,y)

// const add = x => y => x + y;


// const add5 = add(5);
// const add8 = add(8)
// console.log(add5(8));//13
// console.log(add8(12));//20
// console.log(
//     add(3)(4)
// )

// Create a curried function multiply that takes two arguments one at a time and returns their product.

// multiply5(5) => 25
// multiply10(9) => 90

const multiply = x => y => x * y;

const multiply5 = multiply(5);
const multiply10 = multiply(10);

// console.log(multiply5(5))
// console.log(multiply10(9))

// ** Infinite currying
function add(num1) {
    return function (num2) {
        if (num2) {
            return add(num1 + num2)
        }
        return num1
    }
}

const result = add(1)(2)();
console.log(result)
