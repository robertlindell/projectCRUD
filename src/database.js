'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/projectcrud', function(err) {
  if (err) { //callback
    console.log('Failed connecting to MongoDB!');
  } else {
    console.log('Successfully connected to MongoDB!');
  }
});