const express = require('express');
const Datastore = require('nedb');

const app = express();
const port = 3000;
const filedb = 'database.db';

app.listen(port, () => console.log(`listening at ${port}`));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore(filedb);
database.loadDatabase();

app.post('/api', (request, response) => {
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    
    database.insert(data);
    console.log(`Data saved to database: "${filedb}"`);

    response.json({
        status: 'success',
        latitude: data.lat,
        longitude: data.lon
    });
});