export const FETCH_TODOS = 'FETCH_TODOS';
export const CREATE_TODO = 'CREATE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDyNS50I-rg-7R_qtuzGoW_XxI7pLuNIRw",
    authDomain: "react-todo-app-2b86b.firebaseapp.com",
    databaseURL: "https://react-todo-app-2b86b.firebaseio.com",
    projectId: "react-todo-app-2b86b",
    storageBucket: "react-todo-app-2b86b.appspot.com",
    messagingSenderId: "972612220868"
};
firebase.initializeApp(config);

var db = firebase.firestore();

export function fetchPosts() {
    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    });
}
