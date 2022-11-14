import React from 'react'
import { connect } from 'react-redux'
import Navbar from '../components/Navbar'
import Todo from '../components/Todo'
import { completed, deleteTodo } from '../stores/actions/todoAction'
import './index.scss'

class RenderTodoAppWithRedux extends React.Component {
  render() {
    const todoList = this.props.todoList
    const compledtedTodo = this.props.completed;
    const deleteTodo = this.props.deleteTodo
    return (
      <>
        <div className='container-todo'>
          <Navbar todoList={todoList} />
          <Todo todoList={todoList} compledtedTodo={compledtedTodo} deleteTodo={deleteTodo} />
        </div>
      </>
    )
  }
}
const mapStateToProps = state => ({ todoList: state.todos.todos })

export default connect(mapStateToProps, { completed: completed, deleteTodo: deleteTodo })(RenderTodoAppWithRedux);


