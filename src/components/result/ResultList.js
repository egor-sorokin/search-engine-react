import React from 'react'

import './ResultList.css'
import Result from './Result'


const ResultList = ({ results }) => (
  <div className="Result">
    <ul className="Result-list">
      {results.forEach(item =>
        <Result
          title={item.title}
          text={item.text}
          link={item.link}
        />
      )}
    </ul>
  </div>
);


export default ResultList
