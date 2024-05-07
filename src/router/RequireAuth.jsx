import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import PropTypes from 'prop-types';

/**
 * Component to require authentication for accessing private routes.
 * @returns {JSX.Element|null} JSX element representing redirection or null.
 */
const RequireAuth = ({ children }) => {
	const { auth } = useAuth();
	const location = useLocation();

	const isAuthenticated = !!auth?.name;

	const loginRedirect = {
		pathname: '/',
		state: { from: location },
	};

	if (!isAuthenticated && location.pathname !== '/') {
		return <Navigate to={loginRedirect} replace />;
	}

	return children;
};

RequireAuth.propTypes = {
	children: PropTypes.node.isRequired,
};

export default RequireAuth;
