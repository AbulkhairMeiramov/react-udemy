// // Arrow functions

// // function printMyName(name) {
// //     console.log(name);
// // }

// // printMyName('Max');

// const printMyName = (name) => {
//     console.log(name);
// }
// printMyName('Max');


// const multiply = (number) => number * 2;
// console.log(multiply(2));

// // Classes 

// class Human {
//     constructor() {
//         this.gender = 'Male';
//     }

//     printGender() {
//         console.log(this.gender);
//     }
// }

// class Person extends Human{
//     constructor() {
//         super();
//         this.name = 'Max';
//         this.gender = 'Female';
//     }

//     printMyName() {
//         console.log(this.name);
//     }
// }

// const person = new Person();
// person.printMyName();
// person.printGender();

// // Classes Properties Methods

// class Human {
//     gender = 'male';

//     printGender() {
//         console.log(this.gender);
//     }
// }

// class Person extends Human{
//     name = 'Max';
//     gender = 'female';

//     printMyName = () => {
//         console.log(this.name);
//     }
// }

// const person = new Person();
// person.printMyName();
// person.printGender();

// // Spread and Rest operators

// // Spread operator
// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4];

// console.log(newNumbers);

// const person = {
//     name: 'Max'
// }

// const newPerson = {
//     ...person,
//     age: 28
// }

// console.log(newPerson);

// // Rest operator
// const filter = (...args) => {
//     return args.filter(el => el === 1);
// }

// console.log(filter(1, 2, 3));

// // Destructuring

// // Array destructuring
// const numbers = [1, 2, 3];
// [num1, num2] = numbers;
// console.log(num1, num2);

// // Object destructuring

// const {name} = {name: 'Max', age: 28};
// console.log(name);

// // Reference and Primitive types

// // Primitive types
// const number = 1;
// const num2 = number;

// console.log(num2);

// // Reference types
// const person = {
//     name: 'Max'
// };

// // Copy pointer
// // const secondPerson = person;

// // Copy value
// const secondPerson = {
//     ...person
// };

// person.name = 'Manu';

// console.log(secondPerson);
// console.log(person);

// // Array Functions

// const numbers = [1, 2, 3];

// const doubleNumArray = numbers.map((num) => {
//     return num * 2;
// });

// console.log(numbers);
// console.log(doubleNumArray);    
