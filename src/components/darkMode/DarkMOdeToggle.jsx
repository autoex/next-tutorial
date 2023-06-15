'use client';
import React, { useContext } from 'react';
import styles from './darkMode.module.css';
import { ThemeContext } from '../../context/ThemeContext';

const DarkModeToggle = () => {
  let {mode, modeToggle} = useContext(ThemeContext);
  console.log(mode)
  return (
    <div className={styles.container}
    onClick={modeToggle}>
      <div className={styles.icon}>&#127769;</div>
      <div className={styles.icon}>&#127774;</div>
      <div
        className={styles.ball}
        style={mode === 'light' ? { left: '3px' } : { right: '3px' }}
      />
    </div>
  );
};

export default DarkModeToggle;
