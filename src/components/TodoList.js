import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTodos, removeTodo} from "../actions";
import TodoItem from './TodoItem';
import _ from 'lodash';

class TodoList extends Component {

    renderList() {
        const {data} = this.props;
        const todos = _.map(data, (value, key) => {
            return <TodoItem key={key} todoId={key} todo={value}/>
        });
        if (!_.isEmpty(todos)) {
            return todos;
        }
        return (
            <div>Please add a todo for getting it displayed.</div>
        );
    }
    componentWillMount() {
        this.props.fetchTodos();
    }

    render() {
        return (
            <div>
                <div>
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({data}) => {
    // Whatever is returned from here will show up as props inside TodoList
    return {
        data
    };
};

export default connect(mapStateToProps, {fetchTodos})(TodoList);