const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vinalpawar1:h7kplBNX8yfXJfwA@cluster0.jquic.mongodb.net/userappnew');

const User = mongoose.model('Users', {
    name: String,
    email: String,
    password: String,
});

app.use(express.json());

app.post('/signin', async (req, res, next) => {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await User.findOne({ email: username });
    if (existingUser) {
        res.status(400).json({ msg: 'User already exists' });
    }

    const user = new User({
        name: name,
        email: username,
        password: password,
    });
    user.save();
    res.json({
        msg: 'User created successfully'
    });
});

app.listen(3000);