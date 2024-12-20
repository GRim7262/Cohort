const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const userMiddleware = (req, res, next) => {
    const username = req.headers.username;
    const password = req.headers.password;

    if (username != 'harkirat' || password != 'pass') {
        res.status(400).json({
            msg: 'Something is wrong with your inputs'
        })
    } else {
        next();
    }
}

const kidneyMiddleware = (req, res, next) => {
    const kidneyId = req.query.kidneyId;

    if (kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({
            msg: 'Something is wrong with your inputs'
        })
    } else {
        next();
    }
}

let numberOfRequests = 0;

const calculateRequests = (req, res, next) => {
    numberOfRequests++;
    console.log(numberOfRequests);
    next();
}

app.get('/health-checkup', userMiddleware, kidneyMiddleware, calculateRequests, (req, res) => {
    res.status(200).json({
        msg: 'Your kidney is fine'
    })
})

app.listen(port, () => {
    console.log(`app is listening on ${port}`);
})