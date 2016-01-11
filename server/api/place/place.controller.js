'use strict';

var _ = require('lodash');
var Place = require('./place.model');

// Get list of places
exports.index = function(req, res) {
  var longitude = req.query.longitude || -73.5817;
  var latitude = req.query.latitude || 45.4998;
  var mindistance = req.query.mindistance || 0;
  var maxdistance = req.query.maxdistance || 5000;

  Place.find({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: [longitude, latitude]
        },
        $minDistance: mindistance,
        $maxDistance: maxdistance
      }
    }
  }, function(err, places) {
    console.log(places);
    if (err) {
      return handleError(res, err);
    }
    return res.status(200).json(places);
  });
};

// Get a single place
exports.show = function(req, res) {
  Place.findById(req.params.id, function(err, place) {
    if (err) {
      return handleError(res, err);
    }
    if (!place) {
      return res.status(404).send('Not Found');
    }
    return res.json(place);
  });
};

// Creates a new place in the DB.
exports.create = function(req, res) {
  Place.create(req.body, function(err, place) {
    if (err) {
      return handleError(res, err);
    }
    return res.status(201).json(place);
  });
};

// Updates an existing place in the DB.
exports.update = function(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Place.findById(req.params.id, function(err, place) {
    if (err) {
      return handleError(res, err);
    }
    if (!place) {
      return res.status(404).send('Not Found');
    }
    var updated = _.merge(place, req.body);
    updated.save(function(err) {
      if (err) {
        return handleError(res, err);
      }
      return res.status(200).json(place);
    });
  });
};

// Deletes a place from the DB.
exports.destroy = function(req, res) {
  Place.findById(req.params.id, function(err, place) {
    if (err) {
      return handleError(res, err);
    }
    if (!place) {
      return res.status(404).send('Not Found');
    }
    place.remove(function(err) {
      if (err) {
        return handleError(res, err);
      }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}