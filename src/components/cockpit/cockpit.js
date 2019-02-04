import React from 'react';

const cockpit = (props) => {
  return (
    <div className='cockpit-component'>
      <h1 className={ props.titleStyle.join(' ') }>
        { props.title }
      </h1>

      <button
        className={ props.buttonClass }
        onClick={() => props.togglePersonHandler()}>Toggle person list
      </button>
    </div>
  );
};

export default cockpit;
