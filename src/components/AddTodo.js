import React from 'react';
import { Component } from 'react';
import firebase from 'firebase';

export default class AddTodo extends Component {

    render() {
        //TODO: Implement a input field and add button to add a new todo to the database.
        return (
            <div className="input-group mb-3">
                    <input className="form-control" type="text" placeholder="Enter todo"/>
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button">Add</button>
                    </div>
                
            </div>
        );
    }
}