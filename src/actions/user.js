import axios from 'axios';

export const USER_LOAD = 'USER_LOAD';
export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILTURE = 'USER_FAILTURE';
export const USER_DELETE = 'USER_DELETE';

export const userDelete = (id) => (
	{
		type: USER_DELETE,
		payload: id
	}
)
export const userLoadRequest = () => (
	{
		type: USER_REQUEST,
		
	}
)
export const userLoadSuccess= (data) => (
	{
		type: USER_SUCCESS,
		payload: data
		
	}
)
export const userLoadFailture = (error) => (
	{
		type: USER_REQUEST,
		payload: error
		
	}
)
export const userLoad = () => {
	return async (dispatch) => {
		try{
			dispatch(userLoadRequest());
			const res = await axios('https://randomuser.me/api/?results=10');
			dispatch(userLoadSuccess(res.data.results));
		}catch(e){
			dispatch(userLoadFailture(e));
		}
	}
}