import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	const handleSignup = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
	};
	return (
		<div className='hero min-h-screen bg-base-200'>
			<div className='hero-content flex-col lg:flex-row-reverse'>
				<div className='text-center lg:text-left'>
					<h1 className='text-5xl font-bold'>Sign Up now!</h1>
					<p className='py-6'>
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
						exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
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
								<span className='p-2 text-orange-700'>This field is required</span>
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
								<span className='p-2 text-orange-700'>This field is required</span>
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
								})}
								type='text'
								name='password'
								placeholder='password'
								className='input input-bordered'
							/>
							{errors.password?.type === 'required' && (
								<p className='p-2 text-orange-700'>Password is required</p>
							)}
						</div>
						<div className='form-control mt-6'>
							<button className='btn btn-primary'>Login</button>
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
	);
};

export default Signup;
