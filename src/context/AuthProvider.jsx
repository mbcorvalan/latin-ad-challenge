/**
 * Provides an authentication context to manage and share authentication state across the application.
 * This component initializes authentication state from local storage and provides functions to update or remove it.
 * It leverages encryption utilities to securely store and retrieve user data.
 *
 * @param {Object} props - The properties passed to the AuthProvider component.
 * @param {React.ReactNode} props.children - The child components that will have access to the authentication context.
 * @returns {JSX.Element} A Context.Provider that passes authentication state and utilities down to its children.
 */
import { createContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { encrypt, decrypt } from '../utils/encryption';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState(() => {
		const user = localStorage.getItem('user');
		if (user) {
			try {
				return decrypt(user);
			} catch (error) {
				console.error('Error decrypting user from localStorage', error);
				localStorage.removeItem('user');
			}
		}
		return {};
	});

	const setUserData = useCallback(userData => {
		setAuth(userData);
		localStorage.setItem('user', encrypt(userData));
	}, []);

	const removeUserData = useCallback(() => {
		setAuth({});
		localStorage.removeItem('user');
	}, []);

	const isAuthenticated = !!auth.accessToken;

	return (
		<AuthContext.Provider
			value={{ auth, setUserData, removeUserData, isAuthenticated }}
		>
			{children}
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AuthContext;
