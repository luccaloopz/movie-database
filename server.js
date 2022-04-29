const express = require('express');
const mysql = require('mysql');

const PORT = process.env.PORT || 3001;

const app = express(); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api);

app.use(express.static('public'));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'movie_db'
}, console.log('connected to the movie database'));

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})