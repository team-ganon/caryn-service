const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/airbnblisting');


let listingSchema = mongoose.Schema({
  listingNumber: { type: Number, unique: true, dropDuos: true},
  photos: Array,
  title: String,
  advantages: Array,
  description: String,
  amenities: Object,
  Sleeping: Array
})

let Listing = mongoose.model('Listing', listingSchema);

let getListing = (listingNumber, callback) => {
  Listing.
    find({listingNumber}).
    exec(callback)
}

module.exports.getListing = getListing;
module.exports.Listing = Listing;
