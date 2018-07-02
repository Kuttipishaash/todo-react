import React, {Component} from 'react';
import firebase from 'firebase';
import {connect} from 'react-redux';

class TodoList extends Component {
    //TODO : To complete
    renderList() {
        return (
            this.props.todos.map((todo) => {
                return (
                    <li key={todo.id}>
                        {todo.content}
                        <span>X</span>
                    </li>
                );
            })
        );
    }
    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    // Whatever is returned from here will show up as props inside TodoList
    return {
        todos: state.todos
    };
}

export default connect(mapStateToProps)(TodoList);