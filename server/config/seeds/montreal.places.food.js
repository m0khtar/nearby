var Config = require('../environment/development');
var Place = require('../../api/place/place.model');
var _ = require('lodash');
var https = require('https');

var key = Config.api_places_key;
//var location = encodeURIComponent('montreal');
var radius = 50000;
var types = ['store', 'food', 'atm', 'bus_station', 'convenience_store', 'gas_station'];
var longitude = -73.5673;
var latitude = 45.5017;

Place.find({}).remove(function() {
	_(types).forEach(function(type) {		
		getPlaces(type);
	});
});


function getPlaces(type) {
	var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + latitude + "," + longitude + "&radius=" + radius + "&types=" + type + "&key=" + key;
	https.get(url, function(response) {
		var body = '';
		response.on('data', function(chunk) {
			body += chunk;
		});
		response.on('end', function() {
			var places = JSON.parse(body);
			var locations = places.results;

			_(locations).forEach(function(place) {
				console.log(place.types);
				Place.create({
					name: place.name,
					formattedAddress: place.vicinity,
					types:place.types,
					location: [place.geometry.location.lng, place.geometry.location.lat],
					rating: place.rating,
					icon: place.icon
				});
			});
		});
	}).on('error', function(e) {
		console.log("Got error: " + e.message);
	});
}