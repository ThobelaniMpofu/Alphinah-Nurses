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

            const response = await axios.post('http://localhost:3000/timesheets', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 201) {
                const result = response.data;
                setFormData(result);
                console.log('Timesheet submitted successfully:', result);
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
    };

    const calculateEarnings = () => {
        const dayShiftCount = Object.values(timesheet.dayShift).filter(Boolean).length;
        const nightShiftCount = Object.values(timesheet.nightShift).filter(Boolean).length;
        const calculatedEarnings = 2 * dayShiftCount + 3.5 * nightShiftCount;
        setEarnings(calculatedEarnings);
    };

    const handleTimesheetSubmit = (e) => {
        e.preventDefault();
        calculateEarnings();
        // Handle form submission logic here
        console.log('Timesheet submitted:', timesheet);
        
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
                <button type="submit">Submit</button>
            </Form>

            {formData && <SendInvoices formData={formData} />} {/* Render the InvoiceGenerator component with form data */}

            <Form onSubmit={handleTimesheetSubmit}>
                <Form.Group controlId="formWeekStartDate">
                    <Form.Label>Week Start Date</Form.Label>
                    <Form.Control
                        type="date"
                        name="weekStartDate"
                        value={timesheet.weekStartDate}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Day Shift</Form.Label>
                    <Row>
                        {Object.keys(timesheet.dayShift).map((day) => (
                            <Col key={day}>
                                <Form.Check
                                    type="checkbox"
                                    label={day.charAt(0).toUpperCase() + day.slice(1)}
                                    checked={timesheet.dayShift[day]}
                                    onChange={() => handleShiftChange('dayShift', day)}
                                />
                            </Col>
                        ))}
                    </Row>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Night Shift</Form.Label>
                    <Row>
                        {Object.keys(timesheet.nightShift).map((day) => (
                            <Col key={day}>
                                <Form.Check
                                    type="checkbox"
                                    label={day.charAt(0).toUpperCase() + day.slice(1)}
                                    checked={timesheet.nightShift[day]}
                                    onChange={() => handleShiftChange('nightShift', day)}
                                />
                            </Col>
                        ))}
                    </Row>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit Timesheet
                </Button>
            </Form>

            <p>Earnings: R{earnings}</p>
        </div>
    );
};

export default SubmitTimesheet;
