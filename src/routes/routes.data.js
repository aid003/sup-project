import Auth from '../components/screens/auth/Auth'
import Home from '../components/screens/home/Home'

export const routes = [
	{
		path: '/auth',
		component: Auth,
		isAuth: false
	},
	{
		path: '/',
		component: Home,
		isAuth: true
	}
]