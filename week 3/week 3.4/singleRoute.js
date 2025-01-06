const express = require('express');
const app = express();

const isOldEnoughMiddleware = (req, res, next) => {
    const age = req.query.age;

    if (age > 14) {
        next();
    } else {
        res.status(411).json({ msg: "Sorry you are not of age yet." });
    }
}

app.use(isOldEnoughMiddleware);

app.get('/ride1', (req, res) => {
    if (isOldEnough(req.query.age)) {
        res.json({ msg: "You rode the first ride 1." });
    } else {
        res.status(411).json({ msg: "Sorry you are not of age yet." });
    }

});

app.get('/ride2', (req, res) => {
    if (isOldEnough(req.query.age)) {
        res.json({ msg: "You rode the first ride 2." });
    } else {
        res.status(411).json({ msg: "Sorry you are not of age yet." });
    }
})

app.use((err, req, res, next) => {
    res.status(400).send('Something went wrong');
})

app.listen(3000);