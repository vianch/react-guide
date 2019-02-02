import React, {Component} from 'react';

import './app.css';
import Person from './person/person'

class App extends Component {
  state = {
    persons: [
      { id: '49dfd724-4f47-4729-b83c-ca46636f45dd', name: 'Carlos', age: 28 },
      { id: '5bbcc9e7-2041-417f-a696-e8adf302a883', name: 'Alberto', age: 31 },
      { id: '5778a524-71dd-428a-9d45-0a63ee91cbcf', name: 'Juliana', age: 22 },
    ],
  };

  deletePersonHandler(personIndex) {
    const persons = [ ...this.state.persons ];

    persons.splice(personIndex, 1);
    this.setState({ persons });
  }

  nameChangedHandler(event, id) {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    const persons = [ ...this.state.persons ];
    persons[personIndex].name = event.target.value;


    this.setState({
      persons,
    });
  }

  togglePersonHandler() {
    this.setState({
      showPersons: !this.state.showPersons,
    })
  }

  render() {
    const buttonStyle = {
      backgroundColor: '#8EB307',
      color: 'white',
      font: 'inherit',
      boder: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      marginBottom: '10px'
    };
    let titleStyle = ['font-color-red', 'bold'].join(' ');
    let persons = null;

    if (this.state.showPersons) {
      buttonStyle.backgroundColor = '#AB2108';

      persons = (
        <div className="person-container">
          {this.state.persons.map( (person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                deletePersonHandler={this.deletePersonHandler.bind(this, index)}
                onInpuntChange={ event => this.nameChangedHandler(event, person.id)}
                key={person.id}/>
            );
          })}
        </div>
      );
    }

    return (
      <div className="app-wrapper">
        <h1 className={titleStyle}>LOADED REACT APP...</h1>

        <button
          style={buttonStyle}
          onClick={() => this.togglePersonHandler()}>Toggle person list
        </button>

        { persons }
      </div>
    );
  }
}

export default App;
