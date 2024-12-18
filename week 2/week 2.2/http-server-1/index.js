const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/route-handler', function (req, res) {
    res.json({
        name: "vinal",
        age: 25
    })
})

app.get('/', function (req, res) {
    res.send("<h1>Hi there</h1>");
})

app.post('/conversations', function (req, res) {
    console.log(req.body);
    console.log(req.headers["authorization"]);
    res.json({
        msg: "2 + 2 = 4"
    });
})

app.post('/backend-api/conversation', function (req, res) {
    const message = req.query.message;
    console.log(message);
    res.json({
        output: "2 + 2 = 4"
    });
})

app.listen(port, function () {
    console.log(`app is listening to ${port}`);
})