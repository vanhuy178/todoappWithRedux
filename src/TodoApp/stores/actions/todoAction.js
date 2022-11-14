import * as types from '../actions/todoTypes'

export const completed = id => dispatch => {
    dispatch({
        type: types.COMPLETED,
        payload: id
    })
}
export const addTodo = todoTitle => dispatch => {
    dispatch({
        type: types.ADD_TOTO,
        payload: todoTitle
    })
}
export const deleteTodo = idTodo => dispatch => {
    dispatch({
        type: types.DELETE_TODO,
        payload: idTodo
    })
}