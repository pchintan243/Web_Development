const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 8000;

// Express specific stuff

app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true }));

// Pug specific stuff

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//Endpoints
app.get('/', (req, res) => {
    const con = "This is the best content on the internet";
    const params = { 'title': 'pubg is the best game', "content": con };
    res.status(200).render('home.pug', params);
});

app.get('/contact', (req, res) => {
    const con = "This is the best content on the internet";
    const params = { 'title': 'pubg is the best game', "content": con };
    res.status(200).render('contact.pug', params);
});

// Start the server
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});