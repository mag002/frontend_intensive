// Higher-order function
// HOF - take function / AND/OR return function

// const apply = (fn, x) => fn(x);

// const double = n => n * 2; // pass 5 => return 10

// console.log(apply(double, 5));


// Create a higher - order function 'repeat' that takes a function 'fn' and a number 'n', and calls fn n times.

const fn = () => console.log('HELLO!')

const repeat = (fn, n) => {
    for (let i = 0; i < n; i++) {
        fn();
    }
}

// map(), filter reduce
// built in function - hof
