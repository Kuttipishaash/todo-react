import firebase from "firebase";

var databaseSample = {
    "todos": [{
        "content": "Hello",
        "id": 1,
        "status": 1
    }, {
        "content": "Hi",
        "id": 2,
        "status": 0
    }]
};
export default function () {
    return databaseSample.todos;
}