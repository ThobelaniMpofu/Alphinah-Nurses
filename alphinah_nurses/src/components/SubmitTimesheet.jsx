import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SendInvoices from './SendInvoices'; // Import the new component
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const SubmitTimesheet = () => {
    const { register, handleSubmit, watch, setValue } = useForm();
    const [selectedDateRange, setSelectedDateRange] = useState([]);
    const [formData, setFormData] = useState(null); // Store form data

    const onSubmit = async (data) => {
        try {
            
            console.log('Earnings:', earnings);
            // Add the earnings value to the data object
            data.earnings = earnings;
            data.start_date = timesheet.weekStartDate;
            console.log("The selected days for dayshift are " + timesheet.dayShift);
            const response = await axios.post('http://localhost:3000/timesheets', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 201) {
                const result = response.data;
                setFormData(result);
                console.log('Timesheet submitted successfully:', result);
                console.log('Timesheet submitted:', data);
            } else {
                console.error('Failed to submit timesheet:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting timesheet:', error);
        }
    };

    const navigate = useNavigate();

    const goToHospital = () => {
        navigate('/Approve-Timesheets');
    };

    const [timesheet, setTimesheet] = useState({
        weekStartDate: '',
        dayShift: {
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false,
        },
        nightShift: {
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false,
        },
    });

    const [earnings, setEarnings] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTimesheet({
            ...timesheet,
            [name]: value,
        });
        calculateEarnings();
    };

    const handleShiftChange = (shift, day) => {
        // If a day is selected in one shift, unselect it in the other shift
        const otherShift = shift === 'dayShift' ? 'nightShift' : 'dayShift';

        setTimesheet({
            ...timesheet,
            [shift]: {
                ...timesheet[shift],
                [day]: !timesheet[shift][day],
            },
            [otherShift]: {
                ...timesheet[otherShift],
                [day]: false,
            },
        });
        calculateEarnings();
    };

    const calculateEarnings = () => {
        const dayShiftCount = Object.values(timesheet.dayShift).filter(Boolean).length;
        const nightShiftCount = Object.values(timesheet.nightShift).filter(Boolean).length;
        const calculatedEarnings = 2 * dayShiftCount + 3.5 * nightShiftCount;
        setEarnings(calculatedEarnings);
    };

    

    return (
        <div>
            <h2>Timesheet Page</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name:</label>
                    <input {...register('name', { required: true })} />
                </div>
                <div>
                    <label>Surname:</label>
                    <input {...register('surname', { required: true })} />
                </div>

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

                <div className="form-group" id="formWeekStartDate">
                    <label>Week Start Date</label>
                    <input
                        {...register('start_date', { required: true })}
                        type="date"
                        name="weekStartDate"
                        value={timesheet.weekStartDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Day Shift</label>
                    <div className="row">
                        {Object.keys(timesheet.dayShift).map((day) => (
                            <div key={day} className="col">
                                <input
                                    type="checkbox"
                                    id={`dayShift-${day}`}
                                    checked={timesheet.dayShift[day]}
                                    onChange={() => handleShiftChange('dayShift', day)}
                                />
                                <label htmlFor={`dayShift-${day}`}>
                                    {day.charAt(0).toUpperCase() + day.slice(1)}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="form-group">
                    <label>Night Shift</label>
                    <div className="row">
                        {Object.keys(timesheet.nightShift).map((day) => (
                            <div key={day} className="col">
                                <input
                                    type="checkbox"
                                    id={`nightShift-${day}`}
                                    checked={timesheet.nightShift[day]}
                                    onChange={() => handleShiftChange('nightShift', day)}
                                />
                                <label htmlFor={`nightShift-${day}`}>
                                    {day.charAt(0).toUpperCase() + day.slice(1)}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <label>Earnings:</label>
                     R{earnings}
                </div>


                <button type="submit">Submit</button>


            </Form>

            

            
        </div>
    );
};

export default SubmitTimesheet;
