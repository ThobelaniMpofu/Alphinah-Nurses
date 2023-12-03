import React from 'react';
import { Container } from 'react-bootstrap';
import InvoiceGenerator from './InvoiceGenerator';

const SendInvoices = ({ formData }) => {
    // Generate invoice based on form data
    const SendInvoices = () => {
        // Example: Create an invoice string with the submitted data
        const invoiceText = `
      Invoice
      Name: ${formData.name}
      Surname: ${formData.surname}
      Occupation: ${formData.occupation}
      Hospital Name: ${formData.hospital_name}
      Working Days: ${formData.workingDays.join(', ')}
    `;

        // You can further customize the invoice generation based on your needs

        console.log(invoiceText);
        // For a real application, you might want to send the invoice data to a server or display it in a modal
    };

    return (
        <div>
            <h2>Invoice Generator</h2>
            <button onClick={SendInvoices}>Generate Invoice</button>

            <InvoiceGenerator/>

        
        </div>
    );
};

export default SendInvoices;
