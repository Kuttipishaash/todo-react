import {todosRef} from '../config/firebase';
import {FETCH_TODOS} from "./types";

export const addTodo = newTodo => async dispatch => {
    todosRef.push().set(newTodo);
};

export const removeTodo = completedTodo => async dispatch =>{
    todosRef.child(completedTodo).remove();
};

export const fetchTodos = () => async dispatch => {
    todosRef.on('value', snapshot => {
        console.log(snapshot.val());
        dispatch({
            type: FETCH_TODOS,
            payload: snapshot.val()
        });
    });
};