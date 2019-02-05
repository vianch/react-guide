import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/aux';
import auxiliarWithClass from '../../../hoc/auxiliar-with-class';

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
    if (this.props.position === 1) {
      this.inputElement.focus();
    }
  }

  componentWillUnmount() {
    // Component is about to get removed => Perform any cleanup work here!
    console.log('5. [person.js].componentWillUnmount() I\'m about to be removed!');
  }


  render() {
    console.log(`3. [person.js].render()`);

    return (
      <Aux>
        <p onClick={ this.props.deletePersonHandler }>this is { this.props.name } with { this.props.age } years old { this.props.children }</p>
        <input
          ref={ (input) => { this.inputElement = input; } }
          type="text"
          onChange={ this.props.onInputChange }
          maxLength="15"
          defaultValue={this.props.name} />
      </Aux>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  position: PropTypes.number,
  onInputChange: PropTypes.func,
  deletePersonHandler: PropTypes.func,
};

export default auxiliarWithClass(Person, personStyle["person-wrapper"]);
