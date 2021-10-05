import { useState, UseEffect } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainScreen from './Screen/MainScreen';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const ModeHandler = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <div className="modeToggle">
        <button className="modeToggleButton" onClick={ModeHandler}>
          {!isDarkMode ? 'dark' : 'light'}
        </button>
      </div>
      <Header isDarkMode={isDarkMode} />
      <MainScreen isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
