import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchToDoList } from '../actions/todoListActions';

class List extends Component {

    componentWillMount() {
        this.props.fetchToDoList();
    }

	render() {
		return (
			<ul>
				{this.props.todolists.map(i => {
					return <li key={i.id}>{i.title}</li>;
				})}
			</ul>
		);
	}
}

List.propTypes = {
    fetchToDoList: PropTypes.func.isRequired,
    todolists: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    todolists: state.todolists.lists
})

export default connect(mapStateToProps, { fetchToDoList })(List);