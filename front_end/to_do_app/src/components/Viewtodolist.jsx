// front_end/src/components/ViewToDo/ViewToDo.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewToDo = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await axios.get('http://localhost:5000/todos');
            setTodos(response.data);
        };
        fetchTodos();
    }, []);

    const deleteTodo = async (id) => {
        console.log('Deleting todo with id:', id); // Check the ID being passed
        if (window.confirm('Are you sure you want to delete this task?')) {
            try {
                await axios.delete(`http://localhost:5000/todos/${id}`);
                setTodos(todos.filter(todo => todo._id !== id));
            } catch (error) {
                console.error('Error deleting todo:', error);
            }
        }
    };

    return (
        <div className="container mt-5">
            <h2>View To Do List</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo._id}>
                            <td>{todo.title}</td>
                            <td>{todo.description}</td>
                            <td>{new Date(todo.date).toLocaleDateString()}</td>
                            <td>{todo.time}</td>
                            <td style={{display:'flex',gap:'30px'}}>
                                <Link to={`/edit/${todo._id}`} className="btn btn-warning btn-sm">Edit</Link>
                                <button onClick={() => deleteTodo(todo._id)}  className="btn btn-warning btn-sm">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewToDo;
