import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchToDoList } from '../actions/todoListActions';

class List extends Component {

    componentWillMount() {
        this.props.fetchToDoList();
    }

	render() {
        console.log(this.props.lists)
		return (
			<ul>
				{this.props.lists.map((i, ix) => {
					return <li key={ix}>{i.title}</li>;
				})}
			</ul>
		);
	}
}

List.propTypes = {
    fetchToDoList: PropTypes.func.isRequired,
    lists: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    lists: state.lists.lists
})

export default connect(mapStateToProps, { fetchToDoList })(List);