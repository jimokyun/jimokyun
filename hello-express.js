var express = require('express');
var app = express(); 
app.get('/', function(req, res) 
    { res.send('ddasdasddd');
 }); 
 
 app.listen(2000, function() { 
     console.log('Example app listening on port 3000!'); 
    });
