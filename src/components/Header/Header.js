import { Menu } from '@material-ui/icons';
import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className="Navbar">
      <h1 className="header">Pitter Patter</h1>
      <div className="burger">
        <Menu />
      </div>
    </div>
  );
}
