const express = require('express');
const bcrypt = require('bcrypt-nodejs');

const app = express();

const database = {
    users: [
        {
            id: '123',
            name: 'John',
            email: 'john@gmail.com',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'sally',
            email: 'sally@gmail.com',
            entries: 0,
            joined: new Date()
        }
    ],
    login: [
        {
            id: '987',
            hash: '',
            email: 'john@gmail.com'
        }
    ]
}


app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/', (req, res) => {
    res.json(database.users);
})

app.post('/signin', (req,res) =>{
    bcrypt.compare("apples", '$2a$10$yqyCAmBsgO4n33J8.W.7E.aFQpFs.BQutXj/6MZIP4vUqKmxS6xLS', function(err, res) {
        console.log('first guess: ', res);
    });
    bcrypt.compare("vergies", '$2a$10$yqyCAmBsgO4n33J8.W.7E.aFQpFs.BQutXj/6MZIP4vUqKmxS6xLS', function(err, res) {
        console.log('second guess: ', res);
    });

    if (req.body.email === database.users[0].email && 
        req.body.password === database.users[0].password) {
        res.json('success');
    } else {
        res.status(400).json('error logging in');
    }
})


app.post('/register', (req, res) => {
    const { email, name, password } = req.body;
    database.users.push({
        id: '125',
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date()
    })  
    res.json(database.users[database.users.length-1]); // we are passing the index of the last database user object to json
})

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let found = false;
    database.users.forEach(users => {
        if (users.id == id) {
            found = true;
            return res.json(users);
        } 
    })
    if (!found) {
        res.status(404).json('no such user found');
    }
})

app.put('/image', (req, res) => {
    const { id } = req.body;
    let found = false;
    database.users.forEach(users => {
        if (users.id == id) {
            found = true;
            users.entries++
            return res.json(users.entries);
        } 
    })
    if (!found) {
        res.status(404).json('no such user found');
    }
})

app.listen(3000, () => {
    console.log('app is running on port 3000');
})