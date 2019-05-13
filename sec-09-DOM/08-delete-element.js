let a = document.querySelectorAll("a")[1];

// One way to remove second <a> (supported for older browsers)
// May be preferred way for now.
// a.parentElement.removeChild(a);
// a.parentNode.removeChild(a);

// Another way (supported for newer browsers)
a.remove();
