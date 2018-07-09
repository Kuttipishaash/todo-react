import React, { Component } from 'react';
import {connect} from 'react-redux';
import {removeTodo, completeTodo} from "../actions";

class TodoItem extends Component {

    deleteItem(){
        this.props.removeTodo(this.props.todoId)
    }
    markItemAsCompleted(){
        this.props.completeTodo(this.props.todoId)
    }

    render() {
        const {todoId, todo} = this.props;
        console.log(`todoId : ${todoId}`);
        let classNameForListItemContent = "list-group-item";
        if(!todo.status){
            classNameForListItemContent += " disabled";
        }
        return (
            <li key={todoId} className={classNameForListItemContent}>
                <h4>
                    {todo.content}
                    <div className="float-right">
                        <span className="btn btn-success" onClick={this.markItemAsCompleted.bind(this)}>Mark as completed</span>
                        <span className="btn btn-danger ml-2" onClick={this.deleteItem.bind(this)}>Delete</span>
                    </div>
                </h4>
            </li>
        )
    }
}

export default connect(null, {removeTodo})(TodoItem);