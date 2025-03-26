const express = require('express');
const app = express();
const routes = require('./routes/routes.js');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');


app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', routes);

module.exports = app;