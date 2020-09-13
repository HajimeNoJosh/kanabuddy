import React from 'react';
import PropTypes from 'prop-types';

import { CardBackground } from '../CardBackground/CardBackground';
import { CardInfo } from '../CardInfo/CardInfo';

export const Card = ({ textcolor, romaji, kana, color }) => (
  <div>
    <CardBackground color={color}>
      <CardInfo romaji={romaji} kana={kana} textcolor={textcolor}></CardInfo>
    </CardBackground>
  </div>
);

Card.propTypes = {
  romaji: PropTypes.string,
  color: PropTypes.bool,
  kana: PropTypes.string,
  textcolor: PropTypes.bool,
};
