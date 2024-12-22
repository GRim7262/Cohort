const express = require('express');
const zod = require('zod');
const app = express();
const port = process.env.PORT || 3000;

const validateInput = (obj) => {
    const schema = zod.obj({
        email: zod.string().email(),
        password: zod.string().min(8)
    })

    const response = schema.safeParse(obj);
    console.log(response);
}

app.post('/login', (req, res, next) => {
    const inputs = req.body;

    const response = validateInput(inputs);

    if (!response.success) {
        res.status(411).json({
            msg: 'Your inputs are invalid.'
        })
        return;
    }
})

app.listen(port, () => {
    console.log(`app is listening on ${port}`);
})