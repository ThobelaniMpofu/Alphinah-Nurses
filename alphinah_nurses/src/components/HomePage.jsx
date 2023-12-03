import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import { Container, Navbar, Nav, Card } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div>


      <div className="bg-primary text-white text-center py-5">
        <Container>
          <h1>Welcome to Your Website</h1>
          <p>
            A place where you can find amazing things and do amazing stuff!
          </p>
        </Container>
      </div>

      <Container className="py-5">
        <h2 className="text-center mb-4">Featured Content</h2>
       
      </Container>

      <footer className="bg-dark text-light text-center py-3">
        <p>&copy; 2023 Your Website. All rights reserved.</p>
      </footer>
    </div>
  );
};




export default HomePage;