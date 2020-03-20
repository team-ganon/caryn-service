const express = require('express');
const app = express();
const {getListing} = require('../database/index.js');

app.use(express.static(__dirname + '/../client/public/dist'));

app.get('/api/:id', function (req, res) {
  var id = req.params.id;
  getListing(id, function(err, result) {
    if (err) {
      console.log('fail to get intro')
    } else {
      res.send(result)
    }
  });
});

let port = 3002;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

// var albumBucketName = 'fec-teamganon-pictures';
