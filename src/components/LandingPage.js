import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="content">
        <h1>Welcome to Houseplant Store</h1>
        <p>Your one-stop shop for beautiful houseplants.</p>
        <Link to="/products">
          <button className="get-started">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
