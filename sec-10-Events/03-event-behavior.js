let inner = document.querySelector("#inner");
let outer = document.querySelector("#outer");

// Javascript events by default propagate.
function innerListener(event) {
  console.log(event.bubbles);
  event.stopPropagation();
  console.log("Clicked inner!");
}

function outerListener(event) {
  console.log("Clicked outer!");
}

inner.addEventListener("click", innerListener);
outer.addEventListener("click", outerListener);
