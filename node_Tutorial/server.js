const express = require('express');
const app = express()


app.use(express.urlencoded({extended:false}));  //this is a middle-ware
app.use(express.json());

app.get('/', (req, res) => {
    res.send("getting to root");
});

app.get('/profile', (req, res) => {
    res.send("getting profile");
});

app.post('/profile', (req, res) => {
    console.log(req.body)
    res.send('success');
});

app.listen(3000);