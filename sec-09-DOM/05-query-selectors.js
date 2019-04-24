/* Use Query Selectors 

    h1          > <h1>
    .className  > <div class="className">
    #idName     > <div id="idName">
    [src]       > <img src=".."
*/

console.log(document.querySelector("h1"));
console.log(document.querySelector(".simple"));
console.log(document.querySelectorAll(".simple"));
console.log(document.querySelector("#easy"));
console.log(document.querySelector("[type]"));

document.querySelector("#easy").style.backgroundColor = "red";
