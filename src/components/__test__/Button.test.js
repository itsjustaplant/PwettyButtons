import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../Button';

it('should mount without crash', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button/>, div);
});

