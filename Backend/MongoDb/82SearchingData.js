use chintanKart

db.items.find({ rating: 5.0 })

// greater than equal to
db.items.find({ rating: { $gte: 5.0 } })

// and operaion
db.items.find({ rating: { $gte: 5.0 }, price: { $gte: 10000 } })

// or operaion
db.items.find({ $or:[{rating: { $gte: 5.0 }}, {price: { $gte: 10000 }}] })

// only show rating
db.items.find({ rating: 5.0 }, {rating: 1})

