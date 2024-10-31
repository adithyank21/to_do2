// front_end/src/components/EditToDo/EditToDo.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditToDo = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [todo, setTodo] = useState({
        title: '',
        description: '',
        date: '',
        time: '',
    });

    useEffect(() => {
        const fetchTodo = async () => {
            const response = await axios.get(`http://localhost:5000/todos/${id}`);
            setTodo(response.data);
        };
        fetchTodo();
    }, [id]);

    const handleChange = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/todos/${id}`, todo);
        navigate('/view');
    };

    return (
        <div className="container mt-5">
            <h2>Edit To Do</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        value={todo.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        name="description"
                        className="form-control"
                        value={todo.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Date</label>
                    <input
                        type="date"
                        name="date"
                        className="form-control"
                        value={todo.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Time</label>
                    <input
                        type="time"
                        name="time"
                        className="form-control"
                        value={todo.time}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Update Task</button>
            </form>
        </div>
    );
};

export default EditToDo;
