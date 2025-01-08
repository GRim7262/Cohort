const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let numberRequestsForUser = {};

const rateLimiter = (req, res, next) => {
    userId = req.headers["user-id"]

    if (!userId) {
        res.status(400).send("User ID is required in headers.");
    }

    if (!(userId in numberRequestsForUser)) {
        numberRequestsForUser[userId] = 1;
    } else {
        numberRequestsForUser[userId]++;
    }

    if (numberRequestsForUser[userId] > 5) {
        res.status(429).send("You have execeeded the number of requests");
    }

    console.log(numberRequestsForUser);
    next();
}

app.use(rateLimiter);

app.get('/user', (req, res) => {
    res.status(200).json({ name: 'vinal' });
});

app.post('/user', (req, res) => {
    res.status(200).json({ msg: 'created dummy user' });
})

app.use((err, req, res, next) => {
    res.status(404).send("Error");
})

app.listen(port, () => {
    console.log(`app is listening on ${port}`);
});