const express = require('express');
const app = express();
const {getListing} = require('../database/index.js');

app.use(express.static(__dirname + '/../client/public/dist'));

app.get('/api/intro', function (req, res) {
  getListing(56, function(err, result) {
    if (err) {
      console.log('fail to get pictures')
    } else {
      res.send(result)
    }
  });
});

let port = 3002;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

var albumBucketName = 'fec-teamganon-pictures';
