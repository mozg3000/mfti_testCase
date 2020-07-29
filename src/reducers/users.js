import {
		USER_LOAD,
		USER_REQUEST,
		USER_SUCCESS,
		USER_FAILTURE,
		USER_DELETE
} from '../actions/user.js';
import axios from 'axios';

const initialState = {
	users: [],
	loading: false,
	error: false
}
let res = null;
export const userReducer = (state = initialState, action) => {
	switch(action.type){
		case USER_LOAD: {
			
			return {
				...state,
				users: action.payload
			}
			// console.log(res);
			
		}
		case USER_REQUEST: {
			return {
				...state,
				loading: true,
				error: false
			}
		}
		case USER_SUCCESS: {
			return {
				...state,
				loading: false,
				error: false,
				users: action.payload
			}
		}
		case USER_FAILTURE: {
			return {
				...state,
				loading: false,
				error: true
			}
		}
		case USER_DELETE: {
			let id = action.payload;
			let newUsers = [];
			state.users.forEach((user) => {
				if(user.id.value !== id){
					console.log(user)
					newUsers.push(user);
				}
			})
			return {
				...state,
				users: newUsers
			}
		}
		default:{
		   return state // We return the default state here
		}
	}
}