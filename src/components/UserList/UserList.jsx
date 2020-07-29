import React from 'react';
import { useHistory } from "react-router-dom";


const User = ({user, deleteUser}) => {
	let history = useHistory();
	const editHandler = () => {
		history.push(`/edit/${user.id.value}`);
	}
	const deleteUserHandler = (e) => {
		// console.log(user)
		e.preventDefault();
		deleteUser(user.id.value);
	}
	return (
		<div>
			<img src={user.picture.thumbnail}></img>
			{user.name.first} {user.name.last}
			<button onClick={editHandler}>Edit</button>
			<button onClick={deleteUserHandler}>Delete</button>
		</div>
	)
}
function UserList({users, deleteUser}){
	return (
		users.map((user) => <User user={user} key={user.id.value} deleteUser={deleteUser}/>)
	)
}
export {UserList};
