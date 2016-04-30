'use strict';

var mongoose = require('mongoose');

var workSchema = new mongoose.Schema({
	heading: String,
	keyWords: String,
	text: String
});

var model = mongoose.model('Work', workSchema);

module.exports = model;