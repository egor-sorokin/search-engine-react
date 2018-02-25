import React, { Component } from 'react';
import { Async } from 'react-select';
import { v4 } from 'uuid';

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

  getData = (input) => {
    if (!input) {
      return Promise.resolve({options: []});
    }

    const wikiUrl = `https://en.wikipedia.org//w/api.php?action=opensearch&search=${input}&origin=*`;
    const NYTimesUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=18cdf939cc484212834e3766d1b63555&q=${input}&format=json`;

    const requestWikiData = fetch(wikiUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let result = [];

        for (let i = 0, len = data[1].length; i < len; i++) {
          result.push({
            'id': v4(),
            'title': data[1][i],
            'text': data[2][i],
            'link': data[3][i]
          })
        }

        return result;
      })
      .catch((error) => {
        console.error('Fetch WikiData was failed: ', error);
      });

    const requestNYTimesData = fetch(NYTimesUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let result = [];

        for (let i = 0, len = data.response.docs.length; i < len; i++) {
          result.push({
            'id': v4(),
            'title': data.response.docs[i]['snippet'],
            'text': data.response.docs[i]['snippet'],
            'link': data.response.docs[i]['web_url']
          })
        }

        return result;
      })
      .catch((error) => {
        console.error('Fetch NYTimesData was failed: ', error);
      });


    return Promise.all([
        requestWikiData,
        requestNYTimesData
      ])
      .then((results) => {
        let wikiData = results[0] || [];
        let NYTimesData = results[1] || [];

        return {options: [...wikiData, ...NYTimesData]};
      })
      .catch(function (err) {
        console.error('Promise.all error', err);
      });
  };

  render() {
    return (
      <div className="Search">
        <Async
          className="Search-input"
          valueKey="id"
          labelKey="title"
          value={this.state.value}
          loadOptions={this.getData}
          onChange={this.onChange}
        />

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
