const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/health-checkup', (req, res, next) => {
    console.log('hi from req1');
    next();
}, (req, res, next) => {
    console.log('hi from req2');
})

app.listen(port, () => {
    console.log(`app is listening on ${port}`);
})
