import React from 'react';

import './person.css';

const person = (props) => {
  return (
    <div className="person-wrapper" onClick={props.changeDataEvent}>
      <p>i'm a super Person with { Math.floor(Math.random() * 11130) } years old!</p>
      <p>
        this is { props.name } with { props.age } years old { props.children }
      </p>

      <input type="text" onChange={props.onInpuntChange} maxLength="5" defaultValue={props.name} />
    </div>
  );
};

export default person;
