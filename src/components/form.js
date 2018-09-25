import React, { Component } from 'react';

export class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            todo: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const formData = {
            todo: this.state.todo
        };
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(res => res.json())
        .then(data => console.log(data))
    }
	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<div className="form-control">
					<input name="todo" onChange={this.onChange} placeholder="Something..." value={this.state.todo} />
				</div>
				<button type="submit">Post</button>
			</form>
		);
	}
}
