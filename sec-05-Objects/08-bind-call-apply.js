function fn(message) {
  console.log(message + ": " + this);
}

fn("message from fn");

let obj = {
  obfn: fn
};

let person = {
  name: "Tully"
};

// .bind('this' reference, multiple arguments)
// notice we need () at the end to call the method. The method is not called instantly.
// Unlike .call() and .apply(), .bind() returns a new function that is always bound to the object specified.
obj.obfn.bind(person, "message using .bind()")();

// .call()
// notice we do not need () at the end to call the method. The method is called instantly.
obj.obfn.call(person, "message using .call()");

// .apply() - requires array for arguments
// notice we do not need () at the end to call the method. The method is called instantly.
obj.obfn.apply(person, ["message using .apply()", "apples", "orange"]);
