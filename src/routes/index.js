import AuthView from '../views/auth/AuthView';
import Home from '../views/Home';


let routes = [
	{
		path: '/auth',
		component: AuthView,
		layout: 'auth',
	},
	{
		path: '/',
		component: Home,
		layout: 'main',
	},
];
export default routes;