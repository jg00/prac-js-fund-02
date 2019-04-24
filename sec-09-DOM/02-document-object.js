/** Document Object (window.document) **/
console.log(document.URL);
console.log(document.title);
console.log(document.body.children);
console.log(document.body.children[0].textContent);
document.body.children[0].textContent = "textContent changed!";
console.log(document.body.children[0].textContent);

// Style property is an object itself with all available CSS styles
document.body.children[0].style.backgroundColor = "red";
console.log(window.document.body.children[0].style);
