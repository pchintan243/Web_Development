const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
mongoose.set('strictQuery', true);
const port = 1000;

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chintanKart');
    console.log("We are connecting bro..");
}

// Define mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
});

const Contact = mongoose.model('Contact', contactSchema);


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

app.post('/contact', (req, res) => {
    var myData = new Contact(req.body);
    myData.save().then(() => {
        res.send("This item has been saved in the database")
    }).catch(() => {
        res.status(400).send("Item was not saved to the database")
    });
    // res.status(200).render('contact.pug');
});

// Start the server
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});