
'use strict';

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var server = require('http').Server(app);

app.get('/', function(req, res, next) {
    console.log('received lang: ' + req.query.lang);
    next();
});

app.use(bodyParser.json());

/*jslint nomen: true*/
app.use('/', express.static(path.join(__dirname, '../client/views')));
app.use('/css', express.static(path.join(__dirname, '../client/css')));
app.use('/js', express.static(path.join(__dirname, '../client/js')));

/*jslint unparam: true */
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/views/index.html'));
});

server.listen(3001);
