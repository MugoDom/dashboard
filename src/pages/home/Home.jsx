import React from 'react';
import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='homeContainer'>
        <Navbar />

        <div className='landingPage'>
        <div className='home-text'>
        <h1>The Technical Services Unit.</h1>
        <p>
        The TSU engages in multidisciplinary design, assessments and advisory work, and manages relationships with other technical stakeholders such as specialist design firms for high risk structures.  The TSU provides design services for infrastructure works to project managers.
        </p>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Home