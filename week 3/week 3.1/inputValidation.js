const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/health-checkup', (req, res) => {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send('Your kidney length is ' + kidneyLength);
})

app.listen(port, () => {
    console.log(console.log(`app is listening on ${port}`));
})