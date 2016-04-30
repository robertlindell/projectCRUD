'use strict';

var express = require('express');
var News = require('../models/model'); // eller vad vår model-fil heter
var Work = require('../models/workmodel');
var parser = require('body-parser');
var router = express.Router();

//var news = ./news.html


router.get("/news", function(req, res, next) {
 		//console.log("fick en news request")	
 		News.find().then(function(allData) {

 			res.json(allData);

 		});
});


router.get("/news/:id", function(req, res, next) {
 			
		var id = req.params.id;

 		News.find({_id:id}).then(function(allData) {

 			res.json(allData);
 			
 		});
});


router.get("/work", function(req, res, next) {
 		//console.log("fick en news request")	
 		Work.find().then(function(workData) {

 			res.json(workData);

 		});
});

router.get("/work/:id", function(req, res, next) {
 			
		var id = req.params.id;

 		Work.find({_id:id}).then(function(workData) {

 			res.json(workData);
 			
 		});
});

router.post("/inputformnews", function(req, res, next) {

		var news = new News({

			heading: req.body.heading,
			text: req.body.text
		});

		news.save(function(err) {

			if (err) 
				console.log('error on save');
		});
	res.redirect('/admin');
});

router.post("/inputformwork", function(req, res, next) {

		var work = new Work({

			heading: req.body.heading,
			keyWords: req.body.keyWords,
			text: req.body.text
		});

		work.save(function(err) {

			if (err) 
				console.log('error on save');
		});
	res.redirect('/admin');
});

router.delete("/news/:id", function (req, res) {
	var id = req.params.id;
	//console.log(id);
	News.remove({_id: id}, function (err, doc) {
		res.json(doc);
	});
});


router.get('/news/:id', function (req, res) {
	var id = req.params.id;
	console.log(id);
	News.findOne({_id: id}, function (err, doc) {
		res.json(doc);
	});
});


/*
router.delete( function(req, res, next) {
	News.remove({
		_id: req.params.news_id
	}, function (err, news) {
		if (err) return res.send(err);
		res.json({ message: 'Deleted' });

	});
});
*/

router.post('/changeformnews/', function(req, res) {
	var id = req.body.id;
	console.log(id);
	News.findByIdAndUpdate(id, {
		heading:req.body.heading,
		text:req.body.text

	}, function (err, doc) {
		res.redirect("/news");
	});	

});


module.exports = router;