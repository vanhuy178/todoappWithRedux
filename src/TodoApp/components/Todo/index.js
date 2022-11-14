import React from "react";
import TodoForm from "../TodoForm/index";
//import { connect } from "react-redux";
import './styleTodo/index.scss'

class Todo extends React.Component {

  render() {
    //const todos = this.props.todos
    const todos = this.props.todoList
    const compledtedTodo = this.props.compledtedTodo
    const deleteTodo = this.props.deleteTodo
    return (
      <div className="todo-list">
        <TodoForm />
        <ul>
          {todos.map(todo => {
            return <li key={todo.id}
              className={todo.completed ? 'completed' : ''}
            >{todo.title}
              <input type='checkbox' onChange={() => compledtedTodo(todo.id)} />
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          })}
        </ul>
      </div>
    )
  }
}

//const mapStateToProps = state => ({ todos: state.todos.todos })

export default Todo;