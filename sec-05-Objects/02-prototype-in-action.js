let age = 30;

let person = {
  name: "Max",
  age: 27
};

Object.prototype.greet = function() {
  console.log("hello there, I am " + this.name + "!"); // 'this' refers to the object where current function was called.
};

let max = Object.create(person); // provide 'person' as the prototype

let anna = Object.create(person); // provide 'person' as the prototype

// Remember prototype of anna is 'person' that has a name property and value of 'Max'.
anna.name = "Anna"; // (uncomment to see different result)

console.log(max.name);
max.greet(); // Because of prototype chain, Javascript will work it's way up.
anna.greet();

/*
    Prototypes - in the end it is all about 'blueprints' from which you
    can build different objects.
*/
