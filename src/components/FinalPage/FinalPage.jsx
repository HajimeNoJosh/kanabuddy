import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { HomePage } from '../HomePage/HomePage';
import { Results } from '../Results/Results';

export const FinalPage = ({ variant }) => {
  const history = useHistory();
  return (
    <div className="homepage">
      <HomePage
        aria="play-again-test-button"
        text="Play Again"
        accuracy={history.location.state.howAccurate}
        color="white"
        fill="white"
        variant={variant}
      >
        <Results wordsComplete={history.location.state.wordsComplete} />
      </HomePage>
    </div>
  );
};
FinalPage.propTypes = {
  variant: PropTypes.string,
};
