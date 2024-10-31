// front_end/src/components/AddToDo/AddToDo.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AddToDo = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/todos', {
            title,
            description,
            date,
            time,
        });
        setTitle('');
        setDescription('');
        setDate('');
        setTime('');
    };

    return (
        <div className="container mt-5">
            <h2>Add To Do</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Date</label>
                    <input
                        type="date"
                        className="form-control"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Time</label>
                    <input
                        type="time"
                        className="form-control"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Add Task</button>
            </form>
        </div>
    );
};

export default AddToDo;
