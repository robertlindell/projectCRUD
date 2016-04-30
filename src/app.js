'use strict';

var express = require('express');
var parser = require('body-parser');
var router = require('./api');

var app = express();

require('./database');

app.use('/', express.static('public'));
app.use(parser.json());
app.use(parser.urlencoded({extended: false }));
app.use('/api', router);
app.use('/app', express.static('app'));


app.use('/news', express.static('public/news.html'));
app.use('/work', express.static('public/work.html'));
app.use('/admin', express.static('public/admin.html'));
app.use('/changeformnews', express.static('public/changeformnews.html'));

app.listen(3000, function() {
	console.log('Server is running on port 3000!');
});