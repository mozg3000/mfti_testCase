import {combineReducers} from 'redux';

import {userReducer} from './users.js';

export const rootReducer = combineReducers({
	user: userReducer
});