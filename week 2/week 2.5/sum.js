const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

function sum(a, b) {
    return a + b;
}

app.get('/', function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const ans = sum(a, b);
    res.send(ans.toString());
})

app.listen(port, function () {
    console.log(`sum is listening on ${port}`);
})