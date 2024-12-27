const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('');

const User = mongoose.model('Users', {
    name: String,
    email: String,
    password: String,
});

app.use(express.json());

app.post('/signin', async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
        return res.status(400).json({ msg: 'User already exists' });
    }

    const user = new User({
        name: name,
        email: email,
        password: password,
    });
    user.save();
    res.json({
        msg: 'User created successfully'
    });
});

app.listen(3000);