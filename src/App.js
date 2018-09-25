import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Form } from './components/form';
import List from './components/list';

import { Provider } from 'react-redux';
import Store from './store.js';

class App extends Component {
	render() {
		return (
			<Provider store={Store}>
				<div className="App">
					<header className="App-header">
						<span className="applogo">
							<img src={logo} className="App-logo" alt="logo" />
						</span>
						<span className="app-title">Todo List</span>
					</header>
					<div className="intro">
						<Form />
						<List />
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;
