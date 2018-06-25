import {combineReducers} from 'redux';
import TodosReducer from './reducer_todos';

const rootReducer = combineReducers({
    todos: TodosReducer
});

export default rootReducer;