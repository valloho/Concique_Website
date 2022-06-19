const http = require("https");

const options = {
    "method": "GET",
    "hostname": "instagram-data1.p.rapidapi.com",
    "port": null,
    "path": "/followers?username=barackobama",
    "headers": {
        "X-RapidAPI-Key": "d73f3f6c3amshb2715403bab0964p1aee18jsn27b98dc95199",
        "X-RapidAPI-Host": "instagram-data1.p.rapidapi.com",
        "useQueryString": true
    }
};

const req = http.request(options, (res) => {
    let data = '';

    res.on("data", (chunk) => {
        data += chunk;
    });

    res.on("end", () => {
        console.log(JSON.parse(data))
    });
});

req.end();