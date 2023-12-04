import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SendInvoices from './SendInvoices'; // Import the new component
import { Container } from 'react-bootstrap';
import WeeklyTimesheetForm from './WeeklyTimesheetForm';
import NameForm from './NameForm';

const SubmitTimesheet = () => {
    const { register, handleSubmit, watch, setValue } = useForm();
    const [selectedDateRange, setSelectedDateRange] = useState([]);
    const [formData, setFormData] = useState(null); // Store form data

    const onSubmit = (data) => {
        console.log(data);
    };

    const navigate = useNavigate();

    const goToHospital = () => {
        navigate('/Approve-Timesheets');
    };

    return (
        <div>
            <h2>Timesheet Page</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <NameForm/>
                <div>
                    <label>Occupation:</label>
                    <select {...register('occupation', { required: true })}>
                        <option value="enrolledNurse">Enrolled Nurse</option>
                        <option value="registeredNurse">Registered Nurse</option>
                        <option value="careGiver">Care Giver</option>
                        <option value="enrolledNurseAssistance">Enrolled Nurse Assistance</option>
                    </select>
                </div>

                <div>
                    <label>Hospital Name:</label>
                    <select {...register('hospital_name', { required: true })}>
                        <option value="nazarethHouse">Nazareth House-Children</option>
                        <option value="registeredNurse">Nazareth House-Elderly</option>
                        <option value="careGiver">Nazareth House-The Villa</option>
                        <option value="careGiver">Sandringham-Ward</option>
                        <option value="careGiver">Vivalon</option>
                    </select>
                </div>

                <div>
                    <label>Working Days:</label>
                    {/* You can customize the Calendar component based on your needs */}
                    
                </div>
               
            </form>
            
            {formData && <SendInvoices formData={formData} />} {/* Render the InvoiceGenerator component with form data */}
            <WeeklyTimesheetForm/>
        </div>
    );
};

export default SubmitTimesheet;
