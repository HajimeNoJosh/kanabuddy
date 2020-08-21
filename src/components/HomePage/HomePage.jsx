import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Scaffold } from '../Scaffold/Scaffold';
import { Button } from '../Button/Button';
import { Accuracy } from '../Accuracy/Accuracy';
import { HomePageText } from './HomePageText';

import './HomePage.scss';

export const HomePage = ({ variant, accuracy }) => {
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
            {variant === 'homepage' && <HomePageText />}
            {variant === 'finalpage' && <Accuracy accuracy={accuracy} />}
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

HomePage.propTypes = {
  variant: PropTypes.string,
  accuracy: PropTypes.number,
};
