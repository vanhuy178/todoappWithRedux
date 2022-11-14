import React from "react";
import './styleTodoForm/index.scss'
import { connect } from "react-redux";
import { addTodo } from "../../stores/actions/todoAction";
import { v4 as uuidv4 } from "uuid";
class TodoForm extends React.Component {
    state = {
        title: ''
    }
    handChangeTodoInput = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const addTodo = this.props.addTodo;

        if (this.state.title !== '') {
            const newTodo = {
                id: uuidv4(),
                title: this.state.title,
                completed: false
            }
            addTodo(newTodo);
            this.setState({ title: '' })
        }
    }
    render() {
        return (
            <form>
                <input type='text' onChange={(e) => this.handChangeTodoInput(e)} />
                <input type='submit' onClick={(e) => this.handleSubmit(e)} />
            </form>
        )
    }
}
const mapStateToProps = state => ({})
export default connect(mapStateToProps, { addTodo: addTodo })(TodoForm);

