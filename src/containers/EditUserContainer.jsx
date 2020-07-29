import React from 'react';
import {connect} from 'react-redux';

import {EditUser} from '../components/EditUser';

class EditUserContainer extends React.Component{
	render(){
		const {user} = this.props;
		return (
			<EditUser user={user}/>
		)
	}
}
function mapStateToProps({user}, ownProps){
	// console.log(user.users);
	if(ownProps.match.params.id && ownProps.match.params.id !== null){
		console.log(ownProps.match.params.id);
		return {
			user: user.users.find((user) => user.id.value === ownProps.match.params.id)
		}
	}else{
		console.log('fds');
		return {user: null}
	}
	
}
export const EditUserRedux = connect(mapStateToProps)(EditUserContainer);