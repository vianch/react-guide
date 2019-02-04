import React, { Component } from 'react';

import Person from "./person/person";

class Persons extends Component {
  render() {
    return this.props.persons.map( (person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          deletePersonHandler={ () => this.props.deletePersonEvent(index) }
          onInpuntChange={ event => this.props.nameChangedEvent(event, person.id) }
          key={person.id}/>
      );
    });
  }
}

export default Persons;
