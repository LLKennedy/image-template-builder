import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'image-template';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<image-template width="100" height="100"/>
			</header>
		</div>
	);
}

export default App;
