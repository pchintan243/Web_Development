const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// For serving static files
app.use('/static', express.static('static'));

// Set the template engine as a pug
app.set('view engine', 'pug');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Our pug demo endpoint
app.get("/demo", (req, res) => {
    res.status(200).render('demo', { title: 'chintan', message: 'Hello i am Chintan Patel' });
});


// Go in postman and type in get method localhost
app.get("/", (req, res) => {
    res.send("This is my first express home page");
});

// Go in postman and type in get method localhost/about
app.get("/about", (req, res) => {
    res.send("This is my first express about page");
});

// Go in postman and type in post method localhost/about
app.post("/about", (req, res) => {
    res.send("This is my first express about page with post request");
});

// Go in postman and type in post method localhost/this
// Get status:code 400 Bad Request on postman
app.post("/this", (req, res) => {
    res.status(404).send("This page is not found");
});

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});