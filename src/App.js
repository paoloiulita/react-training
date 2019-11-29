import React from 'react';
import GithubSearch from './components/GithubSearch';
import UserList from './components/UserList';
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
				<div className="col-6">
					<GithubSearch />
				</div>
				<div className="col-6">
					<GithubSearch />
				</div>
			</div>
			<hr />
			<div className="row">
				<div className="col-12">
					<UserList />
				</div>
			</div>
		</div>
	);
}

export default App;
