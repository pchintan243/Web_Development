const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chintanKart');
    console.log("we are connecting bro");
}

const kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function speak() {
    const greeting = "My name is " + this.name;
    console.log(greeting);
};

const Kitten = mongoose.model('chintanKitty', kittySchema);

const chintanKitty = new Kitten({ name: 'chintanKitty' });
console.log(chintanKitty.name);

// const fluffy = new Kitten({ name: 'chintanpatel' });
chintanKitty.save();
// chintanKitty.speak();

const kittens = Kitten.find({ name: 'chintanpatel' });
console.log(kittens);

// fluffy.save();
// fluffy.speak();