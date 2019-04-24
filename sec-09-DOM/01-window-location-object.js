/** Window object **/
console.log(window.innerWidth);
console.log(window.outerWidth);
console.log(window.innerHeight);
console.log(window.outerHeight);

localStorage.setItem("key1", 1000);
console.log(localStorage.getItem("key1"));

sessionStorage.setItem("key2", 2000);
console.log(sessionStorage.getItem("key2"));

// window.open("http://www.google.com");

/** Location Object **/
console.log(window.location);
console.log(window.location.hostname);
console.log(window.location.pathname);

// location.reload();
// location.replace("http://www.google.com");

/** Document Object **/
console.log(window.document); // #document
