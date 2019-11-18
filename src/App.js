import React from 'react';
import GithubSearch from './components/GithubSearch';
import './App.css';

function App() {
	return (
		<div className="App container">
			<div className="row">
				<div className="col-12">
					<header className="App-header">
						<h1>React Training</h1>
					</header>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<GithubSearch />
				</div>
			</div>
		</div>
	);
}

export default App;
