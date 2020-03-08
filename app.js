// app.js
// load the things we need
var express = require('express');
var app = express();
var path = require('path')
app.use(express.static(path.join(__dirname, 'public')));

var buildingList;

console.log("Loading pg")
const { Pool } = require('pg')
const pool = new Pool()
pool.query('SELECT * FROM buildings', (err, res) => {
  if (err) {
    throw err
  }
  console.log('Building list:', res)
  buildingList = res.rows
})

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index',{
      buildings : buildingList
    });
});

// about page 
// app.get('/about', function(req, res) {
//     res.render('pages/about');
// });

const port = process.env.PORT || 80;
app.listen(port);

console.log("Server running at http://localhost:%d", port);