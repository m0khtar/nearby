// Generate Geocode seeds

var fs = require('fs');
var filename = "./server/config/seeds/lol.txt";


GenerateGeocodeSeeds();
fs.writeFileSync(filename, "");
fs.appendFileSync(filename, "Thing.find({}).remove(function() {");
fs.appendFileSync(filename, ');});');



function GenerateGeocodeSeeds() {
	var places = [];
	var geocoderProvider = 'google';
	var httpAdapter = 'https';
	// optionnal
	var extra = {
		apiKey: 'AIzaSyAHuqj_3Yf1fATE9JWG-LGWBQSUaBC_w44', // for Mapquest, OpenCage, Google Premier
		formatter: null // 'gpx', 'string', ...
	};

	var geocoder = require('node-geocoder')(geocoderProvider, httpAdapter, extra);

	// Using callback
	geocoder.geocode('3755 Chemin de la Côte-Sainte-Catherine, Montréal, QC H3T 1E2',
		function(err, results) {
			console.log(results);
		});
	return places;
};