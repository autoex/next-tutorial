'use client';

import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem('theme') || 'dark');
  const modeToggle = () => {

    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    localStorage.setItem('theme', mode)

  };
  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode]);
  
  return (
    <ThemeContext.Provider value={{ mode, modeToggle }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
