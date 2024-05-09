import useAuth from '../../hooks/auth/useAuth';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../common/CustomButton';

export default function NavBar() {
	const { auth, removeUserData } = useAuth();
	const { name } = auth;
	const navigate = useNavigate();

	const handleLogout = () => {
		removeUserData();
		navigate('/login');
	};

	return (
		<nav className='bg-white p-4' aria-label='Main Navigation'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-16'>
					<div className='flex items-center'>
						<a href='/' className='flex items-center'>
							<img
								src='../../../public/latinad.svg'
								alt='LatinAd Logo'
								className='h-8 mr-2'
							/>
						</a>
					</div>
					{name && (
						<div className='flex items-center'>
							<span
								className='text-sky-500 mr-4 sm:mr-6 md:mr-8 text-sm sm:text-base md:text-lg'
								aria-live='polite'
							>
								Welcome, {name}
							</span>
							<CustomButton
								className='bg-sky-500 hover:bg-sky-700  text-white py-2 px-4 rounded'
								onClick={handleLogout}
							>
								Logout
							</CustomButton>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
}
