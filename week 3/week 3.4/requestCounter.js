const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

let numberOfCount = 0;

const requestCounter = (req, res, next) => {
    numberOfCount++;
    next();
}

app.get('/', requestCounter, (req, res) => {
    res.status(200).json({numberOfCount});
})

app.listen(port, () => {
    console.log(`app is listening on ${port}`);
});