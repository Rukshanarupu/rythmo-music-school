import { useState } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? <MdDarkMode></MdDarkMode> : <MdLightMode></MdLightMode>}>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      {children}
    </div>
  );
};

export default ThemeProvider;
