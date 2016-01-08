/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Place = require('../api/place/place.model');
var User = require('../api/user/user.model');



//require('./seeds/generateGeocodeSeeds');



Place.find({}).remove(function() {
  Place.create({
    name: 'Centre Bell',
    formattedAddress: '1909 Avenue des Canadiens-de-Montréal, Montréal, QC H4B 5G0, Canada',
    location:[-73.5694784,45.49603]
  }, {
    name: 'McGill University',
    formattedAddress: '845 Rue Sherbrooke O, Montréal, QC H3A 2T5, Canada',
    location:[-73.5776415,45.5061666]
  }, {
    name: 'Montreal Convention Centre',
    formattedAddress: '1001 Place Jean-Paul-Riopelle, Montréal, QC H2Z 1H5, Canada',
    location:[-73.5609688,45.50386]
  }, {
    name: 'École de technologie supérieure - ÉTS',
    formattedAddress: '1100 Rue Notre-Dame O, Montréal, QC H3C 1K3, Canada',
    location:[-73.5628144,45.4951636]
  }, {
    name: 'CHU Sainte-Justine',
    formattedAddress: '3175 Chemin de la Côte-Sainte-Catherine, Montréal, QC H3T 1C4, Canada',        
    location:[-73.623688,45.5030049]
  }, {
    name: 'HEC Montréal',
    formattedAddress: '3000 Chemin de la Côte-Sainte-Catherine, Montréal, QC H3T 2B1, Canada',
    location:[-73.6210404,45.5034796]
  }, {
    name: 'Jewish General Hospital',
    formattedAddress: '3755 Chemin de la Côte-Sainte-Catherine, Montréal, QC H3T 1E2, Canada',
    location:[-73.6287189,45.49785]
  }, {
    name: 'Mount Royal Park',
    formattedAddress: '1260 Remembrance Road, Montréal, QC H3H 1A2, Canada',
    location:[-73.5970999,45.4987503]
  }, {
    name: 'Forum de Montréal',
    formattedAddress: '2313 Rue Ste-Catherine O, Montréal, QC H3H 1N2, Canada',
    location:[-73.5883233,45.4832368]
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
    console.log('finished populating users');
  });
});