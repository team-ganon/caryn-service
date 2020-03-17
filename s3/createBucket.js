// Load the SDK
var AWS = require('aws-sdk');

// Create bucket name
var bucketName = 'fec-teamganon-photos';

// Create a promise on S3 service object
var bucketPromise = new AWS.S3({apiVersion: '2006-03-01'}).createBucket({Bucket: bucketName}).promise();

// Handle promise fulfilled/rejected states
bucketPromise.then(
  function(data) {
    // Create 100 folders
    for (var i = 1; i <= 100; i++) {
      var keyName = `listing${i}/`;
      var objectParams = {Bucket: bucketName, Key: keyName};
      // Create object upload promise
      var uploadPromise = new AWS.S3({apiVersion: '2006-03-01'}).putObject(objectParams).promise();
      uploadPromise.then(
        function(data) {
          console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
        });
    }
}).catch(
  function(err) {
    console.error(err, err.stack);
});