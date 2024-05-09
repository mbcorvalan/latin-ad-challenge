import { useParams } from 'react-router-dom';
import useDisplayProduct from '../hooks/api/useDisplayProduct';
import CustomButton from '../components/common/CustomButton';
import DisplayDetailsCard from '../components/display/DisplayDetailsCard';
import { useNavigate, useLocation } from 'react-router-dom';
import Loading from '../components/display/DisplayLoading';

function DisplayDetails() {
	const { displayId } = useParams();
	const navigate = useNavigate();
	const location = useLocation();

	const { displayData, loading, error } = useDisplayProduct(displayId);

	return (
		<div className='flex flex-col items-center justify-center min-h-screen w-full space-y-4'>
			<div className='self-end w-full px-4 lg:px-10'>
				<CustomButton
					className='justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'
					onClick={() => navigate('/dashboard', { state: { from: location } })}
				>
					Back to the Dashboard
				</CustomButton>
			</div>
			{loading && <Loading />}
			<div className='flex flex-col items-center justify-center flex-1 w-full px-4 lg:px-10'>
				{displayData && <DisplayDetailsCard displayData={displayData} />}
				{error && <p className='text-red-500'>{error}</p>}
			</div>
		</div>
	);
}

export default DisplayDetails;
