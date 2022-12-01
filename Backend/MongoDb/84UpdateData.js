show dbs
use chintanKart
show collections

db.items.find()
db.items.updateOne({ name: "realme" }, { $set: { price: 2 } })
db.items.find()

db.items.updateMany({ name: "realme" }, { $set: { price: 2, rating: 4 } })
