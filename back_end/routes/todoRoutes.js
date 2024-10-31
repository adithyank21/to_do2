// back_end/routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const {
    addTodo,
    getTodos,
    editTodo,
    deleteTodo,
} = require('../controllers/todoController');

router.post('/', addTodo);
router.get('/', getTodos);
router.put('/:id', editTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
