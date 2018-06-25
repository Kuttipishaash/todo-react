import React, {Component} from 'react';
import firebase from 'firebase';
import {connect} from 'react-redux';

class TodoList extends Component {

    /*
    constructor(props){
        super(props);
        this.state = {
            todos: []
        };
        var config = {
            apiKey: "AIzaSyDyNS50I-rg-7R_qtuzGoW_XxI7pLuNIRw",
            authDomain: "react-todo-app-2b86b.firebaseapp.com",
            databaseURL: "https://react-todo-app-2b86b.firebaseio.com",
            projectId: "react-todo-app-2b86b",
            storageBucket: "react-todo-app-2b86b.appspot.com",
            messagingSenderId: "972612220868"
        };
        firebase.initializeApp(config);
        const firebaseRef = firebase.database().ref("/todos/");
        firebaseRef.once('value')
            .then((snapshot)=>{
                this.setState({
                    todos:todos
                });
            });

    }
    */

    //TODO: Implement rendering the list items seperately as containers in TodoItem.js
    renderList() {
        return (
            this.props.todos.map((todo) => {
                return (
                    <li key={todo.id} className="list-group-item">
                        {todo.content}
                        <span className="btn btn-danger">X</span>
                    </li>
                );
            })
        );
    }
    render() {
        return (
            <ul className="list-group col-sm-4">
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