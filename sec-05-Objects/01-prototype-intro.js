let age = 30;

let person = {
  name: "Max",
  age: 27
};

// All Objects in JS by default have a prototype which is "Object.prototype"
// The prototype has some built in methods (like .toString()) that are available to all objects.
// We can inherit methods which our objects might not implement on it's own.  But the prototype (you
// can think of it as the "parent object") has.

// When we use Object.create() we can supply as an argument the prototype we want to base it on.
// Example Object.create(null) or Object.create(person) ie person is the protoype we assign.

// console.log(person.__proto__);

// console.log(person.toString());

// Add greet method to the Object.prototype which is the 'root' prototype of all Javascript Objects by default.
Object.prototype.greet = function() {
  console.log("hello there");
};

person.greet();

/*
    Prototype Chain:
    JS will check if the object has a greet() method.
    If not it will reach out to the Prototype of that object to check for a greet() method. (It does
    not have to be Object.prototype directly, but could be another prototype in between.

    obj ------------------------------|
    Prototype of obj <----------------|
    Prototype of Prototype of obj <---|
    ... <-----------------------------|
*/
