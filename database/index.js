const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/airbnblisting');

let listingSchema = mongoose.Schema({
  id: { type: Number, unique: true, dropDuos: true},
  photos: String,
  title: String,
  advantages: Array,
  description: String,
  amenities: Object,
  Sleeping: Array
})

let listing = mongoose.model('Listing', listingSchema);

let getListing = (callback) => {
  callback(null, 'https://fec-teamganon-pictures.s3-us-west-1.amazonaws.com/listing1/1-1.jpeg')
}

module.exports.getListing = getListing;