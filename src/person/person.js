import React from 'react';
import Radium from "radium";

import './person.css';

const person = (props) => {
  const personStyle = {
    '@media (min-width: 500px)': {
      width: '200px',
    }
  };

  return (
    <div className="person-wrapper" style={personStyle}>
      <p onClick={props.deletePersonHandler}>this is { props.name } with { props.age } years old { props.children }</p>

      <input type="text" onChange={props.onInpuntChange} maxLength="5" defaultValue={props.name} />
    </div>
  );
};

export default Radium(person);
