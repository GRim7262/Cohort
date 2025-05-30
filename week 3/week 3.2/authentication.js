const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword = '123456';

const app = express();
app.use(express.json());

const ALL_USERS = [
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh",
    },
    {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman singh",
    },
    {
        username: "priya@gmail.com",
        password: "123321",
        name: "Priya kumari",
    },
]

const userExists = (username, password) => {
    // write logic to return true or false if this user exists
    // in ALL_USERS array
    for (let i = 0; i < ALL_USERS.length; i++) {
        if (ALL_USERS[i].username === username && ALL_USERS[i].password === password) {
            return true;
        }
    }
    return false;
}

// console.log(userExists('priya@gmail.com', '123321'))

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: 'User doesnt exist in our in memory db',
        });
    }

    let token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    });
});

app.get('/users', (req, res) => {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return a list of users other than this username
        res.json({
            users: ALL_USERS.filter((value) => {
                if (value.username === username) {
                    return false;
                } else {
                    return true;
                }
            })
        });

    } catch (err) {
        return res.status(403).json({
            msg: 'Invalid Token',
        });
    }
});

app.listen(3000);