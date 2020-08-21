import React from 'react';
import PropTypes from 'prop-types';

export const Meter = ({ dashOffset }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-30 -10 160 100">
    <defs>
      <linearGradient
        id="myGradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="0%"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#da2f4c" />
        <stop offset="20%" stopColor="#da6f2f" />
        <stop offset="40%" stopColor="#dad92f" />
        <stop offset="60%" stopColor="#44cfdb" />
        <stop offset="100%" stopColor="#3a2269" />
      </linearGradient>
    </defs>

    <g fillOpacity="0" strokeWidth="10">
      <path d="M5 50a45 45 0 1 1 90 0" strokeLinecap="round" stroke="#dedee8" />
      <path
        d="M5 50a45 45 0 1 1 90 0"
        stroke="#fff"
        strokeDasharray="142"
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
      />
      <path
        d="M5 50a45 45 0 1 1 90 0"
        stroke="url('#myGradient')"
        strokeWidth="6"
        strokeDasharray="142"
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
      />
    </g>
  </svg>
);

Meter.propTypes = {
  dashOffset: PropTypes.number,
};
