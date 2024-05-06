import { Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import RequireAuth from '../components/RequireAuth';
import { LoginPage, DashBoard } from '../pages';

/**
 * Component representing the main router of the application.
 * @returns {JSX.Element} JSX element representing the main router.
 */
export default function AppRouter() {
	return (
		<>
			<NavBar />
			<Routes>
				{/* Public routes */}
				<Route path='/' element={<LoginPage />} />
				{/* Private routes */}
				<Route
					path='/dashboard'
					element={
						<RequireAuth>
							<DashBoard />
						</RequireAuth>
					}
				/>
				{/* Default route */}
				<Route path='*' element={<LoginPage />} />
			</Routes>
		</>
	);
}
