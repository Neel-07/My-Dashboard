
import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModePreference = localStorage.getItem('dark-mode') === 'true';
    setIsDarkMode(darkModePreference);
    document.documentElement.classList.toggle('dark', darkModePreference);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('dark-mode', !isDarkMode ? 'true' : 'false');
  };

  return (
    <div className="slider-container ml-auto" onClick={toggleDarkMode}>
      <div className={`slider ${isDarkMode ? 'dark' : 'light'}`}>
        <span className={`slider-knob ${isDarkMode ? 'knob-dark' : 'knob-light'}`}></span>
      </div>
      <span className="slider-label">
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </span>
    </div>
  );
};

export default DarkModeToggle;
