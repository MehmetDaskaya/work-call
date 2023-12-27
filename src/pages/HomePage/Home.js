// HomePage.js

import { useState } from "react";
import { Button, Row, Col, Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Home.css";

const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Toast
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
        animation
        style={{
          position: "absolute",
          top: 20,
          right: 20,
        }}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Notification</strong>
          <small>12 mins ago</small>
        </Toast.Header>
        <Toast.Body>There are some new updates that you might love!</Toast.Body>
      </Toast>
      <div className="HomePage">
        <header className="HomePage-header">
          <h1>Welcome to JobBoard</h1>
        </header>
        <main>
          <section className="JobListings">
            <h2>Job Listings</h2>
            {/* Add your job listings component or code here */}
            <div className="JobCard">
              <h3>Job Title 1</h3>
              <p>Company Name 1</p>
              <button onClick={() => setShow(true)}>Apply</button>
            </div>
            <div className="JobCard">
              <h3>Job Title 2</h3>
              <p>Company Name 2</p>
              <button onClick={() => setShow(true)}>Apply</button>
            </div>
            {/* Add more job cards as needed */}
          </section>
        </main>
        <footer>
          <p>&copy; 2023 JobBoard. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};
export default Home;
