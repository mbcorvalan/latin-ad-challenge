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

	const login = useCallback(userData => {
		setAuth(userData);
		localStorage.setItem('user', encrypt(userData));
	}, []);

	const logout = useCallback(() => {
		setAuth({});
		localStorage.removeItem('user');
	}, []);

	const isAuthenticated = !!auth.accessToken;

	return (
		<AuthContext.Provider value={{ auth, login, logout, isAuthenticated }}>
			{children}
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AuthContext;
