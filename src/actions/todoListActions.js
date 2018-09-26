import { FETCH_TODO_LIST, FETCH_NEW_LIST } from '../actions/types';

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

export const postToDoList = formData => dispatch => {
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(formData)
	})
		.then(res => res.json())
		.then(list =>
			dispatch({
				type: FETCH_NEW_LIST,
				payload: list
			})
		);
};
