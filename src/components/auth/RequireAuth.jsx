/**
 * Component that requires authentication to access protected routes.
 * If the user is not authenticated, they are redirected to the login page.
 * @returns {JSX.Element|null} JSX element for redirection if unauthenticated, otherwise null.
 */

import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../hooks/auth/useAuth';

const RequireAuth = () => {
	const { auth } = useAuth();
	const location = useLocation();

	const isAuthenticated = !!auth?.user;

	const loginRedirect = {
		pathname: '/',
		state: { from: location },
	};

	if (!isAuthenticated && location.pathname !== '/') {
		return <Navigate to={loginRedirect} replace />;
	}

	return null;
};

export default RequireAuth;
