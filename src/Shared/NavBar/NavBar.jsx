import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../hooks/useCart';

const NavBar = () => {
	const { user, logOut } = useContext(AuthContext);
	const [cart] = useCart();
	const handleLogout = () => {
		logOut()
			.then(() => {})
			.catch((error) => {
				console.log(error);
			});
	};

	const nav = (
		<div className='flex justify-center'>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/menu'>Our Menu</Link>
			</li>

			<li>
				<Link to={`/order/${'salads'}`}>Order Food</Link>
			</li>
			{user?.photoURL && (
				<img
					className='w-8 mt-2 h-8 rounded-full'
					src={user?.photoURL}
					alt={user?.displayName}
				/>
			)}
			{user ? (
				<>
					<button className='btn btn-ghost' onClick={handleLogout}>
						Logout
					</button>
				</>
			) : (
				<li>
					<Link to='/login'>Login</Link>
				</li>
			)}
		</div>
	);
	return (
		<div>
			<div className='navbar bg-base-100 fixed z-50 bg-opacity-25 bg-black text-[white] max-w-screen-xl'>
				<div className='navbar-start'>
					<div className='dropdown'>
						<label tabIndex={0} className='btn btn-ghost lg:hidden'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-5 w-5'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h8m-8 6h16'
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
							{nav}
						</ul>
					</div>
					<a className='btn btn-ghost normal-case text-xl'>Bistro Boss</a>
				</div>
				<div className='navbar-center hidden lg:flex'>
					<ul className='menu menu-horizontal px-1'>{nav}</ul>
				</div>

				<div className='navbar-end'>
					<li className='mr-3'>
						<Link to='/'>
							<button className='btn'>
								<FaShoppingCart className='mr-1' />
								<div className='badge badge-secondary'>{cart?.length || 0}</div>
							</button>
						</Link>
					</li>
					<a className='btn'>Get started</a>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
