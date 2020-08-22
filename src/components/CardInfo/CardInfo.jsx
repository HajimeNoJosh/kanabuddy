import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './CardInfo.scss';

export const CardInfo = ({ textcolor, romaji, kana }) => (
  <div className={classnames('info', `info--${textcolor}`)}>
    <div>{romaji}</div>
    <div>{kana}</div>
  </div>
);

CardInfo.propTypes = {
  textcolor: PropTypes.string,
  romaji: PropTypes.string,
  kana: PropTypes.string,
};
