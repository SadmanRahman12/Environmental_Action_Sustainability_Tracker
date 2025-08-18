import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../themes/light.css';
import '../themes/dark.css';

const ThemeWrapper = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return <div className={theme}>{children}</div>;
};

export default ThemeWrapper;
