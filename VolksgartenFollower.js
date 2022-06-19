const http = require("https");

const options = {
    "method": "GET",
    "hostname": "instagram-data1.p.rapidapi.com",
    "port": null,
    "path": "/followers?username=volksgarten",
    "headers": {
        "X-RapidAPI-Key": "394c4f405cmsh63aff50cc25cc04p1293dbjsn3ad12adadd80",
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
        let response = JSON.parse(data);
        console.log(response.count)
    });
});

req.end();


