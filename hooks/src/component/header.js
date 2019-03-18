import React, { useContext } from 'react';

import AuthContext from '../containers/auth-context';

const header = props => {
  const auth = useContext(AuthContext);

  return (
    <header>
      {auth.status ? <button onClick={props.onLoadTodos}>Todo list</button> : null }
      <button onClick={props.onLoadAuth}>Auth</button>
    </header>
  );
};

export default header;
