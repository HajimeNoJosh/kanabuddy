import React from 'react';
import './Timer.scss';

const Timer = (props) => {
  return (
    <div className="timer">
      <div className="timer__label">Timer</div>
      <div className="timer__digits">
        {props.hours}:{props.minutes}
      </div>
    </div>
  );
};
export default Timer;
