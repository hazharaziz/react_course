const persons = [
  {
    name: "John",
    age: 20,
  },
  {
    name: "Jack",
    age: 25,
  },
  {
    name: "Harray",
    age: 15,
  },
  {
    name: "Tom",
    age: 30,
  },
  {
    name: "Joe",
    age: 42,
  },
];

// const targetByFilter = persons.filter((p) => p.age === 30);
const target = persons.find((p) => p.age === 40);

// console.log(targetByFilter);

// error handling
if (target) {
  console.log(target.name);
} else {
  console.log("Target was not found");
}
