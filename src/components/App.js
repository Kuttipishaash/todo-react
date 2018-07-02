import React, {Component} from 'react';
import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoList';


class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <AddTodo/>
                <TodoList/>
            </div>
        );
    }
}

export default App;
