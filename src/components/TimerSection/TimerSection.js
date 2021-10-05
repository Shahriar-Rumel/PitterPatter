import React, { useState, useEffect, useRef } from 'react';
import './TimerSection.css';

export default function TimerSection({
  setPlaying,
  isPlaying,
  isDarkMode,
  timer,
  setTimer
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimer(timer);
  };

  return (
    <div className="timerSection">
      <div className={isDarkMode ? 'TimerCircleDark' : 'TimerCircle'}>
        <h1 className="timer">{timer}</h1>
        <h1 className="min">min</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Turn off in"
          type="number"
          value={timer}
          onChange={(e) => {
            setTimer(e.target.value);
          }}
          className={isDarkMode ? 'inputDark' : 'input'}
        ></input>
        <button className={isDarkMode ? 'timeButtonDark' : 'timerButton'}>
          timer
        </button>
      </form>
    </div>
  );
}
