import React from 'react';
import './Timer.scss';

const Timer = (props) => {
  const { hours, minutes } = props;
  return (
    <div className="timer">
      <div className="timer__label">Timer</div>
      <div className="timer__digits">
        {hours}:{minutes}
      </div>
    </div>
  );
};
export default Timer;
