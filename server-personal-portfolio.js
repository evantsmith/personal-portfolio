var express = require('express');
var app = express();

app.use(express.static('./public'));

app.get('/', function(req,res){
    // console.log('got to the server')
    res.sendFile('./public/html/personal-portfolio-index.html', {root:'./'})
})
app.get('/work', function(req,res){

    res.sendFile('./public/html/pp-work.html', {root:'./'})

})

app.get('/about', function(req,res){

    res.sendFile('./public/html/pp-about.html', {root:'./'})

})

app.listen(8080);