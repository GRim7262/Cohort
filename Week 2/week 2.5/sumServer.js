const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

function calculateSum(n) {
    let ans = 0;
    for (let i = 0; i <= n; i++) {
        ans += i;
    }
    return ans;
}

function sumOfTwo(a, b) {
    return a + b;
}

app.get('/', function (req, res) {
    const n = req.query.n;
    const ans = calculateSum(n);
    res.send(ans.toString());
})

app.get('/sum', function (req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const ans = sumOfTwo(a, b);
    res.send(ans.toString());
})

app.listen(port, function () {
    console.log(`app is listening on ${port}`);
})