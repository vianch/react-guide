import React from 'react';

import Aux from '../../hoc/aux';
import { AuthContext } from "../../containers/app";

const cockpit = (props) => {
  return (
    <Aux>
      <h1 className={ props.titleStyle.join(' ') }>
        { props.title }
      </h1>

      <button
        className={ props.buttonClass }
        onClick={() => props.togglePersonHandler()}>Toggle person list
      </button>

      <AuthContext.Consumer>
        { auth => !auth ? <button onClick={() => props.onLogin()}> LOG IN </button>: null }
      </AuthContext.Consumer>


    </Aux>
  );
};

export default React.memo(cockpit);
