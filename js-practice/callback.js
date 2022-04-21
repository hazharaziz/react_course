// const callback = () => {
//   console.log("callback executed");
// };
// setTimeout(callback, 1000);
// setTimeout(() => {
//   console.log("callback executed");
// }, 2000);

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const newArrayFor = [];
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  newArrayFor.push(element * 2);
}

const newArrayMap = array.map((element) => element * 2);

// console.log(newArrayFor);
// console.log(newArrayMap);

// custom callback
function saySomething(callback) {
  callback();
  console.log("in say something");
}

function greetings() {
  console.log("Hello");
}

function goodbye() {
  console.log("Goodbye");
}

// saySomething(greetings)
// saySomething(goodbye);
