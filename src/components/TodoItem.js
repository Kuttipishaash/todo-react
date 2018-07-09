import React, { Component } from 'react';
import {connect} from 'react-redux';
import {removeTodo, completeTodo} from "../actions";

class TodoItem extends Component {

    deleteItem(){
        this.props.removeTodo(this.props.todoId)
    }
    markItemAsCompleted(){
        let newStatus = !this.props.todo.status;
        this.props.completeTodo(this.props.todoId, newStatus)
    }

    render() {
        const {todoId, todo} = this.props;
        console.log(`todoId : ${todoId}`);
        let listItemContentClass = "list-group-item";

        let markAsCompleteBtnText;
        let markAsCompletedBtnClass = "btn";
        if(todo.status){
            listItemContentClass += " list-group-item-secondary";
            markAsCompletedBtnClass += " btn-warning";
            markAsCompleteBtnText = "Mark as incomplete";
        }
        else{
            markAsCompleteBtnText = "Mark as completed"
            markAsCompletedBtnClass += " btn-success";
        }
        return (
            <li key={todoId} className={listItemContentClass}>
                <h4>
                    {todo.content}
                    <div className="float-right">
                        <span className={markAsCompletedBtnClass} onClick={this.markItemAsCompleted.bind(this)}>{markAsCompleteBtnText}</span>
                        <span className="btn btn-danger ml-2" onClick={this.deleteItem.bind(this)}>Delete</span>
                    </div>
                </h4>
            </li>
        )
    }
}

export default connect(null, {removeTodo, completeTodo})(TodoItem);