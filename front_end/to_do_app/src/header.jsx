// front_end/src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-primary text-white p-3">
            <h1>To-Do List</h1>
            <nav>
                <Link to="/" className="text-white mx-2">Add To Do</Link>
                <Link to="/view" className="text-white mx-2">View To Do List</Link>
            </nav>
        </header>
    );
};

export default Header;
