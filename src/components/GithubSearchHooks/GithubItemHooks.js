import React from 'react';
import './GithubItemHooks.css'

const GithubItemHooks = props => {
	const getImageStyle = img => ({
		backgroundImage: `url(${img})`
	});
	const { login, avatar_url } = props.person;
	return (
		<div className="GithubItemHooks container">
			<div className="row">
				<div className="col-2 avatar" style={getImageStyle(avatar_url)}></div>
				<div className="col-10 name">
					<p>{login}</p>
				</div>
			</div>
		</div>
	)
}

export default GithubItemHooks;
