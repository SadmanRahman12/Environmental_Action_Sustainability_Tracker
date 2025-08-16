import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const HabitProgress = () => {
  const now = 60;
  return <ProgressBar now={now} label={`${now}%`} />;
};

export default HabitProgress;
