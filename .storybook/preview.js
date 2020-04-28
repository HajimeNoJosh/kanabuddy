import React from 'react';
import { addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

import '../src/sass/main.scss';

addDecorator(withA11y);
