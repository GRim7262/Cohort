const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const jwtPassword = '123456';

mongoose.connect(

);

const User = mongoose.model("User", {
    name: String,
    username: String,
    password: String,
});

const app = express();
app.use(express.json());

const userExists = (username, password) => {
    // for(let i = 0; i < )
}

app.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)){
        return res.status(403).json({
            msg: "User doesnt exist in our in memory db",
        });
    }

    let token = jwt.sign({username: username}, jwtPassword);
    return res.json({
        token,
    });
});

app.get('/users', (req, res) => {
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
          });
    }
});