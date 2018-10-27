const express = require('express');
const path = require('path');
const app = express();
var https = require('https')
var fs = require('fs')



app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000,()=>{console.log("Server running at localhost:9000")});

/*var certOptions = {
  key: fs.readFileSync('sslcert/server.key', 'utf8'),
  cert: fs.readFileSync('sslcert/server.crt', 'utf8')
}

//https.createServer(certOptions, app).listen(9000)
*/