import React, { useState } from 'react';
import { Icon } from '../Icon/Icon';
import { Tooltip } from '../Tooltip/Tooltip';
import { CSSTransition } from 'react-transition-group';

import './GithubLink.scss';

const GithubLink = () => {
  const [isShown, setIsShown] = useState(false);
  const setTooltipVisibility = (isVisible) => {
    setIsShown(isVisible);
  };

  return (
    <div className="github">
      <CSSTransition
        in={isShown}
        timeout={800}
        classNames="github__tooltip"
        unmountOnExit
        onExited={() => setTooltipVisibility(false)}
      >
        <Tooltip className={'tooltip__position'}>
          <span
            style={{
              color: '#46466d',
              fontSize: '2rem',
              fontWeight: 'bold',
            }}
          >
            Github
          </span>
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
        <Icon name={'github'} color={'dusk'} size={'sm'} />
      </a>
    </div>
  );
};

export default GithubLink;
