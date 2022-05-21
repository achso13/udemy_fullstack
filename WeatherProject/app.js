const express = require("express");
const https = require("https");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
    const url = "https://api.openweathermap.org/data/2.5/find?q=depok&units=metric&appid=fbd8c5f3f43d51adb838299f6cd9e3f6";
    https.get(url, (response) => {
        console.log('statusCode:', response.statusCode);
        console.log('headers:', response.headers);

        response.on("data", (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.list[0].main.temp;
            const weatherDescription = weatherData.list[0].weather[0].description;
            const icon = `http://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`;

            res.write('<head><meta charset="utf-8"></head>');
            res.write("<h3>The weather is currently " + weatherDescription + "<h3>");
            res.write("<h1>The temperature of depok is " + temp + " degree celcius.</h1>");
            res.write("<img src=" + icon + ">");
            res.send();
        });
    });

    // res.send("Server is up and running.");
});

app.listen(port, () => {
    console.log("Server is running on port 3000");
});