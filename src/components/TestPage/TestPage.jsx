import React, { useState, useEffect } from 'react';
import { Scaffold } from '../Scaffold/Scaffold';
import { Button } from '../Button/Button';

import './TestPage.scss';

export const TestPage = () => {
  const [time, setTime] = useState({ m: 1, s: 0 });
  const [isActive, setIsActive] = useState(false);
  const [isPauseShowing, setIsPauseShowing] = useState(true);
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
    setIsPauseShowing(!isActive);
  }

  const restart = () => {
    setTime({ m: 1, s: 0 });
    clearInterval(timerId);
    setIsActive(false);
    setIsPauseShowing(true);
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

  const startTimer = () => {
    if (time.m === 1) {
      tick();
      toggle();
    }
  };

  return (
    <Scaffold minutes={time.m} seconds={time.s}>
      <input onKeyDown={startTimer}></input>
      <div className="test">
        {isPauseShowing && (
          <Button
            onClick={toggle}
            aria-label="pause-button"
            disabled={!isActive}
            variant="primary"
            iconName="pause"
            text="Pause"
          />
        )}
        {!isPauseShowing && (
          <Button
            onClick={toggle}
            aria-label="play-button"
            disabled={isActive}
            variant="primary"
            iconName="start"
            text="Start"
          />
        )}
        {!isPauseShowing && (
          <Button
            onClick={restart}
            aria-label="restart-button"
            disabled={isActive}
            variant="secondary"
            iconName="restart"
            text="Restart"
          />
        )}
      </div>
    </Scaffold>
  );
};
