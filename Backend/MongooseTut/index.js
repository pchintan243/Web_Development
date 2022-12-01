const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/chintanKart', { useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log("We are connected");
})

// const kittySchema = new mongoose.Schema({
//     name: String
// });

// const Kitten = mongoose.model('Kitten', kittySchema);

// const chintanKitty = new Kitten({ name: 'chintanKitty' });
// console.log(chintanKitty.name); // 'Silence'

