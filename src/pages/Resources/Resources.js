import React from 'react';
import { Accordion, Card, ListGroup } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './Resources.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const ResourcesPage = () => {
  return (
    <>
      <Header />
      <Accordion defaultActiveKey="0">
        {/* Space Resources Accordion Item */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>Space Resources</Accordion.Header>
          <Accordion.Body>
            <ListGroup variant="flush">
              {/* List of Space Resources with Links */}
              <ListGroup.Item>
                <a href="https://www.nasa.gov/" target="_blank" rel="noreferrer">NASA</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href="https://www.spacex.com/" target="_blank" rel="noreferrer">SpaceX</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href="https://www.blueorigin.com/" target="_blank" rel="noreferrer">Blue Origin</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href="https://www.virgingalactic.com/" target="_blank" rel="noreferrer">Virgin Galactic</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href="https://www.boeing.com/space/" target="_blank" rel="noreferrer">Boeing</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href="https://www.lockheedmartin.com/en-us/capabilities/space.html" target="_blank" rel="noreferrer">Lockheed Martin</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href="https://www.orbital.com/" target="_blank" rel="noreferrer">Northrop Grumman</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href="https://www.rocketlabusa.com/" target="_blank" rel="noreferrer">Rocket Lab</a>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>

        {/* FAQ Section */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>FAQ</Accordion.Header>
          <Accordion.Body>
            {/* Nested Accordion for FAQ */}
            <Accordion>
              {/* FAQ Item 1 */}
              <Accordion.Item eventKey="faq-1">
                <Accordion.Header>Q: What is space exploration?</Accordion.Header>
                <Accordion.Body>
                  A: Space exploration is the ongoing discovery and exploration of celestial structures in outer space.
                </Accordion.Body>
              </Accordion.Item>
              {/* FAQ Item 2 */}
              <Accordion.Item eventKey="faq-2">
                <Accordion.Header>Q: How do astronauts train?</Accordion.Header>
                <Accordion.Body>
                  A: Astronauts undergo rigorous training in simulators, practice spacewalks, and study spacecraft systems.
                </Accordion.Body>
              </Accordion.Item>
              {/* FAQ Item 3 */}
              <Accordion.Item eventKey="faq-3">
                <Accordion.Header>Q: What are the challenges of living in space?</Accordion.Header>
                <Accordion.Body>
                  A: Challenges include microgravity effects on the human body, radiation exposure, and psychological stresses of isolation and confinement.
                </Accordion.Body>
              </Accordion.Item>
              {/* FAQ Item 4 */}
              <Accordion.Item eventKey="faq-4">
                <Accordion.Header>Q: How long can astronauts stay in space?</Accordion.Header>
                <Accordion.Body>
                  A: The duration varies, but on the International Space Station (ISS), missions typically last about six months.
                </Accordion.Body>
              </Accordion.Item>
              {/* FAQ Item 5 */}
              <Accordion.Item eventKey="faq-5">
                <Accordion.Header>Q: What kind of research is conducted in space?</Accordion.Header>
                <Accordion.Body>
                  A: Research includes studies on microgravity's effects on biology, human physiology, physics, astronomy, and materials science.
                </Accordion.Body>
              </Accordion.Item>
              {/* FAQ Item 6 */}
              <Accordion.Item eventKey="faq-6">
                <Accordion.Header>Q: How do space agencies protect spacecraft from space debris?</Accordion.Header>
                <Accordion.Body>
                  A: Spacecraft are equipped with shielding, and space agencies track debris to maneuver spacecraft away from potential collisions.
                </Accordion.Body>
              </Accordion.Item>
          {/* FAQ Item: Space Weather */}
          <Accordion.Item eventKey="faq-7">
                <Accordion.Header>Q: What is space weather?</Accordion.Header>
                <Accordion.Body>
                  A: Space weather refers to the environmental conditions in space as influenced by the Sun and the solar wind. It can affect space-borne and ground-based technological systems and can endanger human life or health.
                </Accordion.Body>
              </Accordion.Item>

              {/* FAQ Item: Satellites */}
              <Accordion.Item eventKey="faq-8">
                <Accordion.Header>Q: How do satellites stay in orbit?</Accordion.Header>
                <Accordion.Body>
                  A: Satellites stay in orbit primarily due to the balance between their velocity (which tries to send them off into space) and the gravitational pull from Earth (which tries to pull them back). An orbit is essentially a constant free-fall towards Earth, offset by moving fast enough forward to miss the Earth.
                </Accordion.Body>
              </Accordion.Item>

              {/* FAQ Item: Orbital Mechanics */}
              <Accordion.Item eventKey="faq-9">
                <Accordion.Header>Q: What are the basics of orbital mechanics?</Accordion.Header>
                <Accordion.Body>
                  A: Orbital mechanics, also known as celestial mechanics, is the study of the motions of artificial and natural celestial bodies. At its core, it involves the application of Newton's laws of motion and law of universal gravitation to explain the orbits of planets, moons, and artificial satellites.
                </Accordion.Body>
              </Accordion.Item>

              {/* FAQ Item: Space Debris */}
              <Accordion.Item eventKey="faq-10">
                <Accordion.Header>Q: What is space debris?</Accordion.Header>
                <Accordion.Body>
                  A: Space debris, also known as orbital debris, space junk, and space waste, is the collection of defunct objects in Earth's orbit and includes spent rocket stages, defunct satellites, and fragments from disintegration, erosion, and collisions.
                </Accordion.Body>
              </Accordion.Item>
                
                {/* FAQ Item: Space Junk */}
                <Accordion.Item eventKey="faq-11">
                <Accordion.Header>Q: What is space junk?</Accordion.Header>
                <Accordion.Body>
                  A: Space junk, also known as orbital debris, space debris, and space waste, is the collection of defunct objects in Earth's orbit and includes spent rocket stages, defunct satellites, and fragments from disintegration, erosion, and collisions.
                  </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Footer />
    </>
  );
};

export default ResourcesPage;