import React, { Component } from 'react';
import { v4 } from 'uuid';

import Search from './search/Search'
import ResultList from './result/ResultList'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  onSearch = (e, value) => {
    e.preventDefault();

    this.requestData(value).then((result)=> {
      this.setState({
        results: result.options
      });
    });
  };


  requestData = (input) => {
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
            'title': data.response.docs[i]['headline']['main'],
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
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Search engine</h1>
          <div className="App-search">
            <Search
              requestData={this.requestData}
              onSearch={this.onSearch}
            />
          </div>
        </header>
        <main className="App-result">
          <ResultList
            results={this.state.results}
          />
        </main>
      </div>
    );
  }
}

export default App;
