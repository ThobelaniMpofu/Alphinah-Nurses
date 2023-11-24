// src/components/Hospital.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Hospital = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };

    return (
        <div>
            <h2>Hospital Page</h2>
            {/* Add the content for your Timesheet page */}
            <button onClick={goToHome}>Go to Home</button>
        </div>
    );
};

export default Hospital;
