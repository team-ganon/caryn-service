let faker = require('faker');
let {Listing} = require('./index.js');
var AWS = require('aws-sdk');
var bucketName = 'fec-teamganon-photos';
let listingData = [];
const s3 = new AWS.S3();
var bucketPromise = new AWS.S3({apiVersion: '2006-03-01'})


var seed = function() {
  const s3Promises = [];
  for (var i = 1; i <= 100; i++) {
    let listing = {};
    listing.listingNumber = i;
    listing.title = faker.lorem.sentence();
    listing.description = faker.lorem.paragraph();
    // listing.advantages = [];
    // listing.amenities = {};
    // listing.sleeping = [];
    listing.photos = [];
    var params = {
      Bucket: bucketName,
      Prefix: `listing${i}/`
    };
    const s3Promise = s3.listObjectsV2(params).promise()
      .then(data => {
        for (var j = 1; j < data.Contents.length; j++) {
          listing.photos.push(`https://fec-teamganon-photos.s3-us-west-1.amazonaws.com/${data.Contents[j].Key}`);
        }
        listingData.push(listing);
      })
      .catch(err => {
        console.error(err, err.stack);
      });

    s3Promises.push(s3Promise);
  }
  return s3Promises;
};

const promises = seed();

Promise.all(promises).then(() => {
  Listing.create(listingData, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
});




