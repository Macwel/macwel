const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

//Routes
app.use('/routes/auth', require('./routes/auth.routes'));

const PORT = config.get('port') || 5001

async function start() {
    try{
        console.log('123')
    }catch(e){
    console.log(e)
}
}

start();



