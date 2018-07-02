import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../../style/styles.css';
import {removeTodo} from "../actions";

class TodoItem extends Component {
    constructor(props) {
        super(props)
    }

    markAsCompleted = completedTodoId => {
        const {removeTodo} = this.props;
        removeTodo(completedTodoId);
    };
    
    render() {
        const {todoId, todo} = this.props;
        return (
            <div key={todoId} className="todo-item">
                <h4>
                    {todo.content}
                    <span
                        onClick={()=>{ this.markAsCompleted((todoId))}}
                    >Mark as completed</span>
                </h4>
            </div>
        )
    }
}

export default connect(null, {removeTodo})(TodoItem);