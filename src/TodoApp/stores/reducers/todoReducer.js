import * as types from '../actions/todoTypes'
import { v4 as uuidv4 } from 'uuid'
const initialState = {
    todos: [
        { id: 1, title: 'Job 1', completed: false },
        { id: 2, title: 'Job 2', completed: false },
        { id: 3, title: 'Job 3', completed: false }
    ]
}

const todoReducer = (state = initialState, action) => {

    // type and payload
    switch (action.type) {
        case types.COMPLETED:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) { todo.completed = !todo.completed }
                    return todo;
                })
            }
        case types.ADD_TOTO:
            return {
                ...state,
                todos: [
                    ...state.todos, action.payload
                ]
            }
        case types.DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        default:
            return state
    }

}

export default todoReducer;