import React from 'react';
import PropTypes from 'prop-types';

import { HomePage } from '../HomePage/HomePage';

export const FinalPage = ({ variant, accuracy }) => (
  <div className="homepage">
    <HomePage
      accuracy={accuracy}
      color="white"
      fill="white"
      variant={variant}
    />
  </div>
);

FinalPage.propTypes = {
  variant: PropTypes.string,
  accuracy: PropTypes.number,
};
