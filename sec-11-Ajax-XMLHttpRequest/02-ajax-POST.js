let http = new XMLHttpRequest();
let url = "https://jsonplaceholder.typicode.com/posts";
let method = "POST";

let data = "title=Post%20Title&body=Body";

// Initialize HTTP request parameters
http.open(method, url);
http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

// What you want to do when you get back data or error?
// 201 Created. The request has been fulfilled and has resulted in one or more new resources being created.
http.onreadystatechange = function() {
  if (http.readyState === XMLHttpRequest.DONE && http.status === 201) {
    console.log(JSON.parse(http.responseText));
  } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 201) {
    console.log("Error");
  }
};

// Send the request
http.send(data);
