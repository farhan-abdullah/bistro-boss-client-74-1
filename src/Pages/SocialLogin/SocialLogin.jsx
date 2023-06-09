import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
	const { googleSignIn } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';
	const handlegoogleSignIn = () => {
		googleSignIn()
			.then((result) => {
				const loggedUser = result.user;
				console.log(loggedUser);
				const saveUser = { name: loggedUser.displayName, email: loggedUser.email };
				fetch('http://localhost:5000/users', {
					method: 'POST',
					headers: {
						'content-type': 'application/json',
					},
					body: JSON.stringify(saveUser),
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.message) {
							navigate(from, { replace: true });
						}
					});
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className=' text-center py-5'>
			<div className='divider'></div>
			<button onClick={handlegoogleSignIn} className='btn btn-circle btn-outline'>
				<FaGoogle className=''></FaGoogle>
			</button>
		</div>
	);
};

export default SocialLogin;
