import { FETCH_TODO_LIST, FETCH_NEW_TODO } from '../actions/types';

export const fetchToDoList = () => dispatch => {
	fetch('https://jsonplaceholder.typicode.com/todos/')
		.then(res => res.json())
		.then(lists =>
			dispatch({
                type: FETCH_TODO_LIST,
                payload: lists
            })
		);
};
