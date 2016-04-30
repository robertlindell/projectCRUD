'use strict';

var mongoose = require('mongoose');

var newsSchema = new mongoose.Schema({
	heading: String,
	text: String
});

var model = mongoose.model('News', newsSchema);


module.exports = model;
