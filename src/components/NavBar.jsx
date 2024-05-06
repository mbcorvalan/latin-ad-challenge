import useAuth from '../hooks/useAuth';

/**
 * Component representing the navigation bar.
 * @returns {JSX.Element} JSX element representing the navigation bar.
 */
export default function NavBar() {
	const { auth } = useAuth();
	const { name } = auth;

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
						<li>
							<span aria-live='polite'>{`Welcome, ${name}`}</span>
						</li>
					)}
				</ul>
			</nav>
		</>
	);
}
