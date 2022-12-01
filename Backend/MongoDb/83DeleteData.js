show dbs
use chintanKart
show collections

db.item.find({price: 27000})

// Deleting items from the Mongo Database
db.items.deleteOne({price: 27000})

// Deleting items from the Mongo Database for all entry which have price 27000
db.items.deleteMany({price: 27000})