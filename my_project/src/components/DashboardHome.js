import React from 'react';
import CarbonChart from './CarbonChart';
import HabitProgress from './HabitProgress';
import TipOfTheDay from './TipOfTheDay';
import CommunitySpotlight from './CommunitySpotlight';
import Leaderboard from './Leaderboard';
import QuoteOfTheDay from './QuoteOfTheDay';
import { FaCalculator, FaLeaf, FaCalendarAlt } from 'react-icons/fa';

const DashboardHome = () => {
  return (
    <>
        <div className="feature-card">
          <FaCalculator size={50} />
          <h3>Calculate Your Footprint</h3>
          <p>Understand your environmental impact with our detailed calculator.</p>
          <a href="/carbon-calculator">Calculate Now</a>
        </div>
        <div className="feature-card">
          <FaLeaf size={50} />
          <h3>Track Your Habits</h3>
          <p>Adopt and monitor new sustainable habits.</p>
          <HabitProgress />
          <a href="/habit-tracker">Track Habits</a>
        </div>
        <div className="feature-card">
          <FaCalendarAlt size={50} />
          <h3>Explore Green Events</h3>
          <p>Find and join environmental events near you.</p>
          <a href="/green-events">Find Events</a>
        </div>
        <TipOfTheDay />
        <CommunitySpotlight />
        <Leaderboard />
        <QuoteOfTheDay />
        <div className="feature-card" style={{ gridColumn: 'span 3' }}>
          <CarbonChart />
        </div>
    </>
  );
};

export default DashboardHome;
