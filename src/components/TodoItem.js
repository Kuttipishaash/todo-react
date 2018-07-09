import React, { Component } from 'react';
import {connect} from 'react-redux';
import {removeTodo} from "../actions";

class TodoItem extends Component {

    deleteItem(){
        this.props.removeTodo(this.props.todoId)
    }

    render() {
        const {todoId, todo} = this.props;
        console.log(`todoId : ${todoId}`);
        return (
            <li key={todoId} className="list-group-item">
                <h4>
                    {todo.content}
                    <span className="btn btn-danger" onClick={this.deleteItem.bind(this)}>Mark as completed</span>
                </h4>
            </li>
        )
    }
}

export default connect(null, {removeTodo})(TodoItem);