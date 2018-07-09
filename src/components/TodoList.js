import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTodos} from "../actions";
import TodoItem from './TodoItem';
import _ from 'lodash';

class TodoList extends Component {

    constructor(props){
        super(props);

        this.renderList = this.renderList.bind(this);
    }

    renderList() {
        const {todos} = this.props;
        const todoItems = _.map(todos, (value, key) => {
            return <TodoItem key={key} todoId={key} todo={value}/>
        });
        if (!_.isEmpty(todoItems)) {
            return todoItems;
        }
        else{
            return (
                <div>Nothing to display.</div>
            );
        }
    }
    componentWillMount() {
        this.props.fetchTodos();
    }

    render() {
        console.log(this.props.todos.todos);

        return (
            <div>
                <ul className="list-group">
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // Whatever is returned from here will show up as props inside TodoList
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, {fetchTodos})(TodoList);