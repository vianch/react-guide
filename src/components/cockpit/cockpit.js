import React from 'react';

import Aux from '../../hoc/aux';

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
    </Aux>
  );
};

export default cockpit;
