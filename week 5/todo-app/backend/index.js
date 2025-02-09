const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/todos', (req, res) => {
    res.send('app.post');
})

app.get('/todos', (req, res) => {
    res.send('app.get');
})

app.put('/todos/:id', (req, res) => {
    res.send("app.put");
})

app.delete('/todos/:id', (req, res) => {
    res.send("app.delete");
})


app.listen(port, () => {
    console.log(`app is listening on ${port}`);
})