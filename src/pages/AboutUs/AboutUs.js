import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer.js';
import './AboutUs.css';
import { FaRocket, FaRegLightbulb, FaUsers } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <>
    <Header />
    <Container fluid className="purple-background">
      <Row className="justify-content-center my-5">
        <Col lg={8} className="text-center">
        <h1 className="h1-custom-color">About the Space Exploration Dashboard</h1>
        <FaRocket className="icon-style" />
          <p className="mt-4">
            As part of my Master of Science in Software Development capstone at Maryville University, 
            I developed the Space Exploration Dashboard—a dynamic web application that consolidates 
            real-time updates on space missions, schedules of astronomical events, and space weather 
            forecasts into a cohesive, user-friendly interface.
          </p>
          <p>
            Space devotees, along with students, researchers, and industry professionals, often 
            encounter the cumbersome task of navigating through various platforms for space-related 
            information. This fragmentation leads to inefficiencies in accessing up-to-date mission 
            insights, celestial event calendars, and space weather updates.
          </p>
          <FaRegLightbulb className="icon-style" />
          <p>
            Whether you are a space enthusiast keen on the latest cosmic developments, a student 
            delving into the wonders of the universe, an astronomer in pursuit of precision, or a 
            mission operator coordinating interstellar ventures, our dashboard is your centralized 
            nexus for timely and accurate space exploration data.
          </p>
          <p>
            The Space Exploration Dashboard is the culminating point where convenience meets 
            ingenuity. It’s a singular platform where users can find live updates, event alerts, 
            and critical space weather information—all without the hassle of switching between 
            different sources.
          </p>
          <FaUsers className="icon-style" />
          <p>
            This dashboard is designed to be a comprehensive hub for anyone captivated by the 
            cosmos. It streamlines the experience of engaging with space exploration, ensuring 
            that information is not just available but accessible to all, fueling curiosity and 
            nurturing an informed appreciation for the final frontier.
          </p>
          <p>
            Space exploration unites us in wonder and ambition. As we continue to gaze upwards, 
            the importance of making space exploration insights accessible cannot be overstated. 
            This project isn't just a tool; it's a tribute to the collective journey of humankind 
            among the stars.
          </p> 
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default AboutUs;

