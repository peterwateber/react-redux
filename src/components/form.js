import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { postToDoList } from '../actions/todoListActions';

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: ''
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
            title: this.state.title
        };
        this.props.postToDoList(formData);
    }
	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<div className="form-control">
					<input name="title" onChange={this.onChange} placeholder="Something..." value={this.state.title} />
				</div>
				<button type="submit">Post</button>
			</form>
		);
	}
}


export default connect(null, { postToDoList })(Form);