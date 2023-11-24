import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Timesheet = () => {
    const { register, handleSubmit, watch, setValue } = useForm();
    const [selectedDateRange, setSelectedDateRange] = useState([]);
    const onSubmit = (data) => {
        console.log(data);
    };

    const navigate = useNavigate();

    const goToHospital = () => {
        navigate('/Hospital');
    };

    return (
        <div>
            <h2>Timesheet Page</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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

                <div>
                    <label>Working Days:</label>
                    {/* You can customize the Calendar component based on your needs */}
                    <Calendar
                        onChange={(date) => {
                            // If there are exactly two dates selected, treat it as a range
                            if (date.length === 2) {
                                setValue('workingDays', date);
                                setSelectedDateRange(date);
                            }
                        }}
                        selectRange
                        value={selectedDateRange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <button onClick={goToHospital}>Go to Hospital</button>
        </div>
    );
};

export default Timesheet;
