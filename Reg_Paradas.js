const express = require('express');
const path = require('path');
const app = express();
var https = require('https')
var fs = require('fs')

const port=process.env.PORT || 3000


app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// var certOptions = {
//   key: fs.readFileSync('./ssl-cert-prod/server.key'),
//   cert: fs.readFileSync('./ssl-cert-prod/server.crt')
// }

var certOptions = {
  key: fs.readFileSync('./certs/server.key'),
  cert: fs.readFileSync('./certs/server.cert')
}

https.createServer(certOptions, app).listen(9000,()=>{console.log("Server running at https://localhost:9000")})


//app.listen(9000,()=>{console.log("Server running at localhost:9000")});