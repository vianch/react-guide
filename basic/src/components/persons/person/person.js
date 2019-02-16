import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/aux';
import auxiliarWithClass from '../../../hoc/auxiliar-with-class';

import personStyle from './person.css';
import { AuthContext } from "../../../containers/app";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();

    console.log(`1. [person.js].constructor() / props:`, this.props);
  }

  componentWillMount() {
    console.log(`2. [person.js].componentWillMount()`);
  }

  componentDidMount() {
    console.log(`4. [person.js].componentDidMount()`);
    if (this.props.position === 1) {
      this.inputElement.current.focus();
    }
  }

  componentWillUnmount() {
    // Component is about to get removed => Perform any cleanup work here!
    console.log('5. [person.js].componentWillUnmount() I\'m about to be removed!');
  }

  focus() {
    this.inputElement.current.focus();
  }

  render() {
    console.log(`3. [person.js].render()`);

    return (
      <Aux>
        <AuthContext.Consumer>
          { auth => auth ? <p>You rock! now the system is online... </p>: null }
        </AuthContext.Consumer>

        <p onClick={ this.props.deletePersonHandler }>this is { this.props.name } with { this.props.age } years old { this.props.children }</p>
        <input
          ref={ this.inputElement }
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
