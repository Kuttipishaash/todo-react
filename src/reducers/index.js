import {combineReducers} from 'redux';
import TodosReducer from './reducer_todos';
import {reducer as formReducer} from "redux-form";


const rootReducer = combineReducers({
    form: formReducer,
    todos: TodosReducer
});

export default rootReducer;