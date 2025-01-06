const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

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
    res.send("You rode the first ride.");
});

app.get('/ride2', (req, res) => {
    res.send("You rode the second ride.");
});

app.get('/ride3', (req, res) => {
    res.send("You rode the third ride.");
});

app.listen(port, () => {
    console.log(`app is listening on ${port}`);
})