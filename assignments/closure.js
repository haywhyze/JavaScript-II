// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function outer(x) {
  let y = 10;

  function inner() {
    let z = 20;
    return (z + y / x)
  }
  return inner()
}
const random = outer(5);
console.log(random);
/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  count = 0;
  function increment() {
    console.log(count += 1);
  }
  return increment;
  // Return a function that when invoked increments and returns a counter variable.
};
const newCounter = counter();
newCounter();
newCounter();
newCounter();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};