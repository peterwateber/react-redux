import { FETCH_TODO_LIST, FETCH_NEW_TODO } from '../actions/types';

const initialState = {
    lists: [],
    todo: {}
};


export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TODO_LIST:
            return {
                ...state,
                lists: action.payload
            }
        case FETCH_NEW_TODO:
            return;
        default:
            return state;
    }
}