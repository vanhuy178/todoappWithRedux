import React from "react";
import './stylesNavbar/index.scss'
class Navbar extends React.Component {
    render() {
        const todoList = this.props.todoList
        return (
            <div className="navbar">
                <h1>Todo App with Redux</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Total Jobs: {todoList.length}</li>
                </ul>
            </div>
        )
    }
}

export default Navbar