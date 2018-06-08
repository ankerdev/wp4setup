import React from 'react';
import { Country } from 'components';

export const Home = props => (
  <main className="main flex--down">
    <h1>
      Webpack 4 setup by {props.name}, <Country />
    </h1>
  </main>
);
