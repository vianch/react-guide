import React from 'react';

import personStyle from './person.css';

const person = (props) => {
  return (
    <div className={personStyle["person-wrapper"]}>
      <p onClick={ props.deletePersonHandler }>this is { props.name } with { props.age } years old { props.children }</p>

      <input type="text" onChange={ props.onInpuntChange } maxLength="15" defaultValue={props.name} />
    </div>
  );
};

export default person;
