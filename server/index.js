const express = require('express');
const app = express();
app.use(express.static(__dirname + '/../client/dist'));

let port = 3002;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});