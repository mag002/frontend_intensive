# Class
1. Task: Create a class called Person that has a constructor accepting name and age. Include a method introduce that prints "Hello, my name is [name] and I am [age] years old."


- Solution:
```
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const newPeople = new People('Travis', 20);
```

2. Inheritance
Task: Create a subclass Student that inherits from Person. Add a new property studentId and a method introduce that includes the studentId in the introduction. (Don't customize the Person introduce method)



3. Static method: Creating a Utility Class with Static Methods
Task: Create a class called MathUtilities that includes static methods for basic mathematical operations. The class should have 
the following static methods:

add(a, b) - returns the sum of a and b.
subtract(a, b) - returns the difference between a and b.
multiply(a, b) - returns the product of a and b.
divide(a, b) - returns the quotient of a divided by b, but returns null if b is 0.

console.log(MathUtilities.add(5, 3));      // Output: 8
console.log(MathUtilities.subtract(5, 3)); // Output: 2
console.log(MathUtilities.multiply(5, 3)); // Output: 15
console.log(MathUtilities.divide(5, 3));   // Output: 1.6666666666666667
console.log(MathUtilities.divide(5, 0));   // Output: null

4. Combined Destructuring, Rest Operator, and Spread Operator

Task: Given the following object, use destructuring to extract the name and the remaining properties into a new object using the rest operator. Then, create a new object that includes all properties of the original object and a new property country using the spread operator.
```
const person = {
    name: 'Alice',
    age: 30,
    job: 'Engineer',
    city: 'New York'
};
name,
rest,
updatedPerson = 
```
OUTPUT
```
console.log(name); // Alice
console.log(rest); // { age: 30, job: 'Engineer', city: 'New York' }
console.log(updatedPerson); // { name: 'Alice', age: 30, job: 'Engineer', city: 'New York', country: 'USA' }
18:25
```