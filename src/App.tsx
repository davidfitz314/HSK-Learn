import React from 'react';
import { PageHeader } from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PageHeader />
        <h1>Practice HSK</h1>
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
    </div>
  );
}

export default App;
