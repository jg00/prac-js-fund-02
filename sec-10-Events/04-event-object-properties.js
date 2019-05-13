let inner = document.querySelector("#inner");
let outer = document.querySelector("#outer");

// Javascript events by default propagate.
function innerListener(event) {
  console.log(event.bubbles);

  // .target gives direct access to the HTML element which triggered the event
  console.log(event.target);
  console.log(event.target.tagName);

  event.target.style.backgroundColor = "red";

  // Returns the horizontal coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered
  console.log(event.clientX, event.clientY);

  event.stopPropagation();
  console.log("Clicked inner!");
}

function outerListener(event) {
  console.log(event.target);
  console.log(event);
  console.log("Clicked outer!");
}

inner.addEventListener("click", innerListener);
outer.addEventListener("click", outerListener);
