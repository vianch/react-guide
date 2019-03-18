import React, { useState } from 'react';

import Todo from '../component/todo';
import Header from '../component/header';
import Auth from '../component/auth';
import AuthContext from './auth-context';

const app = props => {
  const [page, setPage] = useState('auth');
  const [authStatus, setAuthStatus] = useState(false);

  const switchPage = (pageName) => {
    setPage(pageName);
  };

  const logIn = () => {
    setAuthStatus(true);
  };

  return (
    <div className="App">
    <AuthContext.Provider value={{status: authStatus, login: logIn}}>
      <Header
          onLoadTodos={switchPage.bind(this, 'todos')}
          onLoadAuth={switchPage.bind(this, 'auth')}
        />
        <hr></hr>

        {page === 'auth' ? <Auth /> :  <Todo />}
    </AuthContext.Provider>

  </div>
  );
};

export default app;
