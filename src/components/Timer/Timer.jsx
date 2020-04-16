import React from 'react';
import './Timer.scss';

const Timer = ({ minutes, seconds }) => {
  let newSeconds;
  let newMinutes;

  if (seconds === null || seconds < 0 || seconds > 59) {
    newSeconds = '00';
  } else if (seconds < 10) {
    newSeconds = '0' + seconds;
  } else {
    newSeconds = seconds;
  }

  if (minutes === null || minutes < 0 || minutes > 59) {
    newMinutes = '0';
  } else {
    newMinutes = minutes;
  }

  return (
    <div className="timer">
      <div className="timer__label">Timer</div>
      <div className="timer__digits">
        {newMinutes}:{newSeconds}
      </div>
    </div>
  );
};

export default Timer;
