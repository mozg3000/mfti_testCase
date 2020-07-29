import React from 'react';

export class EditUser extends React.Component{
		render(){
			let {user} = this.props;
			if(user&&user !== 'null'){
				return (
					<div>
						<form name="editUser">
							<input type="text" name="firstName" value={user.name.first}/>
							<label htmlFor="firstName">First Name</label>
							<br/>
							<input type="text" name="lastName" value={user.name.last}/>
							<label htmlFor="lastName">Last Name</label>
							<br/>
							<input type="password" name="new-password" />
							<label htmlFor="password">Password</label>
							<br/>
							<input type="password" name="new-password-repeat" />
							<label htmlFor="password">Repeat Password</label>						
							<br/>
							<input type="submit" value="save"/>
						</form>
					</div>
				)
			}else{
				return (
					<p>Похоже у этого пользователя нет id или страница была обновлена</p>
				)
			}
		}
}