// 1 Access first anchor tag
document.querySelector("a").style.backgroundColor = "red";

// 2 Access third link
document.querySelectorAll(".simple")[1].style.backgroundColor = "red";

// 3 Change text on second link
document.querySelector(".simple").firstElementChild.textContent =
  "Link2 - Text changed";
