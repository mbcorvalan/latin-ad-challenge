/**
 * Renders a login form with email and password fields.
 * It captures user input and submits the form, handling state updates and validations.
 * The form uses controlled components for input fields to manage form data through React state.
 *
 * @param {Object} props - The properties passed to the LoginForm component.
 * @param {Object} props.user - The user object containing the current form state.
 * @param {Function} props.setUser - Function to update the user state.
 * @param {Function} props.handleSubmit - Function to execute when the form is submitted.
 * @param {boolean} props.loading - Indicates whether the form is currently in the process of logging in (submitting).
 * @returns {JSX.Element} A form element that includes email and password inputs, and a submit button.
 */
import PropTypes from 'prop-types';
import CustomButton from '../common/CustomButton';

const LoginForm = ({ user, setUser, handleSubmit, loading }) => {
	return (
		<form
			onSubmit={handleSubmit}
			className='max-w-lg w-full mx-auto px-4 sm:px-6 lg:px-8'
		>
			<div className='mb-4'>
				<label
					className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
					htmlFor='email'
				>
					Email
				</label>
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
					className='shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
				/>
			</div>
			<div className='mb-4'>
				<label
					className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
					htmlFor='password'
				>
					Password
				</label>
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
					className='shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
				/>
			</div>
			<CustomButton
				type='submit'
				disabled={loading}
				className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'
			>
				Login
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
