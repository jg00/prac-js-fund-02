// Four ways to create objects

// 1 First way to create objects using object literal {}.
// Using this you get Object.prototype as the prototype.
let person = {
  name: "Max",
  age: 27
};

// The person object has it's own constructor function which is "f Object()"
// Below, person is an instance of Object (the prtotype is Object.prototype)
console.log(person instanceof Object); // true
console.log(Object.getPrototypeOf(person)); // which is Object.prototype
console.log(Object.prototype); // Object.prototype

// 2 Second way is to use "new Object()"
// Same as using object literal syntax but here we can see we "directly" use the
// constructor function "Object()" with the "new" keyword
let person2 = new Object();
person2.name = "Bill";
person2.age = 22;

// 3 Third way is to use Object.create(obj).
// Here you can pick your prototype or set to "null" if you don't want it to have a prototype.
// If null then you would not even have Object.prototype as a fallback mechanism.
// This would be a way to create an object which is pretty standalone.
let person3 = Object.create(null);
person3.name = "Ted";
person3.age = 42;

// person3.toString(); // You will get error b/c toString() is a method of Object.prototype.
console.log(person3 instanceof Object); // false.

// 4 Forth way to create objects using "your own constructor functions" instead of using
// the "built-in constructor function" (ie f Object() with "new" keyword)
// Advantages:
//  a. it allows you to create your blueprint from which you create objects
//  b. it also ships with it's own prototype (Person.prototype)
//  c. but it will also have Object.prototype as a high-level fallback

function Person(name, age) {
  this.name = name;
  this.age = age;
}
let person4 = new Person("Zed", 20);

console.log(person4 instanceof Person); // true

console.log(person4.__proto__ === Person.prototype); // true
console.log(Object.getPrototypeOf(person4)); // Uses it's own constructor function Person(name,age)
