'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// cargar ficheros rutas
const router = require('./routes/project');

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//CORS
app.use('/api',router);

// cargar rutas


//exportar
module.exports = app;