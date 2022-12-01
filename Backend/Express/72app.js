const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));//For serving static files
// app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }));

//PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); //Set the views directory


// ENDPOINTS
app.get('/', (req, res) => {
    const con = "This is a constant part of the game";
    const params = { 'title': 'Game is the best one', "content": con };
    res.status(200).render('index.pug', params);
});

app.post('/', (req, res) => {
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let outputToWrite = `The name of the client ${name}, ${age} years old, ${gender}, residing at ${address}. More about him / her ${more}`;
    
    fs.writeFileSync('output.txt', outputToWrite);
    const params = { 'message': 'Your form has been submitted successfully' };
    res.status(200).render('index.pug', params);
});

//START THE SERVER

app.listen(port, () => {
    console.log(`The application started successfully on ${ port }`);
});