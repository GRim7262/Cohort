const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('<h1>Hello World!</h1>');
})

app.get('/get-json', function (req, res) {
    res.json({
        name: "vinal",
        age: 24
    })
})

app.post('/backend-api/conversations', function (req, res) {

    console.log(req.headers["authorization"]);

    console.log(req.body);
    
    const message = req.query.message;
    console.log(message);

    res.json({
        output: "2 + 2 = 4"
    })
})

app.listen(port, function () {
    console.log(`test.js is listening on ${port}`);
})