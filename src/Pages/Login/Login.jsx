import React, { useContext, useEffect, useRef, useState } from 'react';
import {
	loadCaptchaEnginge,
	LoadCanvasTemplate,
	LoadCanvasTemplateNoReload,
	validateCaptcha,
} from 'react-simple-captcha';
import AuthProvider, { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
	const { login } = useContext(AuthContext);
	const captchaRef = useRef(null);
	const [disabled, setDisabled] = useState(true);
	const handleLogin = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		login(email, password)
			.then((res) => {
				const user = res.user;
				prompt(user);
			})
			.catch((e) => {
				prompt(e.message);
			});
	};
	useEffect(() => {
		loadCaptchaEnginge(6);
	}, []);

	const handleValidate = () => {
		const user_captcha_value = captchaRef.current.value;
		if (validateCaptcha(user_captcha_value) == true) {
			setDisabled(false);
		} else {
			setDisabled(true);
		}
	};
	return (
		<div className='hero min-h-screen bg-base-200'>
			<div className='hero-content flex-col lg:flex-row'>
				<div className='text-center lg:text-left'>
					<h1 className='text-5xl font-bold'>Login now!</h1>
					<p className='py-6'>
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
						exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
					</p>
				</div>
				<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
					<form onSubmit={handleLogin} className='card-body'>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Email</span>
							</label>
							<input
								required
								type='email'
								name='email'
								placeholder='email'
								className='input input-bordered'
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Password</span>
							</label>
							<input
								required
								type='password'
								name='password'
								placeholder='password'
								className='input input-bordered'
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<LoadCanvasTemplate />
							</label>
							<input
								required
								type='text'
								name='captcha'
								placeholder='Type the text above'
								className='input input-bordered'
								ref={captchaRef}
							/>
							<button
								onClick={handleValidate}
								className='btn btn-outline btn-xs mt-2'>
								Validate
							</button>
						</div>
						<div className='form-control mt-6'>
							<input
								disabled={disabled}
								className='btn btn-primary'
								type='submit'
								value='Login'
							/>
						</div>
					</form>
					<p className='p-4'>
						New here{' '}
						<Link className='text-blue-700' to={'/signup'}>
							Sign Up
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
