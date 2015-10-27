var getCoords = require('city-to-coords');
var getCoords = require('city-to-coords');
var json2csv = require('json2csv');
var fs = require('fs')
var csvjson = require('csvjson');
var cities = [
"Cork, Ireland",
"Dublin, Dublin, Ireland",
"Dublin, Ireland",
"Galway, Ireland",
"Dundalk, Drogheda, Ireland",
"Athlone, Ireland",
"Galway, Galway City, Ireland",
"Dublin, Ireland",
"Dublin, Ireland",
"Lifford, Ireland",
"Dublin, Ireland",
"Cork, Cork, Ireland",
"Bray, Ireland",
"Tralee, Ireland",
"Dublin, Ireland",
"Dublin, Ireland",
"Dublin, Ireland",
"Dundalk, Ireland",
"Dublin, Ireland",
"Kilkenny, Ireland",
"Cork, Ireland",
"Limerick, Ireland",
"Wexford, Ireland",
"Carndonagh, Ireland",
"Dublin, Ireland",
"Dundalk, Ireland",
"Carlow, Ireland",
"Waterford, Ireland",
"Dublin, Ireland",
"Blanchardstown, Ireland",
"Cork, Ireland",
"Dublin, Ireland",
"Carrowduff, Ireland",
"Moville, Ireland",
"Dublin, Ireland",
"Carlow, Ireland",
"Castlebar, Ireland",
"Casla, Ireland",
"Dublin, Ireland",
"Dublin, Ireland",
"Dublin, Ireland",
"Claremorris, Ireland",
"Dublin, Ireland",
"Limerick, Limerick, Ireland",
"Dublin, Ireland",
"Dublin, Ireland",
"Clifden, Ireland",
"Galway, Ireland",
"Cork, Ireland",
"Coolock, Ireland",
"Limerick, Ireland",
"Dublin, Ireland",
"Dublin, Ireland",
"Wexford, Ireland",
"Dublin, Dublin, Ireland",
"Cullenagh, Ireland",
"Dublin, Dublin, Ireland",
"Dublin, Ireland",
"Dublin, Ireland",
"Dublin, Ireland",
"Ballyargus, Ireland",
"Dublin, Ireland",
"Dublin, Ireland",
"Bruckless, Ireland",
"Dublin, Ireland",
"Lucan, Ireland",
"Naas, Ireland",
"Dublin, Ireland",
"Dublin, Ireland",
"Ennis, Clare, Ireland",
"Limerick, Ireland",
"Derrybrien, Ireland",
"Monaghan, Ireland",
"Mayo, Ireland",
"Donabate, Ireland",
"Kinsale, Ireland",
"Dublin, Ireland",
"Waterford, Ireland",
"Dublin, Ireland",
"Youghal, Ireland",
"Dublin, Ireland",
"Dublin, Ireland",
"Dublin, Ireland",
"Sixmilebridge, Ireland",
"Kildare, Ireland",
"Cork, Ireland",
"Dublin, Ireland",
"Dublin, Ireland",
"Kiltamagh, Ireland",
"Saggart, Ireland",
"Dublin , Ireland",
"Dublin, Ireland",
"Dublin, Ireland",
"Westport, Ireland",
"Rathfarnham, Ireland",
"Tullamore, Ireland",
"Dublin, Ireland",
"Limerick, Ireland",
"Cork, Cork, Ireland",
"New Ross, Ireland",
"Dublin, Ireland",
"Monaghan, CO, Ireland",
"Dublin, Ireland",
"Wicklow, Ireland",
"Burnfoot, Donegal, Ireland",
"Dublin, Ireland",
"Tipperary, Ireland",
"Sligo, Donegal Countyfar north, Ireland",
"Dublin, Ireland",
"Collon, Ireland",
"Maghera, Ireland",
"Longford, Ireland",
"Tallaght, Ireland",
"Dublin, Ireland"



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
            fs.appendFile("final/ireland_coords.json", JSON.stringify(data), function(err) {
                if (err) {
                    return console.log(err);
                }
                //console.log("The file was saved!");
            });

        });


});