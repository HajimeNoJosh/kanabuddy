import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './CardInfo.scss';

export const CardInfo = ({ textcolor, romaji, kana }) => {
  const color = textcolor ? 'blue' : 'white';
  return (
    <div className={classnames('info', `info--${color}`)}>
      <div className={classnames(`info--${color}--romaji`)}>{romaji}</div>
      <div>{kana}</div>
    </div>
  );
};

CardInfo.propTypes = {
  textcolor: PropTypes.bool,
  romaji: PropTypes.string,
  kana: PropTypes.string,
};
