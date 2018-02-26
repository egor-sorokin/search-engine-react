import React from 'react'


const Result = ({ title, text, link }) => (
  <li className="Result-item">
    <a href={link}
       className="Result-item-link"
       title="">
      <h2 className="Result-item-title">{title}</h2>
      <p className="Result-item-text">{text}</p>
    </a>
  </li>
);


export default Result
