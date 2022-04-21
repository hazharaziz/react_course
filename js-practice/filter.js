const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const filterMethod = (element) => {
  return element < 5;
};
// const filteredNumbers = numbers.filter(filterMethod);
const filteredNumbers = numbers.filter((element) => element < 5);

console.log(filteredNumbers);
