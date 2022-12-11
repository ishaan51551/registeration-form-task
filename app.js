const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require("express");
const app = express(); //app mai sara express ka properties aa gayi

dotenv.config({ path: './config.env' });

require('./db/conn');
//const User = require('./model/userSchema');

app.use(express.json());//we are using middleware becoz all the data was comming from json ,after using it is converted to javascript object .

//we link our router files to make our route easy
app.use(require('./router/auth'));

const PORT = process.env.PORT;


//middleware
const middleware = (req, res, next) => {
    console.log('hello my middleware');
    next();
}

// app.get('/', (req, res) => {
//     res.send(`Hello world from the server`);
// });

app.get('/about', middleware, (req, res) => {
    console.log('hello my about');
    res.send(`Hello about world from the server`);
}); //middleware ka basically ye kam hai ki agr hm log aboutme waala page mai click karenga then page login hai ki nahi batayange,agar nahi hai to login page dikhange and agr hai to aboutme wala pagee

app.get('/contact', (req, res) => {
    res.send(`Hello contact world from the server`);
});
app.get('/signin', (req, res) => {
    res.send(`Hello login world from the server`);
});
app.get('/signup', (req, res) => {
    res.send(`Hello registeration world from the server`);
});

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
})