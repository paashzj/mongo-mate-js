'use strict';

console.log("server started")

// start mongo
let mongo = require('./mongo');
mongo.start()

const express = require('express');

// Constants
const PORT = 31011;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);