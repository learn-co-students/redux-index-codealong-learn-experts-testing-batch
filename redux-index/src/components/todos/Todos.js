import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {

  render(){
    const todos = this.props.store.getState().todos.map(function(todo, i){
      return <Todo key={i} text={todo.text} />
    })
    return(
      <ul>
        {todos}
      </ul>
    )
  }
}

export default Todos;
