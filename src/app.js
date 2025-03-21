const express = require('express');
const app = express();
const createUserRoute = require('./routes/createRoute');

app.use(express.json());

app.use('/', createUserRoute);

module.exports = app;