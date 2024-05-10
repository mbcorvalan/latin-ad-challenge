import { Route, Routes } from 'react-router-dom';
import NavBar from '../components/navigation/NavBar';
import RequireAuth from './RequireAuth';
import LoginPage from '../pages/LoginPage';
import DashBoard from '../pages/DashBoard';
import CreateDisplay from '../pages/CreateDisplay';
import DisplayDetails from '../pages/DisplayDetails';
import UpdateDisplay from '../pages/UpdateDisplay';
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
				<Route
					path='/createDisplay'
					element={
						<RequireAuth>
							<CreateDisplay />
						</RequireAuth>
					}
				/>
				<Route
					path='/edit'
					element={
						<RequireAuth>
							<UpdateDisplay />
						</RequireAuth>
					}
				/>
				{/* Dynamic route for display details */}
				<Route
					path='/display/:displayId'
					element={
						<RequireAuth>
							<DisplayDetails />
						</RequireAuth>
					}
				/>
				{/* Default route */}
				<Route path='*' element={<LoginPage />} />
			</Routes>
		</>
	);
}
