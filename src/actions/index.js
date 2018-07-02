import {todosRef} from '../config/firebase';
import {FETCH_TODOS} from "./types";


//TODO: Change the function definition
export function fetchPosts() {
    db.collection("todos").get().then((querySnapshot) => {
        
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        });
    });
}
