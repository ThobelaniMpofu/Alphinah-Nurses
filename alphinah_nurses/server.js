import express, { json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app = express();
const PORT = process.env.VITE_PORT || 6000; // Change the fallback port if needed

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE;
console.log('Database is: ' + DB);

// Middleware
app.use(json());

// MongoDB connection
mongoose.connect(DB, {
    useNewUrlParser: true,
}).then(con => {
    // console.log(con.connections);
    console.log("DB connection successful!");
    console.log("You made it girl!!!!");
});


mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB Atlas');
});

mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
});

// Define your Timesheet schema and model using Mongoose
const timesheetSchema = new mongoose.Schema({
    name: String,
    surname: String,
    occupation: String,
    hospital_name: String,
    workingDays: [Date],
});

const Timesheet = mongoose.model('Timesheet', timesheetSchema);

//API endpoint to save Timesheet data
app.post('/api/timesheet', async (req, res) => {
    const timesheetData = req.body;

    try {
        const timesheet = new Timesheet(timesheetData);
        await timesheet.save();
        res.status(201).json({ message: 'Timesheet data saved successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

//Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

