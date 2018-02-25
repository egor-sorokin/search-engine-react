import React, { Component } from 'react';

import './Search.css';


class Search extends Component {
  render() {
    return (
      <div class="Search">
        <input className="Search-input" placeholder="Type something"/>
        <div className="Search-button">
          <a href="/" className="Button" title="Search">
            <span className="Button-text">Search</span>
          </a>
        </div>
      </div>
    )
  }
}

export default Search
