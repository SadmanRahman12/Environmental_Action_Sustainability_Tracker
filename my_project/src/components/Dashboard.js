import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = ({ name }) => {
  const location = useLocation();
  const isProfileOrSettings = location.pathname.startsWith('/dashboard/profile') || location.pathname.startsWith('/dashboard/settings');

  return (
    <div className="dashboard">
      {!isProfileOrSettings && (
        <>
          <div className="dashboard-header">
            <h1>Welcome back, {name}!</h1>
            <p>Monitor your progress and discover new ways to live sustainably.</p>
          </div>
          <div className="dashboard-summary">
            <div className="summary-card">
              <h3>Carbon Footprint</h3>
              <p>5.2 tons CO2e</p>
              <span className="change increase">+5% since last week</span>
            </div>
            <div className="summary-card">
              <h3>Habits Tracked</h3>
              <p>5 ongoing</p>
              <span className="change decrease">-2% since last week</span>
            </div>
          </div> 
        </>
      )}
      <div className="dashboard-features">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;