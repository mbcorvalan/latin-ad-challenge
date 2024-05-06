import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({});
	const isAuthenticated = !!auth.accessToken;

	return (
		<AuthContext.Provider value={{ auth, setAuth, isAuthenticated }}>
			{children}
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AuthContext;
