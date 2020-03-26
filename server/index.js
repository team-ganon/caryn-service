const express = require('express');
const app = express();
const {getListing} = require('../database/index.js');
const cors = require('cors');

app.use(cors());

app.use(express.static(__dirname + '/../client/public/dist'));

app.get('/api/intro/:id', function (req, res) {
  var id = req.params.id;
  getListing(id, function(err, result) {
    if (err) {
      console.log('fail to get intro')
    } else {
      res.send(result)
    }
  });
});

app.get('/app.js', cors(), function (req, res) {
  res.sendFile(path.join(__dirname, '../client/public/dist/app.js'))
});

let port = 3002;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


