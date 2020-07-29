import React from 'react';
import {connect} from 'react-redux';

import {UserList} from '../components/UserList';
import {userLoad, userDelete} from '../actions/user';

class UserListContainer extends React.Component{
	
	componentDidMount(){
		const {users, loadUsers}= this.props;
		if(!users.length){
			loadUsers();
		}
	}
	render(){
		const {users, deleteUser} = this.props;
		// console.log(deleteUser);
		return (<UserList users={users} deleteUser={deleteUser}/>)
	}
}

function mapStateToProps(state, ownProps){
	// console.log(state);
	return {users: state.user.users};
}
function mapDispatchToProps(dispatch){
	return {
		loadUsers: () => dispatch(userLoad()),
		deleteUser: (id) => dispatch(userDelete(id))
	}
}

export const UserRedux = connect(mapStateToProps, mapDispatchToProps)(UserListContainer);