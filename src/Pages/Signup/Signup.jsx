import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Signup = () => {
	const { createUser, updateUserProfile } = useContext(AuthContext);
	const navigate = useNavigate();
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		createUser(data.email, data.password)
			.then((res) => {
				const loggedUser = res.user;
				console.log(loggedUser);
				updateUserProfile(data.name, data.photoURL)
					.then(() => {
						console.log('user profile info updated');
						reset();
						Swal.fire({
							position: 'top-end',
							icon: 'success',
							title: 'User created successfully.',
							showConfirmButton: false,
							timer: 1500,
						});
						navigate('/');
					})
					.catch((error) => {
						console.log(error);
					});
			})
			.catch((e) => {
				console.log(e.message);
			});
	};

	return (
		<>
			<Helmet>
				<title>Bistro Boss | Sign Up</title>
			</Helmet>
			<div className='hero min-h-screen bg-base-200'>
				<div className='hero-content flex-col lg:flex-row-reverse'>
					<div className='text-center lg:text-left'>
						<h1 className='text-5xl font-bold'>Sign Up now!</h1>
						<p className='py-6'>
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
							id nisi.
						</p>
					</div>
					<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
						<form onSubmit={handleSubmit(onSubmit)} className='card-body'>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Name</span>
								</label>
								<input
									{...register('name', { required: true })}
									type='text'
									name='name'
									placeholder='Name'
									className='input input-bordered'
								/>
								{errors.name && (
									<span className='p-2 text-orange-700'>
										This field is required
									</span>
								)}
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Photo URL</span>
								</label>
								<input
									{...register('photoURL', { required: true })}
									type='text'
									placeholder='photo URL'
									className='input input-bordered'
								/>
								{errors.photoURL && (
									<span className='p-2 text-orange-700'>
										This field is required
									</span>
								)}
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<input
									{...register('email', { required: true })}
									type='text'
									name='email'
									placeholder='email'
									className='input input-bordered'
								/>
								{errors.email && (
									<span className='p-2 text-orange-700'>
										This field is required
									</span>
								)}
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Password</span>
								</label>
								<input
									{...register('password', {
										required: true,
										maxLength: 20,
										minLength: 6,
										pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
									})}
									type='text'
									name='password'
									placeholder='password'
									className='input input-bordered'
								/>
								{errors.password?.type === 'required' && (
									<p className='text-red-600'>Password is required</p>
								)}
								{errors.password?.type === 'minLength' && (
									<p className='text-red-600'>Password must be 6 characters</p>
								)}
								{errors.password?.type === 'maxLength' && (
									<p className='text-red-600'>
										Password must be less than 20 characters
									</p>
								)}
								{errors.password?.type === 'pattern' && (
									<p className='text-red-600'>
										Password must have one Uppercase one lower case, one number
										and one special character.
									</p>
								)}
							</div>
							<div className='form-control mt-6'>
								<input className='btn btn-primary' type='submit' value='Sign Up' />
							</div>
						</form>
						<p className='p-4'>
							Have already an account?{' '}
							<Link className='text-blue-700' to='/login'>
								Login
							</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Signup;
