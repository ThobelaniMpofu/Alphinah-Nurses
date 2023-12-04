import React, { useRef } from 'react';
import { Button, Table } from 'react-bootstrap';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const InvoiceGenerator = () => {
  const contentRef = useRef(null);

  const generateInvoice = () => {
    const input = contentRef.current;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, 210, 297); // A4 size: 210mm x 297mm
      pdf.save('invoice.pdf');
    });
  };

  return (
    <div>
      <div ref={contentRef}>
        {/* Your Bootstrap-styled invoice content goes here */}
        <h1 className="text-center">Invoice</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Item</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Item 1</td>
              <td>Description 1</td>
              <td>2</td>
              <td>$20.00</td>
            </tr>
            <tr>
              <td>Item 2</td>
              <td>Description 2</td>
              <td>1</td>
              <td>$15.00</td>
            </tr>
          </tbody>
        </Table>
        <p className="text-right">Total: $35.00</p>
      </div>

      <Button variant="primary" onClick={generateInvoice} className="mt-3">
        Generate Invoice PDF
      </Button>
    </div>
  );
};

export default InvoiceGenerator;
