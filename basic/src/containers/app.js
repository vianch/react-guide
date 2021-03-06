import React, { PureComponent } from 'react';

import cssStyles from './app.css';
import Persons from '../components/persons/persons'
import Cockpit from '../components/cockpit/cockpit'
import ErrorBoundary from '../components/error-boundary/error-boundary';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: '49dfd724-4f47-4729-b83c-ca46636f45dd', name: 'Carlos', age: 28 },
        { id: '5bbcc9e7-2041-417f-a696-e8adf302a883', name: 'Alberto', age: 31 },
        { id: '5778a524-71dd-428a-9d45-0a63ee91cbcf', name: 'Juliana', age: 22 },
      ],
      showPersons: false,
      toggleClickCount: 0,
      authenticated: false,
    };

    console.log(`1. [app.js].constructor() / props:`, this.props);
    console.log(`1. [app.js].constructor() / state:`, this.state);
  }

  componentDidMount() {
    console.log(`4. [app.js].componentDidMount()`);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      "[UPDATE App.js] App.getDerivedStateFromProps",
      nextProps,
      prevState
    );

    return prevState;
  }

  componentDidUpdate() {
    console.log(`4. [app.js].componentDidUpdate()`);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[UPDATE App.js] getSnapshotBeforeUpdate")
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
    this.setState((previousState, props) => {
      return {
        showPersons: !this.state.showPersons,
        toggleClickCount: ++previousState.toggleClickCount,
      };
    })
  }

  onLogin = () => {
    this.setState({ authenticated: true });
  };

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
      <div className={cssStyles["app-wrapper"]}>
        <p>Toggle click count: {this.state.toggleClickCount}</p>

        <ErrorBoundary>
          <AuthContext.Provider value={ this.state.authenticated }>
            <Cockpit
              title={ this.props.appTitle }
              titleStyle={titleStyle}
              buttonClass={buttonClass}
              onLogin = { this.onLogin }
              togglePersonHandler={ this.togglePersonHandler.bind(this) }/>
            { persons }
          </AuthContext.Provider>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
