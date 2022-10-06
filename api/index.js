const express = require('express');

const app = express();

app.use(express.json({ limit: '1mb' }));

app.post('/api', (req, res) => {
    let data = req.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;

    res.json(data);
});

app.get('/version', (request, response) => {
    response.send(version);
});

module.exports = app;
