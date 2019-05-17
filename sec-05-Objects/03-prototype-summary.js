let age = 30;

let person = {
  name: "Max",
  age: 27
};

Object.prototype.greet = function() {
  console.log("hello there, I am " + this.name + "!");
};

let max = Object.create(person);
let anna = Object.create(person);

// Check only.  Not safe to access prototype in production code.
console.log(anna.__proto__ === person); // true
console.log(anna.__proto__.__proto__ === Object.prototype); // true

// Better way to find prototype
console.log(Object.getPrototypeOf(anna) === person); // true. Returns prototype of an object.
console.log(
  Object.getPrototypeOf(Object.getPrototypeOf(anna)) === Object.prototype
); // true
