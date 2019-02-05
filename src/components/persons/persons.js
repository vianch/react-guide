import React, { PureComponent } from 'react';

import Person from "./person/person";

class Persons extends PureComponent {
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
    console.log('5. [persons.js].componentWillUnmount() I\'m about to be removed!');
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log(`\n1. [persons.js].componentWillReceiveProps / nextProps: `, nextProps);
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log(`\n3. [persons.js].componentWillUpdate / nextProps: `, nextProps);
    console.log(`3. [persons.js].componentWillUpdate / nextProps: `, nextProps);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(`\n4. [persons.js].componentDidUpdate / prevProps: `, prevProps);
    console.log(`4. [persons.js].componentDidUpdate / prevState: `, prevState);
    console.log(`4. [persons.js].componentDidUpdate / snapshot: `, snapshot);
  }

  render() {
    console.log(`3. [persons.js].render()`);
    return this.props.persons.map( (person, index) => {
      return (
        <Person
          name={ person.name }
          age={ person.age }
          position={ index }
          deletePersonHandler={ () => this.props.deletePersonEvent(index) }
          onInputChange={ event => this.props.nameChangedEvent(event, person.id) }
          key={person.id}/>
      );
    });
  }
}



export default Persons;
