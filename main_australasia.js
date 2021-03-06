var test = require('blue-tape');
var getCoords = require('city-to-coords');
var json2csv = require('json2csv');
var fs = require('fs')
var csvjson = require('csvjson');

var cities = [
    "location",
    "Hamilton",
    "Queensland",
    "Nelson",
    "Invercargill",
    "Rotorua",
    "Tasmania",
    "New Plymouth",
    "Tauranga",
    "Saipan",
    "Hamilton",
    "Pago Pago",
    "Gisborne",
    "Invercargill",
    "Victoria",
    "Wanganui",
    "Queenstown",
    "Victoria",
    "South Australia",
    "More in...",
    "Wanganui",
    "Queenstown",
    "Australian Capital Territory",
    "Whakatane",
    "Tasmania",
    "Otago",
    "Queenstown",
    "More in...",
    "Queensland",
    "Whangarei",
    "Western Australia",
    "More in...",
    "Hastings",
    "Wellington",
    "Western Australia",
    "Western Australia",
    "Saipan",
    "More in...",
    "South Australia",
    "Tasmania",
    "New South Wales",
    "Dunedin",
    "New South Wales",
    "Palmerston North",
    "Pago Pago",
    "Queenstown",
    "More in...",
    "Whakatane",
    "More in...",
    "New South Wales",
    "Western Australia",
    "Invercargill",
    "Timaru",
    "Tauranga",
    "Victoria",
    "Dunedin",
    "Timaru",
    "Dunedin",
    "Pago Pago",
    "Western Australia",
    "Christchurch",
    "Nelson",
    "Palmerston North",
    "Queensland",
    "Tauranga",
    "More in...",
    "More in...",
    "Palmerston North",
    "Wellington",
    "More in...",
    "Whakatane",
    "More in...",
    "Rotorua",
    "Tauranga",
    "Western Australia",
    "Victoria",
    "Whangarei",
    "Wellington",
    "Whangarei",
    "Australian Capital Territory",
    "Western Australia",
    "New South Wales",
    "Timaru",
    "Christchurch",
    "Invercargill",
    "Rotorua",
    "Queensland",
    "Wanganui",
    "Tasmania",
    "Queensland",
    "New South Wales",
    "Victoria",
    "Queenstown",
    "Tauranga",
    "Dunedin",
    "Gisborne",
    "Victoria",
    "South Australia",
    "Hamilton",
    "Auckland",
    "Pago Pago",
    "Pago Pago",
    "Saipan",
    "Whangarei",
    "South Australia",
    "Queenstown",
    "Wanganui",
    "Gisborne",
    "Timaru",
    "Auckland",
    "Queensland",
    "New South Wales",
    "More in...",
    "Pago Pago",
    "More in...",
    "Victoria",
    "More in...",
    "Victoria",
    "Victoria",
    "New South Wales",
    "Otago",
    "Christchurch",
    "Tasmania",
    "Western Australia",
    "Saipan",
    "Victoria",
    "Pago Pago",
    "Gisborne",
    "Invercargill",
    "Hastings",
    "More in...",
    "More in...",
    "Queensland",
    "Tauranga",
    "New South Wales",
    "Tauranga",
    "Victoria",
    "Invercargill",
    "New Plymouth",
    "Victoria",
    "Whangarei",
    "Tasmania",
    "New Plymouth",
    "Queensland",
    "New Plymouth",
    "New South Wales",
    "Queensland",
    "Queensland",
    "Gisborne",
    "Wanganui",
    "Christchurch",
    "Dunedin",
    "More in...",
    "Tasmania",
    "Australian Capital Territory",
    "Gisborne",
    "Palmerston North",
    "Whakatane",
    "Rotorua",
    "Tauranga",
    "Wellington",
    "New Plymouth",
    "Hastings",
    "Christchurch",
    "New South Wales",
    "Nelson",
    "More in...",
    "Tasmania",
    "Auckland",
    "New Plymouth",
    "Queensland",
    "Rotorua",
    "Ruatoria",
    "Hastings",
    "Timaru",
    "Palmerston North",
    "Wanganui",
    "Otago",
    "Nelson",
    "Western Australia",
    "Auckland",
    "Victoria",
    "Christchurch",
    "Hastings",
    "Nelson",
    "Timaru",
    "Pago Pago",
    "Otago",
    "Timaru",
    "Whakatane",
    "Western Australia",
    "Western Australia",
    "South Australia",
    "Whakatane",
    "New Plymouth",
    "Western Australia",
    "Auckland",
    "Queenstown",
    "Saipan",
    "Nelson",
    "Auckland",
    "Western Australia",
    "Western Australia",
    "Saipan",
    "Western Australia",
    "Christchurch",
    "Pago Pago",
    "New South Wales",
    "Queensland",
    "Tasmania",
    "Timaru",
    "Wanganui",
    "Tasmania",
    "Victoria",
    "More in...",
    "More in...",
    "New South Wales",
    "Whakatane",
    "Hastings",
    "Western Australia",
    "Dunedin",
    "Wanganui",
    "New South Wales",
    "Victoria",
    "Tauranga",
    "New Plymouth",
    "More in...",
    "New Plymouth",
    "Wanganui",
    "Hamilton",
    "Wellington",
    "New Plymouth",
    "Queensland",
    "South Australia",
    "Tauranga",
    "Western Australia",
    "Palmerston North",
    "Nelson",
    "Victoria",
    "Port Moresby",
    "Wellington",
    "Victoria",
    "Western Australia",
    "Western Australia",
    "Western Australia",
    "Wellington",
    "Tauranga",
    "Western Australia",
    "Dunedin",
    "Auckland",
    "Dunedin",
    "New South Wales",
    "Tasmania",
    "Queensland",
    "Wanganui",
    "Whangarei",
    "More in...",
    "Gisborne",
    "New South Wales",
    "Queenstown",
    "Western Australia",
    "Tauranga",
    "Tasmania",
    "Invercargill",
    "More in...",
    "Auckland",
    "Timaru",
    "Queenstown",
    "Pago Pago",
    "Hamilton",
    "Queensland",
    "Rotorua",
    "Saipan",
    "Western Australia",
    "More in...",
    "Queenstown",
    "New South Wales",
    "Auckland",
    "Pago Pago",
    "New Plymouth",
    "Palmerston North",
    "Palmerston North",
    "More in...",
    "Queensland",
    "Victoria",
    "New South Wales",
    "Hastings",
    "Pago Pago",
    "Pago Pago",
    "Tauranga",
    "Saipan",
    "Tauranga",
    "Palmerston North",
    "Christchurch",
    "More in...",
    "Wanganui",
    "Western Australia",
    "Whangarei",
    "Whakatane",
    "New South Wales",
    "More in...",
    "Western Australia",
    "Hamilton",
    "More in...",
    "New South Wales",
    "Timaru",
    "Rotorua",
    "Queenstown",
    "New Plymouth",
    "Queensland",
    "Wellington",
    "Wellington",
    "Palmerston North",
    "Invercargill",
    "Palmerston North",
    "Christchurch",
    "Invercargill",
    "Whangarei",
    "Dunedin",
    "Tasmania",
    "Timaru",
    "New Plymouth",
    "More in...",
    "South Australia",
    "New South Wales",
    "Rotorua",
    "Gisborne",
    "Port Moresby",
    "Auckland",
    "Victoria",
    "Whakatane",
    "New South Wales",
    "Gisborne",
    "Gisborne",
    "Pago Pago",
    "Wellington",
    "Whakatane",
    "Saipan",
    "Invercargill",
    "Whangarei",
    "Wellington",
    "Christchurch",
    "Whangarei",
    "New South Wales",
    "Western Australia",
    "Victoria",
    "Western Australia",
    "Saipan",
    "Rotorua",
    "Palmerston North",
    "Saipan",
    "Saipan",
    "Gisborne",
    "Western Australia",
    "New South Wales",
    "Hastings",
    "Western Australia",
    "Palmerston North",
    "South Australia",
    "Whangarei",
    "South Australia",
    "Tasmania",
    "Whakatane",
    "Victoria",
    "Western Australia",
    "Wellington",
    "Tasmania",
    "More in...",
    "Western Australia",
    "Whangarei",
    "More in...",
    "Palmerston North",
    "Victoria",
    "Western Australia",
    "New South Wales",
    "More in...",
    "Whakatane",
    "South Australia",
    "Western Australia",
    "Gisborne",
    "Queenstown",
    "New Plymouth",
    "Port Moresby",
    "Northern Territory",
    "Western Australia",
    "New South Wales",
    "Auckland",
    "Dunedin",
    "Hamilton",
    "Rotorua",
    "Dunedin",
    "Queenstown",
    "Queensland",
    "Queenstown",
    "South Australia",
    "New Plymouth",
    "Nelson",
    "Rotorua",
    "Gisborne",
    "New South Wales",
    "Queenstown",
    "Nelson",
    "Northern Territory",
    "Queensland",
    "New Plymouth",
    "Wanganui",
    "Western Australia",
    "More in...",
    "Northern Territory",
    "Saipan",
    "Queensland",
    "New South Wales",
    "Hastings",
    "South Australia",
    "South Australia",
    "Port Moresby",
    "Queensland",
    "Wanganui",
    "Australian Capital Territory",
    "More in...",
    "New South Wales",
    "Auckland",
    "Hastings",
    "South Australia",
    "Western Australia",
    "Queensland",
    "New South Wales",
    "Western Australia",
    "Wellington",
    "Port Moresby",
    "Victoria",
    "Rotorua",
    "Queenstown",
    "Wanganui",
    "Tauranga",
    "Pago Pago",
    "Port Moresby",
    "Whakatane",
    "Wellington",
    "Queensland",
    "Dunedin",
    "Victoria",
    "More in...",
    "Wanganui",
    "Pago Pago",
    "Hastings",
    "Australian Capital Territory",
    "Wanganui",
    "Saipan",
    "Western Australia",
    "Rotorua",
    "Pago Pago",
    "Wellington",
    "More in...",
    "Christchurch",
    "Queensland",
    "Auckland",
    "Western Australia",
    "Whakatane",
    "Victoria",
    "More in...",
    "Tasmania",
    "Saipan",
    "More in...",
    "New South Wales",
    "Nelson",
    "Tasmania",
    "Tasmania",
    "More in...",
    "Port Moresby",
    "Hastings",
    "Timaru",
    "Nelson",
    "Auckland",
    "Timaru",
    "Queenstown",
    "South Australia",
    "New Plymouth",
    "Christchurch",
    "Western Australia",
    "South Australia",
    "Victoria",
    "Nelson",
    "More in...",
    "More in...",
    "Whakatane",
    "Hastings",
    "South Australia",
    "Whangarei",
    "Victoria",
    "Tauranga",
    "Christchurch",
    "More in...",
    "Hastings",
    "Queensland",
    "Victoria",
    "South Australia",
    "Pago Pago",
    "Victoria",
    "Queensland",
    "Victoria",
    "More in...",
    "Wellington",
    "Whangarei",
    "Pago Pago",
    "Victoria",
    "Nelson",
    "Western Australia",
    "Invercargill",
    "Northern Territory",
    "Timaru",
    "Victoria",
    "More in...",
    "Tasmania",
    "Auckland",
    "Queenstown",
    "New Plymouth",
    "Saipan",
    "More in...",
    "Saipan",
    "Invercargill",
    "New Plymouth",
    "New South Wales",
    "Tauranga",
    "Invercargill",
    "Tasmania",
    "Christchurch",
    "Whangarei",
    "Hastings",
    "Western Australia",
    "More in...",
    "Gisborne",
    "Timaru",
    "Hamilton",
    "More in...",
    "Otago",
    "More in...",
    "Northern Territory",
    "Rotorua",
    "Nelson",
    "Tauranga",
    "Hamilton",
    "Christchurch",
    "Christchurch",
    "Dunedin",
    "Ruatoria",
    "Tasmania",
    "Queensland",
    "Wanganui",
    "Western Australia",
    "More in...",
    "Invercargill",
    "Whakatane",
    "Hastings",
    "Invercargill",
    "Tauranga",
    "More in...",
    "Whangarei",
    "Saipan",
    "Pago Pago",
    "More in...",
    "Hamilton",
    "South Australia",
    "Queensland",
    "New Plymouth",
    "New South Wales",
    "Victoria",
    "Nelson",
    "More in...",
    "Whakatane",
    "Auckland",
    "Port Moresby",
    "Invercargill",
    "New South Wales",
    "Wellington",
    "Gisborne",
    "Otago",
    "Hastings",
    "Christchurch",
    "Christchurch",
    "Wellington",
    "Invercargill",
    "More in...",
    "Wellington",
    "Timaru",
    "New South Wales",
    "More in...",
    "Hastings",
    "Tauranga",
    "Auckland",
    "Hamilton",
    "Gisborne",
    "Tasmania",
    "Ruatoria",
    "Wellington",
    "Wanganui",
    "Hamilton",
    "Dunedin",
    "Victoria",
    "Christchurch",
    "More in...",
    "Dunedin",
    "Nelson",
    "Hamilton",
    "Timaru",
    "Timaru",
    "New Plymouth",
    "New South Wales",
    "More in...",
    "Western Australia",
    "Pago Pago",
    "Western Australia",
    "Nelson",
    "Dunedin",
    "Wanganui",
    "Victoria",
    "Western Australia",
    "Hamilton",
    "Western Australia",
    "Wanganui",
    "Palmerston North",
    "New South Wales",
    "More in...",
    "Whakatane",
    "Victoria",
    "Port Moresby",
    "Nelson",
    "Whakatane",
    "Nelson",
    "Palmerston North",
    "Rotorua",
    "Tasmania",
    "Victoria",
    "Port Moresby",
    "Christchurch",
    "Rotorua",
    "Palmerston North",
    "Gisborne",
    "Port Moresby",
    "Tauranga",
    "More in...",
    "Port Moresby",
    "Western Australia",
    "Timaru",
    "Dunedin",
    "Auckland",
    "Dunedin",
    "Western Australia",
    "Auckland",
    "Invercargill",
    "Queenstown",
    "Invercargill",
    "Christchurch",
    "Gisborne",
    "More in...",
    "More in...",
    "New South Wales",
    "Queensland",
    "Invercargill",
    "New South Wales",
    "Tasmania",
    "Northern Territory",
    "Nelson",
    "New South Wales",
    "Port Moresby",
    "Wanganui",
    "Palmerston North",
    "Victoria",
    "More in...",
    "Victoria",
    "Nelson",
    "Queenstown",
    "Victoria",
    "Victoria",
    "Hastings",
    "Port Moresby",
    "Rotorua",
    "New South Wales",
    "Western Australia",
    "New South Wales",
    "Port Moresby",
    "Dunedin",
    "More in...",
    "Port Moresby",
    "Saipan",
    "Auckland",
    "Whangarei",
    "Port Moresby",
    "Queensland",
    "South Australia",
    "Gisborne",
    "Whakatane",
    "Western Australia",
    "Invercargill",
    "Western Australia",
    "Western Australia",
    "Gisborne",
    "Dunedin",
    "Western Australia",
    "Whangarei",
    "Saipan",
    "Whakatane",
    "Gisborne",
    "Port Moresby",
    "Timaru",
    "South Australia",
    "Rotorua",
    "Auckland",
    "Whangarei",
    "Australian Capital Territory",
    "Saipan",
    "Hastings",
    "Timaru",
    "New South Wales",
    "Dunedin",
    "More in...",
    "Hastings",
    "More in...",
    "Hamilton",
    "Whangarei",
    "Whangarei",
    "Wellington",
    "Victoria",
    "Queenstown"


]



