var test = require('blue-tape');
var getCoords = require('city-to-coords');
var json2csv = require('json2csv');
var fs = require('fs')
var csvjson = require('csvjson');

var cities = [


    "Cape Town, South Africa",
    "Tunis, Tunisia",

    "Chrea, Algeria",

    "Victoria, Seychelles",
    "Asmara, Eritrea",

    "Antananarivo, Madagascar",
    "Banjul, Gambia",

    "",
    "",
    "",
    "",
    "Dakar, Senegal",
    "Tabora, Tanzania",

    "",
    "",
    "",
    "Addis Abeba, Ethiopia",
    "Banjul, Gambia",

    "Abidjan, Côte d'Ivoire",

    "Gabès, Tunisia",

    "",
    "N'Dalatando, Angola",
    "Cairo, Egypt",
    "Cairo, Egypt",
    "Pretoria, South Africa",
    "Johannesburg, South Africa",

    "",
    "Antananarivo, Madagascar",
    "Dar es Salaam, Tanzania",

    "",
    "",
    "",
    "Bujumbura, Burundi",
    "Remada, Tunisia",
    "Kibera, Kenya",

    "",
    "",
    "Kolda, Senegal",
    "Harar, Ethiopia",
    "Banjul, Gambia",
    "Maputo, Mozambique",
    "Citronelle, Rodrigues Island, Mauritius",
    "Kayes, Kayes Province, Mali",
    "Dakar, Senegal",
    "Ouagadougou, Burkina Faso",
    "Tripolis, Libyan Arab Jamahiriya",
    "Accra, Ghana",

    "",
    "Accra, Ghana",

    "",
    "",
    "",
    "",
    "Moutsamoudou, Comoros",
    "Ouagadougou, Ouagadougou, Burkina Faso",
    "Dakar, Senegal",

    "",
    "",
    "Abidjan, Abidjan, Côte d'Ivoire",

    "Mongu, Zambia",
    "Ziguinchor, Senegal",

    "Dzaoudzi, Mayotte",

    "",
    "",
    "",
    "Viana, Angola",

    "Bonto, Gambia",
    "Kigali, Rwanda",
    "Sumbe, Angola",

    "Victoria, Seychelles",
    "Saint-Denis, Reunion",

    "",
    "",
    "",
    "Harare, Harare, Zimbabwe",

    "",
    "Ondjiva, Angola",

    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Bangui, Central African Republic",

    "",
    "",
    "",
    "Lomé, Togo",
    "Nador, Morocco",
    "Monze, Zambia",

    "Malherbes, Mauritius",

    "Sapone-Marche, other areas, Burkina Faso",
    "Avoca, Zimbabwe",
    "Moroni, Comoros",

    "",
    "Gafsa, Tunisia",
    "Korhogo, Côte d'Ivoire",
    "Antalaha, Madagascar",
    "Luanda, Angola",
    "Dakar, Senegal",

    "Waterberg, Namibia",
    "Nairobi, Kenya",

    "Dakar, Senegal",

    "Tema, Ghana",
    "Cairo, Egypt",
    "Cairo, Egypt",

    "Benguela, Angola",
    "Freetown, Sierra Leone",
    "Sfax, Tunisia",

    "Nairobi, Nairobi, Kenya",
    "Freetown, Sierra Leone",
    "Ibadan, Nigeria",
    "Cotonou, Benin",
    "Arusha, Tanzania",

    "",
    "Cotonou, Benin",
    "Maseru, Lesotho",

    "",
    "Arusha, Arusha Region, Tanzania",
    "Port Louis, Mauritius",

    "Maseru, Lesotho",
    "Kinshasa, DR Congo",

    "Saint-Denis, Reunion",
    "Khartoum, Sudan",

    "",
    "La Riviere, Reunion",
    "Accra, Ghana",
    "Kitwe, Zambia",

    "",
    "Ibadan, Nigeria",

    "",
    "Huambo, Angola",
    "Blantyre, Malawi",

    "Lusaka, Zambia",
    "Lomé, Togo",

    "Bamako, Mali",
    "Freetown, Sierra Leone",

    "Klein Windhoek, Namibia",

    "Yaounde, Cameroon",

    "",
    "Nairobi, Kenya",

    "",
    "",
    "Monastir, Tunisia",

    "Agadir, Morocco",
    "Kigali, Rwanda",
    "N'Djamena, Chad",

    "",
    "Addis Ababa, Ethiopia",

    "",
    "Nairobi, Kenya",

    "Kano, Nigeria",

    "",
    "Banghazi, Libyan Arab Jamahiriya",

    "Accra, Ghana",

    "",
    "",
    "",
    "Kampala, Uganda",

    "",
    "",
    "Mansa, Zambia",

    "Lusaka, Zambia",

    "Dar es Salaam, Tanzania",
    "Tunis, Tunisia",
    "Bujumbura, Burundi",

    "",
    "",
    "",
    "Klein Windhoek, Namibia",
    "Omdurman, Sudan",

    "",
    "",
    "Kano, Nigeria",
    "Luanda, Angola",

    "",
    "Port Louis, Mauritius",
    "Johannesburg, South Africa",
    "Cairo, Egypt",
    "Faravohitra, Antananarivo, Madagascar",

    "",
    "Jamestown, St. Helena",
    "Rehobot, Namibia",
    "Gaborone, Botswana",

    "",
    "Banjul, Gambia",
    "Nairobi, Kenya",

    "Klein Windhoek, Namibia",
    "Kampala, Uganda",

    "Bellville, South Africa",

    "",
    "Port Harcourt, Nigeria",
    "Diebougou, Burkina Faso",

    "Johannesburg, South Africa",
    "Paris, Gabon",

    "",
    "Dar es Salaam, Tanzania",

    "",
    "Boukrim, Tunisia",
    "Port Louis, Mauritius",

    "Touba, Mali",
    "Vicente Dias, Cape Verde",
    "Lusaka, Zambia",
    "Aflou, Algeria",

    "Kigali, Rwanda",

    "",
    "Yamoussoukro, Côte d'Ivoire",
    "Sainte-Rose, Reunion",
    "Nairobi, Kenya",
    "Giza, Egypt",

    "",
    "Porto-Novo, Benin",

    "Yaounde, Cameroon",
    "Johannesburg, South Africa",
    "Antananarivo, Madagascar",
    "Beira, Mozambique",
    "Port Louis, Mauritius",

    "Nairobi, Kenya",
    "Dakar, Senegal",

    "",
    "Katutura, Namibia",

    "",
    "Saint-Pierre, Saint-Pierre, Reunion",
    "Casablanca, Morocco",
    "Malange, Angola",

    "",
    "",
    "Accra, Ghana",

    "Nairobi, Kenya",
    "El Haouaria, Tunisia",

    "",
    "",
    "Khartoum, Sudan",

    "",
    "Malherbes, Port Louis, Mauritius",
    "Algiers, Algeria",

    "",
    "",
    "Tripoli, Libyan Arab Jamahiriya",

    "Tangier, Morocco",

    "Lusaka, Lusaka, Zambia",

    "Cotonou, Benin",
    "Arua, Uganda",
    "Tripolis, Libyan Arab Jamahiriya",
    "Blantyre, Southern, Malawi",

    "",
    "",
    "Sere Kunda, Gambia",
    "Hurghada, Egypt",
    "Kumasi, Ghana",

    "Le Tampon, Reunion",
    "Rabat, Morocco",

    "Cairo, Egypt",
    "Bata, Equatorial Guinea",
    "Alger, Algeria",

    "Poie, DR Congo",
    "Zomba, Malawi",

    "",
    "",
    "Mbabane, Swaziland",

    "",
    "",
    "",
    "Santiago, Cape Verde",
    "Dakar, Senegal",
    "Abidjan, Côte d'Ivoire",
    "Magnambougou, Mali",

    "Gafsa, Tunisia",

    "Gaborone, Botswana",
    "Nairobi, Kenya",
    "Ouagadougou, Burkina Faso",
    "Cotonou, Benin",
    "Harare, Zimbabwe",

    "",
    "",
    "",
    "Klein Windhoek, Namibia",

    "Bangui, Central African Republic",
    "Yaoundé, Cameroon",

    "",
    "Lusaka, Zambia",
    "Carthage, Tunisia",

    "",
    "",
    "",
    "Ourossogui, Senegal",

    "",
    "",
    "",
    "",
    "Nampula, Mozambique",

    "Lomé, Togo",

    "",
    "",
    "",
    "",
    "",
    "Chrea, Algeria",

    "Moyamba, Sierra Leone",

    "Accra, Ghana",
    "Bamako, Mali",
    "Accra, Ghana",
    "Bambilor, Senegal",
    "Casablanca, Morocco",

    "",
    "Cairo, Egypt",

    "",
    "Asmara, Eritrea",

    "Antananarivo, Madagascar",

    "Bordj El Bahri, Algeria",
    "Kampala, Uganda",
    "Bujumbura, Burundi",

    "",
    "Lomé, Togo",
    "Gaborone, Botswana",

    "",
    "Accra, Ghana",

    "Casablanca, Morocco",
    "Casablanca, Morocco",

    "Nairobi, Kenya",
    "Addis Abeba, Ethiopia",

    "Dakar, Senegal",

    "Banikoara, Benin",

    "Accra, Ghana",

    "Bujumbura, Burundi",
    "Asmara, Eritrea",
    "Dar Es Salaam, Tanzania",

    "Blantyre, Malawi",
    "Tripolis, Libyan Arab Jamahiriya",

    "",
    "",
    "",
    "Lusaka, Lusaka, Zambia",
    "Tripolis, Libyan Arab Jamahiriya",
    "Saint-Denis, Reunion",
    "Bamako, Bamako, Mali",

    "Addis Abeba, Ethiopia",
    "Lobito, Angola",

    "",
    "",
    "",
    "",
    "",
    "Kigali, Kigali, Rwanda",

    "Maseru, Lesotho",
    "Johannesburg, South Africa",

    "",
    "Kinshasa, DR Congo",

    "Klein Windhoek, Namibia",

    "Johannesburg, South Africa",

    "",
    "",
    "",
    "",
    "Bouake, Ivory Coast",

    "Djibouti, Djibouti",
    "Tambacounda, Senegal",

    "",
    "Koulikoro, Mali",
    "Mangochi, Malawi",

    "Uige, Angola",

    "Cairo, Egypt",
    "Kayes, Mali",
    "Klein Windhoek, Namibia",
    "Algiers, Algiers, Algeria",
    "Khartoum, Sudan",
    "Khartoum, Sudan",
    "Lusaka, Zambia",

    "",
    "Serrekunda, Gambia",

    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Omdurman, Sudan",
    "Serrekunda, Gambia",
    "Khartoum, Sudan",
    "Bangui, Central African Republic",

    "",
    "",
    "Toamasina, Madagascar",
    "Bamako, Mali",

    "",
    "Antananarivo, Madagascar",
    "Addis Abeba, Ethiopia",

    "Casablanca, Morocco",

    "Monrovia, Liberia",

    "",
    "",
    "",
    "",
    "Klein Windhoek, Namibia",
    "Sousse, Tunisia",
    "Abidjan, Côte d'Ivoire",
    "Katima Mulilo, Namibia",
    "Bamako, Mali",

    "Kinshasa, DR Congo",
    "Maseru, Lesotho",

    "",
    "Antananarivo, Madagascar",
    "Abidjan, Côte d'Ivoire",
    "Abidjan, Côte d'Ivoire",

    "Saint-Denis, Saint-Denis, Reunion",
    "Santa Isabel, Equatorial Guinea",
    "Antsiranana, Madagascar",

    "Casablanca, Morocco",
    "Cotonou, Benin",

    "Nairobi, Kenya",
    "Lagos, Nigeria",

    "Maputo, Mozambique",

    "Abidjan, Côte d'Ivoire",
    "Machakos, Kenya",
    "Maseru, Lesotho",

    "",
    "",
    "",
    "",
    "Omdurman, Sudan",

    "Kita, Mali, Mali",

    "",
    "Klein Windhoek, Namibia",
    "Rabat, Morocco",
    "Blantyre, Malawi",
    "Kampala, Uganda",

    "",
    "Kampala, Uganda",

    "",
    "Douala, Cameroon",
    "Cairo, Egypt",

    "Kigali, Rwanda",

    "Antananarivo, Madagascar",

    "Kigali, Kigali, Rwanda",
    "Gaborone, Botswana",

    "Kumasi, Ghana",
    "Lomé, Togo",
    "Omdurman, Sudan",

    "Bloemfontein, South Africa",

    "",
    "",
    "Luanda, Angola",
    "Freetown, Sierra Leone",

    "",
    "",
    "",
    "",
    "Gaborone, Botswana",

    "Dar es Salaam, Tanzania",

    "El Aaiún, Western Sahara",

    "",
    "",
    "",
    "Klein Windhoek, Namibia",
    "Jijel, Algeria",

    "",
    "",
    "",
    "",
    "",
    "",
    "Mbalmayo, Cameroon",

    "",
    "",
    "Kumasi, Ghana",
    "Maseru, Lesotho",

    "",
    "Kinshassa, Congo",

    "",
    "Johannesburg, South Africa",

    "Metu, Ethiopia",
    "Dar es Salaam, Tanzania",
    "Cairo, Egypt",
    "Nairobi, Nairobi, Kenya",

    "",
    "",
    "",
    "Lagos, Nigeria",
    "Windhoek, Namibia",
    "Waterloo, Sierra Leone",

    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Maseru, Lesotho",
    "Rabat, Morocco",

    "Ilorin, Nigeria",

    "Nairobi, Kenya",
    "Abidjan, Abidjan, Côte d'Ivoire",
    "Dakar, Senegal",

    "Douala, Cameroon",

    "Franceville, Gabon",
    "Oran, Regionale de l'Ouest, Algeria",

    "",
    "Maseru, Lesotho",
    "Mogadishu, Somalia",

    "Dar es Salaam, Tanzania",
    "Kigali, Rwanda",

    "",
    "",
    "Tipaza, Algeria",
    "Bamako, Bamako, Mali",

    "Khartoum, Sudan",
    "Lagos, Nigeria",

    "Kumasi, Ghana",

    "",
    "Klein Windhoek, Namibia",
    "Johannesburg, South Africa",

    "",
    "",
    "Kinshasa, DR Congo",

    "Addis Abeba, Ethiopia",

    "Ndzouani, Comoros",
    "Tlemcen, Algeria",

    "Lomé, Lome, Togo",

    "",
    "Harare, Harare, Zimbabwe",
    "Fianarantsoa, Madagascar",
    "Ouagadougou, Burkina Faso",

    "Dar es Salaam, Tanzania",
    "Klein Windhoek, Namibia",
    "Harare, Zimbabwe",
    "Juba, Sudan",
    "Bamako, Mali",
    "Mayotte, Mayotte",

    "",
    "Lavumisa, Swaziland",

    "",
    "Trois-Bassins, Les Trois Bassins, Reunion",

    "Moroni, Comoros",
    "Cairo, Egypt",
    "Kitwe, Zambia",

    "",
    "",
    "Klein Windhoek, Namibia",

    "Ouagadougou, Burkina Faso",

    "Dar Es Salaam, Tanzania",
    "Maseru, Lesotho",
    "Lagos, Nigeria",
    "Saint-Louis, Reunion",
    "Kigali, Rwanda",

    "",
    "",
    "",
    "",
    "Jamestown, St. Helena",

    "Kampala, Uganda",
    "Victoria, Seychelles",
    "Port-Gentil, Gabon",
    "Kaduna, Nigeria",
    "Maputo, Mozambique",
    "Cairo, Egypt",

    "",
    "Victoria, Seychelles",

    "",
    "",
    "Lomé, Togo",
    "Le Port, Reunion",
    "Saint-Leu, Saint-Leu, Reunion",
    "Dundo, Angola",
    "Sikasso, Mali",
    "Toamasina, Madagascar",

    "",
    "Saint-Denis, Reunion",

    "",
    "",
    "Mtwara, Tanzania",

    "",
    "",
    "",
    "Lagos, Nigeria",

    "",
    "Nairobi, Kenya",
    "Fizi, DR Congo",
    "Cairo, Egypt",

    "",
    "Kigali, Rwanda",
    "Yaoundé, Cameroon",
    "Saint-Denis, Reunion",
    "Luanda, Angola",
    "Djibouti, Djibouti",

    "",
    "Saint-Denis, Saint-Denis, Reunion",

    "",
    "Arua, Uganda",

    "Accra, Ghana",

    "Bechar, Regionale du Sud-Ouest, Algeria",
    "Kigali, Rwanda",
    "Khartoum, Sudan",
    "Bel Ombre, Mauritius",

    "Bloemfontein, South Africa",

    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Wad Madani, Sudan",
    "Nakuru, Kenya",
    "Dakar, Senegal",
    "Saint-Pierre, Reunion",
    "Ouagadougou, Ouagadougou, Burkina Faso",

    "",
    "Tripolis, Libyan Arab Jamahiriya",

    "",
    "",
    "Cairo, Egypt",

    "Saint-Denis, Reunion",

    "Allada, Benin",
    "Dar es Salaam, Tanzania",
    "Nouakchott, Mauritania",
    "Maseru, Lesotho",

    "",
    "Casablanca, Morocco",

    "Achada Baleia, Cape Verde",
    "Tunis, Tunisia",
    "Adrar, Regionale du Sud- Est, Algeria",
    "Banjul, Gambia",

    "Farafenni, Gambia",
    "Ouagadougou, Burkina Faso",

    "",
    "Luanda, Luanda, Angola",

    "",
    "Ziguinchor, Senegal",

    "Kigali, Rwanda",

    "Johannesburg, South Africa",

    "",
    "",
    "",
    "Yopougon-Attie, Côte d'Ivoire",
    "Edinburgh of the Seven Seas, St. Helena",

    "",
    "Maputo, Mozambique",
    "Cairo, Egypt",
    "Maputo, Em primeiro lugar em todo lugar, Mozambique",
    "Blantyre, Malawi",

    "",
    "",
    "",
    "",
    "Abidjan, Côte d'Ivoire",
    "Ngara, Tanzania",

    "Freetown, Sierra Leone",
    "Bakau, Gambia",

    "Cabinda, Angola",
    "Abuja, Nigeria",

    "",
    "Laghouat, Regionale du Sud- Est, Algeria",

    "Lomé, Togo",

    "",
    "Kara, Togo",

    "",
    "",
    "Kinshasa, DR Congo",
    "Parakou, Borgou, Benin",
    "Tiaret, Algeria",
    "Lusaka, Zambia",

    "",
    "",
    "Rabat, Morocco",

    "",
    "",
    "Bissau, Guinea-Bissau",
    "Cairo, Egypt",
    "Kampala, Uganda",

    "",
    "Kampala, Uganda",
    "Monze, Zambia",

    "",
    "Accra, Ghana",

    "",
    "Dakar, Senegal",
    "Iringa, Tanzania",
    "Kayes, Mali",

    "Lusaka, Zambia",
    "Monrovia, Liberia",
    "Nouakchott, Mauritania",
    "Kabale, Uganda",
    "Bamako, Mali",

    "",
    "Lusaka, Lusaka, Zambia",

    "Kampala, Mbarara, Uganda",
    "Mindelo, Cape Verde",

    "",
    "",
    "",
    "Asmara, Eritrea",
    "Yaoundé, Cameroon",
    "Ouagadougou, Burkina Faso",

    "",
    "Moroni, Comoros",

    "Zanzibar, Tanzania",
    "Kumasi, Ghana",
    "Kumasi, Ghana",

    "Libreville, Gabon",
    "Kinshassa, Congo",

    "",
    "Kampala, Uganda",

    "",
    "",
    "Yaoundé, Cameroon",
    "Kampala, Uganda",
    "Kampala, Uganda",
    "Soroti, Uganda",

    "",
    "",
    "",
    "Lilongwe, Malawi",
    "N'Djamena, Chad",
    "Harare, Harare, Zimbabwe",
    "Rabat, Morocco",

    "Mbabane, Swaziland",
    "Nairobi, Kenya",
    "Nairobi, Kenya",

    "Conakry, Guinea",

    "",
    "Addis Ababa, Ethiopia",
    "Victoria, Seychelles",
    "Zaghouan, Tunisia",

    "",
    "",
    "",
    "Ibadan, Nigeria",

    "Victoria, Seychelles",

    "Windhoek, Namibia",

    "Sétif, Algeria",

    "Ouagadougou, Burkina Faso",
    "Hammamet, Tunisia",
    "Mbabane, Swaziland",
    "Malherbes, Mauritius",
    "Cairo, Egypt",

    "",
    "Mkazi, Ngazidja, Comoros",
    "Saint-Denis, Reunion",

    "Kaloko, Zambia",
    "Lomé, Togo",
    "Kaolack, Senegal",

    "Abidjan, Côte d'Ivoire",

    "Douentza, Mopti Province, Mali",

    "",
    "",
    "Yamoussoukro, Ivory Coast",

    "",
    "",
    "",
    "Lilongwe, Malawi",
    "Lusaka, Zambia",

    "Lusaka, Lusaka, Zambia",

    "Kampala, Uganda",

    "",
    "Conakry, Guinea",

    "Kinshasa, DR Congo",

    "",
    "Yaoundé, Cameroon",

    "",
    "Dakar, Senegal",

    "Tripoli, Libyan Arab Jamahiriya",

    "",
    "Skikda, Algeria",
    "Saint-Denis, Reunion",
    "Kampala, Uganda",

    "Cairo, Egypt",

    "Mahdia, Tunisia",

    "",
    "",
    "",
    "Kampala, Uganda",

    "",
    "Oran, Regionale de l'Ouest, Algeria",
    "Omdurman, Sudan",
    "Klein Windhoek, Namibia",
    "Kumasi, Ghana",

    "Durban, South Africa",

    "Johannesburg, South Africa",
    "Misratah, Libyan Arab Jamahiriya",
    "Cape Town, South Africa",
    "Livingstone, Zambia",
    "Lagos, Nigeria",

    "Conakry, Guinea",

    "Kinshasa, DR Congo",

    "Freetown, Sierra Leone",
    "Kinshasa, DR Congo",

    "",
    "Saint-Denis, Saint-Denis, Reunion",

    "Johannesburg, South Africa",

    "Casablanca, Morocco",

    "",
    "Illizi, Regionale du Sud- Est, Algeria",

    "Abuja, Nigeria",

    "Waterberg, Namibia",
    "Tripoli, Libyan Arab Jamahiriya",

    "Maputo, Mozambique",
    "Maseru, Lesotho",

    "",
    "",
    "",
    "Praia, Cape Verde",
    "Parakou, Benin",

    "Tamanghasset, Regionale du Sud- Est, Algeria",

    "Harare, Zimbabwe",
    "Ikosi, Nigeria",

    "Blantyre, Malawi",
    "Masr, Egypt",
    "Tripolis, Libyan Arab Jamahiriya",

    "Harare, Zimbabwe",

    "Luanda, Angola",

    "",
    "Matola, Mozambique",
    "Bujumbura, Burundi",

    "Kumasi, Ghana",

    "Tripoli, Libyan Arab Jamahiriya",
    "Ouled Fayet, Algeria",
    "Port Elizabeth, South Africa",

    "",
    "Bamako, Mali",
    "Mombasa, Kenya",

    "",
    "",
    "Bamako, Mali",

    "",
    "",
    "",
    "",
    "",
    "Remada, Tunisia",
    "Morogoro, Tanzania",
    "Benghazi, Libyan Arab Jamahiriya",

    "Bamako, Mali",
    "Addis Abeba, Ethiopia",

    "",
    "",
    "Khartoum, Sudan",
    "Antananarivo, Madagascar",

    "Casablanca, Morocco",

    "Libreville, Gabon",
    "Kigali, Rwanda",
    "Dzoumogne, Mayotte",
    "Tunis, Tunisia",
    "Antananarivo, Madagascar",
    "Benghazi, Libyan Arab Jamahiriya",

    "São Tomé, Sao Tome and Principe",
    "Port Louis, Mauritius",

    "Combani, Mayotte",

    "",
    "Dakar, Senegal",

    "",
    "",
    "",
    "",
    "",
    "Kabwe, Zambia",

    "Kigali, Rwanda",

    "Bizerte, Tunisia",

    "Nouakchott, Mauritania",

    "",
    "",
    "",
    "Kampala, Entebbe, Uganda",

    "",
    "Port Louis, Port Louis, Mauritius",

    "",
    "Bangui, Central African Republic",

    "Cotonou, Benin",

    "Antananarivo, Madagascar",

    "Aba, Nigeria",
    "Saint-Denis, Reunion",
    "Yaoundé, Cameroon",

    "",
    "",
    "Dar Es Salaam, Tanzania",
    "Maputo, Mozambique",
    "Tunis, Tunisia",

    "",
    "Lagos, Nigeria",
    "Johannesburg, South Africa",
    "Gaborone, Botswana",

    "Benghazi, Libyan Arab Jamahiriya",
    "Blantyre, Malawi",

    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Kuito, Angola",
    "Monrovia, Liberia",
    "Klein Windhoek, Namibia",
    "Bamako, Mali",
    "Ouahigouya, Burkina Faso",
    "Lubango, Angola",
    "Abuja, Nigeria",
    "Namibe, Angola",
    "Gafsa, Tunisia",

    "",
    "",
    "Antananarivo, Madagascar",

    "",
    "",
    "",
    "Antananarivo, Madagascar",
    "Mzuzu, Malawi",

    "Lomé, Togo",
    "Port Louis, Mauritius",

    "",
    "Iringa, Tanzania"

]

//====

//================ 	WORKING CODE 	 ================//

// var fields = ['city', 'coordinates'];

// cities.map(function(city, coords) {
//     getCoords(city)
//         .then((coords, cities) => {
//             //var infoz = [];
//             infoz = [city, coords];
//             //infoz.push(results)
//             //results = (city + " : " + JSON.stringify(coords));
//             //infoz = (infoz[0])
//            console.log(infoz)
//             data = {
//                 "city": infoz[0],
//                 "coords": infoz[1]
//             }
//             //console.log(data)
//             //return data
//             fs.writeFile("africa_.json", JSON.stringify(data), function(err) {
//                 if (err) {
//                     return console.log(err);
//                 }
//                 console.log("The file was saved!");
//             });

//         });


// })
//========= one

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
//             fs.appendFile("africajson.json", JSON.stringify(data), function(err) {
//                 if (err) {
//                     return console.log(err);
//                 }
//                 console.log("The file was saved!");
//             });

//         });


// });

// var cutLinesUp = function(arrays){
// 	for (var i = 0; i < arrays.length ; i++) {

// 	};
// }


