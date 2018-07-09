import {todosRef} from '../config/firebase';
import {FETCH_TODOS} from "./types";

// Using async keyword in the step below to perform the operation in a async fashion.
export const addTodo = newTodo => dispatch => {
    todosRef.push().set(newTodo);
};

export const removeTodo = todoId => dispatch =>{
    console.log('removeTodo');
    todosRef.child(todoId).remove();
};

// TODO: To implement
export const completeTodo = todoId => dispatch =>{
    console.log('completeTodo');
    todosRef.child(todoId).child('status').set(true);
};

export const fetchTodos = () => dispatch => {
    todosRef.on('value', snapshot => {
        console.log(snapshot.val());
        dispatch({
            type: FETCH_TODOS,
            payload: snapshot.val()
        });
    });
};