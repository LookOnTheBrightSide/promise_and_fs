var getCoords = require('city-to-coords');
var getCoords = require('city-to-coords');
var json2csv = require('json2csv');
var fs = require('fs')
var csvjson = require('csvjson');

var cities = [
"Guildford, United Kingdom",
"London, United Kingdom",
"Guildford, United Kingdom",
"London, United Kingdom",
"Bradford, United Kingdom",
"Glasgow, United Kingdom",
"Saint Neots, United Kingdom",
"London, United Kingdom",
"Stoke-on-Trent, United Kingdom",
"London, United Kingdom",
"London, United Kingdom",
"London, United Kingdom",
"London, United Kingdom",
"Cardiff, United Kingdom",
"Folkestone, United Kingdom",
"Hastings, United Kingdom",
"Southall, United Kingdom",
"Rothesay, United Kingdom",
"Newry, United Kingdom",
"Turriff, United Kingdom",
"Kendal, United Kingdom",
"Dunoon , United Kingdom",
"Portree, United Kingdom",
"Lincoln, United Kingdom",
"Alnwick, United Kingdom",
"Fraserburgh, United Kingdom",
"Newry, United Kingdom",
"Scarborough, United Kingdom",
"Achmore, United Kingdom",
"Ullapool, United Kingdom",
"Belmont, United Kingdom",
"Lincoln, United Kingdom",
"Dunoon, United Kingdom",
"Mallaig, United Kingdom",
"Gairloch, United Kingdom",
"Alderney, United Kingdom",
"Narberth, United Kingdom",
"Lincoln, United Kingdom",
"Dover, United Kingdom",
"Castlebay, United Kingdom",
"Thanet, United Kingdom",
"Hawes, United Kingdom",
"Narberth, United Kingdom",
"Whitby, United Kingdom",
"Oban, United Kingdom",
"Ballymoney, United Kingdom",
"Kirkby Lonsdale, United Kingdom",
"King's Lynn, United Kingdom",
"St Marys, United Kingdom",
"Oxford, United Kingdom",
"Exeter, United Kingdom",
"Pembroke Dock, United Kingdom",
"London, United Kingdom",
"Pitlochry, United Kingdom",
"London, United Kingdom",
"Durham, United Kingdom",
"Kirkwall, United Kingdom",
"Thurso, United Kingdom",
"Campbeltown, United Kingdom",
"Banff, United Kingdom",
"Newtown, United Kingdom",
"London, United Kingdom",
"Haverfordwest, United Kingdom",
"Cookstown, United Kingdom",
"Melvaig, United Kingdom",
"Kirkwall, United Kingdom",
"Swansea, United Kingdom",
"Sheffield, United Kingdom",
"Kingston upon Hull, United Kingdom",
"London, United Kingdom",
"London, United Kingdom",
"London, United Kingdom",
"London, United Kingdom",
"Gateshead, United Kingdom",
"London, United Kingdom",
"Leicester, United Kingdom",
"Harrogate, United Kingdom",
"York, United Kingdom",
"Stockton-on-Tees, United Kingdom",
"Birmingham, United Kingdom",
"London, United Kingdom",
"Leeds, United Kingdom",
"London, United Kingdom",
"Glasgow, United Kingdom",
"Stoke-on-Trent, United Kingdom",
"London, United Kingdom",
"London, United Kingdom",
"London, United Kingdom",
"Stoke-on-Trent, United Kingdom",
"Bradford, United Kingdom",
"London, United Kingdom",
"London, United Kingdom",
"Leeds, United Kingdom",
"Manchester, United Kingdom",
"Liverpool, United Kingdom",
"London, United Kingdom",
"Leicester, United Kingdom",
"Leicester, United Kingdom",
"Redruth, United Kingdom",
"Belfast, United Kingdom",
"Manchester, United Kingdom",
"London, United Kingdom",
"Dundee, United Kingdom",
"London, United Kingdom",
"Edinburgh, United Kingdom",
"London, United Kingdom",
"Newcastle upon Tyne, United Kingdom",
"London, United Kingdom",
"London, United Kingdom",
"Preston, United Kingdom",
"Manchester, United Kingdom",
"London, United Kingdom",
"Redruth, United Kingdom",
"Guildford, United Kingdom",
"Inverness, United Kingdom",
"London, United Kingdom",
"London, United Kingdom",
"Guildford, United Kingdom",
"Hayes, United Kingdom",
"London, United Kingdom",
"London, United Kingdom",
"Falmouth, United Kingdom",
"Manchester, United Kingdom",
"London, United Kingdom",
"Stoke-on-Trent, United Kingdom",
"London, United Kingdom",
"London, United Kingdom",
"London, United Kingdom",
"Brighton, United Kingdom"

]





require('async').map(cities, function(city, coords) {
    getCoords(city)
        .then((coords, cities) => {
            //var infoz = [];
            infoz = [city, coords];
            //infoz.push(results)
            //results = (city + " : " + JSON.stringify(coords));
            //infoz = (infoz[0])
            //console.log(infoz)
            data = {
                "city": infoz[0],
                "coords": infoz[1]
            }
            //console.log(data)
            //return data
            fs.appendFile("engerlang.json", JSON.stringify(data), function(err) {
                if (err) {
                    return console.log(err);
                }
                //console.log("The file was saved!");
            });

        });


});