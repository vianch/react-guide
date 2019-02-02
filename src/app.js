import React, {Component} from 'react';

import './app.css';
import Person from './person/person'

class App extends Component {
  state = {
    persons: [
      { name: 'Carlos', age: 28 },
      { name: 'Alberto', age: 31 },
      { name: 'Juliana', age: 22 },
    ],
  };

  switchNameHandler(newName) {
    // this.state.setStaz
    this.setState({
      persons: [
        { name: newName, age: 1 },
        { name: 'Random Name 1', age: 2 },
        { name: 'Random name 2', age: 3 },
      ]
    });
  }

  nameChangedHandler(event) {
    this.setState({
      persons: [
        { name: 'Random event name 0', age: 1 },
        { name: event.target.value, age: 1 },
        { name: 'Random event name 1', age: 1 },
      ],
    });
  }

  togglePersonHandler() {
    this.setState({
      showPersons: !this.state.showPersons,
    })
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'transparent',
      font: 'inherit',
      boder: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      marginBottom: '10px'
    };

    return (
      <div className="app-wrapper">
        <h1>LOADED REACT APP...</h1>

        <button
          style={buttonStyle}
          onClick={() => this.togglePersonHandler()}>Toggle person list
        </button>

        { this.state.showPersons ?
          <div className="person-container">
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              changeDataEvent={this.switchNameHandler.bind(this, 'Victor!')}
              onInpuntChange={this.nameChangedHandler.bind(this)}/>
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}>
              With hobbies: Racing
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}/>
          </div> : null
        }
      </div>
    );
  }
}

export default App;