arrays = [{
    "country": "New Zealand",
    "location": "Hamilton",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Queensland",
    "station": "97.3 FM\n\n      Brisbane's Widest Variety of Music from the '80's to Now",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Nelson",
    "station": "Fresh FM\n\n      Radio By, For and About the Top of the South",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Invercargill",
    "station": "Radio Hauraki\n\n      Radio Hauraki is a rock...",
    "email-href": "mailto:team@hauraki.co.nz"
}, {
    "country": "New Zealand",
    "location": "Rotorua",
    "station": "Pumanawa FM\n\n      English",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Tasmania",
    "station": "Kinderling Kids Radio\n\n      Kids Radio is here!",
    "email-href": "mailto:hello@kinderling.com.au"
}, {
    "country": "New Zealand",
    "location": "New Plymouth",
    "station": "Most FM\n\n      Taranaki's Alternative Radio Station",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Tauranga",
    "station": "Chase FM Paeroa\n\n      Broadcasting since 9th...",
    "email-href": "mailto:chasefm@hotmail.com"
}, {
    "country": "Northern Mariana Islands",
    "location": "Saipan",
    "station": "KPRG\n\n      Public Radio For Guam",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Hamilton",
    "station": "More FM Waikato\n\n      Live it. Love it. Sing it!",
    "email-href": ""
}, {
    "country": "American Samoa",
    "location": "Pago Pago",
    "station": "KKBT\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Gisborne",
    "station": "Radio New Zealand Concert\n\n      Radio New Zealand's fine music network",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Invercargill",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "Magic 1278\n\n      Playing The Best Songs Of All Time",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wanganui",
    "station": "RadioLIVE\n\n      The New Voice of Talk Radio",
    "email-href": "mailto:rfullard@radiolive.co.nz"
}, {
    "country": "New Zealand",
    "location": "Queenstown",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "PBS-FM\n\n      Home of Little Heard Music",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "South Australia",
    "station": "Triple M Adelaide\n\n      Triple M Adelaide 104.7 is real music.",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "More in...",
    "station": "Velvet Deluxe\n\n      The Home of Luxury Listening",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wanganui",
    "station": "Brian FM Whanganui\n\n      Playing what we feel like",
    "email-href": "mailto:brian@brianfm.com"
}, {
    "country": "New Zealand",
    "location": "Queenstown",
    "station": "Radio Wanaka\n\n      English",
    "email-href": "mailto:info@wanakalive.com"
}, {
    "country": "Australia",
    "location": "Australian Capital Territory",
    "station": "Mix 106.3\n\n      Canberra's Best Mix",
    "email-href": "mailto:gkingston@mix106.com.au"
}, {
    "country": "New Zealand",
    "location": "Whakatane",
    "station": "Radio New Zealand Concert\n\n      Radio New Zealand's fine music network",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Tasmania",
    "station": "SBS PopDesi\n\n      non-stop Desi pop",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Otago",
    "station": "The HAWK\n\n      The best rock and pop classics",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Queenstown",
    "station": "George FM\n\n      beats working...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "More in...",
    "station": "Ski FM\n\n      Today's Hottest Hit Music",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Queensland",
    "station": "ABC Gold Coast\n\n      News, talk, music,...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Whangarei",
    "station": "Big River FM\n\n      \"The Voice Of The Kaipara\"",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "ABC Country\n\n      Australia's home of country music",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "More in...",
    "station": "Radio Samoa\n\n      Radio Samoa in its 12th...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Hastings",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wellington",
    "station": "Brian FM Marlborough\n\n      Playing what we feel like",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "hit 92.9\n\n      Perth's Number 1 Hit Music Station",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "Koffee\n\n      Time to Chill",
    "email-href": ""
}, {
    "country": "Northern Mariana Islands",
    "location": "Saipan",
    "station": "KPRG\n\n      Public Radio For Guam",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=43744"
}, {
    "country": "Federated States of Micronesia",
    "location": "More in...",
    "station": "Baptist Radio\n\n      English",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "South Australia",
    "station": "Mix 102.3\n\n      Adelaide's Widest Variety of Music",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Tasmania",
    "station": "936 ABC Hobart\n\n      Telling your stories, giving you a voice.",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=9117"
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "Energy Groove Australia\n\n      The power of big sound, the beat of great music.",
    "email-href": "mailto:info@energy-groove.com.au"
}, {
    "country": "New Zealand",
    "location": "Dunedin",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "702 ABC Sydney\n\n      News and information,...",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=9118"
}, {
    "country": "New Zealand",
    "location": "Palmerston North",
    "station": "More FM Manawatu\n\n      Live it. Love it. Sing it!",
    "email-href": ""
}, {
    "country": "American Samoa",
    "location": "Pago Pago",
    "station": "93KHJ\n\n      American Samoa's #1 Hit Music Station",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Queenstown",
    "station": "Local Radio Central\n\n      Local Radio Central",
    "email-href": "mailto:alexandra@localradiocentral.nz"
}, {
    "country": "Australia",
    "location": "More in...",
    "station": "SBS Chill\n\n      Chill - World Music",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Whakatane",
    "station": "Tumeke FM\n\n      English",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=118788"
}, {
    "country": "Australia",
    "location": "More in...",
    "station": "MyMP\n\n      English",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "2UE\n\n      Join The Conversation",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "triple j Unearthed\n\n      triple j Unearthed - Listen, download, discover",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Invercargill",
    "station": "Niu FM\n\n      English",
    "email-href": "mailto:info@niufm.com"
}, {
    "country": "New Zealand",
    "location": "Timaru",
    "station": "The Sound\n\n      The Soundtrack Of Our Lives",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Tauranga",
    "station": "Kiss-FM\n\n      Mt Maunganui's home of Old School and New School Rock!",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "KIIS 101.1\n\n      The widest variety from 2K to today",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Dunedin",
    "station": "Niu FM\n\n      English",
    "email-href": "mailto:info@niufm.com"
}, {
    "country": "New Zealand",
    "location": "Timaru",
    "station": "The Sound\n\n      The Soundtrack Of Our Lives",
    "email-href": "mailto:studio@thesound.co.nz"
}, {
    "country": "New Zealand",
    "location": "Dunedin",
    "station": "Niu FM\n\n      English",
    "email-href": ""
}, {
    "country": "American Samoa",
    "location": "Pago Pago",
    "station": "KKBT\n\n      English",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=153362"
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "triple j Unearthed\n\n      triple j Unearthed - Listen, download, discover",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=144851"
}, {
    "country": "New Zealand",
    "location": "Christchurch",
    "station": "Dave FM\n\n      Uninterrupted 70's, 80's and 90s!",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Nelson",
    "station": "More FM Nelson\n\n      Today's Best Music Mix",
    "email-href": "mailto:nelson@morefm.co.nz"
}, {
    "country": "New Zealand",
    "location": "Palmerston North",
    "station": "More FM Manawatu\n\n      Live it. Love it. Sing it!",
    "email-href": "mailto:feedback@morefm.co.nz"
}, {
    "country": "Australia",
    "location": "Queensland",
    "station": "96five Family Radio\n\n      Family's Number One!",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Tauranga",
    "station": "Coast\n\n      Love the Music",
    "email-href": ""
}, {
    "country": "Federated States of Micronesia",
    "location": "More in...",
    "station": "V6AH\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "More in...",
    "station": "Radio Samoa\n\n      Radio Samoa in its 12th...",
    "email-href": "mailto:info@radiosamoa.co.nz"
}, {
    "country": "New Zealand",
    "location": "Palmerston North",
    "station": "Access Manawatu\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wellington",
    "station": "Beach FM\n\n      We are a completely live...",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "More in...",
    "station": "Fine Music Digital\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Whakatane",
    "station": "RadioLIVE\n\n      The New Voice of Talk Radio",
    "email-href": "mailto:rfullard@radiolive.co.nz"
}, {
    "country": "Federated States of Micronesia",
    "location": "More in...",
    "station": "V6AI\n\n      English",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=45271"
}, {
    "country": "New Zealand",
    "location": "Rotorua",
    "station": "DA Bomb Tokoroa\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Tauranga",
    "station": "Kiss-FM\n\n      Mt Maunganui's home of Old School and New School Rock!",
    "email-href": "mailto:kissfm@xtra.co.nz"
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "96FM\n\n      Keep Real Music Alive",
    "email-href": "mailto:96fmonline@96fm.com.au"
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "RN - ABC Radio National\n\n      The ideas network.",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Whangarei",
    "station": "FLAVA\n\n      NZ's Home of Hip Hop & RnB",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wellington",
    "station": "Brian FM Marlborough\n\n      Playing what we feel like",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Whangarei",
    "station": "Magic Music FM\n\n      The Little Station With The Big Sound",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=87355"
}, {
    "country": "Australia",
    "location": "Australian Capital Territory",
    "station": "Mix 106.3\n\n      Canberra's Best Mix",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "96Five Family Radio Digital\n\n      English",
    "email-href": "mailto:socialmedia@96five.com"
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "Hope 103.2\n\n      Sydney's Contemporary Christian Radio Station",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Timaru",
    "station": "Radio New Zealand Concert\n\n      Radio New Zealand's fine music network",
    "email-href": "mailto:concert@radionz.co.nz"
}, {
    "country": "New Zealand",
    "location": "Christchurch",
    "station": "Dave FM\n\n      Uninterrupted 70's, 80's and 90s!",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Invercargill",
    "station": "Life FM\n\n      Live it loud",
    "email-href": "mailto:Studio@lifefm.co.nz"
}, {
    "country": "New Zealand",
    "location": "Rotorua",
    "station": "Niu FM\n\n      English",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Queensland",
    "station": "Radio Metro\n\n      It's all about the music!",
    "email-href": "mailto:Info@radiometro.com.au"
}, {
    "country": "New Zealand",
    "location": "Wanganui",
    "station": "More FM Wanganui\n\n      More Music Variety",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Tasmania",
    "station": "Way FM\n\n      On The Right Track",
    "email-href": "mailto:wayinfo@wayfm.org.au"
}, {
    "country": "Australia",
    "location": "Queensland",
    "station": "Magic 882\n\n      The Songs You Know & Love",
    "email-href": "mailto:admin@magic882.com.au"
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "KIIS 106.5\n\n      English",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "KIIS 101.1\n\n      The widest variety from 2K to today",
    "email-href": "mailto:info@mix1011.com.au"
}, {
    "country": "New Zealand",
    "location": "Queenstown",
    "station": "George FM\n\n      beats working...",
    "email-href": "mailto:studio@georgefm.co.nz"
}, {
    "country": "New Zealand",
    "location": "Tauranga",
    "station": "George FM\n\n      beats working...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Dunedin",
    "station": "Life FM\n\n      Live it loud",
    "email-href": "mailto:Studio@lifefm.co.nz"
}, {
    "country": "New Zealand",
    "location": "Gisborne",
    "station": "Radio Hauraki\n\n      Radio Hauraki is a rock...",
    "email-href": "mailto:team@hauraki.co.nz"
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "Fox hit 101.9\n\n      Hits. Always.",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "South Australia",
    "station": "FIVEaa AM\n\n      Adelaide's Leading Talk Station",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Hamilton",
    "station": "George FM\n\n      beats working...",
    "email-href": "mailto:studio@georgefm.co.nz"
}, {
    "country": "New Zealand",
    "location": "Auckland",
    "station": "Boosh FM\n\n      Dubstep/DnB to...",
    "email-href": ""
}, {
    "country": "American Samoa",
    "location": "Pago Pago",
    "station": "KGIF\n\n      English",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=156566"
}, {
    "country": "American Samoa",
    "location": "Pago Pago",
    "station": "KKBT\n\n      English",
    "email-href": ""
}, {
    "country": "Northern Mariana Islands",
    "location": "Saipan",
    "station": "Magic 100.3\n\n      English",
    "email-href": "mailto:kwaw100.3@magic100radio.com"
}, {
    "country": "New Zealand",
    "location": "Whangarei",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=229007"
}, {
    "country": "Australia",
    "location": "South Australia",
    "station": "FIVEaa AM\n\n      Adelaide's Leading Talk Station",
    "email-href": "mailto:onair@fiveaa.com.au"
}, {
    "country": "New Zealand",
    "location": "Queenstown",
    "station": "Port Fm\n\n      The Music Leader",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wanganui",
    "station": "Awa FM\n\n      Connecting people to the river",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Gisborne",
    "station": "Radio Hauraki\n\n      Radio Hauraki is a rock...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Timaru",
    "station": "The Rock\n\n      The Rock - cranking out...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Auckland",
    "station": "blurFM\n\n      Keep It Locked.",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Queensland",
    "station": "97.3 FM\n\n      Brisbane's Widest Variety of Music from the '80's to Now",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "Triple M Sydney\n\n      Sydney's Modern Rock",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "More in...",
    "station": "ABC Jazz\n\n      Australia's only 24/7 jazz...",
    "email-href": ""
}, {
    "country": "American Samoa",
    "location": "Pago Pago",
    "station": "KGIF\n\n      English",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "More in...",
    "station": "SBS Chill\n\n      Chill - World Music",
    "email-href": "mailto:chill@sbs.com.au"
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "Kiss FM\n\n      Dance Music Radio",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "More in...",
    "station": "Fine Music Digital\n\n      English",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "ABC Classic FM\n\n      ABC Classic FM - The world's most beautiful music",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=53416"
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "RSN Racing & Sport\n\n      Racing & Sport",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "2UE\n\n      Join The Conversation",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Otago",
    "station": "Port Fm\n\n      The Music Leader",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Christchurch",
    "station": "Akaroa Radio\n\n      Akaroa Community Radio",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Tasmania",
    "station": "SBS PopDesi\n\n      non-stop Desi pop",
    "email-href": "mailto:comments@sbs.com.au"
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "6PR\n\n      Your City, Your Station!",
    "email-href": ""
}, {
    "country": "Northern Mariana Islands",
    "location": "Saipan",
    "station": "KKMP\n\n      English",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "Magic 1278\n\n      Playing The Best Songs Of All Time",
    "email-href": ""
}, {
    "country": "American Samoa",
    "location": "Pago Pago",
    "station": "93KHJ\n\n      American Samoa's #1 Hit Music Station",
    "email-href": "mailto:sunrise@khjradio.com"
}, {
    "country": "New Zealand",
    "location": "Gisborne",
    "station": "RadioLIVE\n\n      The New Voice of Talk Radio",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Invercargill",
    "station": "Life FM\n\n      Live it loud",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Hastings",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": ""
}, {
    "country": "Federated States of Micronesia",
    "location": "More in...",
    "station": "V6BC\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "More in...",
    "station": "Radio Waatea\n\n      Urban Maori Radio Listen",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Queensland",
    "station": "Triple M Brisbane\n\n      Brisbane's Widest Variety of Music",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=8764"
}, {
    "country": "New Zealand",
    "location": "Tauranga",
    "station": "bollybop\n\n      bollybop 105.4FM is...",
    "email-href": "mailto:studio@bollybop.co.nz"
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "2UE\n\n      Join The Conversation",
    "email-href": "mailto:programs@2ue.com.au"
}, {
    "country": "New Zealand",
    "location": "Tauranga",
    "station": "Coast\n\n      Love the Music",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "3AW\n\n      News Talk",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Invercargill",
    "station": "Hokonui\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "New Plymouth",
    "station": "Cruize Taranaki 105.2 Fm\n\n      No Jocks Just Music",
    "email-href": "mailto:matt@bigmedia.co.nz"
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "SEN Sports\n\n      Melbourne's Home of Sport",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Whangarei",
    "station": "Life FM\n\n      Live it loud",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Tasmania",
    "station": "SBS Radio 3\n\n      Without Out Differences, We Wouldn't Be The Same",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "New Plymouth",
    "station": "Access Radio Taranaki\n\n      Your Voice, Your Choice.",
    "email-href": "mailto:voice@accessradiotaranaki.com"
}, {
    "country": "Australia",
    "location": "Queensland",
    "station": "97.3 FM\n\n      Brisbane's Widest Variety of Music from the '80's to Now",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=102935"
}, {
    "country": "New Zealand",
    "location": "New Plymouth",
    "station": "More FM Taranaki\n\n      More Music Variety",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "Sky Sports Radio\n\n      Your Racing & Sports Radio Station",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=7004"
}, {
    "country": "Australia",
    "location": "Queensland",
    "station": "4BC\n\n      Brisbane's Own 4BC.",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Queensland",
    "station": "612 ABC Brisbane\n\n      News, talk, entertainment...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Gisborne",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wanganui",
    "station": "The Rock\n\n      The Rock - cranking out...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Christchurch",
    "station": "FLAVA\n\n      NZ's Home of Hip Hop & RnB",
    "email-href": "mailto:flava@flava.co.nz"
}, {
    "country": "New Zealand",
    "location": "Dunedin",
    "station": "Country Radio Dunedin\n\n      Playing the worlds best country music...",
    "email-href": "mailto:countryradio@gmail.com"
}, {
    "country": "New Zealand",
    "location": "More in...",
    "station": "Ski FM\n\n      Today's Hottest Hit Music",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Tasmania",
    "station": "SBS PopDesi\n\n      non-stop Desi pop",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Australian Capital Territory",
    "station": "Mix 106.3\n\n      Canberra's Best Mix",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Gisborne",
    "station": "The Edge\n\n      Hit Music Now",
    "email-href": "mailto:theedge@theedge.co.nz"
}, {
    "country": "New Zealand",
    "location": "Palmerston North",
    "station": "Arrow FM\n\n      One Of 12 Community Access Radio Stations in New Zealand",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Whakatane",
    "station": "Radio New Zealand National\n\n      Radio New Zealand...",
    "email-href": "mailto:rnz@radionz.co.nz"
}, {
    "country": "New Zealand",
    "location": "Rotorua",
    "station": "FLAVA\n\n      NZ's Home of Hip Hop & RnB",
    "email-href": "mailto:flava@flava.co.nz"
}, {
    "country": "New Zealand",
    "location": "Tauranga",
    "station": "bollybop\n\n      bollybop 105.4FM is...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wellington",
    "station": "Beach FM\n\n      We are a completely live...",
    "email-href": "mailto:beachfm@kapiti.co.nz"
}, {
    "country": "New Zealand",
    "location": "New Plymouth",
    "station": "FLAVA\n\n      NZ's Home of Hip Hop & RnB",
    "email-href": "mailto:flava@flava.co.nz"
}, {
    "country": "New Zealand",
    "location": "Hastings",
    "station": "Niu FM\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Christchurch",
    "station": "Just FM\n\n      Kaiapoi's Community Station",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "Easy 1170\n\n      All the hits you love and know",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Nelson",
    "station": "Radio New Zealand Concert\n\n      Radio New Zealand's fine music network",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "More in...",
    "station": "SBS Chill\n\n      Chill - World Music",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Tasmania",
    "station": "Kinderling Kids Radio\n\n      Kids Radio is here!",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Auckland",
    "station": "Boosh FM\n\n      Dubstep/DnB to...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "New Plymouth",
    "station": "Access Radio Taranaki\n\n      Your Voice, Your Choice.",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Queensland",
    "station": "ABC Gold Coast\n\n      News, talk, music,...",
    "email-href": "mailto:coastfm@abc.net.au"
}, {
    "country": "New Zealand",
    "location": "Rotorua",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Ruatoria",
    "station": "Radio Ngati Porou\n\n      Te Reo O Te Iwi",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Hastings",
    "station": "Niu FM\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Timaru",
    "station": "Port Fm\n\n      The Music Leader",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Palmerston North",
    "station": "Access Manawatu\n\n      English",
    "email-href": "mailto:info@accessmanawatu.co.nz"
}, {
    "country": "New Zealand",
    "location": "Wanganui",
    "station": "The Rock\n\n      The Rock - cranking out...",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=87203"
}, {
    "country": "New Zealand",
    "location": "Otago",
    "station": "Port Fm\n\n      The Music Leader",
    "email-href": "mailto:portfmstudio@xtra.co.nz"
}, {
    "country": "New Zealand",
    "location": "Nelson",
    "station": "Life FM\n\n      Live it loud",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "SBS PopAsia\n\n      Non-Stop Asian Pop",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Auckland",
    "station": "Botany Radio\n\n      English",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "RN - ABC Radio National\n\n      The ideas network.",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Christchurch",
    "station": "Just FM\n\n      Kaiapoi's Community Station",
    "email-href": "mailto:INFO@JUSTFM.CO.NZ"
}, {
    "country": "New Zealand",
    "location": "Hastings",
    "station": "Radio Hauraki\n\n      Radio Hauraki is a rock...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Nelson",
    "station": "RadioLIVE\n\n      The New Voice of Talk Radio",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Timaru",
    "station": "RadioLIVE\n\n      The New Voice of Talk Radio",
    "email-href": "mailto:rfullard@radiolive.co.nz"
}, {
    "country": "American Samoa",
    "location": "Pago Pago",
    "station": "KMOA\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Otago",
    "station": "Port Fm\n\n      The Music Leader",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Timaru",
    "station": "Life FM\n\n      Live it loud",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Whakatane",
    "station": "Tumeke FM\n\n      English",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "ABC Extra\n\n      ABC Extra on Digital Radio from the ABC",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=132985"
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "Koffee\n\n      Time to Chill",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "South Australia",
    "station": "Cruise 1323\n\n      Cruise Through Your Day with Adelaide's Easy Listening Cruise132",
    "email-href": "mailto:webmaster@arn.com.au"
}, {
    "country": "New Zealand",
    "location": "Whakatane",
    "station": "Sun FM\n\n      English",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=237887"
}, {
    "country": "New Zealand",
    "location": "New Plymouth",
    "station": "Cruize Taranaki 105.2 Fm\n\n      No Jocks Just Music",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "Triple M Classic Rock Digital\n\n      The Rock That Started It All Is Back",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Auckland",
    "station": "96.9 FM\n\n      English",
    "email-href": "mailto:programming@969.co.nz"
}, {
    "country": "New Zealand",
    "location": "Queenstown",
    "station": "Life FM\n\n      Live it loud",
    "email-href": ""
}, {
    "country": "Northern Mariana Islands",
    "location": "Saipan",
    "station": "KPRG\n\n      Public Radio For Guam",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Nelson",
    "station": "RadioLIVE\n\n      The New Voice of Talk Radio",
    "email-href": "mailto:rfullard@radiolive.co.nz"
}, {
    "country": "New Zealand",
    "location": "Auckland",
    "station": "Base FM\n\n      Thinks Global, Acts Local",
    "email-href": "mailto:info@basefm.co.nz"
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "TAB Radio\n\n      Home of Racing & Sports Betting.",
    "email-href": "mailto:radioadvertising@rwwa.com.au"
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "96FM\n\n      Keep Real Music Alive",
    "email-href": ""
}, {
    "country": "Northern Mariana Islands",
    "location": "Saipan",
    "station": "KOLG\n\n      English",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=98866"
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "hit 92.9\n\n      Perth's Number 1 Hit Music Station",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Christchurch",
    "station": "George FM\n\n      beats working...",
    "email-href": ""
}, {
    "country": "American Samoa",
    "location": "Pago Pago",
    "station": "KPPO\n\n      English",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "101.7 WSFM\n\n      Sydney's Good Times & Great Classic Hits",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=17248"
}, {
    "country": "Australia",
    "location": "Queensland",
    "station": "Radio Metro\n\n      It's all about the music!",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Tasmania",
    "station": "936 ABC Hobart\n\n      Telling your stories, giving you a voice.",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Timaru",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wanganui",
    "station": "Classic Hits Wanganui\n\n      80's 90's Today!",
    "email-href": "mailto:info@classichits.co.nz"
}, {
    "country": "Australia",
    "location": "Tasmania",
    "station": "SBS Radio 3\n\n      Without Out Differences, We Wouldn't Be The Same",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "SEN Sports\n\n      Melbourne's Home of Sport",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "More in...",
    "station": "MyMP\n\n      English",
    "email-href": "mailto:programming@sen.com.au"
}, {
    "country": "Australia",
    "location": "More in...",
    "station": "Fun Super Digi\n\n      Sydney's Gold Hits",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "Sky Sports Radio\n\n      Your Racing & Sports Radio Station",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Whakatane",
    "station": "Sun FM\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Hastings",
    "station": "Radio Kahungunu\n\n      Te Reo Ngati Kahungunu Inc.Society",
    "email-href": "mailto:tirohia@radio-kahungunu.co.nz"
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "SBS PopAsia\n\n      Non-Stop Asian Pop",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Dunedin",
    "station": "More FM Dunedin\n\n      Live it. Love it. Sing it!",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wanganui",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "2GB\n\n      The Power Station",
    "email-href": "mailto:webmaster@2gb.com"
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "Gold 104.3\n\n      Real music, real variety",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Tauranga",
    "station": "FLAVA\n\n      NZ's Home of Hip Hop & RnB",
    "email-href": "mailto:flava@flava.co.nz"
}, {
    "country": "New Zealand",
    "location": "New Plymouth",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=229026"
}, {
    "country": "New Zealand",
    "location": "More in...",
    "station": "Tuwharetoa FM\n\n      Te Maunga - Te moana - Te Waiata",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "New Plymouth",
    "station": "Most FM\n\n      Taranaki's Alternative Radio Station",
    "email-href": "mailto:mostfm@mostfm.com"
}, {
    "country": "New Zealand",
    "location": "Wanganui",
    "station": "Brian FM Whanganui\n\n      Playing what we feel like",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Hamilton",
    "station": "Free FM\n\n      Real Community Radio",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wellington",
    "station": "Coast Access Radio\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "New Plymouth",
    "station": "More FM Taranaki\n\n      More Music Variety",
    "email-href": "mailto:feedback@morefm.co.nz"
}, {
    "country": "Australia",
    "location": "Queensland",
    "station": "4KQ\n\n      Brisbane's Good Times and Great Classic Hits",
    "email-href": "mailto:info@4kq.com.au"
}, {
    "country": "Australia",
    "location": "South Australia",
    "station": "FIVEaa AM\n\n      Adelaide's Leading Talk Station",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Tauranga",
    "station": "Chase FM Paeroa\n\n      Broadcasting since 9th...",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "SBS PopAsia\n\n      Non-Stop Asian Pop",
    "email-href": "mailto:popasia@sbs.com.au"
}, {
    "country": "New Zealand",
    "location": "Palmerston North",
    "station": "Coast\n\n      Love the Music",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Nelson",
    "station": "Brian FM Marlborough\n\n      Playing what we feel like",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "Golden Days Radio\n\n      Playing Yesterday's Music - Today",
    "email-href": ""
}, {
    "country": "Papua New Guinea",
    "location": "Port Moresby",
    "station": "NBC Karai National Radio\n\n      Papua New Guinea's...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wellington",
    "station": "Coast\n\n      Love the Music",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "ABC Classic FM\n\n      ABC Classic FM - The world's most beautiful music",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "Double J\n\n      It’s the best music from your past, present and future.",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "6PR\n\n      Your City, Your Station!",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "ABC Extra\n\n      ABC Extra on Digital Radio from the ABC",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wellington",
    "station": "FLAVA\n\n      NZ's Home of Hip Hop & RnB",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Tauranga",
    "station": "Life FM\n\n      Live it loud",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "CW Remix\n\n      Chemist Warehouse Remix",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=124992"
}, {
    "country": "New Zealand",
    "location": "Dunedin",
    "station": "George FM\n\n      beats working...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Auckland",
    "station": "Boosh FM\n\n      Dubstep/DnB to...",
    "email-href": "mailto:info@boosh.fm"
}, {
    "country": "New Zealand",
    "location": "Dunedin",
    "station": "More FM Dunedin\n\n      Live it. Love it. Sing it!",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "101.7 WSFM\n\n      Sydney's Good Times & Great Classic Hits",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Tasmania",
    "station": "More Digital\n\n      More Digital is 80s and 90s music.",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Queensland",
    "station": "4KQ\n\n      Brisbane's Good Times and Great Classic Hits",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wanganui",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Whangarei",
    "station": "Heads 106.4FM\n\n      Better Music with Fewer Commercials",
    "email-href": ""
}, {
    "country": "Federated States of Micronesia",
    "location": "More in...",
    "station": "The Cross Radio\n\n      English",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=99863"
}, {
    "country": "New Zealand",
    "location": "Gisborne",
    "station": "Spellbound Harbour Radio\n\n      Your Blues Connection",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "702 ABC Sydney\n\n      News and information,...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Queenstown",
    "station": "Radio Wanaka\n\n      English",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "CW Remix\n\n      Chemist Warehouse Remix",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Tauranga",
    "station": "bollybop\n\n      bollybop 105.4FM is...",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Tasmania",
    "station": "NovaNation\n\n      Dance music, 24/7",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Invercargill",
    "station": "Coast\n\n      Love the Music",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=128448"
}, {
    "country": "Australia",
    "location": "More in...",
    "station": "Velvet Deluxe\n\n      The Home of Luxury Listening",
    "email-href": "mailto:info@radioaustralasia.com"
}, {
    "country": "New Zealand",
    "location": "Auckland",
    "station": "Base FM\n\n      Thinks Global, Acts Local",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Timaru",
    "station": "Port Fm\n\n      The Music Leader",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Queenstown",
    "station": "Radio Wanaka\n\n      English",
    "email-href": ""
}, {
    "country": "American Samoa",
    "location": "Pago Pago",
    "station": "V103\n\n      The People's Station",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Hamilton",
    "station": "More FM Waikato\n\n      Live it. Love it. Sing it!",
    "email-href": "mailto:feedback@morefm.co.nz"
}, {
    "country": "Australia",
    "location": "Queensland",
    "station": "Radio Metro\n\n      It's all about the music!",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Rotorua",
    "station": "DA Bomb Tokoroa\n\n      English",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=189646"
}, {
    "country": "Northern Mariana Islands",
    "location": "Saipan",
    "station": "KRNM\n\n      Public Radio station located on the campus of NMC",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "Koffee\n\n      Time to Chill",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=108661"
}, {
    "country": "New Zealand",
    "location": "More in...",
    "station": "Radio Tautoko\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Queenstown",
    "station": "George FM\n\n      beats working...",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "triple j\n\n      triple j - We love music",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Auckland",
    "station": "Apna 990 AM\n\n      24 Hours Hindi Radio",
    "email-href": "mailto:info@apna990.com"
}, {
    "country": "American Samoa",
    "location": "Pago Pago",
    "station": "KMOA\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "New Plymouth",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Palmerston North",
    "station": "Coast\n\n      Love the Music",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=128449"
}, {
    "country": "New Zealand",
    "location": "Palmerston North",
    "station": "Coast\n\n      Love the Music",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "More in...",
    "station": "LFM Radio\n\n      LFM Radio is Hit Music &...",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Queensland",
    "station": "Triple M Brisbane\n\n      Brisbane's Widest Variety of Music",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "Golden Days Radio\n\n      Playing Yesterday's Music - Today",
    "email-href": "mailto:mail@goldendaysradio.com"
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "Energy Groove Australia\n\n      The power of big sound, the beat of great music.",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Hastings",
    "station": "More FM Hawke's Bay\n\n      Live it. Love it. Sing it!",
    "email-href": ""
}, {
    "country": "American Samoa",
    "location": "Pago Pago",
    "station": "KPPO\n\n      English",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=151668"
}, {
    "country": "American Samoa",
    "location": "Pago Pago",
    "station": "Island 92\n\n      Samoa's First And Most Trusted Radio Station",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Tauranga",
    "station": "Coast\n\n      Love the Music",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=128451"
}, {
    "country": "Northern Mariana Islands",
    "location": "Saipan",
    "station": "KORU\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Tauranga",
    "station": "Life FM\n\n      Live it loud",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Palmerston North",
    "station": "More FM Manawatu\n\n      Live it. Love it. Sing it!",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Christchurch",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": ""
}, {
    "country": "Federated States of Micronesia",
    "location": "More in...",
    "station": "V6AI\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wanganui",
    "station": "The Rock\n\n      The Rock - cranking out...",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "TAB Radio\n\n      Home of Racing & Sports Betting.",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Whangarei",
    "station": "Heads 106.4FM\n\n      Better Music with Fewer Commercials",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Whakatane",
    "station": "Bayrock FM\n\n      Bay of Plenty's Original Rock Station",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "1233 ABC Newcastle\n\n      Newcastle's local voice.",
    "email-href": "mailto:Newcastle@your.abc.net.au"
}, {
    "country": "Federated States of Micronesia",
    "location": "More in...",
    "station": "Voice of Kosrae\n\n      Multilingual",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "Curtin FM\n\n      A Lifetime of Music",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Hamilton",
    "station": "Free FM\n\n      Real Community Radio",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "More in...",
    "station": "MyMP\n\n      English",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "Easy 1170\n\n      All the hits you love and know",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Timaru",
    "station": "Life FM\n\n      Live it loud",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Rotorua",
    "station": "Pumanawa FM\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Queenstown",
    "station": "Port Fm\n\n      The Music Leader",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "New Plymouth",
    "station": "Life FM\n\n      Live it loud",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Queensland",
    "station": "612 ABC Brisbane\n\n      News, talk, entertainment...",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=9797"
}, {
    "country": "New Zealand",
    "location": "Wellington",
    "station": "Coast\n\n      Love the Music",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wellington",
    "station": "Brian FM Marlborough\n\n      Playing what we feel like",
    "email-href": "mailto:brian@brianfm.com"
}, {
    "country": "New Zealand",
    "location": "Palmerston North",
    "station": "Arrow FM\n\n      One Of 12 Community Access Radio Stations in New Zealand",
    "email-href": "mailto:quiver@arrowfm.co.nz"
}, {
    "country": "New Zealand",
    "location": "Invercargill",
    "station": "Country Radio\n\n      Playing the worlds best country music",
    "email-href": "mailto:countryradio@xtra.co.nz"
}, {
    "country": "New Zealand",
    "location": "Palmerston North",
    "station": "Access Manawatu\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Christchurch",
    "station": "Just FM\n\n      Kaiapoi's Community Station",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Invercargill",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=229025"
}, {
    "country": "New Zealand",
    "location": "Whangarei",
    "station": "FLAVA\n\n      NZ's Home of Hip Hop & RnB",
    "email-href": "mailto:flava@flava.co.nz"
}, {
    "country": "New Zealand",
    "location": "Dunedin",
    "station": "FLAVA\n\n      NZ's Home of Hip Hop & RnB",
    "email-href": "mailto:flava@flava.co.nz"
}, {
    "country": "Australia",
    "location": "Tasmania",
    "station": "NovaNation\n\n      Dance music, 24/7",
    "email-href": "mailto:digitalradioteam@dmgradio.com.au"
}, {
    "country": "New Zealand",
    "location": "Timaru",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "New Plymouth",
    "station": "Life FM\n\n      Live it loud",
    "email-href": "mailto:Studio@lifefm.co.nz"
}, {
    "country": "Australia",
    "location": "More in...",
    "station": "Lift Radio\n\n      Giving you a faith lift",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "South Australia",
    "station": "Triple M Adelaide\n\n      Triple M Adelaide 104.7 is real music.",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "Triple M Sydney\n\n      Sydney's Modern Rock",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Rotorua",
    "station": "Mai FM\n\n      Hottest Hip Hop and R'n'B",
    "email-href": "mailto:web@maifm.co.nz"
}, {
    "country": "New Zealand",
    "location": "Gisborne",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=229014"
}, {
    "country": "Papua New Guinea",
    "location": "Port Moresby",
    "station": "Radio Maria (Papua New Guinea)\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Auckland",
    "station": "96.9 FM\n\n      English",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "3AW\n\n      News Talk",
    "email-href": "mailto:sales@3AW.com.au"
}, {
    "country": "New Zealand",
    "location": "Whakatane",
    "station": "Radio New Zealand Concert\n\n      Radio New Zealand's fine music network",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "KIIS 106.5\n\n      English",
    "email-href": "mailto:info@kiis1065.com.au"
}, {
    "country": "New Zealand",
    "location": "Gisborne",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Gisborne",
    "station": "The Edge\n\n      Hit Music Now",
    "email-href": ""
}, {
    "country": "American Samoa",
    "location": "Pago Pago",
    "station": "Island 92\n\n      Samoa's First And Most Trusted Radio Station",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wellington",
    "station": "FLAVA\n\n      NZ's Home of Hip Hop & RnB",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Whakatane",
    "station": "Radio New Zealand National\n\n      Radio New Zealand...",
    "email-href": ""
}, {
    "country": "Northern Mariana Islands",
    "location": "Saipan",
    "station": "Magic 100.3\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Invercargill",
    "station": "Hokonui\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Whangarei",
    "station": "Magic Music FM\n\n      The Little Station With The Big Sound",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wellington",
    "station": "andHow.FM\n\n      Got indie?",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Christchurch",
    "station": "Akaroa Radio\n\n      Akaroa Community Radio",
    "email-href": "mailto:dave@teldave.co.nz"
}, {
    "country": "New Zealand",
    "location": "Whangarei",
    "station": "Big River FM\n\n      \"The Voice Of The Kaipara\"",
    "email-href": "mailto:office@bigriverfm.co.nz"
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "Raw FM\n\n      Dance Floor Radio",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "Double J\n\n      It’s the best music from your past, present and future.",
    "email-href": "mailto:doublej@abc.net.au"
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "SEN Sports\n\n      Melbourne's Home of Sport",
    "email-href": "mailto:webmaster@sen.com.au"
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "96FM\n\n      Keep Real Music Alive",
    "email-href": ""
}, {
    "country": "Northern Mariana Islands",
    "location": "Saipan",
    "station": "KOLG\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Rotorua",
    "station": "DA Bomb Tokoroa\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Palmerston North",
    "station": "Kia Ora FM\n\n      English",
    "email-href": "mailto:studio@rangitaane.iwi.nz"
}, {
    "country": "Northern Mariana Islands",
    "location": "Saipan",
    "station": "KRNM\n\n      Public Radio station located on the campus of NMC",
    "email-href": ""
}, {
    "country": "Northern Mariana Islands",
    "location": "Saipan",
    "station": "KPXP\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Gisborne",
    "station": "Radio New Zealand Concert\n\n      Radio New Zealand's fine music network",
    "email-href": "mailto:concert@radionz.co.nz"
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "Nova 937\n\n      Live Life Nova",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "1233 ABC Newcastle\n\n      Newcastle's local voice.",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Hastings",
    "station": "Niu FM\n\n      English",
    "email-href": "mailto:info@niufm.com"
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "hit 92.9\n\n      Perth's Number 1 Hit Music Station",
    "email-href": "mailto:reception@929.com.au"
}, {
    "country": "New Zealand",
    "location": "Palmerston North",
    "station": "Kia Ora FM\n\n      English",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "South Australia",
    "station": "Mix 102.3\n\n      Adelaide's Widest Variety of Music",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=17324"
}, {
    "country": "New Zealand",
    "location": "Whangarei",
    "station": "Life FM\n\n      Live it loud",
    "email-href": "mailto:Studio@lifefm.co.nz"
}, {
    "country": "Australia",
    "location": "South Australia",
    "station": "Fresh 92.7\n\n      Dedicated to the Youth of Adelaide",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Tasmania",
    "station": "More Digital\n\n      More Digital is 80s and 90s music.",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=191845"
}, {
    "country": "New Zealand",
    "location": "Whakatane",
    "station": "RadioLIVE\n\n      The New Voice of Talk Radio",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "Triple R\n\n      Melbourne Independent Radio",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "TAB Radio\n\n      Home of Racing & Sports Betting.",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wellington",
    "station": "andHow.FM\n\n      Got indie?",
    "email-href": "mailto:studio@andhow.org"
}, {
    "country": "Australia",
    "location": "Tasmania",
    "station": "Kinderling Kids Radio\n\n      Kids Radio is here!",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "More in...",
    "station": "Radio Tautoko\n\n      English",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "ABC Country\n\n      Australia's home of country music",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=50462"
}, {
    "country": "New Zealand",
    "location": "Whangarei",
    "station": "Magic Music FM\n\n      The Little Station With The Big Sound",
    "email-href": ""
}, {
    "country": "Federated States of Micronesia",
    "location": "More in...",
    "station": "V6AH\n\n      English",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=45273"
}, {
    "country": "New Zealand",
    "location": "Palmerston North",
    "station": "Life FM\n\n      Live it loud",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "PBS-FM\n\n      Home of Little Heard Music",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "CW Remix\n\n      Chemist Warehouse Remix",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "Energy Groove Australia\n\n      The power of big sound, the beat of great music.",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "More in...",
    "station": "Coromandel FM\n\n      We are the Peninsula's...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Whakatane",
    "station": "Bayrock FM\n\n      Bay of Plenty's Original Rock Station",
    "email-href": "mailto:studio@bayrock.co.nz"
}, {
    "country": "Australia",
    "location": "South Australia",
    "station": "Fresh 92.7\n\n      Dedicated to the Youth of Adelaide",
    "email-href": "mailto:admin@fresh927.com.au"
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "720 ABC Perth\n\n      ABC Local Radio Perth",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Gisborne",
    "station": "The Edge\n\n      Hit Music Now",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Queenstown",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "New Plymouth",
    "station": "FLAVA\n\n      NZ's Home of Hip Hop & RnB",
    "email-href": ""
}, {
    "country": "Papua New Guinea",
    "location": "Port Moresby",
    "station": "Wantok Light Radio\n\n      English",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Northern Territory",
    "station": "Triple M Modern Rock Digital\n\n      Features the best modern...",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "Double J\n\n      It’s the best music from your past, present and future.",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "Triple M Sydney\n\n      Sydney's Modern Rock",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=7005"
}, {
    "country": "New Zealand",
    "location": "Auckland",
    "station": "blurFM\n\n      Keep It Locked.",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Dunedin",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=229011"
}, {
    "country": "New Zealand",
    "location": "Hamilton",
    "station": "George FM\n\n      beats working...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Rotorua",
    "station": "FLAVA\n\n      NZ's Home of Hip Hop & RnB",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Dunedin",
    "station": "FLAVA\n\n      NZ's Home of Hip Hop & RnB",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Queenstown",
    "station": "Life FM\n\n      Live it loud",
    "email-href": "mailto:Studio@lifefm.co.nz"
}, {
    "country": "Australia",
    "location": "Queensland",
    "station": "ABC Gold Coast\n\n      News, talk, music,...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Queenstown",
    "station": "Radio New Zealand Concert\n\n      Radio New Zealand's fine music network",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "South Australia",
    "station": "Triple M Adelaide\n\n      Triple M Adelaide 104.7 is real music.",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=7028"
}, {
    "country": "New Zealand",
    "location": "New Plymouth",
    "station": "Life FM\n\n      Live it loud",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Nelson",
    "station": "Brian FM Marlborough\n\n      Playing what we feel like",
    "email-href": "mailto:brian@brianfm.com"
}, {
    "country": "New Zealand",
    "location": "Rotorua",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Gisborne",
    "station": "Spellbound Harbour Radio\n\n      Your Blues Connection",
    "email-href": "mailto:studio@spellboundradio.net"
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "Raw FM\n\n      Dance Floor Radio",
    "email-href": "mailto:info@rawfm.com.au"
}, {
    "country": "New Zealand",
    "location": "Queenstown",
    "station": "Radio New Zealand Concert\n\n      Radio New Zealand's fine music network",
    "email-href": "mailto:concert@radionz.co.nz"
}, {
    "country": "New Zealand",
    "location": "Nelson",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Northern Territory",
    "station": "Triple M Modern Rock Digital\n\n      Features the best modern...",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Queensland",
    "station": "Magic 882\n\n      The Songs You Know & Love",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "New Plymouth",
    "station": "Cruize Taranaki 105.2 Fm\n\n      No Jocks Just Music",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wanganui",
    "station": "RadioLIVE\n\n      The New Voice of Talk Radio",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "Triple M Classic Rock Digital\n\n      The Rock That Started It All Is Back",
    "email-href": ""
}, {
    "country": "Federated States of Micronesia",
    "location": "More in...",
    "station": "V6AH\n\n      English",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Northern Territory",
    "station": "105.7 ABC Darwin\n\n      105.7 ABC Darwin provides...",
    "email-href": ""
}, {
    "country": "Northern Mariana Islands",
    "location": "Saipan",
    "station": "KKMP\n\n      English",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=152947"
}, {
    "country": "Australia",
    "location": "Queensland",
    "station": "hit105\n\n      Brisbane's Number 1 Hit Music Station",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "Hope 103.2\n\n      Sydney's Contemporary Christian Radio Station",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Hastings",
    "station": "Radio Hauraki\n\n      Radio Hauraki is a rock...",
    "email-href": "mailto:team@hauraki.co.nz"
}, {
    "country": "Australia",
    "location": "South Australia",
    "station": "Cruise 1323\n\n      Cruise Through Your Day with Adelaide's Easy Listening Cruise132",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "South Australia",
    "station": "891 ABC Adelaide\n\n      891 ABC Adelaide provides...",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=1321"
}, {
    "country": "Papua New Guinea",
    "location": "Port Moresby",
    "station": "NBC Radio Central\n\n      English",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=99836"
}, {
    "country": "Australia",
    "location": "Queensland",
    "station": "4KQ\n\n      Brisbane's Good Times and Great Classic Hits",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wanganui",
    "station": "More FM Wanganui\n\n      More Music Variety",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Australian Capital Territory",
    "station": "666 ABC Canberra\n\n      666 ABC Canberra is proud...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "More in...",
    "station": "Radio Samoa\n\n      Radio Samoa in its 12th...",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "1233 ABC Newcastle\n\n      Newcastle's local voice.",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Auckland",
    "station": "Botany Radio\n\n      English",
    "email-href": "mailto:studio@botanyradio.co.nz"
}, {
    "country": "New Zealand",
    "location": "Hastings",
    "station": "More FM Hawke's Bay\n\n      Live it. Love it. Sing it!",
    "email-href": "mailto:feedback@morefm.co.nz"
}, {
    "country": "Australia",
    "location": "South Australia",
    "station": "Radio ENA\n\n      Australia's Premier Greek Radio Station",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "96Five Family Radio Digital\n\n      English",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Queensland",
    "station": "hit105\n\n      Brisbane's Number 1 Hit Music Station",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "Raw FM\n\n      Dance Floor Radio",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "720 ABC Perth\n\n      ABC Local Radio Perth",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=53189"
}, {
    "country": "New Zealand",
    "location": "Wellington",
    "station": "andHow.FM\n\n      Got indie?",
    "email-href": ""
}, {
    "country": "Papua New Guinea",
    "location": "Port Moresby",
    "station": "Kalang Radio\n\n      English",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "KIIS 101.1\n\n      The widest variety from 2K to today",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Rotorua",
    "station": "FLAVA\n\n      NZ's Home of Hip Hop & RnB",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Queenstown",
    "station": "Local Radio Central\n\n      Local Radio Central",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wanganui",
    "station": "More FM Wanganui\n\n      More Music Variety",
    "email-href": "mailto:feedback@morefm.co.nz"
}, {
    "country": "New Zealand",
    "location": "Tauranga",
    "station": "George FM\n\n      beats working...",
    "email-href": "mailto:studio@georgefm.co.nz"
}, {
    "country": "American Samoa",
    "location": "Pago Pago",
    "station": "Island 92\n\n      Samoa's First And Most Trusted Radio Station",
    "email-href": "mailto:info@ksbsfm92.com"
}, {
    "country": "Papua New Guinea",
    "location": "Port Moresby",
    "station": "Nau FM\n\n      NAU FM. Radio station in...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Whakatane",
    "station": "RadioLIVE\n\n      The New Voice of Talk Radio",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wellington",
    "station": "Coast\n\n      Love the Music",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=87191"
}, {
    "country": "Australia",
    "location": "Queensland",
    "station": "96five Family Radio\n\n      Family's Number One!",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Dunedin",
    "station": "George FM\n\n      beats working...",
    "email-href": "mailto:studio@georgefm.co.nz"
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "Triple R\n\n      Melbourne Independent Radio",
    "email-href": "mailto:3rrr@rrr.org.au"
}, {
    "country": "Australia",
    "location": "More in...",
    "station": "Velvet Deluxe\n\n      The Home of Luxury Listening",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wanganui",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=229019"
}, {
    "country": "American Samoa",
    "location": "Pago Pago",
    "station": "KPPO\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Hastings",
    "station": "Radio Kahungunu\n\n      Te Reo Ngati Kahungunu Inc.Society",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Australian Capital Territory",
    "station": "666 ABC Canberra\n\n      666 ABC Canberra is proud...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wanganui",
    "station": "RadioLIVE\n\n      The New Voice of Talk Radio",
    "email-href": ""
}, {
    "country": "Northern Mariana Islands",
    "location": "Saipan",
    "station": "KORU\n\n      English",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=123271"
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "Buddha Radio\n\n      Tune In, Chill Out.",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Rotorua",
    "station": "Mai FM\n\n      Hottest Hip Hop and R'n'B",
    "email-href": ""
}, {
    "country": "American Samoa",
    "location": "Pago Pago",
    "station": "V103\n\n      The People's Station",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wellington",
    "station": "Coast Access Radio\n\n      English",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "More in...",
    "station": "Fine Music Digital\n\n      English",
    "email-href": "mailto:marketing@finemusicfm.com"
}, {
    "country": "New Zealand",
    "location": "Christchurch",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Queensland",
    "station": "4BC\n\n      Brisbane's Own 4BC.",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Auckland",
    "station": "Apna 990 AM\n\n      24 Hours Hindi Radio",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "triple j Unearthed\n\n      triple j Unearthed - Listen, download, discover",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Whakatane",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=229012"
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "Gold 104.3\n\n      Real music, real variety",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "More in...",
    "station": "Tuwharetoa FM\n\n      Te Maunga - Te moana - Te Waiata",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Tasmania",
    "station": "NovaNation\n\n      Dance music, 24/7",
    "email-href": ""
}, {
    "country": "Northern Mariana Islands",
    "location": "Saipan",
    "station": "KPXP\n\n      English",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=7962"
}, {
    "country": "Federated States of Micronesia",
    "location": "More in...",
    "station": "Voice of Kosrae\n\n      Multilingual",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "2GB\n\n      The Power Station",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Nelson",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=229020"
}, {
    "country": "Australia",
    "location": "Tasmania",
    "station": "Way FM\n\n      On The Right Track",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Tasmania",
    "station": "More Digital\n\n      More Digital is 80s and 90s music.",
    "email-href": ""
}, {
    "country": "Federated States of Micronesia",
    "location": "More in...",
    "station": "V6AV\n\n      English",
    "email-href": ""
}, {
    "country": "Papua New Guinea",
    "location": "Port Moresby",
    "station": "Kalang Radio\n\n      English",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=99831"
}, {
    "country": "New Zealand",
    "location": "Hastings",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=229016"
}, {
    "country": "New Zealand",
    "location": "Timaru",
    "station": "The Rock\n\n      The Rock - cranking out...",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=87206"
}, {
    "country": "New Zealand",
    "location": "Nelson",
    "station": "Brian FM Marlborough\n\n      Playing what we feel like",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Auckland",
    "station": "Apna 990 AM\n\n      24 Hours Hindi Radio",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Timaru",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=229029"
}, {
    "country": "New Zealand",
    "location": "Queenstown",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=229009"
}, {
    "country": "Australia",
    "location": "South Australia",
    "station": "Mix 102.3\n\n      Adelaide's Widest Variety of Music",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "New Plymouth",
    "station": "Most FM\n\n      Taranaki's Alternative Radio Station",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Christchurch",
    "station": "COMPASS FM\n\n      The Voice of North Canterbury",
    "email-href": "mailto:manager@compassfm.org.nz"
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "ABC Country\n\n      Australia's home of country music",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "South Australia",
    "station": "891 ABC Adelaide\n\n      891 ABC Adelaide provides...",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "Fox hit 101.9\n\n      Hits. Always.",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Nelson",
    "station": "Radio New Zealand Concert\n\n      Radio New Zealand's fine music network",
    "email-href": "mailto:concert@radionz.co.nz"
}, {
    "country": "Federated States of Micronesia",
    "location": "More in...",
    "station": "Baptist Radio\n\n      English",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=114955"
}, {
    "country": "Federated States of Micronesia",
    "location": "More in...",
    "station": "The Cross Radio\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Whakatane",
    "station": "Radio New Zealand Concert\n\n      Radio New Zealand's fine music network",
    "email-href": "mailto:concert@radionz.co.nz"
}, {
    "country": "New Zealand",
    "location": "Hastings",
    "station": "Life FM\n\n      Live it loud",
    "email-href": "mailto:Studio@lifefm.co.nz"
}, {
    "country": "Australia",
    "location": "South Australia",
    "station": "Radio ENA\n\n      Australia's Premier Greek Radio Station",
    "email-href": "mailto:studio@radioena.com"
}, {
    "country": "New Zealand",
    "location": "Whangarei",
    "station": "Mai FM\n\n      Hottest Hip Hop and R'n'B",
    "email-href": "mailto:web@maifm.co.nz"
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "Gold 104.3\n\n      Real music, real variety",
    "email-href": "mailto:communityline@gold1043.com.au"
}, {
    "country": "New Zealand",
    "location": "Tauranga",
    "station": "Kiss-FM\n\n      Mt Maunganui's home of Old School and New School Rock!",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Christchurch",
    "station": "COMPASS FM\n\n      The Voice of North Canterbury",
    "email-href": ""
}, {
    "country": "Federated States of Micronesia",
    "location": "More in...",
    "station": "Baptist Radio\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Hastings",
    "station": "Life FM\n\n      Live it loud",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Queensland",
    "station": "4BC\n\n      Brisbane's Own 4BC.",
    "email-href": "mailto:mail@4bc.com.au"
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "RSN Racing & Sport\n\n      Racing & Sport",
    "email-href": "mailto:rsn@rsn.net.au"
}, {
    "country": "Australia",
    "location": "South Australia",
    "station": "Fresh 92.7\n\n      Dedicated to the Youth of Adelaide",
    "email-href": ""
}, {
    "country": "American Samoa",
    "location": "Pago Pago",
    "station": "KMOA\n\n      English",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=155139"
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "Kiss FM\n\n      Dance Music Radio",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Queensland",
    "station": "612 ABC Brisbane\n\n      News, talk, entertainment...",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "ABC Classic FM\n\n      ABC Classic FM - The world's most beautiful music",
    "email-href": ""
}, {
    "country": "Federated States of Micronesia",
    "location": "More in...",
    "station": "V6AV\n\n      English",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=114956"
}, {
    "country": "New Zealand",
    "location": "Wellington",
    "station": "Atiawa Toa FM\n\n      Atiawa.com Nau Mai...Haere Mai",
    "email-href": "mailto:info@atiawa.co.nz"
}, {
    "country": "New Zealand",
    "location": "Whangarei",
    "station": "Life FM\n\n      Live it loud",
    "email-href": ""
}, {
    "country": "American Samoa",
    "location": "Pago Pago",
    "station": "V103\n\n      The People's Station",
    "email-href": "mailto:info@wvuv.com"
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "Triple R\n\n      Melbourne Independent Radio",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Nelson",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "Nova 937\n\n      Live Life Nova",
    "email-href": "mailto:nova937@novafm.com.au"
}, {
    "country": "New Zealand",
    "location": "Invercargill",
    "station": "Life FM\n\n      Live it loud",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Northern Territory",
    "station": "105.7 ABC Darwin\n\n      105.7 ABC Darwin provides...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Timaru",
    "station": "RadioLIVE\n\n      The New Voice of Talk Radio",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "Fox hit 101.9\n\n      Hits. Always.",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=7018"
}, {
    "country": "Federated States of Micronesia",
    "location": "More in...",
    "station": "V6BC\n\n      English",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Tasmania",
    "station": "SBS PopAraby\n\n      The hottest Arabic hits!",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Auckland",
    "station": "Base FM\n\n      Thinks Global, Acts Local",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Queenstown",
    "station": "Local Radio Central\n\n      Local Radio Central",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "New Plymouth",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": ""
}, {
    "country": "Northern Mariana Islands",
    "location": "Saipan",
    "station": "KPXP\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "More in...",
    "station": "Tuwharetoa FM\n\n      Te Maunga - Te moana - Te Waiata",
    "email-href": "mailto:t97.2fm@xtra.co.nz"
}, {
    "country": "Northern Mariana Islands",
    "location": "Saipan",
    "station": "KKMP\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Invercargill",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "New Plymouth",
    "station": "Access Radio Taranaki\n\n      Your Voice, Your Choice.",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "Hope 103.2\n\n      Sydney's Contemporary Christian Radio Station",
    "email-href": "mailto:mail@hope1032.com.au"
}, {
    "country": "New Zealand",
    "location": "Tauranga",
    "station": "Life FM\n\n      Live it loud",
    "email-href": "mailto:Studio@lifefm.co.nz"
}, {
    "country": "New Zealand",
    "location": "Invercargill",
    "station": "Niu FM\n\n      English",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Tasmania",
    "station": "Way FM\n\n      On The Right Track",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Christchurch",
    "station": "FLAVA\n\n      NZ's Home of Hip Hop & RnB",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Whangarei",
    "station": "Mai FM\n\n      Hottest Hip Hop and R'n'B",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Hastings",
    "station": "FLAVA\n\n      NZ's Home of Hip Hop & RnB",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "Triple M Classic Rock Digital\n\n      The Rock That Started It All Is Back",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=211747"
}, {
    "country": "New Zealand",
    "location": "More in...",
    "station": "Coromandel FM\n\n      We are the Peninsula's...",
    "email-href": "mailto:cfm@mediaworks.co.nz"
}, {
    "country": "New Zealand",
    "location": "Gisborne",
    "station": "Radio New Zealand Concert\n\n      Radio New Zealand's fine music network",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Timaru",
    "station": "The Sound\n\n      The Soundtrack Of Our Lives",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Hamilton",
    "station": "More FM Waikato\n\n      Live it. Love it. Sing it!",
    "email-href": ""
}, {
    "country": "Federated States of Micronesia",
    "location": "More in...",
    "station": "The Cross Radio\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Otago",
    "station": "The HAWK\n\n      The best rock and pop classics",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=252283"
}, {
    "country": "New Zealand",
    "location": "More in...",
    "station": "LFM Radio\n\n      LFM Radio is Hit Music &...",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Northern Territory",
    "station": "105.7 ABC Darwin\n\n      105.7 ABC Darwin provides...",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=9116"
}, {
    "country": "New Zealand",
    "location": "Rotorua",
    "station": "Niu FM\n\n      English",
    "email-href": "mailto:info@niufm.com"
}, {
    "country": "New Zealand",
    "location": "Nelson",
    "station": "RadioLIVE\n\n      The New Voice of Talk Radio",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Tauranga",
    "station": "FLAVA\n\n      NZ's Home of Hip Hop & RnB",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Hamilton",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Christchurch",
    "station": "FLAVA\n\n      NZ's Home of Hip Hop & RnB",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Christchurch",
    "station": "George FM\n\n      beats working...",
    "email-href": "mailto:studio@georgefm.co.nz"
}, {
    "country": "New Zealand",
    "location": "Dunedin",
    "station": "Life FM\n\n      Live it loud",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Ruatoria",
    "station": "Radio Ngati Porou\n\n      Te Reo O Te Iwi",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Tasmania",
    "station": "SBS PopAraby\n\n      The hottest Arabic hits!",
    "email-href": "mailto:poparaby@sbs.com.au"
}, {
    "country": "Australia",
    "location": "Queensland",
    "station": "Triple M Brisbane\n\n      Brisbane's Widest Variety of Music",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wanganui",
    "station": "Classic Hits Wanganui\n\n      80's 90's Today!",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "720 ABC Perth\n\n      ABC Local Radio Perth",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "More in...",
    "station": "Ski FM\n\n      Today's Hottest Hit Music",
    "email-href": "mailto:info@skifmnetwork.com"
}, {
    "country": "New Zealand",
    "location": "Invercargill",
    "station": "Hokonui\n\n      English",
    "email-href": "mailto:onair@hokonui.co.nz"
}, {
    "country": "New Zealand",
    "location": "Whakatane",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Hastings",
    "station": "Life FM\n\n      Live it loud",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Invercargill",
    "station": "Niu FM\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Tauranga",
    "station": "George FM\n\n      beats working...",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "More in...",
    "station": "ABC Jazz\n\n      Australia's only 24/7 jazz...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Whangarei",
    "station": "Big River FM\n\n      \"The Voice Of The Kaipara\"",
    "email-href": ""
}, {
    "country": "Northern Mariana Islands",
    "location": "Saipan",
    "station": "KORU\n\n      English",
    "email-href": ""
}, {
    "country": "American Samoa",
    "location": "Pago Pago",
    "station": "KGIF\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "More in...",
    "station": "LFM Radio\n\n      LFM Radio is Hit Music &...",
    "email-href": "mailto:lfm@lfmonline.co.nz"
}, {
    "country": "New Zealand",
    "location": "Hamilton",
    "station": "Maniapoto FM\n\n      English",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "South Australia",
    "station": "891 ABC Adelaide\n\n      891 ABC Adelaide provides...",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Queensland",
    "station": "hit105\n\n      Brisbane's Number 1 Hit Music Station",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=8136"
}, {
    "country": "New Zealand",
    "location": "New Plymouth",
    "station": "FLAVA\n\n      NZ's Home of Hip Hop & RnB",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "101.7 WSFM\n\n      Sydney's Good Times & Great Classic Hits",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "RSN Racing & Sport\n\n      Racing & Sport",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Nelson",
    "station": "Fresh FM\n\n      Radio By, For and About the Top of the South",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "More in...",
    "station": "Radio Waatea\n\n      Urban Maori Radio Listen",
    "email-href": "mailto:admin@waatea603am.co.nz"
}, {
    "country": "New Zealand",
    "location": "Whakatane",
    "station": "Bayrock FM\n\n      Bay of Plenty's Original Rock Station",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Auckland",
    "station": "95bFM\n\n      The Originator",
    "email-href": ""
}, {
    "country": "Papua New Guinea",
    "location": "Port Moresby",
    "station": "Radio Maria (Papua New Guinea)\n\n      English",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=183743"
}, {
    "country": "New Zealand",
    "location": "Invercargill",
    "station": "Radio Hauraki\n\n      Radio Hauraki is a rock...",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "2NURFM\n\n      Easy Listening 103.7",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wellington",
    "station": "Beach FM\n\n      We are a completely live...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Gisborne",
    "station": "Radio Hauraki\n\n      Radio Hauraki is a rock...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Otago",
    "station": "The HAWK\n\n      The best rock and pop classics",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Hastings",
    "station": "FLAVA\n\n      NZ's Home of Hip Hop & RnB",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Christchurch",
    "station": "COMPASS FM\n\n      The Voice of North Canterbury",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Christchurch",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=229010"
}, {
    "country": "New Zealand",
    "location": "Wellington",
    "station": "Atiawa Toa FM\n\n      Atiawa.com Nau Mai...Haere Mai",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Invercargill",
    "station": "Coast\n\n      Love the Music",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "More in...",
    "station": "Lift Radio\n\n      Giving you a faith lift",
    "email-href": "mailto:info@liftradio.net"
}, {
    "country": "New Zealand",
    "location": "Wellington",
    "station": "Atiawa Toa FM\n\n      Atiawa.com Nau Mai...Haere Mai",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Timaru",
    "station": "Radio New Zealand Concert\n\n      Radio New Zealand's fine music network",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "702 ABC Sydney\n\n      News and information,...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "More in...",
    "station": "Radio Tautoko\n\n      English",
    "email-href": "mailto:tautokofm@clear.net.nz"
}, {
    "country": "New Zealand",
    "location": "Hastings",
    "station": "Radio Hauraki\n\n      Radio Hauraki is a rock...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Tauranga",
    "station": "FLAVA\n\n      NZ's Home of Hip Hop & RnB",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Auckland",
    "station": "Botany Radio\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Hamilton",
    "station": "Maniapoto FM\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Gisborne",
    "station": "Spellbound Harbour Radio\n\n      Your Blues Connection",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Tasmania",
    "station": "SBS PopAraby\n\n      The hottest Arabic hits!",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Ruatoria",
    "station": "Radio Ngati Porou\n\n      Te Reo O Te Iwi",
    "email-href": "mailto: manager@radiongatiporou.co.nz"
}, {
    "country": "New Zealand",
    "location": "Wellington",
    "station": "Coast Access Radio\n\n      English",
    "email-href": "mailto:accessradio.kapiti@xtra.co.nz"
}, {
    "country": "New Zealand",
    "location": "Wanganui",
    "station": "Classic Hits Wanganui\n\n      80's 90's Today!",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Hamilton",
    "station": "Free FM\n\n      Real Community Radio",
    "email-href": "mailto:info@freefm.org.nz"
}, {
    "country": "New Zealand",
    "location": "Dunedin",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "Magic 1278\n\n      Playing The Best Songs Of All Time",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=8873"
}, {
    "country": "New Zealand",
    "location": "Christchurch",
    "station": "George FM\n\n      beats working...",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "More in...",
    "station": "ABC Jazz\n\n      Australia's only 24/7 jazz...",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=44935"
}, {
    "country": "New Zealand",
    "location": "Dunedin",
    "station": "More FM Dunedin\n\n      Live it. Love it. Sing it!",
    "email-href": "mailto:feedback@morefm.co.nz"
}, {
    "country": "New Zealand",
    "location": "Nelson",
    "station": "Life FM\n\n      Live it loud",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Hamilton",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=229030"
}, {
    "country": "New Zealand",
    "location": "Timaru",
    "station": "Port Fm\n\n      The Music Leader",
    "email-href": "mailto:portfmstudio@xtra.co.nz"
}, {
    "country": "New Zealand",
    "location": "Timaru",
    "station": "The Rock\n\n      The Rock - cranking out...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "New Plymouth",
    "station": "More FM Taranaki\n\n      More Music Variety",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "Easy 1170\n\n      All the hits you love and know",
    "email-href": "mailto:digital@mrn.com.au"
}, {
    "country": "New Zealand",
    "location": "More in...",
    "station": "Coromandel FM\n\n      We are the Peninsula's...",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "Nova 937\n\n      Live Life Nova",
    "email-href": ""
}, {
    "country": "American Samoa",
    "location": "Pago Pago",
    "station": "93KHJ\n\n      American Samoa's #1 Hit Music Station",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "Mix 94.5\n\n      More Music Variety Mix",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=7020"
}, {
    "country": "New Zealand",
    "location": "Nelson",
    "station": "More FM Nelson\n\n      Today's Best Music Mix",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Dunedin",
    "station": "Niu FM\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wanganui",
    "station": "Brian FM Whanganui\n\n      Playing what we feel like",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "Golden Days Radio\n\n      Playing Yesterday's Music - Today",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "Curtin FM\n\n      A Lifetime of Music",
    "email-href": "mailto:radio@curtin.edu.au"
}, {
    "country": "New Zealand",
    "location": "Hamilton",
    "station": "Maniapoto FM\n\n      English",
    "email-href": "mailto:irirangi@wave.co.nz"
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "Mix 94.5\n\n      More Music Variety Mix",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wanganui",
    "station": "Awa FM\n\n      Connecting people to the river",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Palmerston North",
    "station": "Arrow FM\n\n      One Of 12 Community Access Radio Stations in New Zealand",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "2GB\n\n      The Power Station",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "More in...",
    "station": "Fun Super Digi\n\n      Sydney's Gold Hits",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Whakatane",
    "station": "Sun FM\n\n      English",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "3AW\n\n      News Talk",
    "email-href": ""
}, {
    "country": "Papua New Guinea",
    "location": "Port Moresby",
    "station": "Kalang Radio\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Nelson",
    "station": "Radio New Zealand Concert\n\n      Radio New Zealand's fine music network",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Whakatane",
    "station": "Radio New Zealand National\n\n      Radio New Zealand...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Nelson",
    "station": "More FM Nelson\n\n      Today's Best Music Mix",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Palmerston North",
    "station": "Life FM\n\n      Live it loud",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Rotorua",
    "station": "Pumanawa FM\n\n      English",
    "email-href": "mailto:admin@pumanawafm.co.nz"
}, {
    "country": "Australia",
    "location": "Tasmania",
    "station": "SBS Radio 3\n\n      Without Out Differences, We Wouldn't Be The Same",
    "email-href": "mailto:radio@sbs.com.au"
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "774 ABC Melbourne\n\n      News and information,...",
    "email-href": ""
}, {
    "country": "Papua New Guinea",
    "location": "Port Moresby",
    "station": "NBC Radio Central\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Christchurch",
    "station": "Dave FM\n\n      Uninterrupted 70's, 80's and 90s!",
    "email-href": "mailto:studio@davefm.net"
}, {
    "country": "New Zealand",
    "location": "Rotorua",
    "station": "Niu FM\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Palmerston North",
    "station": "Kia Ora FM\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Gisborne",
    "station": "Radio Ngati Porou\n\n      Te Reo O Te Iwi",
    "email-href": ""
}, {
    "country": "Papua New Guinea",
    "location": "Port Moresby",
    "station": "NBC Radio Central\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Tauranga",
    "station": "Chase FM Paeroa\n\n      Broadcasting since 9th...",
    "email-href": ""
}, {
    "country": "Federated States of Micronesia",
    "location": "More in...",
    "station": "V6BC\n\n      English",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=99862"
}, {
    "country": "Papua New Guinea",
    "location": "Port Moresby",
    "station": "Wantok Light Radio\n\n      English",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "Buddha Radio\n\n      Tune In, Chill Out.",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Timaru",
    "station": "RadioLIVE\n\n      The New Voice of Talk Radio",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Dunedin",
    "station": "Country Radio Dunedin\n\n      Playing the worlds best country music...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Auckland",
    "station": "blurFM\n\n      Keep It Locked.",
    "email-href": "mailto:studio@blurfm.co.nz"
}, {
    "country": "New Zealand",
    "location": "Dunedin",
    "station": "Life FM\n\n      Live it loud",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "Buddha Radio\n\n      Tune In, Chill Out.",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=172072"
}, {
    "country": "New Zealand",
    "location": "Auckland",
    "station": "95bFM\n\n      The Originator",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Invercargill",
    "station": "Country Radio\n\n      Playing the worlds best country music",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Queenstown",
    "station": "Radio New Zealand Concert\n\n      Radio New Zealand's fine music network",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Invercargill",
    "station": "Radio Hauraki\n\n      Radio Hauraki is a rock...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Christchurch",
    "station": "Akaroa Radio\n\n      Akaroa Community Radio",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Gisborne",
    "station": "Radio Ngati Porou\n\n      Te Reo O Te Iwi",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "More in...",
    "station": "Radio Waatea\n\n      Urban Maori Radio Listen",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "More in...",
    "station": "Lift Radio\n\n      Giving you a faith lift",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "KIIS 106.5\n\n      English",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Queensland",
    "station": "96five Family Radio\n\n      Family's Number One!",
    "email-href": "mailto:socialmedia@96five.com"
}, {
    "country": "New Zealand",
    "location": "Invercargill",
    "station": "Country Radio\n\n      Playing the worlds best country music",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "2NURFM\n\n      Easy Listening 103.7",
    "email-href": "mailto:contact@2nurfm.com"
}, {
    "country": "Australia",
    "location": "Tasmania",
    "station": "936 ABC Hobart\n\n      Telling your stories, giving you a voice.",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Northern Territory",
    "station": "Triple M Modern Rock Digital\n\n      Features the best modern...",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=233672"
}, {
    "country": "New Zealand",
    "location": "Nelson",
    "station": "Life FM\n\n      Live it loud",
    "email-href": "mailto:Studio@lifefm.co.nz"
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "Sky Sports Radio\n\n      Your Racing & Sports Radio Station",
    "email-href": ""
}, {
    "country": "Papua New Guinea",
    "location": "Port Moresby",
    "station": "Radio Maria (Papua New Guinea)\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Wanganui",
    "station": "Awa FM\n\n      Connecting people to the river",
    "email-href": "mailto:awafm@awafm.co.nz"
}, {
    "country": "New Zealand",
    "location": "Palmerston North",
    "station": "Life FM\n\n      Live it loud",
    "email-href": "mailto:Studio@lifefm.co.nz"
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "774 ABC Melbourne\n\n      News and information,...",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=10113"
}, {
    "country": "Australia",
    "location": "More in...",
    "station": "Fun Super Digi\n\n      Sydney's Gold Hits",
    "email-href": "mailto:mail@funsuperdigi.com"
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "774 ABC Melbourne\n\n      News and information,...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Nelson",
    "station": "Fresh FM\n\n      Radio By, For and About the Top of the South",
    "email-href": "mailto:mike@freshfm.net"
}, {
    "country": "New Zealand",
    "location": "Queenstown",
    "station": "Life FM\n\n      Live it loud",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "PBS-FM\n\n      Home of Little Heard Music",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=7024"
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "RN - ABC Radio National\n\n      The ideas network.",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=20269"
}, {
    "country": "New Zealand",
    "location": "Hastings",
    "station": "Radio Kahungunu\n\n      Te Reo Ngati Kahungunu Inc.Society",
    "email-href": ""
}, {
    "country": "Papua New Guinea",
    "location": "Port Moresby",
    "station": "NBC Karai National Radio\n\n      Papua New Guinea's...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Rotorua",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=229024"
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "2NURFM\n\n      Easy Listening 103.7",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "6PR\n\n      Your City, Your Station!",
    "email-href": "mailto:declank@6pr.com.au"
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "triple j\n\n      triple j - We love music",
    "email-href": ""
}, {
    "country": "Papua New Guinea",
    "location": "Port Moresby",
    "station": "Wantok Light Radio\n\n      English",
    "email-href": "mailto:wantok@wantokradio.org"
}, {
    "country": "New Zealand",
    "location": "Dunedin",
    "station": "George FM\n\n      beats working...",
    "email-href": ""
}, {
    "country": "Federated States of Micronesia",
    "location": "More in...",
    "station": "Voice of Kosrae\n\n      Multilingual",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=45272"
}, {
    "country": "Papua New Guinea",
    "location": "Port Moresby",
    "station": "Nau FM\n\n      NAU FM. Radio station in...",
    "email-href": ""
}, {
    "country": "Northern Mariana Islands",
    "location": "Saipan",
    "station": "KOLG\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Auckland",
    "station": "96.9 FM\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Whangarei",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": ""
}, {
    "country": "Papua New Guinea",
    "location": "Port Moresby",
    "station": "Nau FM\n\n      NAU FM. Radio station in...",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=7563"
}, {
    "country": "Australia",
    "location": "Queensland",
    "station": "Magic 882\n\n      The Songs You Know & Love",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "South Australia",
    "station": "Cruise 1323\n\n      Cruise Through Your Day with Adelaide's Easy Listening Cruise132",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Gisborne",
    "station": "Radio Ngati Porou\n\n      Te Reo O Te Iwi",
    "email-href": "mailto: manager@radiongatiporou.co.nz"
}, {
    "country": "New Zealand",
    "location": "Whakatane",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "Mix 94.5\n\n      More Music Variety Mix",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Invercargill",
    "station": "Coast\n\n      Love the Music",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "96Five Family Radio Digital\n\n      English",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "Curtin FM\n\n      A Lifetime of Music",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Gisborne",
    "station": "RadioLIVE\n\n      The New Voice of Talk Radio",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Dunedin",
    "station": "Country Radio Dunedin\n\n      Playing the worlds best country music...",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Western Australia",
    "station": "ABC Extra\n\n      ABC Extra on Digital Radio from the ABC",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Whangarei",
    "station": "FLAVA\n\n      NZ's Home of Hip Hop & RnB",
    "email-href": ""
}, {
    "country": "Northern Mariana Islands",
    "location": "Saipan",
    "station": "KRNM\n\n      Public Radio station located on the campus of NMC",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=7961"
}, {
    "country": "New Zealand",
    "location": "Whakatane",
    "station": "Tumeke FM\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Gisborne",
    "station": "RadioLIVE\n\n      The New Voice of Talk Radio",
    "email-href": "mailto:rfullard@radiolive.co.nz"
}, {
    "country": "Papua New Guinea",
    "location": "Port Moresby",
    "station": "NBC Karai National Radio\n\n      Papua New Guinea's...",
    "email-href": "mailto:info@nbc.com.pg"
}, {
    "country": "New Zealand",
    "location": "Timaru",
    "station": "Radio New Zealand Concert\n\n      Radio New Zealand's fine music network",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "South Australia",
    "station": "Radio ENA\n\n      Australia's Premier Greek Radio Station",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Rotorua",
    "station": "Mai FM\n\n      Hottest Hip Hop and R'n'B",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Auckland",
    "station": "95bFM\n\n      The Originator",
    "email-href": "mailto:office@95bFM.com"
}, {
    "country": "New Zealand",
    "location": "Whangarei",
    "station": "Mai FM\n\n      Hottest Hip Hop and R'n'B",
    "email-href": ""
}, {
    "country": "Australia",
    "location": "Australian Capital Territory",
    "station": "666 ABC Canberra\n\n      666 ABC Canberra is proud...",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=9798"
}, {
    "country": "Northern Mariana Islands",
    "location": "Saipan",
    "station": "Magic 100.3\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Hastings",
    "station": "More FM Hawke's Bay\n\n      Live it. Love it. Sing it!",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Timaru",
    "station": "Life FM\n\n      Live it loud",
    "email-href": "mailto:Studio@lifefm.co.nz"
}, {
    "country": "Australia",
    "location": "New South Wales",
    "station": "triple j\n\n      triple j - We love music",
    "email-href": "http://tunein.com/Syndication/Edit/?stationId=25508"
}, {
    "country": "New Zealand",
    "location": "Dunedin",
    "station": "FLAVA\n\n      NZ's Home of Hip Hop & RnB",
    "email-href": ""
}, {
    "country": "Federated States of Micronesia",
    "location": "More in...",
    "station": "V6AV\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Hastings",
    "station": "FLAVA\n\n      NZ's Home of Hip Hop & RnB",
    "email-href": "mailto:flava@flava.co.nz"
}, {
    "country": "Federated States of Micronesia",
    "location": "More in...",
    "station": "V6AI\n\n      English",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Hamilton",
    "station": "George FM\n\n      beats working...",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Whangarei",
    "station": "LiveSport\n\n      Sport Radio You Can Bet On",
    "email-href": ""
}, {
    "country": "New Zealand",
    "location": "Whangarei",
    "station": "Heads 106.4FM\n\n      Better Music with Fewer Commercials",
    "email-href": "mailto:headsfm@gmail.com"
}, {
    "country": "New Zealand",
    "location": "Wellington",
    "station": "FLAVA\n\n      NZ's Home of Hip Hop & RnB",
    "email-href": "mailto:flava@flava.co.nz"
}, {
    "country": "Australia",
    "location": "Victoria",
    "station": "Kiss FM\n\n      Dance Music Radio",
    "email-href": "mailto:admin@kissfm.com.au"
}, {
    "country": "New Zealand",
    "location": "Queenstown",
    "station": "Port Fm\n\n      The Music Leader",
    "email-href": "mailto:portfmstudio@xtra.co.nz"
}]



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
//             fs.appendFile("australasia_json.json", JSON.stringify(data), function(err) {
//                 if (err) {
//                     return console.log(err);
//                 }
//                 console.log("The file was saved!");
//             });

//         });


// });


arrays.forEach(function(item) {

    item.station = item.station.substring(0, item.station.indexOf('  '));
    item.station = item.station.replace(/\n/g, "");
    //item.location = item.location.substring(0, item.location.indexOf(','));
    //city =  
    if (item.location === "More in...") {
        city = " "
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

    fs.appendFile("australasia_final1.json", JSON.stringify(data), function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });

})