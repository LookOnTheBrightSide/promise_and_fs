{
    "startUrl": "http://tunein.com/radio/United-Kingdom-r101309/?all=true&id=r101309&page=true&filter=!p%3a!e&other=true&offset=0",
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
    "_id": "united_k"
}