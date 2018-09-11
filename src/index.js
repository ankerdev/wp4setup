import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';
import { Home } from 'scenes';

const App = hot(module)(Home);

render(
  <App name="Jonas" />,
  document.getElementById('app')
);
