// HomePage.js

import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <h1>Welcome to JobBoard</h1>
        <p>Find your next opportunity</p>
      </header>
      <main>
        <section className="JobListings">
          <h2>Job Listings</h2>
          {/* Add your job listings component or code here */}
          <div className="JobCard">
            <h3>Job Title 1</h3>
            <p>Company Name 1</p>
            <button onClick={() => alert("Apply for Job 1")}>Apply</button>
          </div>
          <div className="JobCard">
            <h3>Job Title 2</h3>
            <p>Company Name 2</p>
            <button onClick={() => alert("Apply for Job 2")}>Apply</button>
          </div>
          {/* Add more job cards as needed */}
        </section>
      </main>
      <footer>
        <p>&copy; 2023 JobBoard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
