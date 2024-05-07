'use strict';
const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
res.send('Hello DevOps folks <3 <br> This app is build by Jenkins and is now running inside Docker :) <br> Docker Image: moorvik1/node-web-app  <br> Docker Container: moorvik1-web-app-container');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);