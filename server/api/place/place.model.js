'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var PlaceSchema = new Schema({
	name: String,
	formattedAddress: String,
	location:{
		type:[Number],
		index: '2dsphere'
	},
	active: Boolean
});

module.exports = mongoose.model('Place', PlaceSchema);