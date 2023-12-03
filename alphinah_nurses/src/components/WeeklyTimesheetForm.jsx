import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const WeeklyTimesheetForm = () => {
  const [timesheet, setTimesheet] = useState({
    weekStartDate: '',
    dayShift: {
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
    },
    nightShift: {
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTimesheet({
      ...timesheet,
      [name]: value,
    });
  };

  const handleShiftChange = (shift, day, value) => {
    setTimesheet({
      ...timesheet,
      [shift]: {
        ...timesheet[shift],
        [day]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Timesheet submitted:', timesheet);
  };

  return (
    <Form onSubmit={handleSubmit}>
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
              <Form.Control
                type="number"
                placeholder={day.charAt(0).toUpperCase() + day.slice(1)}
                value={timesheet.dayShift[day]}
                onChange={(e) => handleShiftChange('dayShift', day, e.target.value)}
                required
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
              <Form.Control
                type="number"
                placeholder={day.charAt(0).toUpperCase() + day.slice(1)}
                value={timesheet.nightShift[day]}
                onChange={(e) => handleShiftChange('nightShift', day, e.target.value)}
                required
              />
            </Col>
          ))}
        </Row>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit Timesheet
      </Button>
    </Form>
  );
};

export default WeeklyTimesheetForm;
