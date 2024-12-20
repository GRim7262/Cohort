const express = require('express');
const zod = require('zod');
const app = express();
const port = process.env.PORT || 3000;

const schema = zod.array(zod.number());

const schemaTwo = zod.object({
    email: zod.string(),
    password: zod.string(),
    country: zod.literal('IN').or(zod.literal('US'))
})

app.use(express.json());

app.post('/health-checkup', (req, res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if (!response.success) {
        res.status(411).json({
            msg: "inputs are invalid"
        })
    } else {
        res.send({
            response
        });
    }
})

app.use((err, req, res, next) => {
    res.json({
        msg: 'Sorry, something is up with our server'
    })
})

app.listen(port, () => {
    console.log((`app is listening on ${port}`));
})