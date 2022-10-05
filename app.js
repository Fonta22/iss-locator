require('dotenv').config();

const express = require('express');
const Datastore = require('nedb');

const app = express();

app.listen(port, () => console.log(`Server running at ${process.env.HOST}:${process.env.PORT}`));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore(process.env.DB_NAME);
database.loadDatabase();

app.post('/api', (request, response) => {
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    
    //database.insert(data);
    //console.log(`Data saved to database: "${process.env.DB_NAME}"`);

    response.json(data);
});