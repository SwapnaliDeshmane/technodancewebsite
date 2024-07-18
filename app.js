const express = require('express');
const path = require('path');
const fs= require("fs");
const { title } = require("process");
const app = express();
const port = 8000;


// app.use(express.static('static', options))

//EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static')) //For serving static files
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
app.set('view engine','pug');

app.set('views',path.join(__dirname,'views')) //Set the views directory

//ENDPOINTS
app.get('/',(req,res) =>{
    
    const params = { }
    res.status(200).render('home.pug',params);
})

app.get('/contact',(req,res) =>{
    
    const params = { }
    res.status(200).render('contact.pug',params);
})

//START THE SERVER
app.listen(port, ()=> {
    console.log(`This application started successfully ${port}`);
});