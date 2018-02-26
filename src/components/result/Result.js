import React from 'react'


const Result = ({ title, text, link, resource }) => (
  <li className={`Result-item Result-item--${resource}`}>
    <a href={link}
       target="_blank"
       className="Result-item-link"
       title="">
      <h2 className="Result-item-title">{title}</h2>
      <p className="Result-item-text">{text}</p>
    </a>
  </li>
);


export default Result
