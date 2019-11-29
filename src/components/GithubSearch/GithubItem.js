import React, { Component } from 'react';
import './GithubItem.css'

class GithubItem extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	};
	getImageStyle(img) {
		return {
			backgroundImage: `url(${img})`
		}
	};
	handleClick() {
		const { onClick, person } = this.props;
		onClick && onClick(person);
	}
	render() {
		const { login, avatar_url } = this.props.person;
		return (
			<div className="GithubItem container" onClick={this.handleClick}>
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
