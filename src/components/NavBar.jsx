import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

/**
 * Component representing the navigation bar.
 * @returns {JSX.Element} JSX element representing the navigation bar.
 */
export default function NavBar() {
	const { auth, logout } = useAuth();
	const { name } = auth;
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate('/login');
	};

	return (
		<>
			<nav aria-label='Main Navigation'>
				<ul>
					<li>
						<span role='img' aria-label='App logo'>
							🏠
						</span>
					</li>
					{name && (
						<>
							<li>
								<span aria-live='polite'>{`Welcome, ${name}`}</span>
							</li>
							<li>
								<button onClick={handleLogout}>Logout</button>
							</li>
						</>
					)}
				</ul>
			</nav>
		</>
	);
}
