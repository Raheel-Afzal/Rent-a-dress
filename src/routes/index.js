import AuthView from '../views/auth/AuthView';
import DressCardDetail from '../views/DressDetailPage';
import Home from '../views/Home';
import RentDress from '../views/RentDress';


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
	{
		path: '/rent-dress',
		component: RentDress,
		layout: 'main',
	},
	{
		path: '/dress-detail/:id',
		component: DressCardDetail,
		layout: 'main',
	},
];
export default routes;