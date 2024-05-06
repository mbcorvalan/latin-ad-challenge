import useAuth from '../hooks/useAuth';
import useLoginForm from '../hooks/useLoginForm';

export default function LoginPage() {
	const { setAuth, isAuthenticated } = useAuth();
	const {
		userRef,
		errRef,
		user,
		password,
		errorMsg,
		loading,
		setUser,
		setPassword,
		handleSubmit,
	} = useLoginForm(setAuth, isAuthenticated);

	return (
		<section>
			<h1>Sign In</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='email'>Email:</label>
				<input
					type='email'
					id='email'
					ref={userRef}
					autoComplete='off'
					onChange={(e) => setUser(e.target.value)}
					value={user}
					required
				/>
				<label htmlFor='password'>Password:</label>
				<input
					type='password'
					name='password'
					id='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
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
	);
}
