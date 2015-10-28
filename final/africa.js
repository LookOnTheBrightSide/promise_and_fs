// **** Note, you have to paste an array of cities in the file called cities.js. 
// **** You can find it 
// **** in this folder. 

var getCoords = require('city-to-coords');
var getCoords = require('city-to-coords');
var json2csv = require('json2csv');
var fs = require('fs')
var csvjson = require('csvjson');
var cities = require('./cities.js')
require('async').map(cities, function(city, coords) {
    getCoords(city)
        .then((coords, cities) => {
            infoz = [city, coords];
            data = {
                "city": infoz[0],
                "coords": infoz[1]
            }
            var destination = "tada.json";
            fs.appendFile(destination, JSON.stringify(data), function(err) {
                if (err) {
                    return console.log(err);
                }
            });
        });
});