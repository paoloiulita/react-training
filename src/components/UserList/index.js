import React, { Component } from 'react';
import { connect } from 'react-redux'
import GithubItem from '../GithubSearch/GithubItem';

class UserList extends Component {
	render() {
		const { list } = this.props;
		return (
			<div>
				{list.map(user =>
					<GithubItem key={user.id} person={user} />
				)}
			</div>
		);
	}
}

const mapStateToProps = state => ({
  list: state.users,
})

export default connect(
  mapStateToProps,
  null
)(UserList)
