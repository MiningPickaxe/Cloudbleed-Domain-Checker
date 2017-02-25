var express = require('express');
var request = require('request');
var bodyparser = require('body-parser');
var fs = require('fs');
var readline = require('readline');
var winston = require('winston');
//var popupS = require('popups');
var stream;
var match;

var cached = false;

var app = express ();
app.use(bodyparser.urlencoded({extended: true}));

app.get('/', (req, res) =>  {
  res.sendFile(__dirname + '/index.html');
});

app.get('/true', (req, res) => {
  res.sendFile(__dirname + '/true.html');
});

app.get('/false', (req, res) => {
  res.sendFile(__dirname + '/false.html');
});


function caching() {
  winston.log('info', 'Is cached: ' + cached);
  //if (cached == false) {
    stream = fs.readFileSync(__dirname + '/database.txt', 'utf8');

      winston.log('info', "Daten gelesen");
      //stream = data;
      //console.log(stream);
      cached = true;
      winston.log('info', cached);


    //console.log(__dirname + '/database.txt');

  //};
};


function searching(url) {
  match = stream.search(url.toLowerCase())
  //console.log(match);
}


app.post('/webhook', (req, res) => {
  winston.log('info', req.body.msg);
  winston.log('info', req.connection.remoteAddress);

  if (cached == false) {
    caching();
  };
  if(stream !== undefined) {
    //winston.log('info', "Hat inhalt");
  }
  searching(req.body.msg);
  if (match !== -1) {
    res.redirect('/true');
  } else {
    res.redirect('/false');
  };

  //res.redirect('/');
})

app.listen(6968, () => {
  winston.log('info', "Server started!");
});
