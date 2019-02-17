import React, { PureComponent } from 'react';

import Todo from '../component/todo';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    console.log(`4. [app.js].componentDidMount()`);
  }

  render() {

    return (
      <div>
        <p>Hi welcome to todos list</p>
        <Todo />
      </div>
    );
  }
}

export default App;
