import React, { Component } from 'react';
import GithubItem from './GithubItem';

class GithubSearch extends Component {
	constructor(props) {
		super(props);
		this.updateToken = this.updateToken.bind(this);
		this.onClick = this.onClick.bind(this);
	};
	state = {
		token: '',
		loading: false,
		searchPerformed: false,
		list: []
	};
	updateToken(event) {
		this.setState({
			token: event.target.value
		});
	};
	onClick(event) {
		const { token } = this.state;
		this.setState({
			loading: true,
			searchPerformed: true
		});
		fetch('https://api.github.com/search/users?q=' + token)
			.then(resp => resp.json())
			.then(resp => {
				this.setState({
					loading: false,
					list: resp.items
				});
			});
	};
	render() {
		const { loading, token, list, searchPerformed } = this.state;
		return (
			<div className="GithubSearch container">
				<div className="row">
					<div className="col-10">
						<div className="input-group">
							<div className="input-group-prepend">
								<span className="input-group-text" id="basic-addon1">@</span>
							</div>
							<input value={token} onChange={this.updateToken} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
						</div>
					</div>
					<div className="col-2">
						<button onClick={this.onClick} className="btn btn-primary">Search</button>
					</div>
				</div>
				<div className="row">
					{loading &&
						<div className="col-12">
							<img alt="tbd" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
						</div>
					}
					{!loading &&
						list.length > 0 && list.map(person => (<div className="col-12">
							<GithubItem person={person} />
						</div>))
					}
					{!loading && searchPerformed &&
						list.length === 0 && (<p>No results</p>)
					}
				</div>
			</div>
		);
	}
}

export default GithubSearch;
