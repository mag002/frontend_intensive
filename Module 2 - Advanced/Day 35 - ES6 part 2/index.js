// let obj = { key: 'value' };

// // Pass by Reference
// function changeObject(o) {
//     o.key = "New value"
// }

// changeObject(obj);
// console.log(obj.key)


// //==============

// let a = 10;
// // Pass by value
// function changeValue(x) {
//     x = 20;
// }
// changeValue(a);
// console.log(a);


// // ===========
// // Create a class Person with property name to store the person name and 'speak' method to say "Hello!"

// // function Person(name) {
// //     this.name = name;
// //     this.speak = function () {
// //         console.log(this.name + " says Hello!")
// //     }
// // }

// // const patrick = new Person('Patrick');

// // patrick.speak();

// // ==========


// // console.log(typeof Person)
// // const tung = new Person('Tung');


// // =========

// // class Father {
// //     constructor() {
// //         this.name = "FatherName";
// //         this.lastName = "Le"
// //     }
// //     shaving() {
// //         console.log('shaved!!');
// //     }
// // }

// // const newFather = new Father();
// // console.log(newFather.lastName)

// // =========
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}


class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age); // execute the constructor method of Person class
        this.studentId = studentId;
    }
    introduce() {
        console.log(`Hello, my name is ${this.name}, my student Id is ${this.studentId} and I am ${this.age} years old.`);
    }
    static isAudult(age) {
        return age >= 18;
    }
}

Math.random('a');
// // const student = new Student('Patrick Le', 99, '10102123546');
// // student.introduce()
// console.log(Student.isAudult(20))
// // Static methods
// // Math.round()
// // Math.random();
// // new Date();

// class MathUtilities {
//     static add(a, b) {
//         return a + b;
//     }
//     static subtract(a, b) {
//         return a - b;
//     }
//     static multiply(a, b) {
//         return a * b;
//     }
//     static divide(a, b) {
//         if (b === 0) {
//             return null
//         }
//         return a / b
//     }
// }

// console.log(MathUtilities.add(5, 3));      // Output: 8
// console.log(MathUtilities.subtract(5, 3)); // Output: 2
// console.log(MathUtilities.multiply(5, 3)); // Output: 15
// console.log(MathUtilities.divide(5, 3));   // Output: 1.6666666666666667
// console.log(MathUtilities.divide(5, 0));   // Output: null

class Counter {
    constructor() {
        this.count = 0;
    }
    increment = function () {
        this.count++;
        console.log("Traditional incre:" + this.count)
    }
    incrementArrow = () => {
        this.count++;
        console.log("Arrow incre:" + this.count)
    }
}
const counter = new Counter();
// const traditional = counter.increment;
// const arrow = counter.incrementArrow;
// traditional();
// arrow();

// Doi voi object khong nen dung arrow function
// Doi voi Class thi nen dung arrow function;

const newCounter = {
    count: 0,
    increment: function () {
        this.count++;
        console.log("Traditional incre:" + this.count)
    },
    incrementArrow: () => {
        this.count++;
        console.log("Arrow incre:" + this.count)
    }
}

newCounter.increment();