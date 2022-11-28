// Synchronous or blocking
// Line by line execution


// Asynchronous or non-blocking
// Line by line execution not guaranteed
// Callbacks will fire


const fs = require("fs");

// When we don't use synchronous at that time we need to pass one function as a parmeter
let text = fs.readFile("web.txt", "utf-8", (a, b) =>{
    console.log(a, b);
});

// Below line execute first
console.log("Hello folks.");