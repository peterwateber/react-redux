import { combineReducers } from 'redux';
import todoListReducers from './todoListReducers';

export default combineReducers({
    todolists: todoListReducers
})