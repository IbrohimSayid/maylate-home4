import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TodosPage from './TodosPage';
import UserPage from './UserPage';
import Photos from './Photos';
import './App.css';

function App() {
    return (
        <>
            <Router>
                <header>
                    <nav>
                        <Link to="/todos">TODOS/POSTS</Link>
                        <Link to="/users">USERS</Link>
                        <Link to="/photos">PHOTOS</Link>
                    </nav>
                </header>

                <Routes>
                    <Route path="/todos" element={<TodosPage />} />
                    <Route path="/users" element={<UserPage />} />
                    <Route path="/photos" element={<Photos />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
