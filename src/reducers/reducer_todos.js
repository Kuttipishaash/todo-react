import {FETCH_TODOS} from "../actions/types";

const INITIAL_STATE = {};

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

export default (state = INITIAL_STATE, action) =>{
    switch (action.type){
        case FETCH_TODOS:
            return action.payload;
        default:
            return state;
    }
}