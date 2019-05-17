/*
    Constructor functions:
    - allow us to create a blueprint from which we can create other objects 
      based on that blueprint.
    - In addition, this blueprint, ships with it's own prototype (ie like the parent)
*/

function Person() {
  this.name = "Max"; // 'this' sets .name to the object itself (vs Person.prototype.name = 'Anna').
  // 'this' references the object created from this constructor function.

  this.greet = function() {
    console.log("Hello, I am " + this.name);
  };
}

/***** 2 Define greet function at our Person.prototype (ie like our parent) *****/
// Now, any object created based on Person.prototype will inherit greet function.
Person.prototype.greet = function() {
  console.log("Hello");
};

Person.prototype.name = "Anna"; // Higher level.

Person.prototype.greetGeneral = function() {
  console.log("Well, well..!");
};

let person = new Person();
person.name = "Morgan"; // Comment/Uncomment for different results. Defined name property at our person object which will override name defined in Person.prototype (ie like our parent)

person.greet(); // "Hello, I am Morgan" .Note: greet function defined at both Person.prototype and at constructor function.

console.log(person.name); // Morgan

let anotherPerson = new Person();
anotherPerson.greet(); // "Hello, I am Max"
anotherPerson.greetGeneral();
person.greetGeneral();

console.log("");

// 3 Check if a certain variable is an "instance" of such a constructor function.
console.log(person instanceof Person);

console.log("");

/***** 1 What is prototype of person? Person.prototype. *****/
console.log(person); // { name: "Max" }
console.log(person.__proto__ === Person); // false
console.log(person.__proto__ === Object.prototype); // false
console.log(person.__proto__ === Person.prototype); // true; Person.prototype is created which will be the prototype of any object we create using the constructor function.

/*
    - function Person() is a constructor function we are using to construct an person object.
    - Javascript automatically gives us a prototype for each object created using 
      a constructor function which we access as Person.prototype.
    - We can then use the Person.prototype
*/

console.log("");

/***** So what is the prototype of a constructor function (object)?  Object.prototype *****/
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype);
console.log(Person.prototype.toString());
console.log(Object.getPrototypeOf(Person.prototype));
