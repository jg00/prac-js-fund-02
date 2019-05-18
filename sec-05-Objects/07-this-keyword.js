// regular function > window
// method in object > object

// or generally the object on the left of the method currently being executed.

// regular function
function fn() {
  console.log(this);
}

fn(); // 'this' refers to window object

// method in an object
let obj = {
  obfn: fn
};

obj.obfn(); // 'this' refers to {obfn: f} object

// What if I want to make sure that 'this' still refers to the window object.
obj.obfn.bind(this)(); // the reference to 'this' keyword is set to the window object.
obj.obfn.bind(window)(); // the reference to 'this' keyword is set to the window object.

let person = {
  name: "Chen"
};
obj.obfn.bind(person)(); // Now the reference to 'this' keyword is set to the person object.

// So with bind() you can pass whatever 'this' should refer to.
