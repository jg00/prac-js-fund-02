// Add/remove specific listener/event
let btn = document.querySelector("button");

function listener1() {
  console.log("Listener 1");
}

function listener2() {
  console.log("Listener 2");
}

btn.addEventListener("click", listener1);
btn.addEventListener("click", listener2);

setTimeout(function() {
  btn.removeEventListener("click", listener1);
}, 5000);
