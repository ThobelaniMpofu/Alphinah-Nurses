// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import SubmitTimesheet from './components/SubmitTimesheet';
import ApproveTimesheets from './components/ApproveTimesheets';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import SendInvoices from './components/SendInvoices';
import ContactPage from './components/ContactPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorSchemesExample from './components/ColorSchemesExample';


function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <ColorSchemesExample/>
                <div id="page-body">
                <Routes> {/* Wrap Routes around your Route components */}
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/Submit-Timesheet" element={<SubmitTimesheet/>} />
                    <Route path="/Approve-Timesheets" element={<ApproveTimesheets/>} /> 
                    <Route path="/Send-Invoices" element={<SendInvoices/>} />
                    <Route path="/contactPage" element={<ContactPage/>}/>

                  
                </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
