// src/components/Hospital.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import EmployeeCards from './EmployeeCards';

const ApproveTimesheets = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };

    return (
        <div>
            <h2>Hospital Page</h2>
            {/* Add the content for your Timesheet page */}
            <EmployeeCards/>
        </div>
    );
};

export default ApproveTimesheets;
