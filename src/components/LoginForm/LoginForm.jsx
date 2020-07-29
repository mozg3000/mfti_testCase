import React from 'react';
import axios from 'axios';


export class LoginForm extends React.Component{
	
	handleSubmit = (e) => {
		e.preventDefault();
		console.log(e);
	}
	
	componentDidMount(){
		let res = null;
		axios('https://randomuser.me/api/?results=1')
		.then( data => {
			console.log(data.data.results);
		});
		// console.log(res);
	}
	
	render(){
		return (
			<form>
				<input type="text" name="name"/>
				<label htmlFor="name"> Name </label><br/>
				<input type="password" name="password"/>
				<label htmlFor="password"> Password </label><br/>
				<input type="submit" onClick={this.handleSubmit}/>
			</form>
		)
	}
}