import * as React from 'react';
import './App.css';
import { GEL, Header } from '@westpac/global-components';
import brand from '@westpac/wbc';

function App() {
  return (
    <div className="container">
      <h1 className="title">
        Admin <br />
        <span>Kitchen Sink</span>
      </h1>
      <p className="description">Built With Turborepo + Vite</p>
      <GEL brand={brand}>
        <Header />
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
      </GEL>
    </div>
  );
}

export default App;
