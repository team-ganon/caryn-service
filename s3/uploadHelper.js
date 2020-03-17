var AWS = require('aws-sdk');
var fs = require('fs');
var path = require('path');
var bucketName = 'fec-teamganon-photos';

const s3 = new AWS.S3();
let counter = 1;
for (var i = 1; i <= 526; i++, counter++) {
  if (counter === 101) {
    counter = 1;
  }
  const photos = `../fec-teamganon-photos/images${i}.jpeg`;
  const uploadFile = (filename) => {
    const fileContent = fs.readFileSync(filename);

      const params = {
        Bucket: bucketName,
        Key: `listing${counter}/images${i}.jpeg`,
        ContentType: 'image/jpeg',
        Body: fileContent
      }

      s3.upload(params, function(err, data) {
        if (err) {
          throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
      });
  }
  uploadFile(photos);
}