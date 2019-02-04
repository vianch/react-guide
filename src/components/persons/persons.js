import React from 'react';

import Person from "./person/person";

const persons = (props) => props.persons.map( (person, index) => {
  return (
    <Person
      name={person.name}
      age={person.age}
      deletePersonHandler={ () => props.deletePersonEvent(index) }
      onInpuntChange={ event => props.nameChangedEvent(event, person.id) }
      key={person.id}/>
  );
});


export default persons;
