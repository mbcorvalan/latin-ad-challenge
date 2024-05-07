import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useLoginForm from '../hooks/useLoginForm';

export default function LoginPage() {
	const { setAuth, isAuthenticated } = useAuth();
	const navigate = useNavigate();
	const { user, setUser, errorMsg, loading, errRef, handleSubmit } =
		useLoginForm(setAuth, isAuthenticated);

	useEffect(() => {
		if (isAuthenticated) {
			navigate('/dashboard');
		}
	}, [isAuthenticated, navigate]);

	return (
		!isAuthenticated && (
			<section>
				<h1>Sign In</h1>
				<form onSubmit={handleSubmit}>
					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						id='email'
						name='email'
						autoFocus
						autoComplete='off'
						onChange={e =>
							setUser(prev => ({
								...prev,
								[e.target.name]: e.target.value,
							}))
						}
						value={user.email}
						required
					/>
					<label htmlFor='password'>Password:</label>
					<input
						type='password'
						name='password'
						id='password'
						value={user.password}
						onChange={e =>
							setUser(prev => ({
								...prev,
								[e.target.name]: e.target.value,
							}))
						}
						autoComplete='current-password'
						required
					/>
					<button type='submit' disabled={loading}>
						Sign In
					</button>
				</form>
				{loading && <p>Loading...</p>}
				<p
					ref={errRef}
					className={errorMsg ? 'errorMsg' : 'offscreen'}
					aria-live='assertive'
				>
					{errorMsg}
				</p>
			</section>
		)
	);
}
