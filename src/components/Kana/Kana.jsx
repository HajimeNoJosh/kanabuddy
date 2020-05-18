import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Kana.scss';

export const Kana = ({
  color,
  margin,
  kana,
  isStrikethrough,
  isTransparent,
}) => (
  <span
    className={classnames(
      'kana',
      `kana--${color}`,
      `kana--${margin}`,
      isStrikethrough && `kana--strikethrough`,
      isTransparent && `kana--transparent`,
    )}
  >
    {kana}
  </span>
);

Kana.propTypes = {
  color: PropTypes.oneOf(['seaFoam', 'logan', 'quartz']),
  kana: PropTypes.string,
  isStrikethrough: PropTypes.bool,
  isTransparent: PropTypes.bool,
  margin: PropTypes.string,
};
