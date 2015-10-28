
{
    "startUrl": [
"http://tunein.com/radio/Belize-r100305/?other=true&page=true&filter=!p%3a!e&other=true&offset=[0-126:7]",
"http://tunein.com/radio/Costa-Rica-r101230/?other=true&page=true&filter=!p%3a!e&other=true&offset=[0-126:7]",
"http://tunein.com/radio/El-Salvador-r100336/?other=true&page=true&filter=!p%3a!e&other=true&offset=[0-126:7]",
"http://tunein.com/radio/Guatemala-r100350/?other=true&page=true&filter=!p%3a!e&other=true&offset=[0-126:7]",
"http://tunein.com/radio/Honduras-r100353/?other=true&page=true&filter=!p%3a!e&other=true&offset=[0-126:7]",
"http://tunein.com/radio/Nicaragua-r100388/?other=true&page=true&filter=!p%3a!e&other=true&offset=[0-126:7]",
"http://tunein.com/radio/Panama-r101284/?other=true&page=true&filter=!p%3a!e&other=true&offset=[0-126:7]"
]


,
    "selectors": [{
        "parentSelectors": ["_root"],
        "type": "SelectorLink",
        "multiple": true,
        "id": "top_link",
        "selector": "a._tooltip",
        "delay": ""
    }, {
        "parentSelectors": ["top_link"],
        "type": "SelectorText",
        "multiple": false,
        "id": "station",
        "selector": "div.info h1",
        "regex": "",
        "delay": ""
    }, {
        "parentSelectors": ["top_link"],
        "type": "SelectorText",
        "multiple": false,
        "id": "city",
        "selector": "div.info-panel li:nth-of-type(1) span",
        "regex": "",
        "delay": ""
    }, {
        "parentSelectors": ["top_link"],
        "type": "SelectorLink",
        "multiple": false,
        "id": "email",
        "selector": "li.link-list a:nth-of-type(2)",
        "delay": ""
    }],
    "_id": "central_america"
}
















