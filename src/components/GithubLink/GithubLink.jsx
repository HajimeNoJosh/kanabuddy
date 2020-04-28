import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { Icon } from '../Icon/Icon';
import { Tooltip } from '../Tooltip/Tooltip';

import './GithubLink.scss';

const GithubLink = ({ isTooltipShown }) => {
  const [isShown, setIsShown] = useState(isTooltipShown);
  const setTooltipVisibility = (isVisible) => {
    if (!isTooltipShown) {
      setIsShown(isVisible);
    }
  };

  useEffect(() => {
    setIsShown(isTooltipShown);
  }, [isTooltipShown]);

  return (
    <div className="github">
      <CSSTransition
        in={isShown}
        timeout={800}
        classNames="github__tooltip"
        unmountOnExit
        onExited={() => setTooltipVisibility(false)}
      >
        <Tooltip className="tooltip__position">
          <span classNames="github__text">Github</span>
        </Tooltip>
      </CSSTransition>

      <a
        onMouseEnter={() => setTooltipVisibility(true)}
        onMouseLeave={() => setTooltipVisibility(false)}
        onFocus={() => setTooltipVisibility(true)}
        onBlur={() => setTooltipVisibility(false)}
        href="https://github.com/HajimeNoJosh/kanabuddy"
        className="github__link"
        aria-label="github-link"
      >
        <Icon name="github" color="dusk" size="sm" />
      </a>
    </div>
  );
};

GithubLink.defaultProps = {
  isTooltipShown: false,
};

GithubLink.propTypes = {
  isTooltipShown: PropTypes.bool,
};

export default GithubLink;
