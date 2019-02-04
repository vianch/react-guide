import React, { Component } from 'react';

import Person from "./person/person";

class Persons extends Component {
  constructor(props) {
    super(props);

    console.log(`1. [persons.js].constructor() / props:`, this.props);
    console.log(`1. [persons.js].constructor() / state:`, this.state);
  }

  componentWillMount() {
    console.log(`2. [persons.js].componentWillMount()`);
  }

  componentDidMount() {
    console.log(`4. [persons.js].componentDidMount()`);
  }

  componentWillUnmount() {
    // Component is about to get removed => Perform any cleanup work here!
    console.log('5. [persons.js].componentWillUnmount() I\'m about to be removed!');
  }

  render() {
    console.log(`3. [persons.js].render()`);
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
