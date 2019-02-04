import React, {Component} from 'react';

import cssStyles from './app.css';
import Persons from '../components/persons/persons'
import Cockpit from '../components/cockpit/cockpit'
import ErrorBoundary from '../components/error-boundary/error-boundary';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: '49dfd724-4f47-4729-b83c-ca46636f45dd', name: 'Carlos', age: 28 },
        { id: '5bbcc9e7-2041-417f-a696-e8adf302a883', name: 'Alberto', age: 31 },
        { id: '5778a524-71dd-428a-9d45-0a63ee91cbcf', name: 'Juliana', age: 22 },
      ],
    };

    console.log(`1. [app.js].constructor() / props:`, this.props);
    console.log(`1. [app.js].constructor() / state:`, this.state);
  }

  componentWillMount() {
    console.log(`2. [app.js].componentWillMount()`);
  }

  componentDidMount() {
    console.log(`4. [app.js].componentDidMount()`);
  }

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
    console.log(`3. [app.js].render()`);

    let titleStyle = [cssStyles["font-color-green"]];
    let persons = null;
    let buttonClass = '';

    if (this.state.showPersons) {
      titleStyle = [cssStyles["font-color-red"]];
      buttonClass = cssStyles.red;

      persons = (
        <div className="person-container">
          <Persons
            persons = { this.state.persons }
            deletePersonEvent={ this.deletePersonHandler.bind(this) }
            nameChangedEvent={ this.nameChangedHandler.bind(this) } />
        </div>
      );
    }

    return (
      <ErrorBoundary>
        <div className={cssStyles["app-wrapper"]}>
          <Cockpit
            title={ this.props.appTitle }
            titleStyle={titleStyle}
            buttonClass={buttonClass}
            togglePersonHandler={ this.togglePersonHandler.bind(this) }/>
          { persons }
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
