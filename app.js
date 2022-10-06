require('dotenv').config();

const express = require('express');
const Datastore = require('nedb');

const port = process.env.PORT;
const host = process.env.HOST;
const filedb = process.env.DB_NAME;

const { version } = require('./package.json');

const app = express();

app.listen(port, () => console.log(`Server running at ${host}:${port}`));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

app.use(require('./api/index'));
app.use(require('./api/version'));
