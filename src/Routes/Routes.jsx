import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Menu from '../Pages/Menu/Menu';
import Order from '../Pages/Order/Order';
import Login from '../Pages/Login/Login';

import Signup from '../Pages/Signup/Signup';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Secret from '../Secret/Secret';
import Dashboard from '../Layout/Dashboard/Dashboard';
import MyCart from '../Pages/Dashbord/MyCart/MyCart';
import AllUsers from '../Pages/Dashbord/AllUsers/AllUsers';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: '/menu',
				element: <Menu></Menu>,
			},
			{
				path: '/order/:category',
				element: <Order></Order>,
			},
			{
				path: '/login',
				element: <Login></Login>,
			},
			{
				path: '/signup',
				element: <Signup></Signup>,
			},
			{
				path: '/secret',
				element: (
					<PrivateRoute>
						<Secret></Secret>
					</PrivateRoute>
				),
			},
		],
	},
	{
		path: 'dashboard',
		element: (
			<PrivateRoute>
				<Dashboard></Dashboard>
			</PrivateRoute>
		),
		children: [
			{
				path: 'mycart',
				element: <MyCart></MyCart>,
			},
			{
				path: 'allusers',
				element: <AllUsers></AllUsers>,
			},
		],
	},
]);
