const express = require('express');
const app = express();

//ルートパスにアクセスされる。
app.get('/', function(req, res){
  res.send('Hello World');
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});