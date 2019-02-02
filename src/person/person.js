import React from 'react';

import './person.css';

const person = (props) => {
  // <p>i'm a super Person with { Math.floor(Math.random() * 11130) } years old!</p>
  return (
    <div className="person-wrapper" onClick={props.deletePersonHandler}>
      <p>this is { props.name } with { props.age } years old { props.children }</p>

      <input type="text" onChange={props.onInpuntChange} maxLength="5" defaultValue={props.name} />
    </div>
  );
};

export default person;
