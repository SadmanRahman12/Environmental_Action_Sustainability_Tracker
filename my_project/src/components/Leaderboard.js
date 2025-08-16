import React from 'react';

const Leaderboard = () => {
  const users = [
    { name: 'John', points: 1500 },
    { name: 'Jane', points: 1200 },
    { name: 'Peter', points: 1000 },
    { name: 'Mary', points: 800 },
    { name: 'David', points: 600 },
  ];

  return (
    <div className="feature-card">
      <h3>Leaderboard</h3>
      <ol>
        {users.map((user, index) => (
          <li key={index}>
            <span>{user.name}</span>
            <span>{user.points}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;
