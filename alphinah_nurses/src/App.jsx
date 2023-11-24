// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Timesheet from './components/Timesheet';
import Hospital from './components/Hospital'

function App() {
    return (
        <Router>
            <Routes> {/* Wrap Routes around your Route components */}
                <Route path="/new-page" element={<Timesheet />} />
                <Route path="/Hospital" element={<Hospital />} /> {/* Add this line for the Hospital route */}
                <Route path="/" element={<>
                    <h1>Alphinah Nurses</h1>
                    <div className="card">
                        <Link to="/new-page">
                            <button>Go to New Page</button>
                        </Link>
                        <p>A world of care!</p>
                    </div>
                </>} />
            </Routes>
        </Router>
    );
}

export default App;
