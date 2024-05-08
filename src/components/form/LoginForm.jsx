import PropTypes from 'prop-types';
import CustomButton from '../common/CustomButton';

const LoginForm = ({ user, setUser, handleSubmit, loading }) => {
	return (
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
			<CustomButton type='submit' disabled={loading}>
				Sign In
			</CustomButton>
		</form>
	);
};

LoginForm.propTypes = {
	user: PropTypes.object.isRequired,
	setUser: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
};

export default LoginForm;
