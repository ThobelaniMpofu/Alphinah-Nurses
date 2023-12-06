import mongoose from 'mongoose';
import express, { json } from 'express';


// Define your Timesheet schema and model using Mongoose
const timesheetSchema = new mongoose.Schema({
    name: String,
    surname: String,
    occupation: String,
    hospital_name: String,
    earnings: Number,
});

const Timesheet = mongoose.model('Timesheet', timesheetSchema);

export default Timesheet;
