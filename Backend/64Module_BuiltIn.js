const fs = require("fs");
let text = fs.readFileSync("web.txt", "utf-8");

// Replace the content.
text = text.replace("Display", "hello");

console.log("The content of the file is:\n");
console.log(text);


console.log("Creating a new file..!!");
fs.writeFileSync("hello.txt", text);

