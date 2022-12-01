// Inserting data in Mongodb
// db.items.find()
// db.items.find({price: 77000})

use chintanKart
db.items.insertOne({ name: "realme", price: 27000, rating: 5.0, qty: 999, sold: 999 })

db.items.insertMany([{ name: "realme", price: 27000, rating: 5.0, qty: 999, sold: 999 }, { name: "realme gt", price: 77000, rating: 4.0, qty: 9999, sold: 9999 }])