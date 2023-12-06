import express, { json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './src/routes/timesheetroutes.js';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
const PORT = process.env.VITE_PORT || 6000; // Change the fallback port if needed



dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE;
console.log('Database is: ' + DB);


// Middleware
app.use(cors());
app.use(bodyParser.json());
//app.use(json());
app.use('/timesheets', router);

//ROUTES
//app.get('/', (req, res) => {
//    res.send('We are on home');
//});
//app.get('/timesheets', (req, res) => {
//    res.send('We are about to submit timesheets!');
//});


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

//Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

