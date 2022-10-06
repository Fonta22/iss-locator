const express = require('express');
const { version } = require('../package.json');
const app = express();

app.get('/api/version', (request, response) => {
    response.send(version);
});

module.exports = app;
