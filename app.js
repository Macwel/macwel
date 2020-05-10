const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

//Routes
app.use('/routes/auth', require('./routes/auth.routes'));

const PORT = config.get('port') || 5001

async function start() {
    try{
       await mongoose.connect(config.get('mongoUrl'), {
         useNewUrlParser: true,
           useUnifiedTopology: true,
           useCreateIndex: true
        })
        app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))
    } catch(e) {
        console.log("Server error: ", e.message);
        process.exit(1);
    }
}

start();



