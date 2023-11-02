const https = require('https');
const fs = require('fs');

const express = require('express');


const app = express();

https.createServer({
    key: fs.readFileSync("key.pem"),
    cert:fs.readFileSync("cert.pem")
},app).listen(4000, () => {
    console.log('Server is running port 4000');
});

app.get('/',(req,res) => {
    res.send("Hello HTTPS Node express server");
});