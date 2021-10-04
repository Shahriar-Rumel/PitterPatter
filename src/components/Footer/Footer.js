import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      {'©'} Shahriar Rumel {new Date().getFullYear()}
    </div>
  );
}
