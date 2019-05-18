let account = {
  cash: 12000,
  _name: "Default",
  withdraw: function(amount) {
    this.cash -= amount;
    console.log("Withdrew " + amount + ", new cash reserve is: " + this.cash);
  }
};

// account.withdraw(1000);

// We could add a deposit method to the account object (or modify existing property).
// 1 One way would be
// account.deposit = function(amount) { .. }

// 2 Another way is to use the built-in Object's static method
// Object.defineProperty(object, 'propertyName', { an object where you configure this property})

// Advantages
// a. you can configure this property and there are some built-in non-arbitrary keys that you can set (For exmaple 'value' key)
// b. by default if you define a property using .defineProperty(), it is 'read-only'.
//    You have to configure that property as writable: true for example.
Object.defineProperty(account, "deposit", {
  value: function(amount) {
    this.cash += amount;
  }
});

account.deposit(3000);
account.withdraw(1000);

Object.defineProperty(account, "name", {
  //   value: "ID000-1", // comment out to get the get/set to work.

  //   writable: true, // comment/uncomment to see differences.  By default this is false ie read-only.

  //   enumerable: true // allows you to loop through members of object.

  // with getters/setters you can control how values in your objects are being set or retuned.
  get: function() {
    return this._name + " Hello";
  },
  set: function(name) {
    if (name === "Max") this._name = name;
  }
});

console.log(account.name); // ID000-1

// Now if you change the account.name directly, you will not be able to set the new value.
account.name = "ID000-4"; // change to 'Max'

console.log(account.name); // Value is still ID000-1

// However in JS it is always still possible to access fields we are trying to hide.
// Advantage here is you can still add checks to prevent some values from being set.
// A solution to below would be to use ES6 modules.
console.log(account._name);

account._name = "test";
console.log(account._name);
