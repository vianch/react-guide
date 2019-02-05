import React from 'react';

const auxiliarWithClass = props => (
  <div className={ props.classes }>
    { props.children }
  </div>
);

export default auxiliarWithClass;
