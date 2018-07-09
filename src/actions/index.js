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

export const completeTodo = (todoId, newStatus) => dispatch =>{
    console.log('completeTodo');
    todosRef.child(todoId).child('status').set(newStatus);
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