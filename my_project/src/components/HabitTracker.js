import React, { useState } from 'react';
import './HabitTracker.css';

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState('');

  const addHabit = () => {
    if (newHabit.trim() !== '') {
      setHabits([...habits, { name: newHabit, streak: 0 }]);
      setNewHabit('');
    }
  };

  const incrementStreak = (index) => {
    const newHabits = [...habits];
    newHabits[index].streak++;
    setHabits(newHabits);
  };

  return (
    <div className="habit-tracker">
      <h2>Dynamic Habit Tracker</h2>
      <div className="add-habit">
        <input
          type="text"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          placeholder="Enter a new eco-habit"
        />
        <button onClick={addHabit}>Add Habit</button>
      </div>
      <ul className="habit-list">
        {habits.map((habit, index) => (
          <li key={index}>
            <span>{habit.name} - Streak: {habit.streak}</span>
            <button onClick={() => incrementStreak(index)}>Log Action</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitTracker;
