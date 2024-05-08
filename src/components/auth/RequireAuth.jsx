import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../hooks/auth/useAuth';

/**
 * Component to require authentication for accessing private routes.
 * @returns {JSX.Element|null} JSX element representing redirection or null.
 */
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
