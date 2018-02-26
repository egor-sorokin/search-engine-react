import React from 'react'


const Result = ({ title, text, link }) => (
  <li className="Result-item">
    <a href={link}
       className="Result-item-link"
       title="">
      <div className="Result-item-icon"></div>
      {text}
    </a>
  </li>
);


export default Result
