import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/auth/useAuth';
import useLoginForm from '../hooks/form/useLoginForm';
import LoginForm from '../components/form/LoginForm';

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
				<LoginForm
					user={user}
					setUser={setUser}
					handleSubmit={handleSubmit}
					loading={loading}
				/>
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
