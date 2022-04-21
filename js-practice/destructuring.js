// object destructuring

const person = {
  id: 23252,
  fullName: "Isaac",
  age: 33,
  gender: "male",
};

const { id, fullName, ...others } = person;

// console.log(id);
// console.log(fullName);
// console.log(others);

let newPerson = {
  ...person,
  id: 65454,
  fullName: "Jack",
};

// console.log(person);
// console.log(newPerson);

// ----------------------------

// array destructuring

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const [firstNumber, secondNumber, thirdNumber, ...rest] = numbers;

// console.log(firstNumber);
// console.log(secondNumber);
// console.log(thirdNumber);
// console.log(rest);

// const newNumbers = [...numbers]
const newNumbers = [firstNumber, ...rest, 9, 10, 11, 12];
console.log(newNumbers);
