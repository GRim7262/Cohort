const express = require('express');
const zod = require('zod');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const kidneysInput = zod.literal('1').or(zod.literal('2'));

app.post('/health-checkup', (req, res) => {
    const kidneyId = req.body.kidneyId;
    const validation = kidneysInput.safeParse(kidneyId);
    if (!validation.success) {
        res.status(411).json({
            msg: 'Incorrect inputs'
        })
        return;
    }
    res.json({
        msg: 'Your kidney length is ' + kidneyId,
    })
})

app.listen(port, () => {
    console.log(`app is listening on ${port}`);
})