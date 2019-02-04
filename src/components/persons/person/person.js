import React, { Component } from 'react';

import personStyle from './person.css';

class Person extends Component {
  render() {
    return (
      <div className={personStyle["person-wrapper"]}>
        <p onClick={ this.props.deletePersonHandler }>this is { this.props.name } with { this.props.age } years old { this.props.children }</p>

        <input type="text" onChange={ this.props.onInpuntChange } maxLength="15" defaultValue={this.props.name} />
      </div>
    );
  }
}

export default Person;
