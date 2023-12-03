import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const EmployeeCards = () => {
  const employees = [
    {
      id: 1,
      name: 'John',
      surname: 'Doe',
      experience: '5 years',
      imageUrl: 'https://placekitten.com/200/200', // Replace with actual image URL
    },
    {
      id: 2,
      name: 'Jane',
      surname: 'Smith',
      experience: '8 years',
      imageUrl: 'https://placekitten.com/201/201', // Replace with actual image URL
    },
    {
      id: 3,
      name: 'Bob',
      surname: 'Johnson',
      experience: '3 years',
      imageUrl: 'https://placekitten.com/202/202', // Replace with actual image URL
    },
  ];

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Employee Cards</h1>
      <Row>
        {employees.map((employee) => (
          <Col key={employee.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={employee.imageUrl} />
              <Card.Body>
                <Card.Title>{`${employee.name} ${employee.surname}`}</Card.Title>
                <Card.Text>Experience: {employee.experience}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EmployeeCards;