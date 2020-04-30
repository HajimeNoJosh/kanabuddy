import React, { useState, useEffect } from 'react';
import { Scaffold } from '../Scaffold/Scaffold';

import './TestPage.scss';

export const TestPage = () => {
  const [time, setTime] = useState({ m: 1, s: 0 });
  const [isActive, setIsActive] = useState(false);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    if (isActive) {
      const id = setInterval(tick, 1000);
      setTimerId(id);
    } else if (!isActive && time.s !== 0) {
      clearInterval(timerId);
    }
    return () => clearInterval(timerId);
  }, [isActive, time]);

  function toggle() {
    setIsActive(!isActive);
  }

  const restart = () => {
    setTime({ m: 1, s: 0 });
    clearInterval(timerId);
    setIsActive(false);
  };

  const tick = () => {
    if (time.m === 1 && time.s === 0) {
      setTime({ m: 0, s: 59 });
    } else {
      setTime({ m: 0, s: time.s - 1 });
    }
    if (time.m === 0 && time.s === 0) {
      clearInterval(timerId);
      setIsActive(false);
    }
  };

  return (
    <Scaffold minutes={time.m} seconds={time.s}>
      <div className="test">
        <button
          aria-label="play-button"
          disabled={isActive}
          onClick={toggle}
          type="button"
        >
          Play
        </button>
        <button
          aria-label="pause-button"
          disabled={!isActive}
          onClick={toggle}
          type="button"
        >
          Pause
        </button>
        <button aria-label="restart-button" onClick={restart} type="button">
          Restart
        </button>
      </div>
    </Scaffold>
  );
};
