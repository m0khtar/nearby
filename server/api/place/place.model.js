'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var PlaceSchema = new Schema({
	placeid:String,
	name: String,
	formattedAddress: String,
	location:{
		type:[Number],
		index: '2dsphere'
	},
	types:[String],
	rating:Number,
	icon:String,
	active: Boolean
});

module.exports = mongoose.model('Place', PlaceSchema);