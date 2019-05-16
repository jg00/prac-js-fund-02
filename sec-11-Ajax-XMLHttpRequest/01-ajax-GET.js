let http = new XMLHttpRequest();
let url = "https://jsonplaceholder.typicode.com/posts";
let method = "GET";

// Initialize HTTP request parameters
http.open(method, url);

// What you want to do when you get back data or error?
http.onreadystatechange = function() {
  if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
    console.log(typeof http.responseText); // string.
    console.log(JSON.parse(http.responseText)); // Converts a valid JSON string into an object
    console.log(JSON.parse(http.responseText)[0].id); // Converts a valid JSON string into an object
  } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
    console.log("Error");
  }
};

// Send the request
http.send();
