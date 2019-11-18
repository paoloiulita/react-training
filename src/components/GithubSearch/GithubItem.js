import React, { Component } from 'react';
import './GithubItem.css'

class GithubItem extends Component {
	getImageStyle(img) {
		return {
			backgroundImage: `url(${img})`
		}
	};
	render() {
		const { login, avatar_url } = this.props.person;
		return (
			<div className="GithubItem container">
				<div className="row">
					<div className="col-2 avatar" style={this.getImageStyle(avatar_url)}></div>
					<div className="col-10 name">
						<p>{login}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default GithubItem;
