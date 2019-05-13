let inner = document.querySelector("#inner");
let outer = document.querySelector("#outer");

// Javascript events by default propagate.  If you do not stop
// propagation, what if you want to trigger the outer one first in this case?
function innerListener(event) {
  console.log("Clicked inner!");
}

function outerListener(event) {
  console.log("Clicked outer!");
}

inner.addEventListener("click", innerListener);
outer.addEventListener("click", outerListener, true); // This gets priority.
