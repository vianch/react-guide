import React, { Component } from 'react';

import personStyle from './person.css';

class Person extends Component {
  constructor(props) {
    super(props);

    console.log(`1. [person.js].constructor() / props:`, this.props);
    console.log(`1. [person.js].constructor() / state:`, this.state);
  }

  componentWillMount() {
    console.log(`2. [person.js].componentWillMount()`);
  }

  componentDidMount() {
    console.log(`4. [person.js].componentDidMount()`);
  }

  componentWillUnmount() {
    // Component is about to get removed => Perform any cleanup work here!
    console.log('5. [person.js].componentWillUnmount() I\'m about to be removed!');
  }


  render() {
    console.log(`3. [person.js].render()`);

    return (
      <div className={personStyle["person-wrapper"]}>
        <p onClick={ this.props.deletePersonHandler }>this is { this.props.name } with { this.props.age } years old { this.props.children }</p>

        <input type="text" onChange={ this.props.onInpuntChange } maxLength="15" defaultValue={this.props.name} />
      </div>
    );
  }
}

export default Person;
