import React, { useState, useEffect } from 'react';
import axios from 'axios';

const todo = props => {
  const [todoName, setTodoName] = useState('');
  const [todoList, setTodoList] = useState([]);
  const firebaseUrl = 'https://test-ae58d.firebaseio.com/todo.json';

  const inputChangeHandler = event => {
    setTodoName(event.target.value);
  };

  const todoAddHandler = () => {
    setTodoList(todoList.concat(todoName));

    axios.post(firebaseUrl, {todoData: todoName})
      .then(response => {
        console.log('firebase response: ', response);
      }).catch(error => {
        console.log('firebase error response: ', error);
      });
  };


  useEffect(() => {
    axios.get(firebaseUrl).then(response => {
      const todos = [];

      for (const key in response.data) {
        todos.push(response.data[key].todoData);
      }

      setTodoList(todos);
    });

    return () => {
      console.log('clean up');
    };
  }, []);

  return <React.Fragment>
    <input
      type="text"
      placeholder="Todo"
      onChange={inputChangeHandler}
      value={todoName}
    />

    <button type="button" onClick={todoAddHandler}> Add </button>

    <ul>
      {todoList.map(todo => <li key={todo}>{todo}</li>)}
    </ul>
  </React.Fragment>
};

export default todo;
