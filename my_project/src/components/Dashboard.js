
import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome, Eco-Warrior!</h1>
        <p>Your journey to a more sustainable lifestyle starts here.</p>
      </div>
      <div className="dashboard-summary">
        <div className="summary-card">
          <h3>Impact Summary</h3>
          <p>CO2 Reduced: <strong>150 kg</strong></p>
          <p>Water Saved: <strong>500 L</strong></p>
          <p>Waste Diverted: <strong>25 kg</strong></p>
        </div>
        <div className="summary-card">
          <h3>Your Eco-Points</h3>
          <p>You have earned <strong>1,200</strong> points!</p>
          <a href="#">Redeem Rewards</a>
        </div>
      </div>
      <div className="dashboard-features">
        <div className="feature-card">
          <h3>Carbon Footprint</h3>
          <p>Calculate and track your carbon emissions.</p>
          <a href="#">Get Started</a>
        </div>
        <div className="feature-card">
          <h3>Habit Tracker</h3>
          <p>Log your eco-friendly habits and build streaks.</p>
          <a href="#">Track Habits</a>
        </div>
        <div className="feature-card">
          <h3>Green Events</h3>
          <p>Find and join local environmental events.</p>
          <a href="#">Explore Events</a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
