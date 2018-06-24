import React, {Component} from 'react';
import AddTodo from '../containers/add_todo';
import TodoList from '../containers/todo_list';


class App extends Component {
    render() {
        return (
            <div>
                <AddTodo/>
                <TodoList/>
            </div>
        );
    }
}

export default App;
