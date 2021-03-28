'use strict'
const app = require('./app');
const PORT = 3000;
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo/portafolio')
    .then(() => {
        console.log('Conexion realizada');
        // Creacion servidor
        app.listen(PORT,'0.0.0.0');

    })
    .catch(err => {
        console.log(err);
    });