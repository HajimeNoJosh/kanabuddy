import React from 'react';

import Timer from './Timer.jsx';

export default {
  title: 'Timer',
  component: Timer,
};

export const time = () => <Timer hours={1} minutes={45} />;
