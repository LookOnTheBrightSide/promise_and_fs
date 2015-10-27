var test = require('blue-tape');
var getCoords = require('city-to-coords');
var json2csv = require('json2csv');
var fs = require('fs')
var csvjson = require('csvjson');


var cities = 
 [
 ]


arrays.forEach(function(item) {

    item.station = item.station.substring(0, item.station.indexOf('  '));
    item.station = item.station.replace(/\n/g, "");
    //item.location = item.location.substring(0, item.location.indexOf(','));
    //city =  
    if (item.location === "More in...") {
        city = ""
    } else {
        city = item.location
    }
    country = item.country
    station = item.station
    email = item["email-href"]
    data = {
        city, country, station, email
    }


    //console.log(item.station)

    fs.appendFile("asia_final1.json", JSON.stringify(data), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });

})



// require('async').map(cities, function(city, coords) {
//     getCoords(city)
//         .then((coords, cities) => {
//             //var infoz = [];
//             infoz = [city, coords];
//             //infoz.push(results)
//             //results = (city + " : " + JSON.stringify(coords));
//             //infoz = (infoz[0])
//             //console.log(infoz)
//             data = {
//                 "city": infoz[0],
//                 "coords": infoz[1]
//             }
//             //console.log(data)
//             //return data
//             fs.appendFile("asia_json.json", JSON.stringify(data), function(err) {
//                 if (err) {
//                     return console.log(err);
//                 }
//                 console.log("The file was saved!");
//             });

//         });


// });
