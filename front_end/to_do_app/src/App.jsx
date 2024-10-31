// front_end/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header';
import AddToDo from './components/Addtodolist';
import ViewToDo from './components/Viewtodolist';
import EditToDo from './components/Edittodolist';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<AddToDo />} />
                <Route path="/view" element={<ViewToDo />} />
                <Route path="/edit/:id" element={<EditToDo />} />
            </Routes>
        </Router>
    );
};

export default App;
