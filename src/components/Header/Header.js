import { Menu } from '@material-ui/icons';
import React from 'react';
import './Header.css';

export default function Header({ isDarkMode }) {
  return (
    <div className="Navbar">
      <h1 className={!isDarkMode ? 'header' : 'headerDark'}>Pitter Patter</h1>
      <div className={!isDarkMode ? 'burger' : 'burgerDark'}>
        <Menu />
      </div>
    </div>
  );
}
