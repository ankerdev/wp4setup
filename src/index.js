import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';
import { Home } from 'Scenes';

// @TODO Replace entry component with Router
const App = hot(module)(Home);

render(
  <App />,
  document.getElementById('app')
);
