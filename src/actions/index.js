import {todosRef} from '../config/firebase';
import {FETCH_TODOS} from "./types";

/*
export function fetchPosts() {
    db.collection("todos").get().then((querySnapshot) => {
        
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    });
}
*/

export const addTodo = newTodo => async dispatch => {
    todosRef.push().set(newTodo);
};

export const removeTodo = completedTodo => async dispatch =>{
    todosRef.child(completedTodo).remove();
};

export const fetchTodos = () => async dispatch => {
    todosRef.on('value', snapshot => {
        dispatch({
            type: FETCH_TODOS,
            payload: snapshot.val()
        });
    });
};