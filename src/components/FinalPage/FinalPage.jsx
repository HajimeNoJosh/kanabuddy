import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { HomePage } from '../HomePage/HomePage';

export const FinalPage = ({ variant }) => {
  const history = useHistory();
  return (
    <div className="homepage">
      <HomePage
        accuracy={history.location.state.howAccurate}
        color="white"
        fill="white"
        variant={variant}
      />
    </div>
  );
};
FinalPage.propTypes = {
  variant: PropTypes.string,
};
