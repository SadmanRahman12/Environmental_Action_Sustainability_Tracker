import React from 'react';
import './Profile.css';
import { FaUserEdit, FaCamera, FaTrophy, FaChartLine, FaLeaf } from 'react-icons/fa';

const Profile = () => {
  // Dummy data for demonstration
  const user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    bio: 'Passionate about making a positive impact on the environment. Join me in this journey!',
    avatar: 'https://i.pravatar.cc/150?img=12',
    stats: {
      carbonSaved: 1500,
      actionsCompleted: 78,
      points: 9500,
    },
    recentActivity: [
      { id: 1, action: 'Used public transport', date: '2024-07-20' },
      { id: 2, action: 'Reduced meat consumption', date: '2024-07-19' },
      { id: 3, action: 'Planted a tree', date: '2024-07-18' },
    ],
    achievements: [
      { id: 1, name: 'Eco-Warrior', icon: <FaTrophy /> },
      { id: 2, name: 'Green Commuter', icon: <FaLeaf /> },
      { id: 3, name: 'Recycling Champion', icon: <FaChartLine /> },
    ],
  };

  return (
    <div className="profile-page">
      <div className="profile-header-card">
        <div className="profile-avatar-container">
          <img src={user.avatar} alt="Profile" className="profile-avatar" />
          <button className="camera-icon">
            <FaCamera />
          </button>
        </div>
        <div className="profile-header-info">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <button className="edit-profile-btn">
            <FaUserEdit /> Edit Profile
          </button>
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-left-column">
          <div className="profile-card bio-card">
            <h3>About Me</h3>
            <p>{user.bio}</p>
          </div>

          <div className="profile-card stats-card">
            <h3><FaChartLine /> My Stats</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <FaLeaf className="stat-icon" />
                <p>{user.stats.carbonSaved} kg</p>
                <span>Carbon Saved</span>
              </div>
              <div className="stat-item">
                <FaTrophy className="stat-icon" />
                <p>{user.stats.actionsCompleted}</p>
                <span>Actions Completed</span>
              </div>
              <div className="stat-item">
                <FaChartLine className="stat-icon" />
                <p>{user.stats.points}</p>
                <span>Points Earned</span>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-right-column">
          <div className="profile-card achievements-card">
            <h3><FaTrophy /> Achievements</h3>
            <div className="achievements-grid">
              {user.achievements.map((achievement) => (
                <div key={achievement.id} className="achievement-item">
                  <div className="achievement-icon">{achievement.icon}</div>
                  <p>{achievement.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="profile-card activity-card">
            <h3>Recent Activity</h3>
            <ul>
              {user.recentActivity.map((activity) => (
                <li key={activity.id}>
                  <span>{activity.action}</span>
                  <span className="activity-date">{activity.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
