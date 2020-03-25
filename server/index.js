const express = require('express');
const app = express();
const {getListing} = require('../database/index.js');
const cors = require('cors');

app.use(cors());

app.use(express.static(__dirname + '/../client/public/dist'));

app.get('/api/intro', function (req, res) {
  // var id = req.params.id;
  getListing(56, function(err, result) {
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


