const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vinalpawar1:h7kplBNX8yfXJfwA@cluster0.jquic.mongodb.net/todo_app');

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}