import { FETCH_TODO_LIST, FETCH_NEW_LIST } from '../actions/types';

const initialState = {
	lists: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_TODO_LIST:
			return {
				state,
				lists: action.payload
			};
        case FETCH_NEW_LIST:
            return {
                ...state,
                lists: [action.payload, ...state.lists]
            };
		default:
			return state;
	}
};
