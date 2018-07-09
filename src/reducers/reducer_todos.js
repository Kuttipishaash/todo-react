import {FETCH_TODOS} from "../actions/types";

const INITIAL_STATE = {};


export default (state = INITIAL_STATE, action) =>{
    switch (action.type){
        case FETCH_TODOS:
            return action.payload;
        default:
            return state;
    }
}