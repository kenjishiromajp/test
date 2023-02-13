import React from 'react';
import logo from './logo.svg';
import './App.css';
import brand from '@westpac/wbc';
// import { GEL } from '@westpac/core';
// import { Header } from '@westpac/header';
import { Button } from '@westpac/button';
import { GEL, Header } from '@westpac/global-components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <GEL brand={brand}>
        <Header />
        {/* <Button /> */}
      </GEL>
    </div>
  );
}

export default App;
