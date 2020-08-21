import React from 'react';
import { useHistory } from 'react-router-dom';

import { Scaffold } from '../Scaffold/Scaffold';
import { Button } from '../Button/Button';

import './HomePage.scss';

export const HomePage = () => {
  const history = useHistory();

  const routeChange = () => {
    const path = 'test';
    history.push(path);
  };

  return (
    <div className="homepage">
      <Scaffold color="white" fill="white" variant="HomePage">
        <div className="homepage__content">
          <div className="homepage__text">
            <div className="homepage__title">Hiragana Typing Test</div>
            <div className="homepage__subtitle">
              Test how many kana you can identify and type in one minute
            </div>
            <Button
              aria-label="start-test-button"
              variant="primary"
              text="Start Test"
              onClick={routeChange}
            />
          </div>
        </div>
      </Scaffold>
    </div>
  );
};
