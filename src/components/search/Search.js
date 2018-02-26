import React, { Component } from 'react';
import { Async } from 'react-select';

import 'react-select/dist/react-select.css';
import './Search.css';


class Search extends Component {
  constructor() {
    super();
    this.state = {
      value: null
    };
  }

  onChange = (value) => {
    this.setState({
      value: value
    });
  };

  onClick = (e) => {
    this.props.onSearch(e, this.state.value.title);
  };

  getOptions = (input) => {
    if (!input) {
      return Promise.resolve({options: []});
    }

    return this.props.requestData(input);
  };

  render() {
    return (
      <div className="Search">
        <Async
          className="Search-input"
          valueKey="id"
          labelKey="title"
          value={this.state.value}
          loadOptions={this.getOptions}
          onChange={this.onChange}
        />

        <div className="Search-button">
          <a href="/"
             className="Button"
             onClick={this.onClick}
             title="Search">
            <span className="Button-text">Search</span>
          </a>
        </div>
      </div>
    )
  }
}


export default Search
