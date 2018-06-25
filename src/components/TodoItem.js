import React, { Component } from 'react'
import '../../style/styles.css'

class TodoItem extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="todo-item">
                <div className="todo-heading">{props.todoTitle}</div>
                <p>{props.todoContent}</p>
            </div>
        )
    }
}

export default TodoItem