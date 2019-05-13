let p = document.createElement("P");
p.textContent = "A new paragraph";
p.style.fontSize = "17px";

// Append inside of first <a> at the end of it
// let a = document.querySelector("a");
// a.appendChild(p); // added inside of the element at the end

// Within first <li> at the end
// let li = document.querySelector("li");
// li.appendChild(p);

// // Within first <li> before first <a>
let li = document.querySelector("li");
let a = li.firstElementChild;
li.insertBefore(p, a);
