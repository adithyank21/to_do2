// back_end/controllers/todoController.js
const Todo = require('../models/todoModel');

exports.addTodo = async (req, res) => {
    const { title, description, date, time } = req.body;

    const todo = new Todo({
        title,
        description,
        date,
        time,
    });

    try {
        await todo.save();
        res.status(201).json(todo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.editTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        if (!todo) return res.status(404).json({ message: 'Todo not found' });

        todo.title = req.body.title;
        todo.description = req.body.description;
        todo.date = req.body.date;
        todo.time = req.body.time;

        await todo.save();
        res.json(todo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if the Todo exists
        const todo = await Todo.findById(id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        // Delete the Todo
        await Todo.findByIdAndDelete(id);
        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        console.error('Error deleting todo:', error); // Log the error for debugging
        res.status(500).json({ message: 'Error deleting todo', error });
    }
};