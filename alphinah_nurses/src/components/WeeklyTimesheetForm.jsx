import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const WeeklyTimesheetForm = () => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        calculateEarnings();
        // Handle form submission logic here
        console.log('Timesheet submitted:', timesheet);
        console.log('Earnings:', earnings);
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

            <p>Earnings: R{earnings}</p>
        </Form>
    );
};

export default WeeklyTimesheetForm;
