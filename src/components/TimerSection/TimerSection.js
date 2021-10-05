import React, { useState, useEffect } from 'react';
import './TimerSection.css';

export default function TimerSection({ setPlaying, isPlaying, isDarkMode }) {
  const [timer, setTimer] = useState(0);
  const [showTimer, setShowTimer] = useState(0);
  let endTime, CurrentTime;
  let count = 0;
  if (timer) {
    count++;
    if (count === 1) {
      CurrentTime = new Date().getTime();
    }
  }
  useEffect(() => {
    endTime = new Date().getTime();
    console.log(-CurrentTime + endTime);
    if (endTime - CurrentTime >= timer * 6000) {
      setPlaying(!isPlaying);
    }
  }, [
    showTimer,
    CurrentTime,
    endTime,
    timer,
    setPlaying,
    isPlaying,
    isDarkMode
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowTimer(timer);
  };
  return (
    <div className="timerSection">
      <div className={isDarkMode ? 'TimerCircleDark' : 'TimerCircle'}>
        <h1 className="timer">{showTimer}</h1>
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
