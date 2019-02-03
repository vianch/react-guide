import React from 'react';

import './person.css';

const person = (props) => {
  return (
    <div className="person-wrapper">
      <p onClick={props.deletePersonHandler}>this is { props.name } with { props.age } years old { props.children }</p>

      <input type="text" onChange={props.onInpuntChange} maxLength="5" defaultValue={props.name} />
    </div>
  );
};

export default person;
