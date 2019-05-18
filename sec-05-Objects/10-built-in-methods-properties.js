let person = {
  name: "Ted",
  age: 27,
  address: "Seattle",
  greet: function() {
    console.log("Hello");
  }
};

// 1 delete keyword
delete person.name;

console.log(person.name); // undefined
console.log(person); // { age:27 }

console.log("~~~~~");

// 2 find out if certain field exists in an object
console.log("age" in person); // true; case sensitive

console.log("~~~~~");

// 3 loop thru all properties
for (let field in person) {
  console.log(field + ": " + person[field]);
}

console.log("~~~~~");

// 3b You could return the array of fields.
for (let field of Object.keys(person))
  console.log(field + ": " + person[field]); // age, address, greet
