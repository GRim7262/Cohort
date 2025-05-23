const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.post('/todos', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        });
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    });

    res.status(200).json({
        msg: "Todo created successfully"
    });

})

app.get('/todos', async (req, res) => {
    const todos = await todo.find({});

    res.status(200).json({
        todos
    });
});

app.put('/completed/:id', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs"
        });
        return;
    }

    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    });
    res.status(200).json({
        msg: "Todo marked as completed"
    })
});

app.listen(port, () => {
    console.log(`app is listening on ${port}`);
})