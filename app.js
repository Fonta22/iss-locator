require('dotenv').config();

const express = require('express');
const Datastore = require('nedb');

const port = process.env.PORT;
const host = process.env.HOST;
const filedb = process.env.DB_NAME;

const app = express();

app.listen(port, () => console.log(`Server running at ${host}:${port}`));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore(filedb);
database.loadDatabase();

app.post('/api', (request, response) => {
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    
    //database.insert(data);
    //console.log(`Data saved to database: "${filedb}"`);

    response.json(data);
});