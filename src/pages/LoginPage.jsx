import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/auth/useAuth';
import useLoginForm from '../hooks/form/useLoginForm';
import LoginForm from '../components/form/LoginForm';
import Loading from '../components/display/DisplayLoading';
import ErrorMsg from '../components/display/DisplayErrorMsg';

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
		<div className='flex items-center justify-center'>
			<main>
				<div className='bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md'>
					<h1 className='text-2xl font-bold text-center mb-4 dark:text-gray-200'>
						Welcome Back!
					</h1>
					<LoginForm
						user={user}
						setUser={setUser}
						handleSubmit={handleSubmit}
						loading={loading}
					/>
				</div>
				{loading && <Loading />}
				<ErrorMsg errorMsg={errorMsg} errRef={errRef} />
			</main>
		</div>
	);
}
