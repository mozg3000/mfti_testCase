import {LoginForm} from './components/LoginForm';
import {Home} from './pages/Home';
import {EditUserRedux} from './containers/EditUserContainer';
import {EditUser} from './components/EditUser';


export const routes = [
	{
		path: '/login',
		exac:true,
		component: LoginForm
	},
	{
		path: '/edit/:id',
		exac: true,
		component: EditUserRedux
	},
	{
		path: '/',
		exac: true,
		component: Home
	}
]