const express = require('express');
const app = express()


app.use(express.urlencoded({extended:false}));  //this is a middle-ware
app.use(express.json());

app.use(express.static(__dirname + '/public'))


app.listen(3000);