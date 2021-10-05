import React from 'react';
import './Footer.css';

export default function Footer({ isDarkMode }) {
  return (
    <div className={isDarkMode ? 'footerDark' : 'footer'}>
      {'©'} Shahriar Rumel {new Date().getFullYear()}
    </div>
  );
}
