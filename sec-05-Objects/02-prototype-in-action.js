let age = 30;

let person = {
  name: "Max",
  age: 27
};

Object.prototype.greet = function() {
  console.log("hello there, I am " + this.name + "!"); // 'this' refers to the object where current function was called.
};

let max = Object.create(person); // provide person as the object to use as the prototype.

let anna = Object.create(person); // provide person as the object to use as the prototype.

// Remember prototype of anna is person that has a name property and value of 'Max'.
anna.name = "Anna"; // (comment/uncomment to see different result)

console.log(max.name);
max.greet(); // Because of prototype chain, Javascript will work it's way up.
anna.greet();

/*
    Prototypes - in the end it is all about 'blueprints' from which you
    can build different objects.

    Prototype of an object is like the parent of that object.  You can then create new objects
    of that prototype.
*/

let j = Object.create(null); // This object will not have the default Object.prototype all objects have becasue we are passing null.
j.city = "seattle";
