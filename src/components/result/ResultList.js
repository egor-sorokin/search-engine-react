import React from 'react'

import './ResultList.css'
import Result from './Result'


const ResultList = ({ results }) => (
  <div className="Result">
    <ul className="Result-list">
      {results.map(item =>
        <Result
          key={item.id}
          {...item}
        />
      )}
    </ul>
  </div>
);


export default ResultList
