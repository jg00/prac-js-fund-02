window.onload = function() {
  console.log("Window loaded");
};

// One way is to use the event handler.  Issue is only the
// last one will get executed.
let btn = document.querySelector("button");
btn.onclick = function() {
  console.log("clicked");
};

btn.onclick = function() {
  console.log("clicked again");
};
