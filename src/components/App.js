import React, { Component } from 'react';

import Search from './search/Search'
import Results from './results/Results'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Search engine</h1>
          <div className="App-search">
            <Search></Search>
          </div>
        </header>
        <main className="App-result">
          <Results></Results>
        </main>
      </div>
    );
  }
}

export default App;
