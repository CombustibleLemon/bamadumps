// app.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
// app.get('/about', function(req, res) {
//     res.render('pages/about');
// });

const port = process.env.PORT || 80;
app.listen(port);

console.log("Server running at http://localhost:%d", port);