var arrays = [{
    "country": "South Africa",
    "station": "Bok Radio\n\n      Die Beter Alternatief",
    "location": "Cape Town, South Africa",
    "email-href": "info@bokradio.co.za"
}, {
    "country": "Tunisia",
    "station": "Express FM\n\n      Createur de valeur",
    "location": "Tunis, Tunisia",
    "email-href": "contact@expressfm.tn"
}, {
    "country": "Burkina Faso",
    "station": "Radio Municipale de Ouagadougou\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=111826"
}, {
    "country": "Algeria",
    "station": "Radio Algerie Internationale\n\n      L’USM Bel Abbès a franchi...",
    "location": "Chrea, Algeria",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=66859"
}, {
    "country": "Mauritius",
    "station": "Top FM\n\n      Fresh Air You Can Hear !",
    "location": "",
    "email-href": "topfm@intnet.mu"
}, {
    "country": "Seychelles",
    "station": "BBC World Service Victoria\n\n      BBC World Service is the...",
    "location": "Victoria, Seychelles",
    "email-href": "worldservice@bbc.co.uk"
}, {
    "country": "Eritrea",
    "station": "Dimtsi Hafash Radio 1\n\n      Alenalki Eritrea Forever !!!",
    "location": "Asmara, Eritrea",
    "email-href": "webmaster@alenalki.com"
}, {
    "country": "Ethiopia",
    "station": "Radio Ethiopia - National Service\n\n      Multilingual",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16098"
}, {
    "country": "Madagascar",
    "station": "Radio Fanambarana\n\n      French",
    "location": "Antananarivo, Madagascar",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=176588"
}, {
    "country": "Gambia",
    "station": "Senn FM Radio\n\n      The Radio That Makes The difference",
    "location": "Banjul, Gambia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=252113"
}, {
    "country": "Libya",
    "station": "Al Madina TV\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=111214"
}, {
    "country": "Tunisia",
    "station": "Cap FM\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=176833"
}, {
    "country": "Sudan",
    "station": "Capital FM Juba\n\n      The Voice of South Sudan",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=86936"
}, {
    "country": "Reunion",
    "station": "Radio 102 FM\n\n      cocadillaz.com - house music prod.",
    "location": "",
    "email-href": "info@cocadillaz.com"
}, {
    "country": "Madagascar",
    "station": "Radio Antsiva\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=10195"
}, {
    "country": "Senegal",
    "station": "Radio Senegal International\n\n      Multilingual",
    "location": "Dakar, Senegal",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16350"
}, {
    "country": "Tanzania",
    "station": "CG FM Radio\n\n      The point of no return",
    "location": "Tabora, Tanzania",
    "email-href": "info@cgfmradio.com"
}, {
    "country": "Tanzania",
    "station": "Pride FM\n\n      Inapasua mawimbi",
    "location": "",
    "email-href": "info@878pridefm.com"
}, {
    "country": "Lesotho",
    "station": "Joy Radio\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=142261"
}, {
    "country": "Morocco",
    "station": "Atlantic Radio\n\n      La Première Radio",
    "location": "",
    "email-href": "info@atlanticradio.ma"
}, {
    "country": "Morocco",
    "station": "Radio Mars\n\n      Sport 'N' Music",
    "location": "",
    "email-href": "contact@radiomars.ma        \""
}, {
    "country": "Ethiopia",
    "station": "Radio Ethiopia - External Service\n\n      Multilingual",
    "location": "Addis Abeba, Ethiopia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16100"
}, {
    "country": "Gambia",
    "station": "Taranga FM\n\n      The Voice of Kombo North",
    "location": "Banjul, Gambia",
    "email-href": "alagie72@yahoo.com"
}, {
    "country": "Malawi",
    "station": "Radio Tigabane\n\n      Radio Tigabane is a...",
    "location": "",
    "email-href": "tigabane@mzuzu.org"
}, {
    "country": "Cote D'ivoire",
    "station": "RTI La Chaîne Nationale\n\n      French",
    "location": "Abidjan, Côte d'Ivoire",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16120"
}, {
    "country": "Togo",
    "station": "Radio SPORT FM\n\n      La radio qui mouille le maillot",
    "location": "",
    "email-href": "radiosportfm@yahoo.fr"
}, {
    "country": "Tunisia",
    "station": "Radio Oasis Fm\n\n      Arabic",
    "location": "Gabès, Tunisia",
    "email-href": "contact@oasisfm.tn"
}, {
    "country": "Egypt",
    "station": "Mega FM 92.7\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=143123"
}, {
    "country": "Lesotho",
    "station": "Harvest FM\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=142260"
}, {
    "country": "Angola",
    "station": "RNA R Kwanza Norte\n\n      Portuguese",
    "location": "N'Dalatando, Angola",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=251465"
}, {
    "country": "Egypt",
    "station": "Radio Cairo\n\n      Radio Cairo",
    "location": "Cairo, Egypt",
    "email-href": "Webmaster@radiocairo.cjb.net"
}, {
    "country": "Egypt",
    "station": "Alhayat TV\n\n      Urdu",
    "location": "Cairo, Egypt",
    "email-href": "info@hayatv.tv"
}, {
    "country": "South Africa",
    "station": "Groot FM\n\n      Gaan Groot",
    "location": "Pretoria, South Africa",
    "email-href": "grootfm@xpbroadcasting.com"
}, {
    "country": "South Africa",
    "station": "Radio 2000\n\n      English",
    "location": "Johannesburg, South Africa",
    "email-href": "info@radio2000.co.za"
}, {
    "country": "Cote D'ivoire",
    "station": "RFI 1 Afrique\n\n      Radio France Internationale, actualite Afrique et Monde en frran",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16125"
}, {
    "country": "Zimbabwe",
    "station": "ZBC Power FM\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=247889"
}, {
    "country": "Madagascar",
    "station": "RNM\n\n      French",
    "location": "Antananarivo, Madagascar",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=247002"
}, {
    "country": "Tanzania",
    "station": "E-FM Radio\n\n      MUSIC TALKS",
    "location": "Dar es Salaam, Tanzania",
    "email-href": "info@efm.co.tz"
}, {
    "country": "Egypt",
    "station": "البرنامج الموسيقي\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=214238"
}, {
    "country": "Tanzania",
    "station": "East Africa Radio\n\n      Together Tunawakilisha",
    "location": "",
    "email-href": "info@eastafricaradio.com"
}, {
    "country": "Angola",
    "station": "RNA R Benguela\n\n      Portuguese",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=251452"
}, {
    "country": "Zambia",
    "station": "Radio Christian Voice Zambia\n\n      The Voice Africa",
    "location": "",
    "email-href": "voicefm@zamnet.zm"
}, {
    "country": "Burundi",
    "station": "Studio Ijambo\n\n      Le dialogue c'est l'avenir !",
    "location": "Bujumbura, Burundi",
    "email-href": "mdiego@sfcg.org.bi"
}, {
    "country": "Tunisia",
    "station": "Radio Tunis Culture\n\n      Radio Tunis Radio cultural...",
    "location": "Remada, Tunisia",
    "email-href": "radio.culturelle@radiotunisienne.tn"
}, {
    "country": "Kenya",
    "station": "Pamoja FM\n\n      ... the voice of Kibera",
    "location": "Kibera, Kenya",
    "email-href": "pamojafm.marketing@yahoo.com"
}, {
    "country": "Central African Republic",
    "station": "Radio Ndeke Luka\n\n      Un Projet De La",
    "location": "",
    "email-href": "princegboute@hotmail.fr"
}, {
    "country": "Mozambique",
    "station": "Rádio 95.8 FM Maputo\n\n      A Rádio da Família",
    "location": "",
    "email-href": "internet@iurd.co.mz"
}, {
    "country": "Gambia",
    "station": "AfriRadio Gambia\n\n      AfriRadio is the #1 Radio...",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=181972"
}, {
    "country": "Senegal",
    "station": "RTS Kolda FM\n\n      Multilingual",
    "location": "Kolda, Senegal",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=238792"
}, {
    "country": "Ethiopia",
    "station": "Radio Ethiopia - National Service\n\n      Multilingual",
    "location": "Harar, Ethiopia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16098"
}, {
    "country": "Gambia",
    "station": "Capital FM\n\n      Sound of a New Generation",
    "location": "Banjul, Gambia",
    "email-href": "saulsounds@gmail.com"
}, {
    "country": "Mozambique",
    "station": "SFM - SOICO FM\n\n      O som que te toca",
    "location": "Maputo, Mozambique",
    "email-href": "sfm@soico.co.mz"
}, {
    "country": "Mauritius",
    "station": "MBC Radio Rodrigues\n\n      French",
    "location": "Citronelle, Rodrigues Island, Mauritius",
    "email-href": "customercare@mbc.intnet.mu"
}, {
    "country": "Mali",
    "station": "RSK-Radio Sahel Kayes\n\n      RSK-Radio",
    "location": "Kayes, Kayes Province, Mali",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16078"
}, {
    "country": "Senegal",
    "station": "Lamp Fall FM\n\n      Baidy Thioune Chef De Station",
    "location": "Dakar, Senegal",
    "email-href": "fallamptv@gmail.com"
}, {
    "country": "Burkina Faso",
    "station": "Savane FM\n\n      French",
    "location": "Ouagadougou, Burkina Faso",
    "email-href": "contact@savanefm.net"
}, {
    "country": "Libya",
    "station": "LJB Jamahiriya Radio\n\n      Arabic",
    "location": "Tripolis, Libyan Arab Jamahiriya",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16146"
}, {
    "country": "Ghana",
    "station": "HighLife Radio\n\n      Quality Programming for Quality People",
    "location": "Accra, Ghana",
    "email-href": "info@highliferadio.com"
}, {
    "country": "Cote D'ivoire",
    "station": "Radio Jam\n\n      Toujours Une Longueur d'avance!",
    "location": "",
    "email-href": "jamfm@aviso.ci"
}, {
    "country": "Kenya",
    "station": "Hope FM\n\n      Listen and Live",
    "location": "",
    "email-href": "info@hopefm.org"
}, {
    "country": "Ghana",
    "station": "KASAPA FM\n\n      Agye Bebiaaaa",
    "location": "Accra, Ghana",
    "email-href": "info@kasapafmonline.com"
}, {
    "country": "Libya",
    "station": "LJB Arabic\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16147"
}, {
    "country": "South Africa",
    "station": "Metro FM\n\n      Since 1986, METRO FM has...",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6363"
}, {
    "country": "Algeria",
    "station": "Radio Laghouat\n\n      Arabic",
    "location": "",
    "email-href": "info@radio-laghouat.dz"
}, {
    "country": "Tunisia",
    "station": "R Tunis Nationale\n\n      Arabic",
    "location": "",
    "email-href": "info@radiotunis.com"
}, {
    "country": "Senegal",
    "station": "Love FM\n\n      French",
    "location": "",
    "email-href": "dunyaa@sentoo.sn"
}, {
    "country": "Comoros",
    "station": "Radio Anjouan\n\n      Multilingual",
    "location": "Moutsamoudou, Comoros",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=65691"
}, {
    "country": "Burkina Faso",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "Ouagadougou, Ouagadougou, Burkina Faso",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16114"
}, {
    "country": "Senegal",
    "station": "Love FM\n\n      French",
    "location": "Dakar, Senegal",
    "email-href": "dunyaa@sentoo.sn"
}, {
    "country": "South Africa",
    "station": "GoodHope FM\n\n      It's All Good",
    "location": "",
    "email-href": "amanda@goodhopefm.co.za"
}, {
    "country": "Mali",
    "station": "SEKO Radio\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=189030"
}, {
    "country": "Uganda",
    "station": "Connect Radio\n\n      Number One for Ugandan Music.",
    "location": "",
    "email-href": "studio@connectuganda.com"
}, {
    "country": "Cote D'ivoire",
    "station": "Radio Espoir\n\n      Cote D'Invoire",
    "location": "Abidjan, Abidjan, Côte d'Ivoire",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16126"
}, {
    "country": "Cape Verde",
    "station": "Radio Nova\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=9315"
}, {
    "country": "Zambia",
    "station": "Radio Liseli\n\n      English",
    "location": "Mongu, Zambia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=110041"
}, {
    "country": "Senegal",
    "station": "RTS 4 Casamance\n\n      Multilingual",
    "location": "Ziguinchor, Senegal",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=238789"
}, {
    "country": "Algeria",
    "station": "Radio Algerienne Chaine 2\n\n      ستعرف رياضة كرة السلة...",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=2418"
}, {
    "country": "Mayotte",
    "station": "Mayotte 1ere\n\n      Reseau Outre-Mer 1ère",
    "location": "Dzaoudzi, Mayotte",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6283"
}, {
    "country": "Namibia",
    "station": "Base FM\n\n      Your Home Station",
    "location": "",
    "email-href": "manager@basefm.com.na"
}, {
    "country": "Mali",
    "station": "ORTM Chaine 2\n\n      French",
    "location": "",
    "email-href": "ortm@ortm.ml"
}, {
    "country": "Mayotte",
    "station": "Mayotte Web Radio\n\n      Première radio 100% Mahoraise !",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=121706"
}, {
    "country": "Egypt",
    "station": "Radio Medan El-Tahrir\n\n      Arabic",
    "location": "",
    "email-href": "info@radioeltahrir.com"
}, {
    "country": "Angola",
    "station": "RNA R Viana\n\n      Portuguese",
    "location": "Viana, Angola",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=251463"
}, {
    "country": "Nigeria",
    "station": "Nigeriainfo FM 92.3 PH\n\n      Your #1 Talk, News & Sport Station",
    "location": "",
    "email-href": "rcahilig@coollink.us"
}, {
    "country": "Gambia",
    "station": "Gambia Radio GRTS\n\n      English",
    "location": "Bonto, Gambia",
    "email-href": "info@accessgambia.com"
}, {
    "country": "Rwanda",
    "station": "Radio Maria (Rwanda)\n\n      English",
    "location": "Kigali, Rwanda",
    "email-href": "radiomariarwanda@gmail.com"
}, {
    "country": "Angola",
    "station": "RNA R Kwanza Sul\n\n      Portuguese",
    "location": "Sumbe, Angola",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=238799"
}, {
    "country": "Nigeria",
    "station": "Wazobia FM 95.1 Lagos\n\n      Ogbonge Station",
    "location": "",
    "email-href": "rcahilig@coollink.us"
}, {
    "country": "Seychelles",
    "station": "SBC Radyo Sesel  (AM Service)\n\n      English",
    "location": "Victoria, Seychelles",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=123081"
}, {
    "country": "Reunion",
    "station": "Radio Plus FM\n\n      Elle est bonne cette radio!",
    "location": "Saint-Denis, Reunion",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=47600"
}, {
    "country": "Senegal",
    "station": "RTS Matam FM\n\n      Multilingual",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=238797"
}, {
    "country": "Angola",
    "station": "RNA R Malange\n\n      Portuguese",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=251462"
}, {
    "country": "Malawi",
    "station": "Radio Maria (Malawi)\n\n      A Christian Voice In Your Home",
    "location": "",
    "email-href": " radiomaria@africa-online.net"
}, {
    "country": "Namibia",
    "station": "NBC Lozi\n\n      Multilingual",
    "location": "",
    "email-href": "fzinner@nbc.na"
}, {
    "country": "Zimbabwe",
    "station": "National FM ZBC\n\n      Multilingual",
    "location": "Harare, Harare, Zimbabwe",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6453"
}, {
    "country": "DR Congo",
    "station": "B-ONE RADIO\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=155833"
}, {
    "country": "Cote D'ivoire",
    "station": "Bassam FM\n\n      Premier sur les Hits!",
    "location": "",
    "email-href": "charles@bassamfm.com"
}, {
    "country": "Angola",
    "station": "RNA R Cunene\n\n      Portuguese",
    "location": "Ondjiva, Angola",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=251451"
}, {
    "country": "Sierra Leone",
    "station": "Believers Broadcasting Network SL\n\n      We Are Committed In Changing Lives",
    "location": "",
    "email-href": "admin@bbn-sl.org"
}, {
    "country": "Tanzania",
    "station": "TBC Taifa\n\n      Swahili",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=201112"
}, {
    "country": "Zambia",
    "station": "Sky FM\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=110033"
}, {
    "country": "Libya",
    "station": "Qanat AlEman 99.9\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=163033"
}, {
    "country": "Uganda",
    "station": "Capital FM\n\n      English",
    "location": "",
    "email-href": "technical@capitalfm-ug.com"
}, {
    "country": "Rwanda",
    "station": "Radio10\n\n      Simply Rwandaful!",
    "location": "",
    "email-href": "contact@radio10.rw"
}, {
    "country": "Cameroon",
    "station": "Amplitude FM\n\n      Toute l'actualite sur le...",
    "location": "",
    "email-href": "contact@cameroon-info.net"
}, {
    "country": "Mali",
    "station": "Radio Rurale\n\n      Radio Rural Kayes",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=50171"
}, {
    "country": "Central African Republic",
    "station": "Voice Radio\n\n      Ma Voix, Ma Radio!!!",
    "location": "Bangui, Central African Republic",
    "email-href": "Contact@voiceradio.co"
}, {
    "country": "Djibouti",
    "station": "BBC World Service Djibouti\n\n      BBC World Service is the...",
    "location": "",
    "email-href": "worldservice@bbc.co.uk"
}, {
    "country": "Angola",
    "station": "RNA Canal A\n\n      Portuguese",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6226"
}, {
    "country": "Ghana",
    "station": "Nhyira FM\n\n      Emu ye din",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=113346"
}, {
    "country": "Cote D'ivoire",
    "station": "Nostalgie FM\n\n      Nostalgie La Legende",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=90592"
}, {
    "country": "Togo",
    "station": "Omega FM\n\n      La Fréquence De Vie",
    "location": "Lomé, Togo",
    "email-href": "omegafm@omegafm.com"
}, {
    "country": "Morocco",
    "station": "Cap Radio\n\n      French",
    "location": "Nador, Morocco",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=165271"
}, {
    "country": "Zambia",
    "station": "Chikuni Radio\n\n      English",
    "location": "Monze, Zambia",
    "email-href": "chikuniradio@gmail.com"
}, {
    "country": "Mayotte",
    "station": "Radio La Voix Du Nord\n\n      French",
    "location": "",
    "email-href": "abdou.rvn@hotmail.fr"
}, {
    "country": "Mauritius",
    "station": "MBC Radio Mauritius 2\n\n      English",
    "location": "Malherbes, Mauritius",
    "email-href": "customercare@mbc.intnet.mu"
}, {
    "country": "Tanzania",
    "station": "EBONY FM\n\n      feel the difference",
    "location": "",
    "email-href": "info@ebonyfm.com"
}, {
    "country": "Burkina Faso",
    "station": "Radio Vive Le Paysan\n\n      Multilingual",
    "location": "Sapone-Marche, other areas, Burkina Faso",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16119"
}, {
    "country": "Zimbabwe",
    "station": "SW Radio Africa\n\n      The Independent Voice Of Zimbabwe.",
    "location": "Avoca, Zimbabwe",
    "email-href": "news@swradioafrica.com"
}, {
    "country": "Comoros",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "Moroni, Comoros",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6242"
}, {
    "country": "Madagascar",
    "station": "Ma-FM\n\n      Multilingual",
    "location": "",
    "email-href": "sidonie@matv.mg"
}, {
    "country": "Cameroon",
    "station": "Radio Balafon\n\n      La radio Qui Vous Ecoute !",
    "location": "",
    "email-href": "contact@radiobalafon.com"
}, {
    "country": "Tunisia",
    "station": "Mines FM\n\n      La radio qui vous écoute",
    "location": "Gafsa, Tunisia",
    "email-href": "info@minesfm.com"
}, {
    "country": "Cote D'ivoire",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "Korhogo, Côte d'Ivoire",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16128"
}, {
    "country": "Madagascar",
    "station": "Radio Madagascar > RNA Antalaha\n\n      Radio Ny Antsika\nEn...",
    "location": "Antalaha, Madagascar",
    "email-href": "contact@rna-madagascar.com"
}, {
    "country": "Angola",
    "station": "RNA Canal A\n\n      Portuguese",
    "location": "Luanda, Angola",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6226"
}, {
    "country": "Senegal",
    "station": "Radio Futurs Medias\n\n      Actualités au Sénégal et dans le monde",
    "location": "Dakar, Senegal",
    "email-href": "info@futursmedias.net"
}, {
    "country": "Rwanda",
    "station": "Radio Maria (Rwanda)\n\n      English",
    "location": "",
    "email-href": "radiomariarwanda@gmail.com"
}, {
    "country": "Namibia",
    "station": "NBC Oshiwambo\n\n      English",
    "location": "Waterberg, Namibia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=119491"
}, {
    "country": "Kenya",
    "station": "Kass FM\n\n      English",
    "location": "Nairobi, Kenya",
    "email-href": "info@kassfm.co.ke"
}, {
    "country": "Mali",
    "station": "Radio Madjoura Touba\n\n      French",
    "location": "",
    "email-href": " madjourafm@gmail.com"
}, {
    "country": "Senegal",
    "station": "Zik FM\n\n      Get ready for the waves",
    "location": "Dakar, Senegal",
    "email-href": "info@zikfm.net"
}, {
    "country": "Angola",
    "station": "Radio 5\n\n      A Victória do Desporto",
    "location": "",
    "email-href": "rna@rna.ao"
}, {
    "country": "Ghana",
    "station": "Adom FM\n\n      The Best Radio Station In Ghana",
    "location": "Tema, Ghana",
    "email-href": "teamwork@myjoyonline.com"
}, {
    "country": "Egypt",
    "station": "إذاعة الشرق الأوسط\n\n      Arabic",
    "location": "Cairo, Egypt",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=213502"
}, {
    "country": "Egypt",
    "station": "البرنامج الموسيقي\n\n      Arabic",
    "location": "Cairo, Egypt",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=214238"
}, {
    "country": "Sierra Leone",
    "station": "SLBS FM\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6221"
}, {
    "country": "Angola",
    "station": "RNA R Benguela\n\n      Portuguese",
    "location": "Benguela, Angola",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=251452"
}, {
    "country": "Sierra Leone",
    "station": "Radio Democracy\n\n      The True Voice Of The People",
    "location": "Freetown, Sierra Leone",
    "email-href": " info@radiodemocracy.sl"
}, {
    "country": "Tunisia",
    "station": "Radio Sfax\n\n      Arabic",
    "location": "Sfax, Tunisia",
    "email-href": "info@radiotunis.com"
}, {
    "country": "Tanzania",
    "station": "WAPO RADIO FM 98.1\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=151786"
}, {
    "country": "Kenya",
    "station": "Kiss 100\n\n      Kenya's Number 1 Hit Music Station",
    "location": "Nairobi, Nairobi, Kenya",
    "email-href": "info@kissfm.co.ke"
}, {
    "country": "Sierra Leone",
    "station": "BBC World Service Freetown\n\n      BBC World Service is the...",
    "location": "Freetown, Sierra Leone",
    "email-href": "bbcwsafrica@bbc.co.uk"
}, {
    "country": "Nigeria",
    "station": "The Beat 97.9 fm\n\n      The Heart Beat of Ibadan",
    "location": "Ibadan, Nigeria",
    "email-href": "info@thebeat97.com"
}, {
    "country": "Benin",
    "station": "Radio Tokpa\n\n      Votre Partenaire",
    "location": "Cotonou, Benin",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=141168"
}, {
    "country": "Tanzania",
    "station": "Radio Safina\n\n      Swahili",
    "location": "Arusha, Tanzania",
    "email-href": "dchristlife@yahoo.com"
}, {
    "country": "Nigeria",
    "station": "The Beat\n\n      The Heart Beat of Lagos",
    "location": "",
    "email-href": "enquiries@thebeat99.com"
}, {
    "country": "Nigeria",
    "station": "Inspiration 92.3 FM\n\n      Your #1 Family Radio Station",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=165872"
}, {
    "country": "Benin",
    "station": "Capp FM\n\n      La Radio Du Succes",
    "location": "Cotonou, Benin",
    "email-href": "info@cappfm.com"
}, {
    "country": "Lesotho",
    "station": "Khotso FM\n\n      English",
    "location": "Maseru, Lesotho",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=142262"
}, {
    "country": "Mauritius",
    "station": "MBC Radio Mauritius 2\n\n      English",
    "location": "",
    "email-href": "customercare@mbc.intnet.mu"
}, {
    "country": "Mayotte",
    "station": "Radio Mayotte Web\n\n      1ere sur la musique mahoraise",
    "location": "",
    "email-href": "radio@mayottewebradio.fr"
}, {
    "country": "Tanzania",
    "station": "Radio Maria (Tanzania)\n\n      A Christian Voice In Your Home",
    "location": "Arusha, Arusha Region, Tanzania",
    "email-href": "info.tan@radiomaria.org"
}, {
    "country": "Mauritius",
    "station": "Radio Plus FM\n\n      Ecoute ou pou tende",
    "location": "Port Louis, Mauritius",
    "email-href": "venen@radioplus.mu"
}, {
    "country": "Morocco",
    "station": "Al Watania\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=129393"
}, {
    "country": "Lesotho",
    "station": "Ultimate FM\n\n      English",
    "location": "Maseru, Lesotho",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=142269"
}, {
    "country": "DR Congo",
    "station": "Congo Planete TV\n\n      French",
    "location": "Kinshasa, DR Congo",
    "email-href": "info@congoplanet.com"
}, {
    "country": "Benin",
    "station": "Fraternite FM\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=47665"
}, {
    "country": "Reunion",
    "station": "Urban Hit\n\n      Votre radio Hip-hop et R'n'B",
    "location": "Saint-Denis, Reunion",
    "email-href": "contact@urbanhit.fm"
}, {
    "country": "Sudan",
    "station": "SRTC Salam\n\n      Arabic",
    "location": "Khartoum, Sudan",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=131748"
}, {
    "country": "Angola",
    "station": "RNA R Lunda Norte\n\n      Portuguese",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=251456"
}, {
    "country": "Cameroon",
    "station": "CRTV\n\n      Cameroon Radio and Television",
    "location": "",
    "email-href": "fm94@crtv.cm"
}, {
    "country": "Reunion",
    "station": "RSL Radio\n\n      Tous les hits soleil",
    "location": "La Riviere, Reunion",
    "email-href": "contact@rslradio.fm"
}, {
    "country": "Ghana",
    "station": "Peace FM\n\n      The Station With A Vision",
    "location": "Accra, Ghana",
    "email-href": "daara90@gmail.com"
}, {
    "country": "Zambia",
    "station": "Yar FM\n\n      English",
    "location": "Kitwe, Zambia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=110045"
}, {
    "country": "Nigeria",
    "station": "Freedom Radio\n\n      Muryar Jama'a",
    "location": "",
    "email-href": "info@freedomradionig.com"
}, {
    "country": "Morocco",
    "station": "Cap Radio\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=165271"
}, {
    "country": "Nigeria",
    "station": "Space\n\n      Setting new standards in Broadcasting",
    "location": "Ibadan, Nigeria",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=222552"
}, {
    "country": "Sudan",
    "station": "SRTC General\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=131749"
}, {
    "country": "Nigeria",
    "station": "Wazobia FM 99.5 Abuja\n\n      WAZOBIA FM is the 1st...",
    "location": "",
    "email-href": "rcahilig@coollink.us"
}, {
    "country": "Angola",
    "station": "RNA R Huambo\n\n      Portuguese",
    "location": "Huambo, Angola",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=251454"
}, {
    "country": "Malawi",
    "station": "MBC Radio 1\n\n      Inspiring The Nation",
    "location": "Blantyre, Malawi",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=206843"
}, {
    "country": "Morocco",
    "station": "الإذاعة الأمازيغية\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=129392"
}, {
    "country": "Zambia",
    "station": "Parliament Radio\n\n      English",
    "location": "Lusaka, Zambia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=110048"
}, {
    "country": "Togo",
    "station": "Radio SPORT FM\n\n      La radio qui mouille le maillot",
    "location": "Lomé, Togo",
    "email-href": "radiosportfm@yahoo.fr"
}, {
    "country": "Gambia",
    "station": "Gambia Radio GRTS\n\n      English",
    "location": "",
    "email-href": "info@accessgambia.com"
}, {
    "country": "Mali",
    "station": "Radio Benkan\n\n      French",
    "location": "Bamako, Mali",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=189026"
}, {
    "country": "Sierra Leone",
    "station": "AYV Radio\n\n      English",
    "location": "Freetown, Sierra Leone",
    "email-href": "info@ayvradio.com"
}, {
    "country": "Libya",
    "station": "Libyana FM\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=174220"
}, {
    "country": "Namibia",
    "station": "NBC Tirelo ya Setswana\n\n      Multilingual",
    "location": "Klein Windhoek, Namibia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=228897"
}, {
    "country": "Mali",
    "station": "Jekafo Radio\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=116715"
}, {
    "country": "Cameroon",
    "station": "Amplitude FM\n\n      Toute l'actualite sur le...",
    "location": "Yaounde, Cameroon",
    "email-href": "contact@cameroon-info.net"
}, {
    "country": "Reunion",
    "station": "Urban Hit\n\n      Votre radio Hip-hop et R'n'B",
    "location": "",
    "email-href": "contact@urbanhit.fm"
}, {
    "country": "Mozambique",
    "station": "Rádio Pieia\n\n      Portuguese",
    "location": "",
    "email-href": "info@radio.pieia.org"
}, {
    "country": "Kenya",
    "station": "Classic 105\n\n      Good Times and Great Hits",
    "location": "Nairobi, Kenya",
    "email-href": "info@classic105.com"
}, {
    "country": "Rwanda",
    "station": "Radio Rwanda\n\n      Office Rwandais d' Information",
    "location": "",
    "email-href": "skarere@rba.co.rw"
}, {
    "country": "Senegal",
    "station": "BFMinfo\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=168647"
}, {
    "country": "Seychelles",
    "station": "PureFM (Seychelles)\n\n      English",
    "location": "",
    "email-href": "90.7@purefm.sc"
}, {
    "country": "Tunisia",
    "station": "Radio Monastir\n\n      Arabic",
    "location": "Monastir, Tunisia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=129106"
}, {
    "country": "DR Congo",
    "station": "Réveil FM\n\n      La radio qui vous écoute",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=8385"
}, {
    "country": "Morocco",
    "station": "Luxe Radio\n\n      Accédez à l'état d'esprit du luxe",
    "location": "Agadir, Morocco",
    "email-href": "info@luxeradio.ma"
}, {
    "country": "Rwanda",
    "station": "KT Radio\n\n      Feel Good Together!",
    "location": "Kigali, Rwanda",
    "email-href": "info@ktradio.rw"
}, {
    "country": "Chad",
    "station": "DJA\n\n      French",
    "location": "N'Djamena, Chad",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=7491"
}, {
    "country": "Ghana",
    "station": "Hot FM\n\n      English",
    "location": "",
    "email-href": "pagegroupmedia@gmail.com"
}, {
    "country": "South Africa",
    "station": "5FM SABC\n\n      The Power of 5FM",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6362"
}, {
    "country": "Ethiopia",
    "station": "Zami 90.7 FM\n\n      The Voice The Difference",
    "location": "Addis Ababa, Ethiopia",
    "email-href": "contact@zamiradio.com"
}, {
    "country": "Rwanda",
    "station": "KT Radio\n\n      Feel Good Together!",
    "location": "",
    "email-href": "info@ktradio.rw"
}, {
    "country": "Tunisia",
    "station": "Radio Tunis International\n\n      la plus belle des radios",
    "location": "",
    "email-href": "rtci@radiotunisienne.tn"
}, {
    "country": "Kenya",
    "station": "Radio Jambo\n\n      Ongea Usikike",
    "location": "Nairobi, Kenya",
    "email-href": "info@radiojambo.co.ke"
}, {
    "country": "Liberia",
    "station": "ELBC\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=211054"
}, {
    "country": "Nigeria",
    "station": "Freedom Radio\n\n      Muryar Jama'a",
    "location": "Kano, Nigeria",
    "email-href": "info@freedomradionig.com"
}, {
    "country": "Angola",
    "station": "RNA R Cunene\n\n      Portuguese",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=251451"
}, {
    "country": "Mozambique",
    "station": "LM Radio\n\n      Lifetime Music Radio",
    "location": "",
    "email-href": "info@lmradio.net"
}, {
    "country": "Libya",
    "station": "Tribute FM\n\n      Broadcasting live from Benghazi",
    "location": "Banghazi, Libyan Arab Jamahiriya",
    "email-href": "info@tributefm.com"
}, {
    "country": "Uganda",
    "station": "CBS Radio Buganda\n\n      Uganda's Best Radio Station",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=7477"
}, {
    "country": "Ghana",
    "station": "Asempa 94.7FM\n\n      All Talk All Day!",
    "location": "Accra, Ghana",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=89189"
}, {
    "country": "Benin",
    "station": "Radio Maranatha\n\n      French",
    "location": "",
    "email-href": "maranatha.fm@serv.eit.bj"
}, {
    "country": "Nigeria",
    "station": "Royal FM 95.1 Ilorin\n\n      we set the pace...",
    "location": "",
    "email-href": "radio951@royalfm.net"
}, {
    "country": "Mali",
    "station": "Radio la Bonne Nouvelle\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=254008"
}, {
    "country": "Tanzania",
    "station": "Upendo FM\n\n      Amani kwa wote",
    "location": "",
    "email-href": "info@elctecd.org"
}, {
    "country": "Uganda",
    "station": "Beat FM\n\n      EKINTABULI KYO' MUZIKI",
    "location": "Kampala, Uganda",
    "email-href": "technical@capitalfm-ug.com"
}, {
    "country": "South Africa",
    "station": "Motsweding FM\n\n      Multilingual",
    "location": "",
    "email-href": "mmekoasc@sabc.co.za"
}, {
    "country": "Cameroon",
    "station": "Nostalgie Cameroun\n\n      ça surprend au début...et après aussi !",
    "location": "",
    "email-href": "info@nostalgie.cm"
}, {
    "country": "Nigeria",
    "station": "Brila FM\n\n      Africa's Premier Sports Station....with us you score!!!",
    "location": "",
    "email-href": "info@brila.net"
}, {
    "country": "Zambia",
    "station": "Radio Yangeni\n\n      English",
    "location": "Mansa, Zambia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=110044"
}, {
    "country": "Mayotte",
    "station": "Mayotte 1ere\n\n      Reseau Outre-Mer 1ère",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6283"
}, {
    "country": "Zambia",
    "station": "Rock FM\n\n      Live to rock another day",
    "location": "Lusaka, Zambia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=214604"
}, {
    "country": "Algeria",
    "station": "Radio Setif\n\n      French",
    "location": "",
    "email-href": "contact.radio.setif@gmail.com"
}, {
    "country": "Tanzania",
    "station": "Upendo FM\n\n      Amani kwa wote",
    "location": "Dar es Salaam, Tanzania",
    "email-href": "info@elctecd.org"
}, {
    "country": "Tunisia",
    "station": "R Tunis Nationale\n\n      Arabic",
    "location": "Tunis, Tunisia",
    "email-href": "info@radiotunis.com"
}, {
    "country": "Burundi",
    "station": "RFI Afrique\n\n      Radio France Internationale",
    "location": "Bujumbura, Burundi",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=44233"
}, {
    "country": "Uganda",
    "station": "100.2 Galaxy FM\n\n      Real Music, Real Sound!",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=191194"
}, {
    "country": "Tunisia",
    "station": "Shems FM\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=129025"
}, {
    "country": "Central African Republic",
    "station": "Voice Radio\n\n      Ma Voix, Ma Radio!!!",
    "location": "",
    "email-href": "Contact@voiceradio.co"
}, {
    "country": "Seychelles",
    "station": "SBC Radyo Sesel  (AM Service)\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=123081"
}, {
    "country": "Namibia",
    "station": "NBC Herero\n\n      English",
    "location": "Klein Windhoek, Namibia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6305"
}, {
    "country": "Sudan",
    "station": "SRTC Quran\n\n      Arabic",
    "location": "Omdurman, Sudan",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=131750"
}, {
    "country": "Comoros",
    "station": "Radio Comores\n\n      French",
    "location": "",
    "email-href": "naynour@hotmail.com"
}, {
    "country": "Swaziland",
    "station": "TWR Voice of the Church\n\n      English",
    "location": "",
    "email-href": "info@twrafrica.org"
}, {
    "country": "Kenya",
    "station": "Pamoja FM\n\n      ... the voice of Kibera",
    "location": "",
    "email-href": "pamojafm.marketing@yahoo.com"
}, {
    "country": "Nigeria",
    "station": "Rahma Radio 97.3\n\n      Farin Cikin Al'umma",
    "location": "Kano, Nigeria",
    "email-href": "rahmaradio@yahoo.com"
}, {
    "country": "Angola",
    "station": "Radio Luanda RNA\n\n      Portuguese",
    "location": "Luanda, Angola",
    "email-href": "rluanda@rna.ao"
}, {
    "country": "Madagascar",
    "station": "Radio Madagasikara hoan'i Kristy\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=200286"
}, {
    "country": "Botswana",
    "station": "RB2-Radio Botswana 2\n\n      The Department Of Information And Broadcasting",
    "location": "",
    "email-href": "asesinyi@gov.bw"
}, {
    "country": "Mauritius",
    "station": "Top FM\n\n      Fresh Air You Can Hear !",
    "location": "Port Louis, Mauritius",
    "email-href": "topfm@intnet.mu"
}, {
    "country": "South Africa",
    "station": "Lesedi FM\n\n      Multilingual",
    "location": "Johannesburg, South Africa",
    "email-href": "mothibipm@sabc.co.za"
}, {
    "country": "Egypt",
    "station": "الشباب و الرياضة\n\n      Arabic",
    "location": "Cairo, Egypt",
    "email-href": "radioinfo@ertu.org"
}, {
    "country": "Madagascar",
    "station": "Radio Fahazavana\n\n      Ho Fampandrosoana ny olona rehatra sy ny olona manontolo",
    "location": "Faravohitra, Antananarivo, Madagascar",
    "email-href": "fahazavana@dts.mg"
}, {
    "country": "Uganda",
    "station": "90.8 Metro fm Uganda\n\n      Essanyu ry0",
    "location": "",
    "email-href": "metro90.8@gmail.com"
}, {
    "country": "Madagascar",
    "station": "RNM\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=247002"
}, {
    "country": "St. Helena",
    "station": "Saint FM\n\n      The Heartbeat of St. Helena",
    "location": "Jamestown, St. Helena",
    "email-href": "fm@cwimail.sh"
}, {
    "country": "Namibia",
    "station": "Live FM\n\n      English",
    "location": "Rehobot, Namibia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=119487"
}, {
    "country": "Botswana",
    "station": "R Botswana 1\n\n      Multilingual",
    "location": "Gaborone, Botswana",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=218478"
}, {
    "country": "Comoros",
    "station": "RCM 13\n\n      French",
    "location": "",
    "email-href": "info@rcm13.fr"
}, {
    "country": "Gambia",
    "station": "West Coast Radio 92.1\n\n      West Coast Radio",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=186335"
}, {
    "country": "Gambia",
    "station": "AfriRadio Gambia\n\n      AfriRadio is the #1 Radio...",
    "location": "Banjul, Gambia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=181972"
}, {
    "country": "Kenya",
    "station": "Ghetto Radio\n\n      Multilingual",
    "location": "Nairobi, Kenya",
    "email-href": "info@ghettoradio.co.ke"
}, {
    "country": "Eritrea",
    "station": "Dimtsi Hafash Radio 1\n\n      Alenalki Eritrea Forever !!!",
    "location": "",
    "email-href": "webmaster@alenalki.com"
}, {
    "country": "Namibia",
    "station": "NBC Ovambo\n\n      German",
    "location": "Klein Windhoek, Namibia",
    "email-href": "fzinner@nbc.na"
}, {
    "country": "Uganda",
    "station": "Connect Radio\n\n      Number One for Ugandan Music.",
    "location": "Kampala, Uganda",
    "email-href": "studio@connectuganda.com"
}, {
    "country": "Tunisia",
    "station": "Express FM\n\n      Createur de valeur",
    "location": "",
    "email-href": "contact@expressfm.tn"
}, {
    "country": "South Africa",
    "station": "Radio Tygerberg FM\n\n      Ons Verkondig Christus We Proclaim Christ",
    "location": "Bellville, South Africa",
    "email-href": "willem@104fm.org.za"
}, {
    "country": "Cote D'ivoire",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16127"
}, {
    "country": "Reunion",
    "station": "Velly Music\n\n      # One 974 Hip-Hop Radio Scacion",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6330"
}, {
    "country": "Nigeria",
    "station": "Nigeriainfo FM 92.3 PH\n\n      Your #1 Talk, News & Sport Station",
    "location": "Port Harcourt, Nigeria",
    "email-href": "rcahilig@coollink.us"
}, {
    "country": "Burkina Faso",
    "station": "Radio Unitas\n\n      English",
    "location": "Diebougou, Burkina Faso",
    "email-href": "unitasdbg@voil%C3%A0.fr"
}, {
    "country": "Malawi",
    "station": "MBC Radio 2\n\n      Multilingual",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=206844"
}, {
    "country": "South Africa",
    "station": "Munghana Lonene FM\n\n      Ndzalama Ya Rixaka",
    "location": "Johannesburg, South Africa",
    "email-href": "mlfm@sabc.co.za"
}, {
    "country": "Gabon",
    "station": "Radio Emergence\n\n      French",
    "location": "Paris, Gabon",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=10774"
}, {
    "country": "Madagascar",
    "station": "RFI 1 Afrique / local 2h\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6265"
}, {
    "country": "Ghana",
    "station": "Starr\n\n      Simply The Best!",
    "location": "",
    "email-href": "webmaster@starrfmonline.com"
}, {
    "country": "Tanzania",
    "station": "Radio One\n\n      Swahili",
    "location": "Dar es Salaam, Tanzania",
    "email-href": "info@radio1.co.tz"
}, {
    "country": "Benin",
    "station": "Capp FM\n\n      La Radio Du Succes",
    "location": "",
    "email-href": "info@cappfm.com"
}, {
    "country": "Cameroon",
    "station": "Magic FM\n\n      La chaine qui dechaine",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=132102"
}, {
    "country": "Tunisia",
    "station": "Mosaique FM\n\n      French",
    "location": "Boukrim, Tunisia",
    "email-href": "commercial.citycenter@topnet.tn"
}, {
    "country": "Mauritius",
    "station": "Radio One R1\n\n      French",
    "location": "Port Louis, Mauritius",
    "email-href": "redaction@r1.mu"
}, {
    "country": "Gabon",
    "station": "Radio Emergence\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=10774"
}, {
    "country": "Mali",
    "station": "Radio Madjoura Touba\n\n      French",
    "location": "Touba, Mali",
    "email-href": " madjourafm@gmail.com"
}, {
    "country": "Cape Verde",
    "station": "Radio Nova\n\n      English",
    "location": "Vicente Dias, Cape Verde",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=9315"
}, {
    "country": "Zambia",
    "station": "Q-FM\n\n      Africa's Modern Radio",
    "location": "Lusaka, Zambia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=110024"
}, {
    "country": "Algeria",
    "station": "Radio Laghouat\n\n      Arabic",
    "location": "Aflou, Algeria",
    "email-href": "info@radio-laghouat.dz"
}, {
    "country": "Seychelles",
    "station": "BBC World Service Victoria\n\n      BBC World Service is the...",
    "location": "",
    "email-href": "worldservice@bbc.co.uk"
}, {
    "country": "Rwanda",
    "station": "Radio Maria\n\n      English",
    "location": "Kigali, Rwanda",
    "email-href": "radiomariarwanda@gmail.com"
}, {
    "country": "Rwanda",
    "station": "BBC World Service Kigali\n\n      BBC World Service is the...",
    "location": "",
    "email-href": "bbcwsafrica@bbc.co.uk"
}, {
    "country": "Burkina Faso",
    "station": "Radio Burkina\n\n      French",
    "location": "",
    "email-href": "radio@rtb.bf"
}, {
    "country": "Cote D'ivoire",
    "station": "Bassam FM\n\n      Premier sur les Hits!",
    "location": "Yamoussoukro, Côte d'Ivoire",
    "email-href": "charles@bassamfm.com"
}, {
    "country": "Reunion",
    "station": "RER\n\n      French",
    "location": "Sainte-Rose, Reunion",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=181775"
}, {
    "country": "Kenya",
    "station": "Kameme FM\n\n      Kayu Ka Muingi",
    "location": "Nairobi, Kenya",
    "email-href": "info@kamemefm.com"
}, {
    "country": "Egypt",
    "station": "Hona Al Qahera\n\n      Arabic",
    "location": "Giza, Egypt",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=230031"
}, {
    "country": "Burundi",
    "station": "Radio Isanganiro\n\n      Le Dialogue Vaut Mieux Que La Force",
    "location": "",
    "email-href": "isanganiro@yahoo.fr"
}, {
    "country": "DR Congo",
    "station": "Radio Okapi\n\n      Une Voix Pour Tous !",
    "location": "",
    "email-href": "info@hirondelle.org"
}, {
    "country": "Benin",
    "station": "LC2 International\n\n      French",
    "location": "Porto-Novo, Benin",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=100800"
}, {
    "country": "Sierra Leone",
    "station": "RFI 1 Afrique / RFI 2\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6218"
}, {
    "country": "Cameroon",
    "station": "Sky One Radio\n\n      French",
    "location": "Yaounde, Cameroon",
    "email-href": "contact@skyonecameroun.com"
}, {
    "country": "South Africa",
    "station": "Motsweding FM\n\n      Multilingual",
    "location": "Johannesburg, South Africa",
    "email-href": "mmekoasc@sabc.co.za"
}, {
    "country": "Madagascar",
    "station": "Alliance 92\n\n      Votre Couleur Musicale",
    "location": "Antananarivo, Madagascar",
    "email-href": "frequence92@live.fr"
}, {
    "country": "Mozambique",
    "station": "Rádio Pieia\n\n      Portuguese",
    "location": "Beira, Mozambique",
    "email-href": "info@radio.pieia.org"
}, {
    "country": "Mauritius",
    "station": "BBC World Service Bigara\n\n      BBC World Service is the...",
    "location": "Port Louis, Mauritius",
    "email-href": "bbcwsafrica@bbc.co.uk"
}, {
    "country": "Namibia",
    "station": "Kanaal 7\n\n      English",
    "location": "",
    "email-href": "kanaal7@k7.com.na"
}, {
    "country": "Kenya",
    "station": "GHETTO FM\n\n      An Amplified Voice for the Voiceless!",
    "location": "Nairobi, Kenya",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=174580"
}, {
    "country": "Senegal",
    "station": "Walf FM\n\n      French",
    "location": "Dakar, Senegal",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=47624"
}, {
    "country": "Gambia",
    "station": "Capital FM\n\n      Sound of a New Generation",
    "location": "",
    "email-href": "saulsounds@gmail.com"
}, {
    "country": "Benin",
    "station": "Radio Tokpa\n\n      Votre Partenaire",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=141168"
}, {
    "country": "Namibia",
    "station": "Katutura Community Radio\n\n      English",
    "location": "Katutura, Namibia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=119486"
}, {
    "country": "Western Sahara",
    "station": "Radio Nacional de la RASD\n\n      Western Sahara",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16105"
}, {
    "country": "Algeria",
    "station": "Radio Saoura Bechar\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16046"
}, {
    "country": "Reunion",
    "station": "RSL Radio\n\n      The Sun Station!",
    "location": "Saint-Pierre, Saint-Pierre, Reunion",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6360"
}, {
    "country": "Morocco",
    "station": "Chada FM\n\n      Multilingual",
    "location": "Casablanca, Morocco",
    "email-href": "contact@chadafm.net"
}, {
    "country": "Angola",
    "station": "RNA R Malange\n\n      Portuguese",
    "location": "Malange, Angola",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=251462"
}, {
    "country": "Mozambique",
    "station": "Radio Maria (Mozambique)\n\n      Portuguese",
    "location": "",
    "email-href": "info.moz@radiomaria.org"
}, {
    "country": "Lesotho",
    "station": "Radio Lesotho\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=10282"
}, {
    "country": "Mali",
    "station": "Radio Dande\n\n      Multilingual",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16079"
}, {
    "country": "Ghana",
    "station": "Atinka 104.7 FM\n\n      Feeling Wom",
    "location": "Accra, Ghana",
    "email-href": "info@atinkaonline.com"
}, {
    "country": "Zambia",
    "station": "Yatsani Radio\n\n      The mission of Yatsani...",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=47637"
}, {
    "country": "Kenya",
    "station": "1 fm\n\n      Local and Urban Hits",
    "location": "Nairobi, Kenya",
    "email-href": "ericit@1fm.co.ke"
}, {
    "country": "Tunisia",
    "station": "Shems FM\n\n      English",
    "location": "El Haouaria, Tunisia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=129025"
}, {
    "country": "South Africa",
    "station": "CliffCentral\n\n      uncensored unscripted...",
    "location": "",
    "email-href": "contact@cliffcentral.com"
}, {
    "country": "Gambia",
    "station": "Senn FM Radio\n\n      The Radio That Makes The difference",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=252113"
}, {
    "country": "Ethiopia",
    "station": "Fana FM Radio\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=182754"
}, {
    "country": "Sudan",
    "station": "Miraya FM\n\n      Arabic",
    "location": "Khartoum, Sudan",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=66885"
}, {
    "country": "Comoros",
    "station": "Radio Anjouan\n\n      Multilingual",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=65691"
}, {
    "country": "Angola",
    "station": "RNA R Cabinda\n\n      Portuguese",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=251453"
}, {
    "country": "Mauritius",
    "station": "MBC Radio Maurice 1\n\n      English",
    "location": "Malherbes, Port Louis, Mauritius",
    "email-href": "customercare@mbc.intnet.mu"
}, {
    "country": "Algeria",
    "station": "الإذاعة الجزائرية - القناة الأولى\n\n      الصوت الأقرب إليك",
    "location": "Algiers, Algeria",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16034"
}, {
    "country": "Togo",
    "station": "Omega FM\n\n      La Fréquence De Vie",
    "location": "",
    "email-href": "omegafm@omegafm.com"
}, {
    "country": "Kenya",
    "station": "Family Radio - Radio 316\n\n      Endless Music",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6131"
}, {
    "country": "Reunion",
    "station": "RJL Radio\n\n      La Radio Soleil Dans Le Sud",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=198382"
}, {
    "country": "Libya",
    "station": "Radio Zone 100.7\n\n      Your Voice Only",
    "location": "Tripoli, Libyan Arab Jamahiriya",
    "email-href": "Info@RadioZone.ly"
}, {
    "country": "Cote D'ivoire",
    "station": "Radio Cocody FM\n\n      La Radio qui s'impose a abidjan",
    "location": "",
    "email-href": "info@radiococodyfm.com"
}, {
    "country": "Morocco",
    "station": "Medi 1\n\n      Ia Radio Du Grand Maghreb Au Maroc",
    "location": "Tangier, Morocco",
    "email-href": "medi1@medi1.com"
}, {
    "country": "Rwanda",
    "station": "Flash FM Rwanda\n\n      The Best Mix Of Music",
    "location": "",
    "email-href": "info@flashfm.rw"
}, {
    "country": "Zambia",
    "station": "ZNBC Radio 2\n\n      Sound Vision For The Future",
    "location": "Lusaka, Lusaka, Zambia",
    "email-href": "hyde.haguta@znbc.co.zm"
}, {
    "country": "Liberia",
    "station": "STAR radio Liberia\n\n      starradio.com is your...",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=106962"
}, {
    "country": "Benin",
    "station": "Radio Immaculée Concepción\n\n      French",
    "location": "Cotonou, Benin",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16108"
}, {
    "country": "Uganda",
    "station": "Radio Pacis\n\n      Peace of Christ For All",
    "location": "Arua, Uganda",
    "email-href": "tonino.p.arua@radiopacis.org"
}, {
    "country": "Libya",
    "station": "LJB Holy Koran\n\n      Arabic",
    "location": "Tripolis, Libyan Arab Jamahiriya",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16152"
}, {
    "country": "Malawi",
    "station": "Star FM\n\n      Better Information - Today's Best Music",
    "location": "Blantyre, Southern, Malawi",
    "email-href": "info@starradiomw.com"
}, {
    "country": "Benin",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16106"
}, {
    "country": "Reunion",
    "station": "Radio Pikan\n\n      French",
    "location": "",
    "email-href": "secretariat@kanal-renionite.org"
}, {
    "country": "Gabon",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16131"
}, {
    "country": "Gambia",
    "station": "Star FM 96.6 Banjul\n\n      We spot light the brightest and the best",
    "location": "Sere Kunda, Gambia",
    "email-href": "starfmgambia@yahoo.com"
}, {
    "country": "Egypt",
    "station": "El Gouna Radio\n\n      Your Favorite Wave",
    "location": "Hurghada, Egypt",
    "email-href": "romolo1@romolo.com"
}, {
    "country": "Ghana",
    "station": "Metro 94.1 FM\n\n      Believe in Better",
    "location": "Kumasi, Ghana",
    "email-href": "samson.deen@metro941.fm"
}, {
    "country": "Sudan",
    "station": "Furgan FM\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=179582"
}, {
    "country": "Reunion",
    "station": "Radio Arc-en-Ciel\n\n      French",
    "location": "Le Tampon, Reunion",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6340"
}, {
    "country": "Morocco",
    "station": "الإذاعة الأمازيغية\n\n      Arabic",
    "location": "Rabat, Morocco",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=129392"
}, {
    "country": "Ghana",
    "station": "KASAPA FM\n\n      Agye Bebiaaaa",
    "location": "",
    "email-href": "info@kasapafmonline.com"
}, {
    "country": "Egypt",
    "station": "الراديو 9090\n\n      هواها مصري",
    "location": "Cairo, Egypt",
    "email-href": "info@mobtada.com"
}, {
    "country": "Equatorial Guinea",
    "station": "TVGE International\n\n      English",
    "location": "Bata, Equatorial Guinea",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=151162"
}, {
    "country": "Algeria",
    "station": "Radio Algerienne Chaine 2\n\n      ستعرف رياضة كرة السلة...",
    "location": "Alger, Algeria",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=2418"
}, {
    "country": "Namibia",
    "station": "NBC Damara Nam\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=119488"
}, {
    "country": "DR Congo",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "Poie, DR Congo",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6244"
}, {
    "country": "Malawi",
    "station": "YONECO FM\n\n      Real Voice for the youth,Women and Children",
    "location": "Zomba, Malawi",
    "email-href": "panjiharawa@yoneco.org.mw"
}, {
    "country": "Guinea-Bissau",
    "station": "Rádio Jovem Guiné-Bissau\n\n      Portuguese",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=158284"
}, {
    "country": "Mauritius",
    "station": "MBC Radio Rodrigues\n\n      French",
    "location": "",
    "email-href": "customercare@mbc.intnet.mu"
}, {
    "country": "Libya",
    "station": "Tripoli FM\n\n      English",
    "location": "",
    "email-href": "info@tripolifm.ly"
}, {
    "country": "Swaziland",
    "station": "TWR Africa\n\n      Your Friendly Voice In Africa",
    "location": "Mbabane, Swaziland",
    "email-href": "info@twrafrica.org"
}, {
    "country": "Morocco",
    "station": "Radio 2M\n\n      Tous ce que j'aime.. Est sur Radio 2M",
    "location": "",
    "email-href": "srafie@2m.ma"
}, {
    "country": "Kenya",
    "station": "Classic 105\n\n      Good Times and Great Hits",
    "location": "",
    "email-href": "info@classic105.com"
}, {
    "country": "Sudan",
    "station": "Khartoum FM\n\n      The First Sudanese Economic Radio",
    "location": "",
    "email-href": "admin@kfm89.net"
}, {
    "country": "Senegal",
    "station": "xfm\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=242446"
}, {
    "country": "Cape Verde",
    "station": "RFI 1 Afrique / RFI 2\n\n      Actualité Afrique, Monde En Français Et En 19 Langues",
    "location": "Santiago, Cape Verde",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16074"
}, {
    "country": "Senegal",
    "station": "xfm\n\n      French",
    "location": "Dakar, Senegal",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=242446"
}, {
    "country": "Cote D'ivoire",
    "station": "Nostalgie FM\n\n      Nostalgie La Legende",
    "location": "Abidjan, Côte d'Ivoire",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=90592"
}, {
    "country": "Mali",
    "station": "Radio Guintan\n\n      La Voix des Femmes",
    "location": "Magnambougou, Mali",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=45240"
}, {
    "country": "Tanzania",
    "station": "Radio Safina\n\n      Swahili",
    "location": "",
    "email-href": "dchristlife@yahoo.com"
}, {
    "country": "Tunisia",
    "station": "Shems FM\n\n      Shems FM Live : Suivez...",
    "location": "Gafsa, Tunisia",
    "email-href": "contact@shemsfm.net"
}, {
    "country": "Central African Republic",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16088"
}, {
    "country": "Botswana",
    "station": "RB1-Radio Botswana\n\n      The Department of Information and Broadcasting",
    "location": "Gaborone, Botswana",
    "email-href": "asesinyi@gov.bw"
}, {
    "country": "Kenya",
    "station": "Family Radio - Radio 316\n\n      Endless Music",
    "location": "Nairobi, Kenya",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6131"
}, {
    "country": "Burkina Faso",
    "station": "Radio Burkina\n\n      French",
    "location": "Ouagadougou, Burkina Faso",
    "email-href": "radio@rtb.bf"
}, {
    "country": "Benin",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "Cotonou, Benin",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16107"
}, {
    "country": "Zimbabwe",
    "station": "Star Fm\n\n      English",
    "location": "Harare, Zimbabwe",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=182260"
}, {
    "country": "Mali",
    "station": "Radio Patriote\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=116718"
}, {
    "country": "Senegal",
    "station": "RTS Ziguinshor FM\n\n      Multilingual",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=238791"
}, {
    "country": "Angola",
    "station": "Radio N'Gola Yetu RNA\n\n      Multilingual",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6231"
}, {
    "country": "Senegal",
    "station": "Lamp Fall FM\n\n      Baidy Thioune Chef De Station",
    "location": "",
    "email-href": "fallamptv@gmail.com"
}, {
    "country": "Namibia",
    "station": "NBC Lozi\n\n      Multilingual",
    "location": "Klein Windhoek, Namibia",
    "email-href": "fzinner@nbc.na"
}, {
    "country": "Ghana",
    "station": "Peace FM\n\n      The Station With A Vision",
    "location": "",
    "email-href": "daara90@gmail.com"
}, {
    "country": "Central African Republic",
    "station": "BBC World Service Bangui\n\n      BBC World Service is the...",
    "location": "Bangui, Central African Republic",
    "email-href": "bbcwsafrica@bbc.co.uk"
}, {
    "country": "Cameroon",
    "station": "CRTV\n\n      Cameroon Radio and Television",
    "location": "Yaoundé, Cameroon",
    "email-href": "fm94@crtv.cm"
}, {
    "country": "Sierra Leone",
    "station": "RADIOKRIO\n\n      English",
    "location": "",
    "email-href": "MAFERECAMARA@YAHOO.COM"
}, {
    "country": "Gambia",
    "station": "Star FM 96.6 Banjul\n\n      We spot light the brightest and the best",
    "location": "",
    "email-href": "starfmgambia@yahoo.com"
}, {
    "country": "Zambia",
    "station": "Yatsani Radio\n\n      The mission of Yatsani...",
    "location": "Lusaka, Zambia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=47637"
}, {
    "country": "Tunisia",
    "station": "Tunisie 7\n\n      Hungarian",
    "location": "Carthage, Tunisia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=150957"
}, {
    "country": "Namibia",
    "station": "NBC Herero\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6305"
}, {
    "country": "Uganda",
    "station": "100.4 Hills Fm\n\n      Sound From The Hills",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=249868"
}, {
    "country": "Mauritania",
    "station": "Radio Coran\n\n      Radio diffusant le saint...",
    "location": "",
    "email-href": "info@radiomauritanie.mr"
}, {
    "country": "Nigeria",
    "station": "Radio Continental\n\n      The Loudest Conversation....",
    "location": "",
    "email-href": "contactus@rc1023.fm"
}, {
    "country": "Senegal",
    "station": "RTS Matam FM\n\n      Multilingual",
    "location": "Ourossogui, Senegal",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=238797"
}, {
    "country": "Algeria",
    "station": "Radio Skikda\n\n      Urdu",
    "location": "",
    "email-href": "info@radio-skikda.dz"
}, {
    "country": "Gambia",
    "station": "Unique FM\n\n      ...Renewed Sound in You",
    "location": "",
    "email-href": "info@uniquefm.gm"
}, {
    "country": "Nigeria",
    "station": "Cool FM 96.9 Abuja\n\n      Your #1 Hit Music Station",
    "location": "",
    "email-href": "rcahilig@coollink.us"
}, {
    "country": "Mozambique",
    "station": "Radio Encontro\n\n      Portuguese",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6287"
}, {
    "country": "Malawi",
    "station": "Capital FM Malawi\n\n      Malawi's Hit Music Station",
    "location": "",
    "email-href": "music@capitalradiomalawi.com"
}, {
    "country": "Mozambique",
    "station": "Radio Encontro\n\n      Portuguese",
    "location": "Nampula, Mozambique",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6287"
}, {
    "country": "Angola",
    "station": "RNA R Namibe\n\n      Portuguese",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=251457"
}, {
    "country": "Togo",
    "station": "Radio Maria (Togo)\n\n      Une Voix Chrétienne Qui T'accompagne",
    "location": "Lomé, Togo",
    "email-href": "director.tog@radiomaria.org"
}, {
    "country": "Namibia",
    "station": "Energy 100 FM\n\n      The Power Station",
    "location": "",
    "email-href": "studio@energy100fm.com"
}, {
    "country": "Swaziland",
    "station": "Radio Swaziland English\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=107955"
}, {
    "country": "Zambia",
    "station": "Chikuni Radio\n\n      English",
    "location": "",
    "email-href": "chikuniradio@gmail.com"
}, {
    "country": "Ghana",
    "station": "Radio Gold FM\n\n      Your Power Station !!!",
    "location": "",
    "email-href": "radiogold@ucomgh.com"
}, {
    "country": "Congo",
    "station": "BBC World Service Kinshasa\n\n      BBC World Service is the...",
    "location": "",
    "email-href": "bbcwsafrica@bbc.co.uk"
}, {
    "country": "Burkina Faso",
    "station": "Ouaga FM\n\n      La radio de toutes les générations",
    "location": "",
    "email-href": "radio.ouaga@yahoo.fr"
}, {
    "country": "Algeria",
    "station": "JIL FM\n\n      Multilingual",
    "location": "Chrea, Algeria",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=154053"
}, {
    "country": "Benin",
    "station": "Radio Bani Gansé\n\n      Multilingual",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=10925"
}, {
    "country": "Sierra Leone",
    "station": "FoP Radio\n\n      English",
    "location": "Moyamba, Sierra Leone",
    "email-href": "fopnetwork@gmail"
}, {
    "country": "Nigeria",
    "station": "Smooth 98.1\n\n      Love Music Love Life",
    "location": "",
    "email-href": "info@smooth981.fm"
}, {
    "country": "Ghana",
    "station": "Joy FM\n\n      Super Hits Radio !!",
    "location": "Accra, Ghana",
    "email-href": "info@myjoyonline.com"
}, {
    "country": "Mali",
    "station": "Citizen Radio Voice\n\n      The radio voice of the citizen",
    "location": "Bamako, Mali",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=189038"
}, {
    "country": "Ghana",
    "station": "Okay FM\n\n      English",
    "location": "Accra, Ghana",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=137336"
}, {
    "country": "Senegal",
    "station": "Bambilorfm\n\n      French",
    "location": "Bambilor, Senegal",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=140804"
}, {
    "country": "Morocco",
    "station": "Med Radio\n\n      Arabic",
    "location": "Casablanca, Morocco",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=158167"
}, {
    "country": "Namibia",
    "station": "Radio Wave\n\n      #1 Hit Music Station",
    "location": "",
    "email-href": "robin@radiowave.com.na"
}, {
    "country": "Rwanda",
    "station": "102.3 KISS FM\n\n      Kigali's Number 1 Hit Music Station!",
    "location": "",
    "email-href": "info@kissfm.rw"
}, {
    "country": "Egypt",
    "station": "FM نغم\n\n      English",
    "location": "Cairo, Egypt",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=212844"
}, {
    "country": "Kenya",
    "station": "Ghetto Radio\n\n      Multilingual",
    "location": "",
    "email-href": "info@ghettoradio.co.ke"
}, {
    "country": "Tunisia",
    "station": "Radio Jawhara\n\n      Radio Jawhara FM, Tunisie...",
    "location": "",
    "email-href": "ridhabnj@gmail.com"
}, {
    "country": "Eritrea",
    "station": "Dimtsi Hafash Radio 2\n\n      Voice of the Broad Masses",
    "location": "Asmara, Eritrea",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16094"
}, {
    "country": "Algeria",
    "station": "Radio Tassili\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16040"
}, {
    "country": "Madagascar",
    "station": "viva radio madagascar\n\n      le feeling de toutes les générations",
    "location": "Antananarivo, Madagascar",
    "email-href": "viva.infog@blueline.mg"
}, {
    "country": "Zimbabwe",
    "station": "Praise 105.2 Radio\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=245456"
}, {
    "country": "Algeria",
    "station": "Radio El Bahdja\n\n      بعد الشدة - تجي الفرجة مع إذاعة البهجة",
    "location": "Bordj El Bahri, Algeria",
    "email-href": "info@algerian-radio.dz"
}, {
    "country": "Uganda",
    "station": "Alpha Fm\n\n      Touching Lives",
    "location": "Kampala, Uganda",
    "email-href": "damasese@operamail.com"
}, {
    "country": "Burundi",
    "station": "Radio Isanganiro\n\n      Le Dialogue Vaut Mieux Que La Force",
    "location": "Bujumbura, Burundi",
    "email-href": "isanganiro@yahoo.fr"
}, {
    "country": "Reunion",
    "station": "EXO FM\n\n      La radio soleil numéro 1",
    "location": "",
    "email-href": "gtmoi974@yahoo.fr"
}, {
    "country": "Ghana",
    "station": "Metro 94.1 FM\n\n      Believe in Better",
    "location": "",
    "email-href": "samson.deen@metro941.fm"
}, {
    "country": "Togo",
    "station": "Radio JVA\n\n      Jésus vous aime",
    "location": "Lomé, Togo",
    "email-href": "radiojva@yahoo.fr"
}, {
    "country": "Botswana",
    "station": "Duma FM\n\n      English",
    "location": "Gaborone, Botswana",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=138245"
}, {
    "country": "Uganda",
    "station": "Beat FM\n\n      EKINTABULI KYO' MUZIKI",
    "location": "",
    "email-href": "technical@capitalfm-ug.com"
}, {
    "country": "Libya",
    "station": "Radio Zone 100.7\n\n      Your Voice Only",
    "location": "",
    "email-href": "Info@RadioZone.ly"
}, {
    "country": "Ghana",
    "station": "Radio Gold FM\n\n      Your Power Station !!!",
    "location": "Accra, Ghana",
    "email-href": "radiogold@ucomgh.com"
}, {
    "country": "Malawi",
    "station": "Zodiak Radio\n\n      Zikachitika Mumvera kwa ife.",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=122168"
}, {
    "country": "Morocco",
    "station": "R Casa\n\n      Arabic",
    "location": "Casablanca, Morocco",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=247890"
}, {
    "country": "Morocco",
    "station": "Radio 2M\n\n      Tous ce que j'aime.. Est sur Radio 2M",
    "location": "Casablanca, Morocco",
    "email-href": "srafie@2m.ma"
}, {
    "country": "Eritrea",
    "station": "Dimtsi Hafash Radio 2\n\n      Voice of the Broad Masses",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16094"
}, {
    "country": "Kenya",
    "station": "Capital FM\n\n      Your Best Mix of Music",
    "location": "Nairobi, Kenya",
    "email-href": "digital@capitalfm.co.ke"
}, {
    "country": "Ethiopia",
    "station": "EBC Addis 97.1\n\n      Multilingual",
    "location": "Addis Abeba, Ethiopia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=138734"
}, {
    "country": "Madagascar",
    "station": "viva radio madagascar\n\n      le feeling de toutes les générations",
    "location": "",
    "email-href": "viva.infog@blueline.mg"
}, {
    "country": "Senegal",
    "station": "BFMinfo\n\n      French",
    "location": "Dakar, Senegal",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=168647"
}, {
    "country": "Sierra Leone",
    "station": "FoP Radio\n\n      English",
    "location": "",
    "email-href": "fopnetwork@gmail"
}, {
    "country": "Benin",
    "station": "Radio Bani Gansé\n\n      Multilingual",
    "location": "Banikoara, Benin",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=10925"
}, {
    "country": "Seychelles",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=14399"
}, {
    "country": "Ghana",
    "station": "Hitz FM\n\n      Means Entertainment",
    "location": "Accra, Ghana",
    "email-href": "info@myjoyonline.com"
}, {
    "country": "Morocco",
    "station": "TV Sahara\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=104670"
}, {
    "country": "Burundi",
    "station": "BBC World Service Bujumbura\n\n      BBC World Service is the...",
    "location": "Bujumbura, Burundi",
    "email-href": "bbcwsafrica@bbc.co.uk"
}, {
    "country": "Eritrea",
    "station": "Eritrea FM Channel 3\n\n      English",
    "location": "Asmara, Eritrea",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=103396"
}, {
    "country": "Tanzania",
    "station": "East Africa Radio\n\n      Together Tunawakilisha",
    "location": "Dar Es Salaam, Tanzania",
    "email-href": "info@eastafricaradio.com"
}, {
    "country": "Burkina Faso",
    "station": "Radio Unitas\n\n      English",
    "location": "",
    "email-href": "unitasdbg@voil%C3%A0.fr"
}, {
    "country": "Malawi",
    "station": "TWR Africa\n\n      Your Friendly Voice In Africa",
    "location": "Blantyre, Malawi",
    "email-href": "info@twrafrica.org"
}, {
    "country": "Libya",
    "station": "Voice of Tripoli\n\n      Arabic",
    "location": "Tripolis, Libyan Arab Jamahiriya",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16150"
}, {
    "country": "Reunion",
    "station": "Fun Radio Reunion\n\n      Le son dancefloor",
    "location": "",
    "email-href": "radio@funradio.re"
}, {
    "country": "Senegal",
    "station": "Sud FM\n\n      Sen Radio",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6977"
}, {
    "country": "Gambia",
    "station": "Taranga FM\n\n      The Voice of Kombo North",
    "location": "",
    "email-href": "alagie72@yahoo.com"
}, {
    "country": "Uganda",
    "station": "Dembe FM\n\n      English",
    "location": "",
    "email-href": "Administration@ugamuziki.com"
}, {
    "country": "Zambia",
    "station": "ZNBC R1\n\n      Sound Vision For The Future",
    "location": "Lusaka, Lusaka, Zambia",
    "email-href": "hyde.haguta@znbc.co.zm"
}, {
    "country": "Libya",
    "station": "LJB Arabic\n\n      Arabic",
    "location": "Tripolis, Libyan Arab Jamahiriya",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16148"
}, {
    "country": "Reunion",
    "station": "Fun Radio Reunion\n\n      Le son dancefloor",
    "location": "Saint-Denis, Reunion",
    "email-href": "radio@funradio.re"
}, {
    "country": "Mali",
    "station": "BBC World Service Bamako\n\n      BBC World Service is the...",
    "location": "Bamako, Bamako, Mali",
    "email-href": "worldservice@bbc.co.uk"
}, {
    "country": "Zambia",
    "station": "Parliament Radio\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=110048"
}, {
    "country": "Ethiopia",
    "station": "Sheger 102.1 FM\n\n      It's about you!",
    "location": "Addis Abeba, Ethiopia",
    "email-href": "info@shegerfm.com"
}, {
    "country": "Angola",
    "station": "RNA R Lobito\n\n      Portuguese",
    "location": "Lobito, Angola",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=251464"
}, {
    "country": "Angola",
    "station": "RNA R Huila\n\n      Portuguese",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=251455"
}, {
    "country": "Comoros",
    "station": "Radio Dziyalandze\n\n      Multilingual",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=65690"
}, {
    "country": "Zambia",
    "station": "Radio Maranatha\n\n      Compartiendo el mensaje de salvación",
    "location": "",
    "email-href": "fmradiomaranatha@gmail.com"
}, {
    "country": "Equatorial Guinea",
    "station": "TVGE International\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=151162"
}, {
    "country": "Egypt",
    "station": "راديو مصر\n\n      لكل مصر",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=122485"
}, {
    "country": "Senegal",
    "station": "Radio Senegal International\n\n      Multilingual",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16350"
}, {
    "country": "Rwanda",
    "station": "Radio Rwanda\n\n      Office Rwandais d' Information",
    "location": "Kigali, Kigali, Rwanda",
    "email-href": "skarere@rba.co.rw"
}, {
    "country": "Djibouti",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16092"
}, {
    "country": "Lesotho",
    "station": "Lesotho Catholic Radio FM\n\n      English",
    "location": "Maseru, Lesotho",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=142263"
}, {
    "country": "South Africa",
    "station": "Phalaphala FM\n\n      Hu Bvuma Yone Fhedzi",
    "location": "Johannesburg, South Africa",
    "email-href": "maumelair@sabc.co.za"
}, {
    "country": "St. Helena",
    "station": "BBC World Service English Bay\n\n      BBC World Service is the...",
    "location": "",
    "email-href": "bbcwsafrica@bbc.co.uk"
}, {
    "country": "Namibia",
    "station": "NBC Rukavango\n\n      Namibian Broadcasting...",
    "location": "",
    "email-href": "fzinner@nbc.na"
}, {
    "country": "DR Congo",
    "station": "Congo Planete TV 2\n\n      French",
    "location": "Kinshasa, DR Congo",
    "email-href": "info@congoplanet.com"
}, {
    "country": "Morocco",
    "station": "إذاعة محمد السادس للقرآن الكريم\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=133435"
}, {
    "country": "Namibia",
    "station": "Radio Wave\n\n      #1 Hit Music Station",
    "location": "Klein Windhoek, Namibia",
    "email-href": "robin@radiowave.com.na"
}, {
    "country": "Eritrea",
    "station": "Zara FM\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=103395"
}, {
    "country": "South Africa",
    "station": "Thobela FM\n\n      Mosito A Tswela Pele",
    "location": "Johannesburg, South Africa",
    "email-href": "Thobelafm@sabc.co.za"
}, {
    "country": "Lesotho",
    "station": "Ultimate FM\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=142269"
}, {
    "country": "Rwanda",
    "station": "ISANGO STAR\n\n      English",
    "location": "",
    "email-href": "info@isangostar.rw"
}, {
    "country": "Mauritius",
    "station": "BBC World Service Bigara\n\n      BBC World Service is the...",
    "location": "",
    "email-href": "bbcwsafrica@bbc.co.uk"
}, {
    "country": "Ethiopia",
    "station": "Radio Ethiopia - National Service\n\n      External Service And Internal Service",
    "location": "",
    "email-href": "radioethiopia@usa.net"
}, {
    "country": "Lesotho",
    "station": "MoAfrika FM\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=142265"
}, {
    "country": "Cote D'ivoire",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "Bouake, Ivory Coast",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16127"
}, {
    "country": "Egypt",
    "station": "Al-Aghani\n\n      Arabic",
    "location": "",
    "email-href": "ads@elaghany.com"
}, {
    "country": "Djibouti",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "Djibouti, Djibouti",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16092"
}, {
    "country": "Senegal",
    "station": "RTS Tamba FM\n\n      Multilingual",
    "location": "Tambacounda, Senegal",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=238790"
}, {
    "country": "Cote D'ivoire",
    "station": "Ivorian TV\n\n      The Music Channel",
    "location": "",
    "email-href": "contact@ivorian.tv"
}, {
    "country": "Ethiopia",
    "station": "Zami 90.7 FM\n\n      The Voice The Difference",
    "location": "",
    "email-href": "contact@zamiradio.com"
}, {
    "country": "Mali",
    "station": "Al Nour FM\n\n      French",
    "location": "Koulikoro, Mali",
    "email-href": "radio@radio-mali.ml"
}, {
    "country": "Malawi",
    "station": "Radio Maria (Malawi)\n\n      A Christian Voice In Your Home",
    "location": "Mangochi, Malawi",
    "email-href": " radiomaria@africa-online.net"
}, {
    "country": "Benin",
    "station": "Radio Immaculée Concepción\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16108"
}, {
    "country": "Angola",
    "station": "RNA R Uige\n\n      Portuguese",
    "location": "Uige, Angola",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=251459"
}, {
    "country": "Mauritius",
    "station": "MBC Taal FM\n\n      The Mauritius Broadcasting...",
    "location": "",
    "email-href": "customercare@mbc.intnet.mu"
}, {
    "country": "Egypt",
    "station": "Sound of Sakia Radio\n\n      Sound of Sakia Online...",
    "location": "Cairo, Egypt",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=134908"
}, {
    "country": "Mali",
    "station": "SEKO Radio\n\n      French",
    "location": "Kayes, Mali",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=189030"
}, {
    "country": "Namibia",
    "station": "Omulunga Radio\n\n      English",
    "location": "Klein Windhoek, Namibia",
    "email-href": "omulunga @ omulunga.com.na"
}, {
    "country": "Algeria",
    "station": "Radio Coran\n\n      محطة دينية مخصصة لإذاعة...",
    "location": "Algiers, Algiers, Algeria",
    "email-href": "contact@radio-coran.net"
}, {
    "country": "Sudan",
    "station": "Capital Radio\n\n      The Best Radio Station in Sudan and Africa.",
    "location": "Khartoum, Sudan",
    "email-href": "info@capitalradiosudan.com"
}, {
    "country": "Sudan",
    "station": "Furgan FM\n\n      Arabic",
    "location": "Khartoum, Sudan",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=179582"
}, {
    "country": "Zambia",
    "station": "Radio Dove\n\n      English",
    "location": "Lusaka, Zambia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=110034"
}, {
    "country": "Zambia",
    "station": "ZNBC Radio 2\n\n      Sound Vision For The Future",
    "location": "",
    "email-href": "hyde.haguta@znbc.co.zm"
}, {
    "country": "Burkina Faso",
    "station": "Radio Salankoloto\n\n      Radio Salankoloto is a...",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=150117"
}, {
    "country": "Gambia",
    "station": "West Coast Radio 92.1\n\n      West Coast Radio",
    "location": "Serrekunda, Gambia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=186335"
}, {
    "country": "Liberia",
    "station": "UNMIL Radio\n\n      United Nations Mission in Liberia",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=90632"
}, {
    "country": "Namibia",
    "station": "NBC Afrikaans\n\n      Afrikaans",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=119461"
}, {
    "country": "Nigeria",
    "station": "Cool FM 96.9 Lagos\n\n      Your #1 Hit Music Station",
    "location": "",
    "email-href": "rcahilig@coollink.us"
}, {
    "country": "Nigeria",
    "station": "Rahma Radio 97.3\n\n      Farin Cikin Al'umma",
    "location": "",
    "email-href": "rahmaradio@yahoo.com"
}, {
    "country": "Lesotho",
    "station": "PC FM\n\n      Ha Ntatae!!",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=47696"
}, {
    "country": "Namibia",
    "station": "Live FM\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=119487"
}, {
    "country": "Cameroon",
    "station": "Radio Tiemeni Siantou\n\n      French",
    "location": "",
    "email-href": "info@cameroonvoice.com"
}, {
    "country": "Togo",
    "station": "Zéphyr FM\n\n      Enfin La Radio",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6980"
}, {
    "country": "Madagascar",
    "station": "Radio Des Jeunes FM\n\n      La Radio Des Jeunes",
    "location": "",
    "email-href": "contact@rdeejay.net"
}, {
    "country": "Sudan",
    "station": "SRTC General\n\n      Arabic",
    "location": "Omdurman, Sudan",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=131749"
}, {
    "country": "Gambia",
    "station": "West Coast Radio\n\n      West Coast Radio",
    "location": "Serrekunda, Gambia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16134"
}, {
    "country": "Sudan",
    "station": "Radio Megamind\n\n      listen to last news and...",
    "location": "Khartoum, Sudan",
    "email-href": "info@fm12.net"
}, {
    "country": "Central African Republic",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "Bangui, Central African Republic",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16088"
}, {
    "country": "Zambia",
    "station": "Power FM\n\n      Urban Youth Radio",
    "location": "",
    "email-href": "info@power997.com"
}, {
    "country": "Uganda",
    "station": "Alpha Fm\n\n      Touching Lives",
    "location": "",
    "email-href": "damasese@operamail.com"
}, {
    "country": "Angola",
    "station": "RNA R Huambo\n\n      Portuguese",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=251454"
}, {
    "country": "Madagascar",
    "station": "Radio Voanio\n\n      French",
    "location": "Toamasina, Madagascar",
    "email-href": "radio@voanio.com"
}, {
    "country": "Mali",
    "station": "ORTM Chaine 2\n\n      French",
    "location": "Bamako, Mali",
    "email-href": "ortm@ortm.ml"
}, {
    "country": "Algeria",
    "station": "Radio Oran\n\n      Pour que vous ne soyez plus seuls",
    "location": "",
    "email-href": "info@radio-oran.com"
}, {
    "country": "Madagascar",
    "station": "Radio Vaovao Mahasoa\n\n      Multilingual",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=121023"
}, {
    "country": "Madagascar",
    "station": "Radio Antsiva\n\n      French",
    "location": "Antananarivo, Madagascar",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=10195"
}, {
    "country": "Ethiopia",
    "station": "Radio Ethiopia - National Service\n\n      Multilingual",
    "location": "Addis Abeba, Ethiopia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16099"
}, {
    "country": "Egypt",
    "station": "Radio Vision Egypt\n\n      The First Egyptian Live Audio Blog!",
    "location": "",
    "email-href": "radiovisioneg@hotmail.com"
}, {
    "country": "Morocco",
    "station": "Casa FM\n\n      French",
    "location": "Casablanca, Morocco",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=105721"
}, {
    "country": "Mali",
    "station": "Al Nour FM\n\n      French",
    "location": "",
    "email-href": "radio@radio-mali.ml"
}, {
    "country": "Liberia",
    "station": "STAR radio Liberia\n\n      starradio.com is your...",
    "location": "Monrovia, Liberia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=106962"
}, {
    "country": "Madagascar",
    "station": "Radio Madagascar > RNA Antalaha\n\n      Radio Ny Antsika\nEn...",
    "location": "",
    "email-href": "contact@rna-madagascar.com"
}, {
    "country": "Kenya",
    "station": "GHETTO FM\n\n      An Amplified Voice for the Voiceless!",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=174580"
}, {
    "country": "Ghana",
    "station": "GHRadio1\n\n      real music power",
    "location": "",
    "email-href": "contact@ghradio1.com"
}, {
    "country": "Morocco",
    "station": "R Casa\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=247890"
}, {
    "country": "Algeria",
    "station": "الإذاعة الجزائرية - القناة الأولى\n\n      الصوت الأقرب إليك",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16034"
}, {
    "country": "Namibia",
    "station": "NBC Afrikaans\n\n      Afrikaans",
    "location": "Klein Windhoek, Namibia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=119461"
}, {
    "country": "Tunisia",
    "station": "Radio Jawhara\n\n      Radio Jawhara FM, Tunisie...",
    "location": "Sousse, Tunisia",
    "email-href": "ridhabnj@gmail.com"
}, {
    "country": "Cote D'ivoire",
    "station": "Radio Cocody FM\n\n      La Radio qui s'impose a abidjan",
    "location": "Abidjan, Côte d'Ivoire",
    "email-href": "info@radiococodyfm.com"
}, {
    "country": "Namibia",
    "station": "Kanaal 7\n\n      English",
    "location": "Katima Mulilo, Namibia",
    "email-href": "kanaal7@k7.com.na"
}, {
    "country": "Mali",
    "station": "Jekafo Radio\n\n      French",
    "location": "Bamako, Mali",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=116715"
}, {
    "country": "Uganda",
    "station": "Bukedde FM 100.5\n\n      Embutikizi",
    "location": "",
    "email-href": "tam978@gmail.com"
}, {
    "country": "DR Congo",
    "station": "Top Congo FM\n\n      La Frequence Utile",
    "location": "Kinshasa, DR Congo",
    "email-href": "info@topcongo.info"
}, {
    "country": "Lesotho",
    "station": "Radio Lesotho\n\n      English",
    "location": "Maseru, Lesotho",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=10282"
}, {
    "country": "Kenya",
    "station": "Kameme FM\n\n      Kayu Ka Muingi",
    "location": "",
    "email-href": "info@kamemefm.com"
}, {
    "country": "Togo",
    "station": "Radio Lome\n\n      La Station Du Plaisir",
    "location": "",
    "email-href": "radiolome@radiolome.tg"
}, {
    "country": "Madagascar",
    "station": "Radio Des Jeunes FM\n\n      La Radio Des Jeunes",
    "location": "Antananarivo, Madagascar",
    "email-href": "contact@rdeejay.net"
}, {
    "country": "Cote D'ivoire",
    "station": "Fréquence 2\n\n      French",
    "location": "Abidjan, Côte d'Ivoire",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16122"
}, {
    "country": "Cote D'ivoire",
    "station": "Radio Al Bayane\n\n      La voix de l'Islam éternel pour l'éternité",
    "location": "Abidjan, Côte d'Ivoire",
    "email-href": "contact@radio-albayane.info"
}, {
    "country": "Tanzania",
    "station": "TBC FM\n\n      Swahili",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6420"
}, {
    "country": "Reunion",
    "station": "Radio Arc-en-Ciel\n\n      Radio Arc-en-ciel, radio...",
    "location": "Saint-Denis, Saint-Denis, Reunion",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6356"
}, {
    "country": "Equatorial Guinea",
    "station": "RFI 1 Afrique / RFI 2\n\n      French",
    "location": "Santa Isabel, Equatorial Guinea",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16129"
}, {
    "country": "Madagascar",
    "station": "RFI 1 Afrique / local 2h\n\n      French",
    "location": "Antsiranana, Madagascar",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6265"
}, {
    "country": "Egypt",
    "station": "Alhayat TV\n\n      Urdu",
    "location": "",
    "email-href": "info@hayatv.tv"
}, {
    "country": "Morocco",
    "station": "Hit Radio\n\n      French",
    "location": "Casablanca, Morocco",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=110256"
}, {
    "country": "Benin",
    "station": "Golfe FM\n\n      We Are The Future Restez Branche",
    "location": "Cotonou, Benin",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=17460"
}, {
    "country": "Zambia",
    "station": "Q-FM\n\n      Africa's Modern Radio",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=110024"
}, {
    "country": "Kenya",
    "station": "Radio Waumini\n\n      Your Online Catholic Station",
    "location": "Nairobi, Kenya",
    "email-href": "it@radiowaumini.org"
}, {
    "country": "Nigeria",
    "station": "Wazobia FM 95.1 Lagos\n\n      Ogbonge Station",
    "location": "Lagos, Nigeria",
    "email-href": "rcahilig@coollink.us"
}, {
    "country": "Zambia",
    "station": "Flava FM\n\n      The Heart & Soul of the Copperbelt",
    "location": "",
    "email-href": "admin@flavafm.co.zm"
}, {
    "country": "Mozambique",
    "station": "Radio Mocambique\n\n      Hoje e Sempre",
    "location": "Maputo, Mozambique",
    "email-href": "webmaster@rm.co.mz"
}, {
    "country": "Senegal",
    "station": "Walf FM\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=47624"
}, {
    "country": "Cote D'ivoire",
    "station": "Radio Jam\n\n      Toujours Une Longueur d'avance!",
    "location": "Abidjan, Côte d'Ivoire",
    "email-href": "jamfm@aviso.ci"
}, {
    "country": "Kenya",
    "station": "XFM Kenya\n\n      Real Music",
    "location": "Machakos, Kenya",
    "email-href": "info@xfm.co.ke"
}, {
    "country": "Lesotho",
    "station": "Thaha-Khube FM\n\n      English",
    "location": "Maseru, Lesotho",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=142268"
}, {
    "country": "Kenya",
    "station": "Sound Asia FM\n\n      best Bollywood music",
    "location": "",
    "email-href": "info@soundasiafm.com"
}, {
    "country": "Uganda",
    "station": "Radio Sapientia\n\n      The Source of  Wisdom",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=114921"
}, {
    "country": "Uganda",
    "station": "XFM\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=204236"
}, {
    "country": "Madagascar",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6267"
}, {
    "country": "Gabon",
    "station": "Africa N°1\n\n      La Radio Africaine",
    "location": "",
    "email-href": "africa@africa1.com"
}, {
    "country": "Sudan",
    "station": "SRTC FM 100\n\n      Arabic",
    "location": "Omdurman, Sudan",
    "email-href": "fm100@sudanradio.info"
}, {
    "country": "Cote D'ivoire",
    "station": "Radio Espoir\n\n      Cote D'Invoire",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16126"
}, {
    "country": "Mali",
    "station": "Radio Voix des Jeunes de Kita\n\n      French",
    "location": "Kita, Mali, Mali",
    "email-href": "radio@voixdesjeunes-kita.ml"
}, {
    "country": "Angola",
    "station": "RNA R Uige\n\n      Portuguese",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=251459"
}, {
    "country": "Botswana",
    "station": "R Botswana 1\n\n      Multilingual",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=218478"
}, {
    "country": "Namibia",
    "station": "NBC German\n\n      Das Deutsche...",
    "location": "Klein Windhoek, Namibia",
    "email-href": "gssecretary@nbc.na"
}, {
    "country": "Morocco",
    "station": "TV Sahara\n\n      Arabic",
    "location": "Rabat, Morocco",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=104670"
}, {
    "country": "Malawi",
    "station": "MBC Radio 2\n\n      Multilingual",
    "location": "Blantyre, Malawi",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=206844"
}, {
    "country": "Uganda",
    "station": "100.2 Galaxy FM\n\n      Real Music, Real Sound!",
    "location": "Kampala, Uganda",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=191194"
}, {
    "country": "Burkina Faso",
    "station": "Radio Omega FM Ouaga\n\n      French",
    "location": "",
    "email-href": "omegafm@omegabf.net"
}, {
    "country": "Mali",
    "station": "Radio Benkan\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=189026"
}, {
    "country": "Uganda",
    "station": "XFM\n\n      English",
    "location": "Kampala, Uganda",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=204236"
}, {
    "country": "Tunisia",
    "station": "Radio IFM\n\n      Le Meilleur De La Musique Sur La Plus Belle Radio",
    "location": "",
    "email-href": "contact@ifm.tn"
}, {
    "country": "Comoros",
    "station": "Radio Ocean Indien\n\n      LA RADIO DE LA NOUVELLE GENERATION",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=115234"
}, {
    "country": "Cameroon",
    "station": "Radio Balafon\n\n      La radio Qui Vous Ecoute !",
    "location": "Douala, Cameroon",
    "email-href": "contact@radiobalafon.com"
}, {
    "country": "Egypt",
    "station": "Radio Medan El-Tahrir\n\n      Arabic",
    "location": "Cairo, Egypt",
    "email-href": "info@radioeltahrir.com"
}, {
    "country": "Burundi",
    "station": "BBC World Service Bujumbura\n\n      BBC World Service is the...",
    "location": "",
    "email-href": "bbcwsafrica@bbc.co.uk"
}, {
    "country": "Rwanda",
    "station": "Radio Maria (Rwanda)\n\n      English",
    "location": "Kigali, Rwanda",
    "email-href": "radiomariarwanda@gmail.com"
}, {
    "country": "Rwanda",
    "station": "Magic FM\n\n      French",
    "location": "",
    "email-href": "skarere@rba.co.rw"
}, {
    "country": "Madagascar",
    "station": "Radio Madagasikara hoan'i Kristy\n\n      French",
    "location": "Antananarivo, Madagascar",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=200286"
}, {
    "country": "Gambia",
    "station": "West Coast Radio\n\n      West Coast Radio",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16134"
}, {
    "country": "Rwanda",
    "station": "Magic FM\n\n      French",
    "location": "Kigali, Kigali, Rwanda",
    "email-href": "skarere@rba.co.rw"
}, {
    "country": "Botswana",
    "station": "RB2-Radio Botswana 2\n\n      The Department Of Information And Broadcasting",
    "location": "Gaborone, Botswana",
    "email-href": "asesinyi@gov.bw"
}, {
    "country": "Tunisia",
    "station": "Mines FM\n\n      La radio qui vous écoute",
    "location": "",
    "email-href": "info@minesfm.com"
}, {
    "country": "Ghana",
    "station": "ASHH\n\n      English",
    "location": "Kumasi, Ghana",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=120874"
}, {
    "country": "Togo",
    "station": "Nana FM\n\n      French",
    "location": "Lomé, Togo",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=86844"
}, {
    "country": "Sudan",
    "station": "Mango 96 FM\n\n      Arabic",
    "location": "Omdurman, Sudan",
    "email-href": "Contact@mango96.com"
}, {
    "country": "Libya",
    "station": "LJB Benghazi Radio\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16145"
}, {
    "country": "South Africa",
    "station": "5FM SABC\n\n      The Power of 5FM",
    "location": "Bloemfontein, South Africa",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6362"
}, {
    "country": "Gambia",
    "station": "Gambia Radio GRTS\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16133"
}, {
    "country": "Nigeria",
    "station": "SplashFM\n\n      English",
    "location": "",
    "email-href": "info@splashfm1055.com"
}, {
    "country": "Namibia",
    "station": "NBC Tirelo ya Setswana\n\n      Multilingual",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=228897"
}, {
    "country": "Angola",
    "station": "Radio 5\n\n      A Victória do Desporto",
    "location": "Luanda, Angola",
    "email-href": "rna@rna.ao"
}, {
    "country": "Sierra Leone",
    "station": "Believers Broadcasting Network SL\n\n      We Are Committed In Changing Lives",
    "location": "Freetown, Sierra Leone",
    "email-href": "admin@bbn-sl.org"
}, {
    "country": "Tanzania",
    "station": "Radio Maria (Tanzania)\n\n      A Christian Voice In Your Home",
    "location": "",
    "email-href": "info.tan@radiomaria.org"
}, {
    "country": "Egypt",
    "station": "Nile FM\n\n      Cairo’s Number 1 Hit Music Station",
    "location": "",
    "email-href": "contactnrp@nileradioproductions.net"
}, {
    "country": "DR Congo",
    "station": "Kin Web TV\n\n      100% congolese music videos 24/7",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=104690"
}, {
    "country": "DR Congo",
    "station": "Radio Ngoma\n\n      French",
    "location": "",
    "email-href": "admin@rnafizi.net"
}, {
    "country": "Angola",
    "station": "RNA R Lobito\n\n      Portuguese",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=251464"
}, {
    "country": "Botswana",
    "station": "Yarona FM\n\n      Live The Music",
    "location": "Gaborone, Botswana",
    "email-href": "info@yaronafm.co.bw"
}, {
    "country": "Comoros",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6242"
}, {
    "country": "Tanzania",
    "station": "Magic FM 92.9\n\n      believe in the power of magic",
    "location": "Dar es Salaam, Tanzania",
    "email-href": "elkindy24@hotmail.com"
}, {
    "country": "Reunion",
    "station": "Radio Arc-en-Ciel\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6348"
}, {
    "country": "Western Sahara",
    "station": "Radio Nacional de la RASD\n\n      Western Sahara",
    "location": "El Aaiún, Western Sahara",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16105"
}, {
    "country": "Nigeria",
    "station": "The Beat 97.9 fm\n\n      The Heart Beat of Ibadan",
    "location": "",
    "email-href": "info@thebeat97.com"
}, {
    "country": "Malawi",
    "station": "Radio Islam Malawi\n\n      Education For Tha Nation",
    "location": "",
    "email-href": "info@radioislam.org.mw"
}, {
    "country": "Reunion",
    "station": "Radio Arc-en-Ciel\n\n      Radio Arc-en-ciel, radio...",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6356"
}, {
    "country": "Zambia",
    "station": "Yar FM\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=110045"
}, {
    "country": "Namibia",
    "station": "Energy 100 FM\n\n      The Power Station",
    "location": "Klein Windhoek, Namibia",
    "email-href": "studio@energy100fm.com"
}, {
    "country": "Algeria",
    "station": "Radio Jijel\n\n      Jijel Fm, La radio que j'aime",
    "location": "Jijel, Algeria",
    "email-href": "info@radio-jijel.dz"
}, {
    "country": "Kenya",
    "station": "Kiss 100\n\n      Kenya's Number 1 Hit Music Station",
    "location": "",
    "email-href": "info@kissfm.co.ke"
}, {
    "country": "Rwanda",
    "station": "Contact FM\n\n      Are You In Touch",
    "location": "",
    "email-href": "info@contactfm.co.rw"
}, {
    "country": "Madagascar",
    "station": "RFI 1 Afrique\n\n      Actualité Afrique, Monde En Français Et En 19 Langues",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6264"
}, {
    "country": "Chad",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16090"
}, {
    "country": "Kenya",
    "station": "Jesus is Lord Radio\n\n      The one and only endtime Radio preparing the way for the Messiah",
    "location": "",
    "email-href": "jesusislord.fmradio@gmail.com"
}, {
    "country": "Madagascar",
    "station": "Radio Fahazavana\n\n      Ho Fampandrosoana ny olona rehatra sy ny olona manontolo",
    "location": "",
    "email-href": "fahazavana@dts.mg"
}, {
    "country": "Angola",
    "station": "RNA R Bie\n\n      Portuguese",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=251461"
}, {
    "country": "Cameroon",
    "station": "Femmes FM\n\n      French",
    "location": "Mbalmayo, Cameroon",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=7504"
}, {
    "country": "Madagascar",
    "station": "Radio Don Bosco\n\n      Plus Je l'écoute et Plus Je l'aime",
    "location": "",
    "email-href": "rdb@radiodonbosco.org"
}, {
    "country": "Ghana",
    "station": "Hitz FM\n\n      Means Entertainment",
    "location": "",
    "email-href": "info@myjoyonline.com"
}, {
    "country": "Cameroon",
    "station": "Sky One Radio\n\n      French",
    "location": "",
    "email-href": "contact@skyonecameroun.com"
}, {
    "country": "Ghana",
    "station": "Luv FM\n\n      Experience The Luv",
    "location": "Kumasi, Ghana",
    "email-href": "franklinbrobby@yahoo.co.uk"
}, {
    "country": "Lesotho",
    "station": "Maseru 100\n\n      English",
    "location": "Maseru, Lesotho",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=142264"
}, {
    "country": "Kenya",
    "station": "Salaam FM\n\n      Radio Salaam ilianza...",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=143030"
}, {
    "country": "Kenya",
    "station": "Radio Jambo\n\n      Ongea Usikike",
    "location": "",
    "email-href": "info@radiojambo.co.ke"
}, {
    "country": "Congo",
    "station": "BRN TV\n\n      La television planetaire panafricaine de liberte d experssion et",
    "location": "Kinshassa, Congo",
    "email-href": "pub@bigroberto.com"
}, {
    "country": "Togo",
    "station": "Radio Maria (Togo)\n\n      Une Voix Chrétienne Qui T'accompagne",
    "location": "",
    "email-href": "director.tog@radiomaria.org"
}, {
    "country": "Egypt",
    "station": "Radio Hits\n\n      راديو هيتس اذاعة شبابية...",
    "location": "",
    "email-href": "contact@radiohits.co"
}, {
    "country": "South Africa",
    "station": "Lotus FM\n\n      Share the Experience",
    "location": "Johannesburg, South Africa",
    "email-href": "info@lotusfm.co.za"
}, {
    "country": "Reunion",
    "station": "HITFM Reunion\n\n      New Generation !",
    "location": "",
    "email-href": "hitfm@live.fr"
}, {
    "country": "Ethiopia",
    "station": "Radio Ethiopia - National Service\n\n      External Service And Internal Service",
    "location": "Metu, Ethiopia",
    "email-href": "radioethiopia@usa.net"
}, {
    "country": "Tanzania",
    "station": "TBC FM\n\n      Swahili",
    "location": "Dar es Salaam, Tanzania",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6420"
}, {
    "country": "Egypt",
    "station": "Radio Vision Egypt\n\n      The First Egyptian Live Audio Blog!",
    "location": "Cairo, Egypt",
    "email-href": "radiovisioneg@hotmail.com"
}, {
    "country": "Kenya",
    "station": "East FM\n\n      Kenya's Premier Asian Mix",
    "location": "Nairobi, Nairobi, Kenya",
    "email-href": "info@eastfm.com"
}, {
    "country": "Rwanda",
    "station": "Radio Maria\n\n      English",
    "location": "",
    "email-href": "radiomariarwanda@gmail.com"
}, {
    "country": "Cote D'ivoire",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16128"
}, {
    "country": "Morocco",
    "station": "Hit Radio\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=110256"
}, {
    "country": "Kenya",
    "station": "Radio Waumini\n\n      Your Online Catholic Station",
    "location": "",
    "email-href": "it@radiowaumini.org"
}, {
    "country": "Nigeria",
    "station": "102.7 NAIJA FM\n\n      Naija Fm102.7 na the...",
    "location": "Lagos, Nigeria",
    "email-href": "info@naija102.com"
}, {
    "country": "Namibia",
    "station": "Base FM\n\n      Your Home Station",
    "location": "Windhoek, Namibia",
    "email-href": "manager@basefm.com.na"
}, {
    "country": "Sierra Leone",
    "station": "RADIOKRIO\n\n      English",
    "location": "Waterloo, Sierra Leone",
    "email-href": "MAFERECAMARA@YAHOO.COM"
}, {
    "country": "Egypt",
    "station": "FM نغم\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=212844"
}, {
    "country": "South Africa",
    "station": "Lesedi FM\n\n      Multilingual",
    "location": "",
    "email-href": "mothibipm@sabc.co.za"
}, {
    "country": "Cote D'ivoire",
    "station": "Radio Al Bayane\n\n      La voix de l'Islam éternel pour l'éternité",
    "location": "",
    "email-href": "contact@radio-albayane.info"
}, {
    "country": "DR Congo",
    "station": "Congo Planete TV 2\n\n      French",
    "location": "",
    "email-href": "info@congoplanet.com"
}, {
    "country": "Sudan",
    "station": "Radio Megamind\n\n      listen to last news and...",
    "location": "",
    "email-href": "info@fm12.net"
}, {
    "country": "Sudan",
    "station": "Capital Radio\n\n      The Best Radio Station in Sudan and Africa.",
    "location": "",
    "email-href": "info@capitalradiosudan.com"
}, {
    "country": "Mozambique",
    "station": "Radio Mocambique\n\n      Hoje e Sempre",
    "location": "",
    "email-href": "webmaster@rm.co.mz"
}, {
    "country": "Algeria",
    "station": "Radio Tlemcen\n\n      Radio locale de la ville...",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16039"
}, {
    "country": "Lesotho",
    "station": "MoAfrika FM\n\n      English",
    "location": "Maseru, Lesotho",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=142265"
}, {
    "country": "Morocco",
    "station": "Al Watania\n\n      Arabic",
    "location": "Rabat, Morocco",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=129393"
}, {
    "country": "Mauritius",
    "station": "MBC Music FM\n\n      English",
    "location": "",
    "email-href": "customercare@mbc.intnet.mu"
}, {
    "country": "Nigeria",
    "station": "Royal FM 95.1 Ilorin\n\n      we set the pace...",
    "location": "Ilorin, Nigeria",
    "email-href": "radio951@royalfm.net"
}, {
    "country": "Ethiopia",
    "station": "Sheger 102.1 FM\n\n      It's about you!",
    "location": "",
    "email-href": "info@shegerfm.com"
}, {
    "country": "Kenya",
    "station": "Biblia Husema Broadcasting\n\n      Faith Comes By Hearing, And Hearing By The Word of God. Romans 1",
    "location": "Nairobi, Kenya",
    "email-href": "http://bibliahusema.org/team/"
}, {
    "country": "Cote D'ivoire",
    "station": "RFI 1 Afrique\n\n      Radio France Internationale, actualite Afrique et Monde en frran",
    "location": "Abidjan, Abidjan, Côte d'Ivoire",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16125"
}, {
    "country": "Senegal",
    "station": "Rail Bi FM 101.3\n\n      La radio qui controle la banlieue dakaroise",
    "location": "Dakar, Senegal",
    "email-href": "railbifm@gmail.com"
}, {
    "country": "Senegal",
    "station": "RTS Kolda FM\n\n      Multilingual",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=238792"
}, {
    "country": "Cameroon",
    "station": "Nostalgie Cameroun\n\n      ça surprend au début...et après aussi !",
    "location": "Douala, Cameroon",
    "email-href": "info@nostalgie.cm"
}, {
    "country": "Gambia",
    "station": "Paradise FM\n\n      Absolutely # 1",
    "location": "",
    "email-href": "psdrammtg.edu.gmeh@u"
}, {
    "country": "Gabon",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "Franceville, Gabon",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16130"
}, {
    "country": "Algeria",
    "station": "Radio Oran\n\n      Pour que vous ne soyez plus seuls",
    "location": "Oran, Regionale de l'Ouest, Algeria",
    "email-href": "info@radio-oran.com"
}, {
    "country": "Mali",
    "station": "Radio Guintan\n\n      La Voix des Femmes",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=45240"
}, {
    "country": "Libya",
    "station": "LJB Holy Koran\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16151"
}, {
    "country": "Lesotho",
    "station": "Joy Radio\n\n      English",
    "location": "Maseru, Lesotho",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=142261"
}, {
    "country": "Somalia",
    "station": "Horn Afrik FM\n\n      Warbaahinta Qarniga Cusub",
    "location": "Mogadishu, Somalia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=47629"
}, {
    "country": "Ethiopia",
    "station": "ETV\n\n      Multilingual",
    "location": "",
    "email-href": "gd@erta.gov.et"
}, {
    "country": "Tanzania",
    "station": "TBC Taifa\n\n      Swahili",
    "location": "Dar es Salaam, Tanzania",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=201112"
}, {
    "country": "Rwanda",
    "station": "ISANGO STAR\n\n      English",
    "location": "Kigali, Rwanda",
    "email-href": "info@isangostar.rw"
}, {
    "country": "Mali",
    "station": "Radio DOUNIA\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=189023"
}, {
    "country": "Zimbabwe",
    "station": "Star Fm\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=182260"
}, {
    "country": "Senegal",
    "station": "Radio Futurs Medias\n\n      Actualités au Sénégal et dans le monde",
    "location": "",
    "email-href": "info@futursmedias.net"
}, {
    "country": "Algeria",
    "station": "Alger Ch 3\n\n      La Radio Algérienne",
    "location": "Tipaza, Algeria",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=25411"
}, {
    "country": "Mali",
    "station": "Radio Bamakan\n\n      Radio Bamakan FM 100.3",
    "location": "Bamako, Bamako, Mali",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16076"
}, {
    "country": "Mozambique",
    "station": "SFM - SOICO FM\n\n      O som que te toca",
    "location": "",
    "email-href": "sfm@soico.co.mz"
}, {
    "country": "Sudan",
    "station": "BBC World Service Khartoum\n\n      BBC World Service is the...",
    "location": "Khartoum, Sudan",
    "email-href": "worldservice@bbc.co.uk"
}, {
    "country": "Nigeria",
    "station": "The Beat\n\n      The Heart Beat of Lagos",
    "location": "Lagos, Nigeria",
    "email-href": "enquiries@thebeat99.com"
}, {
    "country": "Kenya",
    "station": "Kass FM\n\n      English",
    "location": "",
    "email-href": "info@kassfm.co.ke"
}, {
    "country": "Ghana",
    "station": "GHRadio1\n\n      real music power",
    "location": "Kumasi, Ghana",
    "email-href": "contact@ghradio1.com"
}, {
    "country": "Morocco",
    "station": "Luxe Radio\n\n      Accédez à l'état d'esprit du luxe",
    "location": "",
    "email-href": "info@luxeradio.ma"
}, {
    "country": "Senegal",
    "station": "Bambilorfm\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=140804"
}, {
    "country": "Namibia",
    "station": "NBC National Radio\n\n      Multilingual",
    "location": "Klein Windhoek, Namibia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=119463"
}, {
    "country": "South Africa",
    "station": "CliffCentral\n\n      uncensored unscripted...",
    "location": "Johannesburg, South Africa",
    "email-href": "contact@cliffcentral.com"
}, {
    "country": "Libya",
    "station": "Shabab Libya FM\n\n      English",
    "location": "",
    "email-href": "info@101LY.com"
}, {
    "country": "Namibia",
    "station": "Radio 99\n\n      Urban Sounds, Global Minds",
    "location": "",
    "email-href": "99fm@99fm.com.na"
}, {
    "country": "Burkina Faso",
    "station": "Radio Vive Le Paysan\n\n      Multilingual",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16119"
}, {
    "country": "DR Congo",
    "station": "Réveil FM\n\n      La radio qui vous écoute",
    "location": "Kinshasa, DR Congo",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=8385"
}, {
    "country": "Cape Verde",
    "station": "RFI 1 Afrique / RFI 2\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16085"
}, {
    "country": "Ethiopia",
    "station": "ETV\n\n      Multilingual",
    "location": "Addis Abeba, Ethiopia",
    "email-href": "gd@erta.gov.et"
}, {
    "country": "Zimbabwe",
    "station": "ZiFM Stereo\n\n      My Station Your Station",
    "location": "",
    "email-href": "info@zifmstereo.co.zw"
}, {
    "country": "Comoros",
    "station": "Radio Dziyalandze\n\n      Multilingual",
    "location": "Ndzouani, Comoros",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=65690"
}, {
    "country": "Algeria",
    "station": "Radio Tlemcen\n\n      Radio locale de la ville...",
    "location": "Tlemcen, Algeria",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16039"
}, {
    "country": "Ethiopia",
    "station": "Radio Ethiopia - External Service\n\n      Multilingual",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16100"
}, {
    "country": "Togo",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "Lomé, Lome, Togo",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6223"
}, {
    "country": "Tunisia",
    "station": "OXYGENE FM\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=154568"
}, {
    "country": "Ethiopia",
    "station": "Afro FM\n\n      Your Infotainment Station",
    "location": "",
    "email-href": "info@afro105fm.com"
}, {
    "country": "Zimbabwe",
    "station": "Spot FM ZBC\n\n      Shona",
    "location": "Harare, Harare, Zimbabwe",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6450"
}, {
    "country": "Madagascar",
    "station": "RFI 1 Afrique\n\n      Actualité Afrique, Monde En Français Et En 19 Langues",
    "location": "Fianarantsoa, Madagascar",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6264"
}, {
    "country": "Burkina Faso",
    "station": "Radio Municipale de Ouagadougou\n\n      French",
    "location": "Ouagadougou, Burkina Faso",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=111826"
}, {
    "country": "Zambia",
    "station": "ZNBC Radio 4\n\n      Sound Vision For The Future",
    "location": "",
    "email-href": "hyde.haguta@znbc.co.zm"
}, {
    "country": "Tanzania",
    "station": "Clouds FM\n\n      The People's Station",
    "location": "Dar es Salaam, Tanzania",
    "email-href": "info@cloudsfm.co"
}, {
    "country": "Namibia",
    "station": "NBC Rukavango\n\n      Namibian Broadcasting...",
    "location": "Klein Windhoek, Namibia",
    "email-href": "fzinner@nbc.na"
}, {
    "country": "Zimbabwe",
    "station": "ZiFM Stereo\n\n      My Station Your Station",
    "location": "Harare, Zimbabwe",
    "email-href": "info@zifmstereo.co.zw"
}, {
    "country": "Sudan",
    "station": "Capital FM Juba\n\n      The Voice of South Sudan",
    "location": "Juba, Sudan",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=86936"
}, {
    "country": "Mali",
    "station": "Radio la Bonne Nouvelle\n\n      French",
    "location": "Bamako, Mali",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=254008"
}, {
    "country": "Mayotte",
    "station": "Mayotte Web Radio\n\n      Première radio 100% Mahoraise !",
    "location": "Mayotte, Mayotte",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=121706"
}, {
    "country": "Mauritius",
    "station": "MBC Kool FM\n\n      New Sound Radio",
    "location": "",
    "email-href": "customercare@mbc.intnet.mu"
}, {
    "country": "Togo",
    "station": "Kanal FM\n\n      La Nouvelle Generation",
    "location": "",
    "email-href": "kanalfm@cafe.tg"
}, {
    "country": "Swaziland",
    "station": "TWR Voice of the Church\n\n      English",
    "location": "Lavumisa, Swaziland",
    "email-href": "info@twrafrica.org"
}, {
    "country": "Uganda",
    "station": "Etop FM 99.4\n\n      English",
    "location": "",
    "email-href": "info@sayituganda.com"
}, {
    "country": "Senegal",
    "station": "Zik FM\n\n      Get ready for the waves",
    "location": "",
    "email-href": "info@zikfm.net"
}, {
    "country": "Reunion",
    "station": "Velly Music\n\n      # One 974 Hip-Hop Radio Scacion",
    "location": "Trois-Bassins, Les Trois Bassins, Reunion",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6330"
}, {
    "country": "Ghana",
    "station": "Fox FM\n\n      Multilingual",
    "location": "",
    "email-href": "info@foxfnonline.com"
}, {
    "country": "Comoros",
    "station": "RCM 13\n\n      French",
    "location": "Moroni, Comoros",
    "email-href": "info@rcm13.fr"
}, {
    "country": "Egypt",
    "station": "Nile FM\n\n      Cairo’s Number 1 Hit Music Station",
    "location": "Cairo, Egypt",
    "email-href": "contactnrp@nileradioproductions.net"
}, {
    "country": "Zambia",
    "station": "Flava FM\n\n      The Heart & Soul of the Copperbelt",
    "location": "Kitwe, Zambia",
    "email-href": "admin@flavafm.co.zm"
}, {
    "country": "Zambia",
    "station": "Radio Yangeni\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=110044"
}, {
    "country": "Tunisia",
    "station": "Mosaique FM\n\n      French",
    "location": "",
    "email-href": "commercial.citycenter@topnet.tn"
}, {
    "country": "Reunion",
    "station": "RSL Radio\n\n      The Sun Station!",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6360"
}, {
    "country": "Namibia",
    "station": "Radio Cosmos Namibia\n\n      English",
    "location": "Klein Windhoek, Namibia",
    "email-href": "info@kosmos.com.na"
}, {
    "country": "Eritrea",
    "station": "Eritrea FM Channel 3\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=103396"
}, {
    "country": "Burkina Faso",
    "station": "Ouaga FM\n\n      La radio de toutes les générations",
    "location": "Ouagadougou, Burkina Faso",
    "email-href": "radio.ouaga@yahoo.fr"
}, {
    "country": "Libya",
    "station": "LibyanaHITS FM\n\n      Get Heard !!!",
    "location": "",
    "email-href": "info@libyanahits.fm"
}, {
    "country": "Tanzania",
    "station": "Choice FM\n\n      The Better Music Mix",
    "location": "Dar Es Salaam, Tanzania",
    "email-href": "production@choicefm.co"
}, {
    "country": "Lesotho",
    "station": "BBC World Service Maseru\n\n      BBC World Service is the...",
    "location": "Maseru, Lesotho",
    "email-href": "bbcwsafrica@bbc.co.uk"
}, {
    "country": "Nigeria",
    "station": "Cool FM 96.9 Lagos\n\n      Your #1 Hit Music Station",
    "location": "Lagos, Nigeria",
    "email-href": "rcahilig@coollink.us"
}, {
    "country": "Reunion",
    "station": "RJL Radio\n\n      La Radio Soleil Dans Le Sud",
    "location": "Saint-Louis, Reunion",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=198382"
}, {
    "country": "Rwanda",
    "station": "Flash FM Rwanda\n\n      The Best Mix Of Music",
    "location": "Kigali, Rwanda",
    "email-href": "info@flashfm.rw"
}, {
    "country": "Ghana",
    "station": "Luv FM\n\n      Experience The Luv",
    "location": "",
    "email-href": "franklinbrobby@yahoo.co.uk"
}, {
    "country": "Uganda",
    "station": "104.9 Ssuubi FM Kampala\n\n      Less Talk More Music",
    "location": "",
    "email-href": "abmasembe.md@ssuubifmradio.com"
}, {
    "country": "DR Congo",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6244"
}, {
    "country": "Morocco",
    "station": "Aswat\n\n      le plaisir de vivre ensemble",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=105660"
}, {
    "country": "Zimbabwe",
    "station": "Spot FM ZBC\n\n      Shona",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6450"
}, {
    "country": "St. Helena",
    "station": "SAMS R1\n\n      English",
    "location": "Jamestown, St. Helena",
    "email-href": "news@shbc.sh"
}, {
    "country": "Libya",
    "station": "LJB Jamahiriya Radio\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16146"
}, {
    "country": "Uganda",
    "station": "Capital FM\n\n      English",
    "location": "Kampala, Uganda",
    "email-href": "technical@capitalfm-ug.com"
}, {
    "country": "Seychelles",
    "station": "Seychelles Lounge Radio\n\n      Your Daily Ticket to Paradise",
    "location": "Victoria, Seychelles",
    "email-href": "contact@fmseychelles.com"
}, {
    "country": "Gabon",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "Port-Gentil, Gabon",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16132"
}, {
    "country": "Nigeria",
    "station": "Liberty Radio Hausa\n\n      Tashar 'Yanci",
    "location": "Kaduna, Nigeria",
    "email-href": "libertyradiong@gmail.com"
}, {
    "country": "Mozambique",
    "station": "BBC World Service Maputo\n\n      BBC World Service is the...",
    "location": "Maputo, Mozambique",
    "email-href": "bbcwsafrica@bbc.co.uk"
}, {
    "country": "Egypt",
    "station": "Al-Aghani\n\n      Arabic",
    "location": "Cairo, Egypt",
    "email-href": "ads@elaghany.com"
}, {
    "country": "Reunion",
    "station": "Radio Arc-en-Ciel\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6358"
}, {
    "country": "South Africa",
    "station": "SAFM\n\n      South Africa's News and Information Leader",
    "location": "",
    "email-href": "tshiradost@safm.co.za"
}, {
    "country": "Seychelles",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "Victoria, Seychelles",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=14399"
}, {
    "country": "Tanzania",
    "station": "Choice FM\n\n      The Better Music Mix",
    "location": "",
    "email-href": "production@choicefm.co"
}, {
    "country": "Mali",
    "station": "Rabwah FM\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=203424"
}, {
    "country": "Somalia",
    "station": "Horn Afrik FM\n\n      Warbaahinta Qarniga Cusub",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=47629"
}, {
    "country": "Togo",
    "station": "Kanal FM\n\n      La Nouvelle Generation",
    "location": "Lomé, Togo",
    "email-href": "kanalfm@cafe.tg"
}, {
    "country": "Reunion",
    "station": "Radio Pikan\n\n      French",
    "location": "Le Port, Reunion",
    "email-href": "secretariat@kanal-renionite.org"
}, {
    "country": "Reunion",
    "station": "Radio Arc-en-Ciel\n\n      English",
    "location": "Saint-Leu, Saint-Leu, Reunion",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6358"
}, {
    "country": "Angola",
    "station": "RNA R Lunda Norte\n\n      Portuguese",
    "location": "Dundo, Angola",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=251456"
}, {
    "country": "Mali",
    "station": "Radio DOUNIA\n\n      French",
    "location": "Sikasso, Mali",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=189023"
}, {
    "country": "Madagascar",
    "station": "RFI 1 Afrique / local 2h\n\n      French",
    "location": "Toamasina, Madagascar",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6268"
}, {
    "country": "Mozambique",
    "station": "BBC World Service Maputo\n\n      BBC World Service is the...",
    "location": "",
    "email-href": "bbcwsafrica@bbc.co.uk"
}, {
    "country": "Ghana",
    "station": "Adom FM\n\n      The Best Radio Station In Ghana",
    "location": "",
    "email-href": "teamwork@myjoyonline.com"
}, {
    "country": "Reunion",
    "station": "Radio Vie Reunion\n\n      La Radio qui respire",
    "location": "Saint-Denis, Reunion",
    "email-href": "radiovie@orange.fr"
}, {
    "country": "Algeria",
    "station": "Radio Adrar\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16044"
}, {
    "country": "Mali",
    "station": "Radio Canal 2000\n\n      French",
    "location": "",
    "email-href": "canal2000@spider.toolnet.org"
}, {
    "country": "Zambia",
    "station": "Radio Phoenix\n\n      English",
    "location": "",
    "email-href": "rphoenix@zamnet.zm"
}, {
    "country": "Tanzania",
    "station": "Pride FM\n\n      Inapasua mawimbi",
    "location": "Mtwara, Tanzania",
    "email-href": "info@878pridefm.com"
}, {
    "country": "Angola",
    "station": "RNA R Esterio\n\n      Portuguese",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=1696"
}, {
    "country": "Senegal",
    "station": "Radio Alfayda\n\n      French",
    "location": "",
    "email-href": "info@radioalfayda.net"
}, {
    "country": "Tunisia",
    "station": "Radio Monastir\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=129106"
}, {
    "country": "Tunisia",
    "station": "MFM Tunisie\n\n      Arabic",
    "location": "",
    "email-href": "contact@radiomfm.tn"
}, {
    "country": "Nigeria",
    "station": "Brila FM\n\n      Africa's Premier Sports Station....with us you score!!!",
    "location": "Lagos, Nigeria",
    "email-href": "info@brila.net"
}, {
    "country": "Zambia",
    "station": "Hot FM\n\n      THE HEAT IS ON !!",
    "location": "",
    "email-href": "info@hot877.com"
}, {
    "country": "Mauritius",
    "station": "Radio Plus FM\n\n      Ecoute ou pou tende",
    "location": "",
    "email-href": "venen@radioplus.mu"
}, {
    "country": "Kenya",
    "station": "Homeboyz Radio\n\n      Tomorrows Hits...Today!",
    "location": "Nairobi, Kenya",
    "email-href": "info@homeboyzradio.co.ke"
}, {
    "country": "DR Congo",
    "station": "Radio Ngoma\n\n      French",
    "location": "Fizi, DR Congo",
    "email-href": "admin@rnafizi.net"
}, {
    "country": "Egypt",
    "station": "Alrahma TV\n\n      Arabic",
    "location": "Cairo, Egypt",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=125432"
}, {
    "country": "Senegal",
    "station": "RTS 4 Casamance\n\n      Multilingual",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=238789"
}, {
    "country": "Sierra Leone",
    "station": "BBC World Service Freetown\n\n      BBC World Service is the...",
    "location": "",
    "email-href": "bbcwsafrica@bbc.co.uk"
}, {
    "country": "Rwanda",
    "station": "BBC World Service Kigali\n\n      BBC World Service is the...",
    "location": "Kigali, Rwanda",
    "email-href": "bbcwsafrica@bbc.co.uk"
}, {
    "country": "Cameroon",
    "station": "TBC Radio\n\n      French",
    "location": "Yaoundé, Cameroon",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=105833"
}, {
    "country": "Reunion",
    "station": "NRJ Réunion\n\n      Hit Music Only",
    "location": "Saint-Denis, Reunion",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6355"
}, {
    "country": "Angola",
    "station": "Radio N'Gola Yetu RNA\n\n      Multilingual",
    "location": "Luanda, Angola",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6231"
}, {
    "country": "Djibouti",
    "station": "BBC World Service Djibouti\n\n      BBC World Service is the...",
    "location": "Djibouti, Djibouti",
    "email-href": "worldservice@bbc.co.uk"
}, {
    "country": "South Africa",
    "station": "Bok Radio\n\n      Die Beter Alternatief",
    "location": "",
    "email-href": "info@bokradio.co.za"
}, {
    "country": "Malawi",
    "station": "Radio Christian Voice Zambia\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=151568"
}, {
    "country": "Reunion",
    "station": "Reunion 1ere\n\n      Réseau Outre-Mer 1ère",
    "location": "Saint-Denis, Saint-Denis, Reunion",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6346"
}, {
    "country": "Sierra Leone",
    "station": "Radio Democracy\n\n      The True Voice Of The People",
    "location": "",
    "email-href": " info@radiodemocracy.sl"
}, {
    "country": "Namibia",
    "station": "Radio Ecclesia\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=119494"
}, {
    "country": "Uganda",
    "station": "Arua One FM\n\n      Sema Yota",
    "location": "Arua, Uganda",
    "email-href": "tam978@gmail.com"
}, {
    "country": "Mauritania",
    "station": "SaharaMedia FM\n\n      Arabic",
    "location": "",
    "email-href": "saharamedias@gmail.com"
}, {
    "country": "Ghana",
    "station": "Hot FM\n\n      English",
    "location": "Accra, Ghana",
    "email-href": "pagegroupmedia@gmail.com"
}, {
    "country": "Lesotho",
    "station": "Khotso FM\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=142262"
}, {
    "country": "Algeria",
    "station": "Radio Saoura Bechar\n\n      Arabic",
    "location": "Bechar, Regionale du Sud-Ouest, Algeria",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16046"
}, {
    "country": "Rwanda",
    "station": "102.3 KISS FM\n\n      Kigali's Number 1 Hit Music Station!",
    "location": "Kigali, Rwanda",
    "email-href": "info@kissfm.rw"
}, {
    "country": "Sudan",
    "station": "Khartoum FM\n\n      The First Sudanese Economic Radio",
    "location": "Khartoum, Sudan",
    "email-href": "admin@kfm89.net"
}, {
    "country": "Mauritius",
    "station": "Rock Mauritius Radio\n\n      Rock Mauritius Radio is...",
    "location": "Bel Ombre, Mauritius",
    "email-href": "contact@rockmauritius.tk"
}, {
    "country": "Kenya",
    "station": "1 fm\n\n      Local and Urban Hits",
    "location": "",
    "email-href": "ericit@1fm.co.ke"
}, {
    "country": "South Africa",
    "station": "Metro FM\n\n      Since 1986, METRO FM has...",
    "location": "Bloemfontein, South Africa",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6363"
}, {
    "country": "Ghana",
    "station": "Asempa 94.7FM\n\n      All Talk All Day!",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=89189"
}, {
    "country": "Sudan",
    "station": "Miraya FM\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=66885"
}, {
    "country": "Namibia",
    "station": "NBC Oshiwambo\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=119491"
}, {
    "country": "Central African Republic",
    "station": "BBC World Service Bangui\n\n      BBC World Service is the...",
    "location": "",
    "email-href": "bbcwsafrica@bbc.co.uk"
}, {
    "country": "Uganda",
    "station": "Arua One FM\n\n      Sema Yota",
    "location": "",
    "email-href": "tam978@gmail.com"
}, {
    "country": "Tanzania",
    "station": "Qiblaten FM\n\n      Sauti ya Hekima",
    "location": "",
    "email-href": "info@dhinureyn.com"
}, {
    "country": "Togo",
    "station": "Radio JVA\n\n      Jésus vous aime",
    "location": "",
    "email-href": "radiojva@yahoo.fr"
}, {
    "country": "Botswana",
    "station": "Gabz FM\n\n      Today's Hits Yesterday's Classics",
    "location": "",
    "email-href": "mail@gabzfm.com"
}, {
    "country": "Sudan",
    "station": "BBC World Service Wad Madani\n\n      BBC World Service is the...",
    "location": "Wad Madani, Sudan",
    "email-href": "worldservice@bbc.co.uk"
}, {
    "country": "Kenya",
    "station": "Jesus is Lord Radio\n\n      The one and only endtime Radio preparing the way for the Messiah",
    "location": "Nakuru, Kenya",
    "email-href": "jesusislord.fmradio@gmail.com"
}, {
    "country": "Senegal",
    "station": "Sama Radio Senegal\n\n      La radio Senegalaise",
    "location": "Dakar, Senegal",
    "email-href": "bestmoha1@gmail.com"
}, {
    "country": "Reunion",
    "station": "Radio 102 FM\n\n      cocadillaz.com - house music prod.",
    "location": "Saint-Pierre, Reunion",
    "email-href": "info@cocadillaz.com"
}, {
    "country": "Burkina Faso",
    "station": "BBC World Service Ouagadougou\n\n      BBC World Service is the...",
    "location": "Ouagadougou, Ouagadougou, Burkina Faso",
    "email-href": "worldservice@bbc.co.uk"
}, {
    "country": "Mali",
    "station": "Radio Voix des Jeunes\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=202442"
}, {
    "country": "Burkina Faso",
    "station": "BBC World Service Ouagadougou\n\n      BBC World Service is the...",
    "location": "",
    "email-href": "worldservice@bbc.co.uk"
}, {
    "country": "Libya",
    "station": "Al Madina TV\n\n      Arabic",
    "location": "Tripolis, Libyan Arab Jamahiriya",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=111214"
}, {
    "country": "Malawi",
    "station": "YONECO FM\n\n      Real Voice for the youth,Women and Children",
    "location": "",
    "email-href": "panjiharawa@yoneco.org.mw"
}, {
    "country": "Morocco",
    "station": "Chada FM\n\n      Multilingual",
    "location": "",
    "email-href": "contact@chadafm.net"
}, {
    "country": "Uganda",
    "station": "Radio Simba\n\n      The Best Luganda Station in the World!",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=18569"
}, {
    "country": "Egypt",
    "station": "إذاعة القرآن الكريم\n\n      تعتبر إذاعة القرآن الكريم...",
    "location": "Cairo, Egypt",
    "email-href": "qurannet@ertu.org"
}, {
    "country": "Morocco",
    "station": "Medi 1\n\n      Ia Radio Du Grand Maghreb Au Maroc",
    "location": "",
    "email-href": "medi1@medi1.com"
}, {
    "country": "Reunion",
    "station": "RFM Réunion\n\n      Le meilleur de la musique",
    "location": "Saint-Denis, Reunion",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=191176"
}, {
    "country": "Zambia",
    "station": "Zambezi FM Radio\n\n      Let The Waves Flow...",
    "location": "",
    "email-href": "swithinhaangala@yahoo.com"
}, {
    "country": "Benin",
    "station": "La Voix de la Lama\n\n      English",
    "location": "Allada, Benin",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=150109"
}, {
    "country": "Tanzania",
    "station": "WAPO RADIO FM 98.1\n\n      English",
    "location": "Dar es Salaam, Tanzania",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=151786"
}, {
    "country": "Mauritania",
    "station": "SaharaMedia FM\n\n      Arabic",
    "location": "Nouakchott, Mauritania",
    "email-href": "saharamedias@gmail.com"
}, {
    "country": "Lesotho",
    "station": "PC FM\n\n      Ha Ntatae!!",
    "location": "Maseru, Lesotho",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=47696"
}, {
    "country": "Ethiopia",
    "station": "EBC Addis 97.1\n\n      Multilingual",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=138734"
}, {
    "country": "Nigeria",
    "station": "Nigeriainfo FM 95.1 Abuja\n\n      Your #1 Talk, News & Sport Station",
    "location": "",
    "email-href": "rcahilig@coollink.us"
}, {
    "country": "Morocco",
    "station": "Aswat\n\n      le plaisir de vivre ensemble",
    "location": "Casablanca, Morocco",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=105660"
}, {
    "country": "Seychelles",
    "station": "Seychelles Lounge Radio\n\n      Your Daily Ticket to Paradise",
    "location": "",
    "email-href": "contact@fmseychelles.com"
}, {
    "country": "Cape Verde",
    "station": "Praia FM\n\n      Portuguese",
    "location": "Achada Baleia, Cape Verde",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=47673"
}, {
    "country": "Tunisia",
    "station": "Radio IFM\n\n      Le Meilleur De La Musique Sur La Plus Belle Radio",
    "location": "Tunis, Tunisia",
    "email-href": "contact@ifm.tn"
}, {
    "country": "Algeria",
    "station": "Radio Adrar\n\n      Arabic",
    "location": "Adrar, Regionale du Sud- Est, Algeria",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16044"
}, {
    "country": "Gambia",
    "station": "Unique FM\n\n      ...Renewed Sound in You",
    "location": "Banjul, Gambia",
    "email-href": "info@uniquefm.gm"
}, {
    "country": "Reunion",
    "station": "Radio Plus FM\n\n      Elle est bonne cette radio!",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=47600"
}, {
    "country": "Gambia",
    "station": "Paradise FM\n\n      Absolutely # 1",
    "location": "Farafenni, Gambia",
    "email-href": "psdrammtg.edu.gmeh@u"
}, {
    "country": "Burkina Faso",
    "station": "Radio Salankoloto\n\n      Radio Salankoloto is a...",
    "location": "Ouagadougou, Burkina Faso",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=150117"
}, {
    "country": "South Africa",
    "station": "Lotus FM\n\n      Share the Experience",
    "location": "",
    "email-href": "info@lotusfm.co.za"
}, {
    "country": "South Africa",
    "station": "Jacaranda FM\n\n      SA's Best Mix of the 80s, 90s and Now",
    "location": "",
    "email-href": "enquiries@jacarandafm.com"
}, {
    "country": "Angola",
    "station": "L.A.C FM\n\n      Luanda Antena Comercial",
    "location": "Luanda, Luanda, Angola",
    "email-href": "lac@lacluanda.com"
}, {
    "country": "Senegal",
    "station": "Dakar FM RTS\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16165"
}, {
    "country": "Cape Verde",
    "station": "RFI 1 Afrique / RFI 2\n\n      Actualité Afrique, Monde En Français Et En 19 Langues",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16074"
}, {
    "country": "Senegal",
    "station": "RTS Ziguinshor FM\n\n      Multilingual",
    "location": "Ziguinchor, Senegal",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=238791"
}, {
    "country": "Cote D'ivoire",
    "station": "Fréquence 2\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16122"
}, {
    "country": "Rwanda",
    "station": "Radio10\n\n      Simply Rwandaful!",
    "location": "Kigali, Rwanda",
    "email-href": "contact@radio10.rw"
}, {
    "country": "Uganda",
    "station": "Radio Pacis\n\n      Peace of Christ For All",
    "location": "",
    "email-href": "tonino.p.arua@radiopacis.org"
}, {
    "country": "South Africa",
    "station": "Radio Islam\n\n      The World is our Community",
    "location": "Johannesburg, South Africa",
    "email-href": "support@radioislam.org.za"
}, {
    "country": "Tunisia",
    "station": "Zitouna FM\n\n      La Radio Du Coran En Tunisie",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=86784"
}, {
    "country": "Namibia",
    "station": "Omulunga Radio\n\n      English",
    "location": "",
    "email-href": "omulunga @ omulunga.com.na"
}, {
    "country": "Namibia",
    "station": "Radio Cosmos Namibia\n\n      English",
    "location": "",
    "email-href": "info@kosmos.com.na"
}, {
    "country": "Benin",
    "station": "LC2 International\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=100800"
}, {
    "country": "Cote D'ivoire",
    "station": "Radio Yopougon\n\n      French",
    "location": "Yopougon-Attie, Côte d'Ivoire",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=10654"
}, {
    "country": "St. Helena",
    "station": "BBC World Service English Bay\n\n      BBC World Service is the...",
    "location": "Edinburgh of the Seven Seas, St. Helena",
    "email-href": "bbcwsafrica@bbc.co.uk"
}, {
    "country": "Sao Tome-Principe",
    "station": "RFI 1 Afrique / RFI 2\n\n      Radio France Internationale, Actualite Afrique et Monde en Franc",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16161"
}, {
    "country": "Algeria",
    "station": "Radio Coran\n\n      محطة دينية مخصصة لإذاعة...",
    "location": "",
    "email-href": "contact@radio-coran.net"
}, {
    "country": "Mozambique",
    "station": "RFI 1 Afrique / RFI 2\n\n      French",
    "location": "Maputo, Mozambique",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6289"
}, {
    "country": "Egypt",
    "station": "Radio Masr\n\n      Arabic",
    "location": "Cairo, Egypt",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=245277"
}, {
    "country": "Mozambique",
    "station": "Radio 99\n\n      Portuguese",
    "location": "Maputo, Em primeiro lugar em todo lugar, Mozambique",
    "email-href": "comercial@99fm.co.mz"
}, {
    "country": "Malawi",
    "station": "Capital FM Malawi\n\n      Malawi's Hit Music Station",
    "location": "Blantyre, Malawi",
    "email-href": "music@capitalradiomalawi.com"
}, {
    "country": "Cameroon",
    "station": "Femmes FM\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=7504"
}, {
    "country": "Algeria",
    "station": "Radio Algeria Koran/Culture\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=117236"
}, {
    "country": "Nigeria",
    "station": "Magic FM Aba\n\n      Feel the Magic",
    "location": "",
    "email-href": "info@magicfmnigeria.com"
}, {
    "country": "Sudan",
    "station": "BBC World Service Khartoum\n\n      BBC World Service is the...",
    "location": "",
    "email-href": "worldservice@bbc.co.uk"
}, {
    "country": "Burundi",
    "station": "RFI Afrique\n\n      Radio France Internationale",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=44233"
}, {
    "country": "Cote D'ivoire",
    "station": "Radio Evangile Alliance\n\n      French",
    "location": "Abidjan, Côte d'Ivoire",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=1648"
}, {
    "country": "Tanzania",
    "station": "Radio Kwizera\n\n      Jukwaa La Matumaini",
    "location": "Ngara, Tanzania",
    "email-href": "missangadam@aol.com"
}, {
    "country": "Congo",
    "station": "BRN TV\n\n      La television planetaire panafricaine de liberte d experssion et",
    "location": "",
    "email-href": "pub@bigroberto.com"
}, {
    "country": "Sierra Leone",
    "station": "RFI 1 Afrique / RFI 2\n\n      French",
    "location": "Freetown, Sierra Leone",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6218"
}, {
    "country": "Gambia",
    "station": "Gambia Radio GRTS\n\n      English",
    "location": "Bakau, Gambia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16133"
}, {
    "country": "Mozambique",
    "station": "RFI 1 Afrique / RFI 2\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6289"
}, {
    "country": "Angola",
    "station": "RNA R Cabinda\n\n      Portuguese",
    "location": "Cabinda, Angola",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=251453"
}, {
    "country": "Nigeria",
    "station": "Wazobia FM 99.5 Abuja\n\n      WAZOBIA FM is the 1st...",
    "location": "Abuja, Nigeria",
    "email-href": "rcahilig@coollink.us"
}, {
    "country": "Tunisia",
    "station": "Radio Gafsa\n\n      Arabic",
    "location": "",
    "email-href": "info@radiotunis.com"
}, {
    "country": "DR Congo",
    "station": "Top Congo FM\n\n      La Frequence Utile",
    "location": "",
    "email-href": "info@topcongo.info"
}, {
    "country": "Algeria",
    "station": "Radio Essouhoub\n\n      Arabic",
    "location": "Laghouat, Regionale du Sud- Est, Algeria",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16042"
}, {
    "country": "Madagascar",
    "station": "Radio Voanio\n\n      French",
    "location": "",
    "email-href": "radio@voanio.com"
}, {
    "country": "Togo",
    "station": "Radio Bonne Nouvelle Togo\n\n      La voix du Christ",
    "location": "Lomé, Togo",
    "email-href": "vieabel@yahoo.fr"
}, {
    "country": "Reunion",
    "station": "NRJ Réunion\n\n      Hit Music Only",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6355"
}, {
    "country": "Botswana",
    "station": "Duma FM\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=138245"
}, {
    "country": "Togo",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "Kara, Togo",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6225"
}, {
    "country": "Algeria",
    "station": "Radio Tiaret\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=122491"
}, {
    "country": "Zimbabwe",
    "station": "National FM ZBC\n\n      Multilingual",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6453"
}, {
    "country": "Togo",
    "station": "Radio Bonne Nouvelle Togo\n\n      La voix du Christ",
    "location": "",
    "email-href": "vieabel@yahoo.fr"
}, {
    "country": "DR Congo",
    "station": "Kin Web TV\n\n      100% congolese music videos 24/7",
    "location": "Kinshasa, DR Congo",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=104690"
}, {
    "country": "Benin",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "Parakou, Borgou, Benin",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16106"
}, {
    "country": "Algeria",
    "station": "Radio Tiaret\n\n      Arabic",
    "location": "Tiaret, Algeria",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=122491"
}, {
    "country": "Zambia",
    "station": "Radio Phoenix\n\n      English",
    "location": "Lusaka, Zambia",
    "email-href": "rphoenix@zamnet.zm"
}, {
    "country": "Cameroon",
    "station": "Kalak FM\n\n      French",
    "location": "",
    "email-href": "kalak@kalakfm.com"
}, {
    "country": "Benin",
    "station": "La Voix de la Lama\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=150109"
}, {
    "country": "Cameroon",
    "station": "TBC Radio\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=105833"
}, {
    "country": "Morocco",
    "station": "Radio Chaine Inter\n\n      French",
    "location": "Rabat, Morocco",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=129389"
}, {
    "country": "Malawi",
    "station": "MBC TV\n\n      Multilingual",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=206845"
}, {
    "country": "Angola",
    "station": "L.A.C FM\n\n      Luanda Antena Comercial",
    "location": "",
    "email-href": "lac@lacluanda.com"
}, {
    "country": "Guinea",
    "station": "Bonheur FM Guinée\n\n      La radio qui vous fait partager le bonheur",
    "location": "",
    "email-href": "radiobonheurfmguinee@gmail.com"
}, {
    "country": "Guinea-Bissau",
    "station": "Rádio Jovem Guiné-Bissau\n\n      Portuguese",
    "location": "Bissau, Guinea-Bissau",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=158284"
}, {
    "country": "Egypt",
    "station": "FM نجوم\n\n      علي كيفك",
    "location": "Cairo, Egypt",
    "email-href": "contactnrp@nileradioproductions.net"
}, {
    "country": "Uganda",
    "station": "Dembe FM\n\n      English",
    "location": "Kampala, Uganda",
    "email-href": "Administration@ugamuziki.com"
}, {
    "country": "Ghana",
    "station": "Otec FM\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=238886"
}, {
    "country": "Tunisia",
    "station": "Radio Oasis Fm\n\n      Arabic",
    "location": "",
    "email-href": "contact@oasisfm.tn"
}, {
    "country": "Uganda",
    "station": "Bukedde FM 100.5\n\n      Embutikizi",
    "location": "Kampala, Uganda",
    "email-href": "tam978@gmail.com"
}, {
    "country": "Zambia",
    "station": "Sky FM\n\n      English",
    "location": "Monze, Zambia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=110033"
}, {
    "country": "Lesotho",
    "station": "Thaha-Khube FM\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=142268"
}, {
    "country": "Sudan",
    "station": "Mango 96 FM\n\n      Arabic",
    "location": "",
    "email-href": "Contact@mango96.com"
}, {
    "country": "Ghana",
    "station": "Starr\n\n      Simply The Best!",
    "location": "Accra, Ghana",
    "email-href": "webmaster@starrfmonline.com"
}, {
    "country": "Tanzania",
    "station": "Magic FM 92.9\n\n      believe in the power of magic",
    "location": "",
    "email-href": "elkindy24@hotmail.com"
}, {
    "country": "Cote D'ivoire",
    "station": "RTI La Chaîne Nationale\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16120"
}, {
    "country": "Senegal",
    "station": "Sud FM\n\n      Sen Radio",
    "location": "Dakar, Senegal",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6977"
}, {
    "country": "Tanzania",
    "station": "Qiblaten FM\n\n      Sauti ya Hekima",
    "location": "Iringa, Tanzania",
    "email-href": "info@dhinureyn.com"
}, {
    "country": "Mali",
    "station": "Radio Rurale\n\n      Radio Rural Kayes",
    "location": "Kayes, Mali",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=50171"
}, {
    "country": "Togo",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6223"
}, {
    "country": "Zambia",
    "station": "Hot FM\n\n      THE HEAT IS ON !!",
    "location": "Lusaka, Zambia",
    "email-href": "info@hot877.com"
}, {
    "country": "Liberia",
    "station": "ELBC\n\n      English",
    "location": "Monrovia, Liberia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=211054"
}, {
    "country": "Mauritania",
    "station": "Radio Coran\n\n      Radio diffusant le saint...",
    "location": "Nouakchott, Mauritania",
    "email-href": "info@radiomauritanie.mr"
}, {
    "country": "Uganda",
    "station": "100.4 Hills Fm\n\n      Sound From The Hills",
    "location": "Kabale, Uganda",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=249868"
}, {
    "country": "Mali",
    "station": "International Radio BEFO\n\n      French",
    "location": "Bamako, Mali",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=189041"
}, {
    "country": "Guinea",
    "station": "Radio Nostalgie Guinee\n\n      La première radio privée de Guinée",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=134427"
}, {
    "country": "Tanzania",
    "station": "Radio One\n\n      Swahili",
    "location": "",
    "email-href": "info@radio1.co.tz"
}, {
    "country": "Zambia",
    "station": "Radio Christian Voice Zambia\n\n      The Voice Africa",
    "location": "Lusaka, Lusaka, Zambia",
    "email-href": "voicefm@zamnet.zm"
}, {
    "country": "Mauritius",
    "station": "MBC Radio Maurice 1\n\n      English",
    "location": "",
    "email-href": "customercare@mbc.intnet.mu"
}, {
    "country": "Uganda",
    "station": "Radio Maria (Uganda)\n\n      The World Family Of Radio Maria",
    "location": "Kampala, Mbarara, Uganda",
    "email-href": "coordinator.uga@radiomaria.org"
}, {
    "country": "Cape Verde",
    "station": "RFI 1 Afrique / RFI 2\n\n      French",
    "location": "Mindelo, Cape Verde",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16085"
}, {
    "country": "Uganda",
    "station": "HOT100\n\n      Kampala's Mostest Hip Hop & RnB",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=241130"
}, {
    "country": "Tunisia",
    "station": "Radio Tunis Culture\n\n      Radio Tunis Radio cultural...",
    "location": "",
    "email-href": "radio.culturelle@radiotunisienne.tn"
}, {
    "country": "Botswana",
    "station": "RB1-Radio Botswana\n\n      The Department of Information and Broadcasting",
    "location": "",
    "email-href": "asesinyi@gov.bw"
}, {
    "country": "Reunion",
    "station": "RER\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=181775"
}, {
    "country": "Eritrea",
    "station": "Zara FM\n\n      English",
    "location": "Asmara, Eritrea",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=103395"
}, {
    "country": "Cameroon",
    "station": "Voxafrica TV\n\n      English",
    "location": "Yaoundé, Cameroon",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=103557"
}, {
    "country": "Burkina Faso",
    "station": "Radio Omega FM Ouaga\n\n      French",
    "location": "Ouagadougou, Burkina Faso",
    "email-href": "omegafm@omegabf.net"
}, {
    "country": "Tanzania",
    "station": "Times fm\n\n      Experience Africa",
    "location": "",
    "email-href": "info@timesfm.co.tz"
}, {
    "country": "Cape Verde",
    "station": "Praia FM\n\n      Portuguese",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=47673"
}, {
    "country": "Comoros",
    "station": "Radio Comores\n\n      French",
    "location": "Moroni, Comoros",
    "email-href": "naynour@hotmail.com"
}, {
    "country": "Reunion",
    "station": "RFM Réunion\n\n      Le meilleur de la musique",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=191176"
}, {
    "country": "Tanzania",
    "station": "Radio Adhana\n\n      Swahili",
    "location": "Zanzibar, Tanzania",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=210742"
}, {
    "country": "Ghana",
    "station": "Fox FM\n\n      Multilingual",
    "location": "Kumasi, Ghana",
    "email-href": "info@foxfnonline.com"
}, {
    "country": "Ghana",
    "station": "Angel FM\n\n      English",
    "location": "Kumasi, Ghana",
    "email-href": "info@angelfmonline.com"
}, {
    "country": "Reunion",
    "station": "Radio Vie Reunion\n\n      La Radio qui respire",
    "location": "",
    "email-href": "radiovie@orange.fr"
}, {
    "country": "Gabon",
    "station": "Africa N°1\n\n      La Radio Africaine",
    "location": "Libreville, Gabon",
    "email-href": "africa@africa1.com"
}, {
    "country": "Congo",
    "station": "BBC World Service Kinshasa\n\n      BBC World Service is the...",
    "location": "Kinshassa, Congo",
    "email-href": "bbcwsafrica@bbc.co.uk"
}, {
    "country": "Libya",
    "station": "Voice of Tripoli\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16150"
}, {
    "country": "Zambia",
    "station": "Icengelo Radio\n\n      light of the copperbelt",
    "location": "",
    "email-href": "radioice@zamtel.zm"
}, {
    "country": "Uganda",
    "station": "HOT100\n\n      Kampala's Mostest Hip Hop & RnB",
    "location": "Kampala, Uganda",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=241130"
}, {
    "country": "Burkina Faso",
    "station": "Radio Zoodo\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=150110"
}, {
    "country": "Mali",
    "station": "Radio Voix des Jeunes de Kita\n\n      French",
    "location": "",
    "email-href": "radio@voixdesjeunes-kita.ml"
}, {
    "country": "Zambia",
    "station": "Radio Dove\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=110034"
}, {
    "country": "Cameroon",
    "station": "Magic FM\n\n      La chaine qui dechaine",
    "location": "Yaoundé, Cameroon",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=132102"
}, {
    "country": "Uganda",
    "station": "104.9 Ssuubi FM Kampala\n\n      Less Talk More Music",
    "location": "Kampala, Uganda",
    "email-href": "abmasembe.md@ssuubifmradio.com"
}, {
    "country": "Uganda",
    "station": "Radio Sapientia\n\n      The Source of  Wisdom",
    "location": "Kampala, Uganda",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=114921"
}, {
    "country": "Uganda",
    "station": "Etop FM 99.4\n\n      English",
    "location": "Soroti, Uganda",
    "email-href": "info@sayituganda.com"
}, {
    "country": "Sierra Leone",
    "station": "AYV Radio\n\n      English",
    "location": "",
    "email-href": "info@ayvradio.com"
}, {
    "country": "Tunisia",
    "station": "Radio Tunis Jeunes\n\n      Radio Tunis offer you...",
    "location": "",
    "email-href": "radio.jeunes@radiotunisienne.tn"
}, {
    "country": "Zambia",
    "station": "ZNBC R1\n\n      Sound Vision For The Future",
    "location": "",
    "email-href": "hyde.haguta@znbc.co.zm"
}, {
    "country": "Algeria",
    "station": "Radio El Bahia\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16038"
}, {
    "country": "Malawi",
    "station": "Radio Christian Voice Zambia\n\n      English",
    "location": "Lilongwe, Malawi",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=151568"
}, {
    "country": "Chad",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "N'Djamena, Chad",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16090"
}, {
    "country": "Zimbabwe",
    "station": "Radio Zimbabwe ZBC\n\n      Shona",
    "location": "Harare, Harare, Zimbabwe",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6451"
}, {
    "country": "Morocco",
    "station": "إذاعة محمد السادس للقرآن الكريم\n\n      Arabic",
    "location": "Rabat, Morocco",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=133435"
}, {
    "country": "St. Helena",
    "station": "Saint FM\n\n      The Heartbeat of St. Helena",
    "location": "",
    "email-href": "fm@cwimail.sh"
}, {
    "country": "Swaziland",
    "station": "Radio Swaziland English\n\n      English",
    "location": "Mbabane, Swaziland",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=107955"
}, {
    "country": "Kenya",
    "station": "Hope FM\n\n      Listen and Live",
    "location": "Nairobi, Kenya",
    "email-href": "info@hopefm.org"
}, {
    "country": "Kenya",
    "station": "Sound Asia FM\n\n      best Bollywood music",
    "location": "Nairobi, Kenya",
    "email-href": "info@soundasiafm.com"
}, {
    "country": "Libya",
    "station": "LJB Arabic\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16148"
}, {
    "country": "Guinea",
    "station": "Espace FM\n\n      La plus lionne des radios",
    "location": "Conakry, Guinea",
    "email-href": "services@espacefmguinee.info"
}, {
    "country": "Cape Verde",
    "station": "Radio Cidade Cabo Verde\n\n      Portuguese",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=203584"
}, {
    "country": "Botswana",
    "station": "Yarona FM\n\n      Live The Music",
    "location": "",
    "email-href": "info@yaronafm.co.bw"
}, {
    "country": "Ethiopia",
    "station": "Fana FM Radio\n\n      English",
    "location": "Addis Ababa, Ethiopia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=182754"
}, {
    "country": "Seychelles",
    "station": "PureFM (Seychelles)\n\n      English",
    "location": "Victoria, Seychelles",
    "email-href": "90.7@purefm.sc"
}, {
    "country": "Tunisia",
    "station": "Zitouna FM\n\n      La Radio Du Coran En Tunisie",
    "location": "Zaghouan, Tunisia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=86784"
}, {
    "country": "Burkina Faso",
    "station": "Savane FM\n\n      French",
    "location": "",
    "email-href": "contact@savanefm.net"
}, {
    "country": "Tanzania",
    "station": "CG FM Radio\n\n      The point of no return",
    "location": "",
    "email-href": "info@cgfmradio.com"
}, {
    "country": "Tunisia",
    "station": "Tunisie 7\n\n      Hungarian",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=150957"
}, {
    "country": "Cote D'ivoire",
    "station": "Radio Evangile Alliance\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=1648"
}, {
    "country": "Nigeria",
    "station": "SplashFM\n\n      English",
    "location": "Ibadan, Nigeria",
    "email-href": "info@splashfm1055.com"
}, {
    "country": "Madagascar",
    "station": "RFI 1 Afrique / local 2h\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6268"
}, {
    "country": "Seychelles",
    "station": "SBC Paradise FM\n\n      Paradise FM broadcasts 24...",
    "location": "Victoria, Seychelles",
    "email-href": "Paradise.FM@sbc.sc"
}, {
    "country": "Lesotho",
    "station": "Maseru 100\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=142264"
}, {
    "country": "Namibia",
    "station": "Hitradio Namibia\n\n      Hitradio Namibia! Meine Musik. Mein Sender.",
    "location": "Windhoek, Namibia",
    "email-href": "info@hitradio.com.na"
}, {
    "country": "Algeria",
    "station": "Radio Algerie Internationale\n\n      L’USM Bel Abbès a franchi...",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=66859"
}, {
    "country": "Algeria",
    "station": "Radio Setif\n\n      French",
    "location": "Sétif, Algeria",
    "email-href": "contact.radio.setif@gmail.com"
}, {
    "country": "Rwanda",
    "station": "Radio Maria (Rwanda)\n\n      English",
    "location": "",
    "email-href": "radiomariarwanda@gmail.com"
}, {
    "country": "Burkina Faso",
    "station": "Radio Pulsar\n\n      French",
    "location": "Ouagadougou, Burkina Faso",
    "email-href": "info@monpulsar.com"
}, {
    "country": "Tunisia",
    "station": "Cap FM\n\n      Arabic",
    "location": "Hammamet, Tunisia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=176833"
}, {
    "country": "Swaziland",
    "station": "Radio Swaziland Siswati\n\n      English",
    "location": "Mbabane, Swaziland",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=107957"
}, {
    "country": "Mauritius",
    "station": "MBC Best FM\n\n      English",
    "location": "Malherbes, Mauritius",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=151420"
}, {
    "country": "Egypt",
    "station": "Radio Hits\n\n      راديو هيتس اذاعة شبابية...",
    "location": "Cairo, Egypt",
    "email-href": "contact@radiohits.co"
}, {
    "country": "South Africa",
    "station": "Radio 2000\n\n      English",
    "location": "",
    "email-href": "info@radio2000.co.za"
}, {
    "country": "Kenya",
    "station": "XFM Kenya\n\n      Real Music",
    "location": "",
    "email-href": "info@xfm.co.ke"
}, {
    "country": "Comoros",
    "station": "Radio Ocean Indien\n\n      LA RADIO DE LA NOUVELLE GENERATION",
    "location": "Mkazi, Ngazidja, Comoros",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=115234"
}, {
    "country": "Reunion",
    "station": "HITFM Reunion\n\n      New Generation !",
    "location": "Saint-Denis, Reunion",
    "email-href": "hitfm@live.fr"
}, {
    "country": "Libya",
    "station": "LJB Holy Koran\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16152"
}, {
    "country": "Zambia",
    "station": "Icengelo Radio\n\n      light of the copperbelt",
    "location": "Kaloko, Zambia",
    "email-href": "radioice@zamtel.zm"
}, {
    "country": "Togo",
    "station": "Zéphyr FM\n\n      Enfin La Radio",
    "location": "Lomé, Togo",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6980"
}, {
    "country": "Senegal",
    "station": "Radio Alfayda\n\n      French",
    "location": "Kaolack, Senegal",
    "email-href": "info@radioalfayda.net"
}, {
    "country": "Kenya",
    "station": "Biblia Husema Broadcasting\n\n      Faith Comes By Hearing, And Hearing By The Word of God. Romans 1",
    "location": "",
    "email-href": "http://bibliahusema.org/team/"
}, {
    "country": "Cote D'ivoire",
    "station": "BBC World Service Abidjan\n\n      BBC World Service is the...",
    "location": "Abidjan, Côte d'Ivoire",
    "email-href": "worldservice@bbc.co.uk"
}, {
    "country": "Egypt",
    "station": "الراديو 9090\n\n      هواها مصري",
    "location": "",
    "email-href": "info@mobtada.com"
}, {
    "country": "Mali",
    "station": "Radio Dande\n\n      Multilingual",
    "location": "Douentza, Mopti Province, Mali",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16079"
}, {
    "country": "Gabon",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16132"
}, {
    "country": "Ghana",
    "station": "ASHH\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=120874"
}, {
    "country": "Chad",
    "station": "DJA\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=7491"
}, {
    "country": "Cote D'ivoire",
    "station": "Ivorian TV\n\n      The Music Channel",
    "location": "Yamoussoukro, Ivory Coast",
    "email-href": "contact@ivorian.tv"
}, {
    "country": "Egypt",
    "station": "Alrahma TV\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=125432"
}, {
    "country": "Egypt",
    "station": "Hona Al Qahera\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=230031"
}, {
    "country": "Morocco",
    "station": "Med Radio\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=158167"
}, {
    "country": "Namibia",
    "station": "NBC National Radio\n\n      Multilingual",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=119463"
}, {
    "country": "Malawi",
    "station": "Zodiak Radio\n\n      Zikachitika Mumvera kwa ife.",
    "location": "Lilongwe, Malawi",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=122168"
}, {
    "country": "Zambia",
    "station": "Power FM\n\n      Urban Youth Radio",
    "location": "Lusaka, Zambia",
    "email-href": "info@power997.com"
}, {
    "country": "Ghana",
    "station": "Joy FM\n\n      Super Hits Radio !!",
    "location": "",
    "email-href": "info@myjoyonline.com"
}, {
    "country": "Zambia",
    "station": "ZNBC Radio 4\n\n      Sound Vision For The Future",
    "location": "Lusaka, Lusaka, Zambia",
    "email-href": "hyde.haguta@znbc.co.zm"
}, {
    "country": "Sudan",
    "station": "Alrabaa 94 FM\n\n      Arabic",
    "location": "",
    "email-href": "info@alrabaafm.com"
}, {
    "country": "Uganda",
    "station": "Akaboozi FM\n\n      Uganda's unique Luganda news talk station",
    "location": "Kampala, Uganda",
    "email-href": "rs1elvis@gmail.com"
}, {
    "country": "Algeria",
    "station": "Radio Jijel\n\n      Jijel Fm, La radio que j'aime",
    "location": "",
    "email-href": "info@radio-jijel.dz"
}, {
    "country": "Mauritius",
    "station": "Radio One R1\n\n      French",
    "location": "",
    "email-href": "redaction@r1.mu"
}, {
    "country": "Guinea",
    "station": "Radio Nostalgie Guinee\n\n      La première radio privée de Guinée",
    "location": "Conakry, Guinea",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=134427"
}, {
    "country": "Senegal",
    "station": "Rail Bi FM 101.3\n\n      La radio qui controle la banlieue dakaroise",
    "location": "",
    "email-href": "railbifm@gmail.com"
}, {
    "country": "DR Congo",
    "station": "B-ONE RADIO\n\n      French",
    "location": "Kinshasa, DR Congo",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=155833"
}, {
    "country": "Mali",
    "station": "RSK-Radio Sahel Kayes\n\n      RSK-Radio",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16078"
}, {
    "country": "Ghana",
    "station": "Okay FM\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=137336"
}, {
    "country": "Cameroon",
    "station": "Radio Tiemeni Siantou\n\n      French",
    "location": "Yaoundé, Cameroon",
    "email-href": "info@cameroonvoice.com"
}, {
    "country": "Egypt",
    "station": "Radio Cairo\n\n      Radio Cairo",
    "location": "",
    "email-href": "Webmaster@radiocairo.cjb.net"
}, {
    "country": "Egypt",
    "station": "FM نجوم\n\n      علي كيفك",
    "location": "",
    "email-href": "contactnrp@nileradioproductions.net"
}, {
    "country": "Senegal",
    "station": "SeneRadio FM\n\n      Senegal Musique est une...",
    "location": "Dakar, Senegal",
    "email-href": "senegalmusique@gmail.com"
}, {
    "country": "Malawi",
    "station": "MBC Radio 1\n\n      Inspiring The Nation",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=206843"
}, {
    "country": "Libya",
    "station": "Tripoli FM\n\n      English",
    "location": "Tripoli, Libyan Arab Jamahiriya",
    "email-href": "info@tripolifm.ly"
}, {
    "country": "Zambia",
    "station": "Rock FM\n\n      Live to rock another day",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=214604"
}, {
    "country": "Mauritius",
    "station": "MBC Best FM\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=151420"
}, {
    "country": "Algeria",
    "station": "Radio Skikda\n\n      Urdu",
    "location": "Skikda, Algeria",
    "email-href": "info@radio-skikda.dz"
}, {
    "country": "Reunion",
    "station": "Radio Freedom FM\n\n      French",
    "location": "Saint-Denis, Reunion",
    "email-href": "freedom@guetali.fr"
}, {
    "country": "Uganda",
    "station": "Radio Simba\n\n      The Best Luganda Station in the World!",
    "location": "Kampala, Uganda",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=18569"
}, {
    "country": "South Africa",
    "station": "Groot FM\n\n      Gaan Groot",
    "location": "",
    "email-href": "grootfm@xpbroadcasting.com"
}, {
    "country": "Egypt",
    "station": "Mega FM 92.7\n\n      Arabic",
    "location": "Cairo, Egypt",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=143123"
}, {
    "country": "Reunion",
    "station": "Radio Arc-en-Ciel\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6340"
}, {
    "country": "Tunisia",
    "station": "MFM Tunisie\n\n      Arabic",
    "location": "Mahdia, Tunisia",
    "email-href": "contact@radiomfm.tn"
}, {
    "country": "Equatorial Guinea",
    "station": "RFI 1 Afrique / RFI 2\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16129"
}, {
    "country": "Algeria",
    "station": "Alger Ch 3\n\n      La Radio Algérienne",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=25411"
}, {
    "country": "Senegal",
    "station": "SeneRadio FM\n\n      Senegal Musique est une...",
    "location": "",
    "email-href": "senegalmusique@gmail.com"
}, {
    "country": "Mauritania",
    "station": "Radio Mauritanie\n\n      Radio Nationale de la...",
    "location": "",
    "email-href": "info@radiomauritanie.mr"
}, {
    "country": "Uganda",
    "station": "90.8 Metro fm Uganda\n\n      Essanyu ry0",
    "location": "Kampala, Uganda",
    "email-href": "metro90.8@gmail.com"
}, {
    "country": "Benin",
    "station": "Golfe FM\n\n      We Are The Future Restez Branche",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=17460"
}, {
    "country": "Tanzania",
    "station": "E-FM Radio\n\n      MUSIC TALKS",
    "location": "",
    "email-href": "info@efm.co.tz"
}, {
    "country": "Algeria",
    "station": "Radio El Bahia\n\n      Arabic",
    "location": "Oran, Regionale de l'Ouest, Algeria",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16038"
}, {
    "country": "Sudan",
    "station": "Sudan National Radio Corporation\n\n      Sincerity And Warmth Of The Floor",
    "location": "Omdurman, Sudan",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6979"
}, {
    "country": "Namibia",
    "station": "Radio 99\n\n      Urban Sounds, Global Minds",
    "location": "Klein Windhoek, Namibia",
    "email-href": "99fm@99fm.com.na"
}, {
    "country": "Ghana",
    "station": "Nhyira FM\n\n      Emu ye din",
    "location": "Kumasi, Ghana",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=113346"
}, {
    "country": "Egypt",
    "station": "El Gouna Radio\n\n      Your Favorite Wave",
    "location": "",
    "email-href": "romolo1@romolo.com"
}, {
    "country": "South Africa",
    "station": "Ukhozi FM\n\n      Luhamba Phambili",
    "location": "Durban, South Africa",
    "email-href": "nzimandew@sabc.co.za"
}, {
    "country": "Tanzania",
    "station": "ABOOD FM\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=204750"
}, {
    "country": "South Africa",
    "station": "SAFM\n\n      South Africa's News and Information Leader",
    "location": "Johannesburg, South Africa",
    "email-href": "tshiradost@safm.co.za"
}, {
    "country": "Libya",
    "station": "LJB Arabic\n\n      Arabic",
    "location": "Misratah, Libyan Arab Jamahiriya",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16147"
}, {
    "country": "South Africa",
    "station": "GoodHope FM\n\n      It's All Good",
    "location": "Cape Town, South Africa",
    "email-href": "amanda@goodhopefm.co.za"
}, {
    "country": "Zambia",
    "station": "Zambezi FM Radio\n\n      Let The Waves Flow...",
    "location": "Livingstone, Zambia",
    "email-href": "swithinhaangala@yahoo.com"
}, {
    "country": "Nigeria",
    "station": "Inspiration 92.3 FM\n\n      Your #1 Family Radio Station",
    "location": "Lagos, Nigeria",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=165872"
}, {
    "country": "Mali",
    "station": "Radio Bamakan\n\n      Radio Bamakan FM 100.3",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16076"
}, {
    "country": "Guinea",
    "station": "Bonheur FM Guinée\n\n      La radio qui vous fait partager le bonheur",
    "location": "Conakry, Guinea",
    "email-href": "radiobonheurfmguinee@gmail.com"
}, {
    "country": "Zimbabwe",
    "station": "Radio Zimbabwe ZBC\n\n      Shona",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6451"
}, {
    "country": "DR Congo",
    "station": "Radio Raga FM\n\n      French",
    "location": "Kinshasa, DR Congo",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=8019"
}, {
    "country": "Burundi",
    "station": "RTNB 2\n\n      Multilingual",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=109557"
}, {
    "country": "Sierra Leone",
    "station": "SLBS FM\n\n      English",
    "location": "Freetown, Sierra Leone",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6221"
}, {
    "country": "DR Congo",
    "station": "Radio Okapi\n\n      Une Voix Pour Tous !",
    "location": "Kinshasa, DR Congo",
    "email-href": "info@hirondelle.org"
}, {
    "country": "Morocco",
    "station": "Casa FM\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=105721"
}, {
    "country": "Libya",
    "station": "Tribute FM\n\n      Broadcasting live from Benghazi",
    "location": "",
    "email-href": "info@tributefm.com"
}, {
    "country": "Reunion",
    "station": "Radio Arc-en-Ciel\n\n      English",
    "location": "Saint-Denis, Saint-Denis, Reunion",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6348"
}, {
    "country": "Swaziland",
    "station": "TWR Africa\n\n      Your Friendly Voice In Africa",
    "location": "",
    "email-href": "info@twrafrica.org"
}, {
    "country": "South Africa",
    "station": "Radio Sonder Grense\n\n      Afrikaans",
    "location": "Johannesburg, South Africa",
    "email-href": "rekenaar@rsg.co.za"
}, {
    "country": "Tunisia",
    "station": "Radio Tataouine\n\n      Arabic",
    "location": "",
    "email-href": "info@radiotunis.com"
}, {
    "country": "Morocco",
    "station": "Atlantic Radio\n\n      La Première Radio",
    "location": "Casablanca, Morocco",
    "email-href": "info@atlanticradio.ma"
}, {
    "country": "Ghana",
    "station": "Atinka 104.7 FM\n\n      Feeling Wom",
    "location": "",
    "email-href": "info@atinkaonline.com"
}, {
    "country": "Kenya",
    "station": "Homeboyz Radio\n\n      Tomorrows Hits...Today!",
    "location": "",
    "email-href": "info@homeboyzradio.co.ke"
}, {
    "country": "Algeria",
    "station": "Radio Tassili\n\n      Arabic",
    "location": "Illizi, Regionale du Sud- Est, Algeria",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16040"
}, {
    "country": "Uganda",
    "station": "Akaboozi FM\n\n      Uganda's unique Luganda news talk station",
    "location": "",
    "email-href": "rs1elvis@gmail.com"
}, {
    "country": "Nigeria",
    "station": "Cool FM 96.9 Abuja\n\n      Your #1 Hit Music Station",
    "location": "Abuja, Nigeria",
    "email-href": "rcahilig@coollink.us"
}, {
    "country": "South Africa",
    "station": "Munghana Lonene FM\n\n      Ndzalama Ya Rixaka",
    "location": "",
    "email-href": "mlfm@sabc.co.za"
}, {
    "country": "Namibia",
    "station": "NBC Damara Nam\n\n      English",
    "location": "Waterberg, Namibia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=119488"
}, {
    "country": "Libya",
    "station": "Libyana FM\n\n      Arabic",
    "location": "Tripoli, Libyan Arab Jamahiriya",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=174220"
}, {
    "country": "St. Helena",
    "station": "SAMS R1\n\n      English",
    "location": "",
    "email-href": "news@shbc.sh"
}, {
    "country": "Mozambique",
    "station": "LM Radio\n\n      Lifetime Music Radio",
    "location": "Maputo, Mozambique",
    "email-href": "info@lmradio.net"
}, {
    "country": "Lesotho",
    "station": "Harvest FM\n\n      English",
    "location": "Maseru, Lesotho",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=142260"
}, {
    "country": "Nigeria",
    "station": "Liberty Radio Hausa\n\n      Tashar 'Yanci",
    "location": "",
    "email-href": "libertyradiong@gmail.com"
}, {
    "country": "Egypt",
    "station": "إذاعة الشرق الأوسط\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=213502"
}, {
    "country": "Burkina Faso",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16114"
}, {
    "country": "Algeria",
    "station": "Radio Ahagar\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16043"
}, {
    "country": "Cape Verde",
    "station": "Radio Cidade Cabo Verde\n\n      Portuguese",
    "location": "Praia, Cape Verde",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=203584"
}, {
    "country": "Benin",
    "station": "Fraternite FM\n\n      French",
    "location": "Parakou, Benin",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=47665"
}, {
    "country": "Angola",
    "station": "RNA R Viana\n\n      Portuguese",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=251463"
}, {
    "country": "Algeria",
    "station": "Radio Ahagar\n\n      Arabic",
    "location": "Tamanghasset, Regionale du Sud- Est, Algeria",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16043"
}, {
    "country": "South Africa",
    "station": "Thobela FM\n\n      Mosito A Tswela Pele",
    "location": "",
    "email-href": "Thobelafm@sabc.co.za"
}, {
    "country": "Zimbabwe",
    "station": "ZBC Power FM\n\n      English",
    "location": "Harare, Zimbabwe",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=247889"
}, {
    "country": "Nigeria",
    "station": "Radio Continental\n\n      The Loudest Conversation....",
    "location": "Ikosi, Nigeria",
    "email-href": "contactus@rc1023.fm"
}, {
    "country": "Sudan",
    "station": "BBC World Service Wad Madani\n\n      BBC World Service is the...",
    "location": "",
    "email-href": "worldservice@bbc.co.uk"
}, {
    "country": "Malawi",
    "station": "MBC TV\n\n      Multilingual",
    "location": "Blantyre, Malawi",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=206845"
}, {
    "country": "Egypt",
    "station": "راديو مصر\n\n      لكل مصر",
    "location": "Masr, Egypt",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=122485"
}, {
    "country": "Libya",
    "station": "LJB Holy Koran\n\n      Arabic",
    "location": "Tripolis, Libyan Arab Jamahiriya",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16151"
}, {
    "country": "Angola",
    "station": "Radio Luanda RNA\n\n      Portuguese",
    "location": "",
    "email-href": "rluanda@rna.ao"
}, {
    "country": "Zimbabwe",
    "station": "Praise 105.2 Radio\n\n      English",
    "location": "Harare, Zimbabwe",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=245456"
}, {
    "country": "South Africa",
    "station": "Radio Islam\n\n      The World is our Community",
    "location": "",
    "email-href": "support@radioislam.org.za"
}, {
    "country": "Angola",
    "station": "RNA R Esterio\n\n      Portuguese",
    "location": "Luanda, Angola",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=1696"
}, {
    "country": "Morocco",
    "station": "Radio Chaine Inter\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=129389"
}, {
    "country": "Kenya",
    "station": "Capital FM\n\n      Your Best Mix of Music",
    "location": "",
    "email-href": "digital@capitalfm.co.ke"
}, {
    "country": "Mozambique",
    "station": "Radio Maria (Mozambique)\n\n      Portuguese",
    "location": "Matola, Mozambique",
    "email-href": "info.moz@radiomaria.org"
}, {
    "country": "Burundi",
    "station": "RTNB 2\n\n      Multilingual",
    "location": "Bujumbura, Burundi",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=109557"
}, {
    "country": "Tanzania",
    "station": "Clouds FM\n\n      The People's Station",
    "location": "",
    "email-href": "info@cloudsfm.co"
}, {
    "country": "Ghana",
    "station": "Otec FM\n\n      English",
    "location": "Kumasi, Ghana",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=238886"
}, {
    "country": "Malawi",
    "station": "Star FM\n\n      Better Information - Today's Best Music",
    "location": "",
    "email-href": "info@starradiomw.com"
}, {
    "country": "Libya",
    "station": "Qanat AlEman 99.9\n\n      Arabic",
    "location": "Tripoli, Libyan Arab Jamahiriya",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=163033"
}, {
    "country": "Algeria",
    "station": "Radio Algeria Koran/Culture\n\n      Arabic",
    "location": "Ouled Fayet, Algeria",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=117236"
}, {
    "country": "South Africa",
    "station": "Umhlobo Wenene FM\n\n      The Heartbeat of The Nation",
    "location": "Port Elizabeth, South Africa",
    "email-href": "magwan@sabc.co.za"
}, {
    "country": "DR Congo",
    "station": "Congo Planete TV\n\n      French",
    "location": "",
    "email-href": "info@congoplanet.com"
}, {
    "country": "Madagascar",
    "station": "Alliance 92\n\n      Votre Couleur Musicale",
    "location": "",
    "email-href": "frequence92@live.fr"
}, {
    "country": "Mali",
    "station": "Radio Voix des Jeunes\n\n      French",
    "location": "Bamako, Mali",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=202442"
}, {
    "country": "Kenya",
    "station": "Salaam FM\n\n      Radio Salaam ilianza...",
    "location": "Mombasa, Kenya",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=143030"
}, {
    "country": "Lesotho",
    "station": "Lesotho Catholic Radio FM\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=142263"
}, {
    "country": "Sudan",
    "station": "SRTC FM 100\n\n      Arabic",
    "location": "",
    "email-href": "fm100@sudanradio.info"
}, {
    "country": "Lesotho",
    "station": "BBC World Service Maseru\n\n      BBC World Service is the...",
    "location": "",
    "email-href": "bbcwsafrica@bbc.co.uk"
}, {
    "country": "Mali",
    "station": "Rabwah FM\n\n      French",
    "location": "Bamako, Mali",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=203424"
}, {
    "country": "Tunisia",
    "station": "Shems FM\n\n      Shems FM Live : Suivez...",
    "location": "",
    "email-href": "contact@shemsfm.net"
}, {
    "country": "Guinea",
    "station": "Espace FM\n\n      La plus lionne des radios",
    "location": "",
    "email-href": "services@espacefmguinee.info"
}, {
    "country": "Mali",
    "station": "Citizen Radio Voice\n\n      The radio voice of the citizen",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=189038"
}, {
    "country": "Senegal",
    "station": "RTS Tamba FM\n\n      Multilingual",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=238790"
}, {
    "country": "Nigeria",
    "station": "Space\n\n      Setting new standards in Broadcasting",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=222552"
}, {
    "country": "Algeria",
    "station": "Radio Essouhoub\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16042"
}, {
    "country": "Tunisia",
    "station": "Radio Tataouine\n\n      Arabic",
    "location": "Remada, Tunisia",
    "email-href": "info@radiotunis.com"
}, {
    "country": "Tanzania",
    "station": "ABOOD FM\n\n      English",
    "location": "Morogoro, Tanzania",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=204750"
}, {
    "country": "Libya",
    "station": "LJB Benghazi Radio\n\n      Arabic",
    "location": "Benghazi, Libyan Arab Jamahiriya",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16145"
}, {
    "country": "Reunion",
    "station": "Reunion 1ere\n\n      Réseau Outre-Mer 1ère",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6346"
}, {
    "country": "Mali",
    "station": "Radio Patriote\n\n      French",
    "location": "Bamako, Mali",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=116718"
}, {
    "country": "Ethiopia",
    "station": "Afro FM\n\n      Your Infotainment Station",
    "location": "Addis Abeba, Ethiopia",
    "email-href": "info@afro105fm.com"
}, {
    "country": "Egypt",
    "station": "إذاعة القرآن الكريم\n\n      تعتبر إذاعة القرآن الكريم...",
    "location": "",
    "email-href": "qurannet@ertu.org"
}, {
    "country": "Egypt",
    "station": "الشباب و الرياضة\n\n      Arabic",
    "location": "",
    "email-href": "radioinfo@ertu.org"
}, {
    "country": "Nigeria",
    "station": "102.7 NAIJA FM\n\n      Naija Fm102.7 na the...",
    "location": "",
    "email-href": "info@naija102.com"
}, {
    "country": "Sudan",
    "station": "Alrabaa 94 FM\n\n      Arabic",
    "location": "Khartoum, Sudan",
    "email-href": "info@alrabaafm.com"
}, {
    "country": "Madagascar",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "Antananarivo, Madagascar",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6267"
}, {
    "country": "Cote D'ivoire",
    "station": "Radio Yopougon\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=10654"
}, {
    "country": "Morocco",
    "station": "Radio Mars\n\n      Sport 'N' Music",
    "location": "Casablanca, Morocco",
    "email-href": "contact@radiomars.ma        \""
}, {
    "country": "Gabon",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16130"
}, {
    "country": "Gabon",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "Libreville, Gabon",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16131"
}, {
    "country": "Rwanda",
    "station": "Radio Maria (Rwanda)\n\n      English",
    "location": "Kigali, Rwanda",
    "email-href": " radiomariarwanda@gmail.com"
}, {
    "country": "Mayotte",
    "station": "Radio La Voix Du Nord\n\n      French",
    "location": "Dzoumogne, Mayotte",
    "email-href": "abdou.rvn@hotmail.fr"
}, {
    "country": "Tunisia",
    "station": "Radio Tunis International\n\n      la plus belle des radios",
    "location": "Tunis, Tunisia",
    "email-href": "rtci@radiotunisienne.tn"
}, {
    "country": "Madagascar",
    "station": "Radio Vaovao Mahasoa\n\n      Multilingual",
    "location": "Antananarivo, Madagascar",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=121023"
}, {
    "country": "Libya",
    "station": "Shabab Libya FM\n\n      English",
    "location": "Benghazi, Libyan Arab Jamahiriya",
    "email-href": "info@101LY.com"
}, {
    "country": "Madagascar",
    "station": "Radio Fanambarana\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=176588"
}, {
    "country": "Sao Tome-Principe",
    "station": "RFI 1 Afrique / RFI 2\n\n      Radio France Internationale, Actualite Afrique et Monde en Franc",
    "location": "São Tomé, Sao Tome and Principe",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16161"
}, {
    "country": "Mauritius",
    "station": "MBC Kool FM\n\n      New Sound Radio",
    "location": "Port Louis, Mauritius",
    "email-href": "customercare@mbc.intnet.mu"
}, {
    "country": "Angola",
    "station": "RNA R Kwanza Norte\n\n      Portuguese",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=251465"
}, {
    "country": "Mayotte",
    "station": "Radio Mayotte Web\n\n      1ere sur la musique mahoraise",
    "location": "Combani, Mayotte",
    "email-href": "radio@mayottewebradio.fr"
}, {
    "country": "Malawi",
    "station": "TWR Africa\n\n      Your Friendly Voice In Africa",
    "location": "",
    "email-href": "info@twrafrica.org"
}, {
    "country": "Mali",
    "station": "International Radio BEFO\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=189041"
}, {
    "country": "Senegal",
    "station": "Dakar FM RTS\n\n      French",
    "location": "Dakar, Senegal",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16165"
}, {
    "country": "South Africa",
    "station": "Radio Tygerberg FM\n\n      Ons Verkondig Christus We Proclaim Christ",
    "location": "",
    "email-href": "willem@104fm.org.za"
}, {
    "country": "South Africa",
    "station": "Radio Sonder Grense\n\n      Afrikaans",
    "location": "",
    "email-href": "rekenaar@rsg.co.za"
}, {
    "country": "Tunisia",
    "station": "Radio Sfax\n\n      Arabic",
    "location": "",
    "email-href": "info@radiotunis.com"
}, {
    "country": "Zimbabwe",
    "station": "SW Radio Africa\n\n      The Independent Voice Of Zimbabwe.",
    "location": "",
    "email-href": "news@swradioafrica.com"
}, {
    "country": "Tanzania",
    "station": "Radio Kwizera\n\n      Jukwaa La Matumaini",
    "location": "",
    "email-href": "missangadam@aol.com"
}, {
    "country": "Namibia",
    "station": "Hitradio Namibia\n\n      Hitradio Namibia! Meine Musik. Mein Sender.",
    "location": "",
    "email-href": "info@hitradio.com.na"
}, {
    "country": "Zambia",
    "station": "Radio Maranatha\n\n      Compartiendo el mensaje de salvación",
    "location": "Kabwe, Zambia",
    "email-href": "fmradiomaranatha@gmail.com"
}, {
    "country": "Ghana",
    "station": "HighLife Radio\n\n      Quality Programming for Quality People",
    "location": "",
    "email-href": "info@highliferadio.com"
}, {
    "country": "Rwanda",
    "station": "Contact FM\n\n      Are You In Touch",
    "location": "Kigali, Rwanda",
    "email-href": "info@contactfm.co.rw"
}, {
    "country": "DR Congo",
    "station": "Radio Raga FM\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=8019"
}, {
    "country": "Tunisia",
    "station": "OXYGENE FM\n\n      French",
    "location": "Bizerte, Tunisia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=154568"
}, {
    "country": "Namibia",
    "station": "NBC Ovambo\n\n      German",
    "location": "",
    "email-href": "fzinner@nbc.na"
}, {
    "country": "Mauritania",
    "station": "Radio Mauritanie\n\n      Radio Nationale de la...",
    "location": "Nouakchott, Mauritania",
    "email-href": "info@radiomauritanie.mr"
}, {
    "country": "Swaziland",
    "station": "Radio Swaziland Siswati\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=107957"
}, {
    "country": "Ethiopia",
    "station": "Radio Ethiopia - National Service\n\n      Multilingual",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16099"
}, {
    "country": "Algeria",
    "station": "JIL FM\n\n      Multilingual",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=154053"
}, {
    "country": "Rwanda",
    "station": "Radio Maria (Rwanda)\n\n      English",
    "location": "",
    "email-href": " radiomariarwanda@gmail.com"
}, {
    "country": "Uganda",
    "station": "CBS Radio Buganda\n\n      Uganda's Best Radio Station",
    "location": "Kampala, Entebbe, Uganda",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=7477"
}, {
    "country": "Kenya",
    "station": "East FM\n\n      Kenya's Premier Asian Mix",
    "location": "",
    "email-href": "info@eastfm.com"
}, {
    "country": "Cameroon",
    "station": "Voxafrica TV\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=103557"
}, {
    "country": "Mauritius",
    "station": "MBC Music FM\n\n      English",
    "location": "Port Louis, Port Louis, Mauritius",
    "email-href": "customercare@mbc.intnet.mu"
}, {
    "country": "Reunion",
    "station": "RSL Radio\n\n      Tous les hits soleil",
    "location": "",
    "email-href": "contact@rslradio.fm"
}, {
    "country": "Madagascar",
    "station": "BBC World Service Antananarivo\n\n      BBC World Service is the...",
    "location": "",
    "email-href": "bbcwsafrica@bbc.co.uk"
}, {
    "country": "Central African Republic",
    "station": "Radio Ndeke Luka\n\n      Un Projet De La",
    "location": "Bangui, Central African Republic",
    "email-href": "princegboute@hotmail.fr"
}, {
    "country": "Sudan",
    "station": "SRTC Salam\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=131748"
}, {
    "country": "Benin",
    "station": "Radio Maranatha\n\n      French",
    "location": "Cotonou, Benin",
    "email-href": "maranatha.fm@serv.eit.bj"
}, {
    "country": "Egypt",
    "station": "Radio Masr\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=245277"
}, {
    "country": "Madagascar",
    "station": "Radio Don Bosco\n\n      Plus Je l'écoute et Plus Je l'aime",
    "location": "Antananarivo, Madagascar",
    "email-href": "rdb@radiodonbosco.org"
}, {
    "country": "South Africa",
    "station": "Umhlobo Wenene FM\n\n      The Heartbeat of The Nation",
    "location": "",
    "email-href": "magwan@sabc.co.za"
}, {
    "country": "Nigeria",
    "station": "Magic FM Aba\n\n      Feel the Magic",
    "location": "Aba, Nigeria",
    "email-href": "info@magicfmnigeria.com"
}, {
    "country": "Reunion",
    "station": "EXO FM\n\n      La radio soleil numéro 1",
    "location": "Saint-Denis, Reunion",
    "email-href": "gtmoi974@yahoo.fr"
}, {
    "country": "Cameroon",
    "station": "Kalak FM\n\n      French",
    "location": "Yaoundé, Cameroon",
    "email-href": "kalak@kalakfm.com"
}, {
    "country": "Burundi",
    "station": "Studio Ijambo\n\n      Le dialogue c'est l'avenir !",
    "location": "",
    "email-href": "mdiego@sfcg.org.bi"
}, {
    "country": "Zambia",
    "station": "Radio Liseli\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=110041"
}, {
    "country": "Sudan",
    "station": "SRTC Quran\n\n      Arabic",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=131750"
}, {
    "country": "Tanzania",
    "station": "Times fm\n\n      Experience Africa",
    "location": "Dar Es Salaam, Tanzania",
    "email-href": "info@timesfm.co.tz"
}, {
    "country": "Mozambique",
    "station": "Rádio 95.8 FM Maputo\n\n      A Rádio da Família",
    "location": "Maputo, Mozambique",
    "email-href": "internet@iurd.co.mz"
}, {
    "country": "Tunisia",
    "station": "Radio Tunis Jeunes\n\n      Radio Tunis offer you...",
    "location": "Tunis, Tunisia",
    "email-href": "radio.jeunes@radiotunisienne.tn"
}, {
    "country": "South Africa",
    "station": "Ukhozi FM\n\n      Luhamba Phambili",
    "location": "",
    "email-href": "nzimandew@sabc.co.za"
}, {
    "country": "Mali",
    "station": "BBC World Service Bamako\n\n      BBC World Service is the...",
    "location": "",
    "email-href": "worldservice@bbc.co.uk"
}, {
    "country": "Nigeria",
    "station": "Smooth 98.1\n\n      Love Music Love Life",
    "location": "Lagos, Nigeria",
    "email-href": "info@smooth981.fm"
}, {
    "country": "South Africa",
    "station": "Jacaranda FM\n\n      SA's Best Mix of the 80s, 90s and Now",
    "location": "Johannesburg, South Africa",
    "email-href": "enquiries@jacarandafm.com"
}, {
    "country": "Botswana",
    "station": "Gabz FM\n\n      Today's Hits Yesterday's Classics",
    "location": "Gaborone, Botswana",
    "email-href": "mail@gabzfm.com"
}, {
    "country": "Senegal",
    "station": "Sama Radio Senegal\n\n      La radio Senegalaise",
    "location": "",
    "email-href": "bestmoha1@gmail.com"
}, {
    "country": "Libya",
    "station": "LibyanaHITS FM\n\n      Get Heard !!!",
    "location": "Benghazi, Libyan Arab Jamahiriya",
    "email-href": "info@libyanahits.fm"
}, {
    "country": "Malawi",
    "station": "Radio Islam Malawi\n\n      Education For Tha Nation",
    "location": "Blantyre, Malawi",
    "email-href": "info@radioislam.org.mw"
}, {
    "country": "Egypt",
    "station": "Sound of Sakia Radio\n\n      Sound of Sakia Online...",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=134908"
}, {
    "country": "South Africa",
    "station": "Phalaphala FM\n\n      Hu Bvuma Yone Fhedzi",
    "location": "",
    "email-href": "maumelair@sabc.co.za"
}, {
    "country": "Burkina Faso",
    "station": "Radio Pulsar\n\n      French",
    "location": "",
    "email-href": "info@monpulsar.com"
}, {
    "country": "Benin",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=16107"
}, {
    "country": "Namibia",
    "station": "Katutura Community Radio\n\n      English",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=119486"
}, {
    "country": "Sudan",
    "station": "Sudan National Radio Corporation\n\n      Sincerity And Warmth Of The Floor",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6979"
}, {
    "country": "Mozambique",
    "station": "Radio 99\n\n      Portuguese",
    "location": "",
    "email-href": "comercial@99fm.co.mz"
}, {
    "country": "Angola",
    "station": "RNA R Kwanza Sul\n\n      Portuguese",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=238799"
}, {
    "country": "Togo",
    "station": "RFI 1 Afrique\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=6225"
}, {
    "country": "Angola",
    "station": "RNA R Bie\n\n      Portuguese",
    "location": "Kuito, Angola",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=251461"
}, {
    "country": "Liberia",
    "station": "UNMIL Radio\n\n      United Nations Mission in Liberia",
    "location": "Monrovia, Liberia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=90632"
}, {
    "country": "Namibia",
    "station": "Radio Ecclesia\n\n      English",
    "location": "Klein Windhoek, Namibia",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=119494"
}, {
    "country": "Mali",
    "station": "Radio Canal 2000\n\n      French",
    "location": "Bamako, Mali",
    "email-href": "canal2000@spider.toolnet.org"
}, {
    "country": "Burkina Faso",
    "station": "Radio Zoodo\n\n      English",
    "location": "Ouahigouya, Burkina Faso",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=150110"
}, {
    "country": "Angola",
    "station": "RNA R Huila\n\n      Portuguese",
    "location": "Lubango, Angola",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=251455"
}, {
    "country": "Nigeria",
    "station": "Nigeriainfo FM 95.1 Abuja\n\n      Your #1 Talk, News & Sport Station",
    "location": "Abuja, Nigeria",
    "email-href": "rcahilig@coollink.us"
}, {
    "country": "Angola",
    "station": "RNA R Namibe\n\n      Portuguese",
    "location": "Namibe, Angola",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=251457"
}, {
    "country": "Tunisia",
    "station": "Radio Gafsa\n\n      Arabic",
    "location": "Gafsa, Tunisia",
    "email-href": "info@radiotunis.com"
}, {
    "country": "Uganda",
    "station": "Radio Maria (Uganda)\n\n      The World Family Of Radio Maria",
    "location": "",
    "email-href": "coordinator.uga@radiomaria.org"
}, {
    "country": "Togo",
    "station": "Nana FM\n\n      French",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=86844"
}, {
    "country": "Reunion",
    "station": "Radio Freedom FM\n\n      French",
    "location": "",
    "email-href": "freedom@guetali.fr"
}, {
    "country": "Madagascar",
    "station": "BBC World Service Antananarivo\n\n      BBC World Service is the...",
    "location": "Antananarivo, Madagascar",
    "email-href": "bbcwsafrica@bbc.co.uk"
}, {
    "country": "Namibia",
    "station": "NBC German\n\n      Das Deutsche...",
    "location": "",
    "email-href": "gssecretary@nbc.na"
}, {
    "country": "Ghana",
    "station": "Angel FM\n\n      English",
    "location": "",
    "email-href": "info@angelfmonline.com"
}, {
    "country": "Cote D'ivoire",
    "station": "BBC World Service Abidjan\n\n      BBC World Service is the...",
    "location": "",
    "email-href": "worldservice@bbc.co.uk"
}, {
    "country": "Algeria",
    "station": "Radio El Bahdja\n\n      بعد الشدة - تجي الفرجة مع إذاعة البهجة",
    "location": "",
    "email-href": "info@algerian-radio.dz"
}, {
    "country": "Madagascar",
    "station": "Ma-FM\n\n      Multilingual",
    "location": "Antananarivo, Madagascar",
    "email-href": "sidonie@matv.mg"
}, {
    "country": "Malawi",
    "station": "Radio Tigabane\n\n      Radio Tigabane is a...",
    "location": "Mzuzu, Malawi",
    "email-href": "tigabane@mzuzu.org"
}, {
    "country": "Seychelles",
    "station": "SBC Paradise FM\n\n      Paradise FM broadcasts 24...",
    "location": "",
    "email-href": "Paradise.FM@sbc.sc"
}, {
    "country": "Togo",
    "station": "Radio Lome\n\n      La Station Du Plaisir",
    "location": "Lomé, Togo",
    "email-href": "radiolome@radiolome.tg"
}, {
    "country": "Mauritius",
    "station": "MBC Taal FM\n\n      The Mauritius Broadcasting...",
    "location": "Port Louis, Mauritius",
    "email-href": "customercare@mbc.intnet.mu"
}, {
    "country": "Tanzania",
    "station": "Radio Adhana\n\n      Swahili",
    "location": "",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=210742"
}, {
    "country": "Mauritius",
    "station": "Rock Mauritius Radio\n\n      Rock Mauritius Radio is...",
    "location": "",
    "email-href": "contact@rockmauritius.tk"
}, {
    "country": "Tanzania",
    "station": "EBONY FM\n\n      feel the difference",
    "location": "Iringa, Tanzania",
    "email-href": "info@ebonyfm.com"
}]

