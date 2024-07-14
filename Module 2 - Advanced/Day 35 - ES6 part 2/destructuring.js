// // get the array at index 2 and store at variable "three"
// // "one","two","three","four","five","six"
// // const one = array[0];
// // const two = array[1];
// // const three = array[2];
// // // ...
// // const six = array[5];

// // Destructuring Array;
// const array = [1, 2, 3, 4, 5, 6];
// const [one, two, three] = array;
// // console.log(one, two, three)

// // Destructuring Object;
// const object = { name: "phuc", age: 30 };
// // const name = object.name;
// // const age = object.age;

// // ten
// const { name: ten, empty } = object;
// // const ten = object.name;
// // const empty = object.empty;
// // console.log(ten)


// const persons = [{ name: 'phuc', age: 30 }, { name: 'tung', age: 22 }, { name: 'phong', age: 21 }, { name: 'Thu', age: NaN }]
// const oldPerson = persons.map(({ name, age }) => ({ name, age: age + 10 }));
// // const oldPerson = persons.map((item) => ({ name: item.name, age: item.age + 10 }));
// // console.log(oldPerson)


// // Rest operator
// const sum = (...args) => {
//     // console.log(args)
//     return args.reduce((total, val) => total + val, 0)
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 0));

// // Spread operator
// // New array include all element of array and add more 2 items (11,12) 
// // const newArray = [...array, 11, 12]

// // copy an array
// const newArray = [99, 100, ...array]

// newArray.push(11)
// console.log(array)
// console.log(newArray)

// // const object = { name: "phuc", age: 30 };
// const newObject = { firstOne: 'first property', ...object, name: 'patrick', newOne: "new property" }
// console.log(object)
// console.log(newObject)

const person = {
    name: 'Alice',
    age: 30,
    job: 'Engineer',
    city: 'New York'
};


const { name, ...rest } = person

console.log(name, rest)

const updatedPerson = { ...person, country: 'USA' }
console.log(updatedPerson);