arrays.forEach(function(item) {
    //s = s.substring(0, s.indexOf('?'));
    //var first = regexLabelOut.replace(/,.*/g, "");
    item.station = item.station.substring(0, item.station.indexOf('  '));
    item.station = item.station.replace(/\n/g, "");
    item.location = item.location.substring(0, item.location.indexOf(','));
   
    	location= item.location 
    	country= item.country
    	station= item.station
    	email =item["email-href"]
   data = {location,country,station,email}
    

    //console.log(item.station)

    fs.appendFile("africa_csv_to_json_final.json", JSON.stringify(data), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });

})





//csvjson.toObject('./africa.csv').save('./sample_afri.json');

// var break_euro_csv = function(filename){
//     var csv_buffer = fs.readFileSync(filename);
//     var csv_string = csv_buffer.toString()//.replace(/\n\n/g, '$');
//     var csv_rows = csv_string.split('\n\n');

//     var csv_array_map = csv_rows.map(function(row){

//         var fields = row.split(',');

//             return {
//             "country": fields[0],
//             "station": fields[1],
//             "location": fields[2],
//             "email-href": fields[3]
//         }
//     });

//     for(var k = 0; k < csv_array_map.length-1; k++){
//         csv_array_map[k]["station"] = csv_array_map[k]["station"].substring(csv_array_map[k]["station"].indexOf('$')-1, csv_array_map[k]["station"].indexOf('"')+1);
//     }

//     return csv_array_map;
// }

// var insert_fieldToEuro = function(euro_array){
//     // var 
// }


// var euro_array = break_euro_csv("./africa.csv");
// console.log(euro_array);
// fs.writeFile("african_final.json", JSON.stringify(euro_array), function(err) {
//                 if (err) {
//                     return console.log(err);
//                 }
//                 console.log("The file was saved!");
// });