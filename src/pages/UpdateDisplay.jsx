import EditForm from '../components/form/EditForm';
import { formFieldConfig } from '../utils/formFieldConfig';
import DisplayErrorMsg from '../components/display/DisplayErrorMsg';
import DisplaySuccessMessage from '../components/display/DisplaySuccessMessage';
import { useNavigate, useLocation } from 'react-router-dom';
import CustomButton from '../components/common/CustomButton';
import useAuth from '../hooks/auth/useAuth';
import { putProduct } from '../api/updateProduct';
import { useState } from 'react';

const UpdateDisplay = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const { auth } = useAuth();

	const [isLoading, setLoading] = useState(false);
	const [submitError, setError] = useState(null);
	const [isSubmittedSuccessfully, setSubmittedSuccessfully] = useState(false);

	const handleSubmit = async formaData => {
		setLoading(true);
		setError(null);

		try {
			const result = await putProduct({
				id: location.state.id,
				displayData: formaData,
				token: auth.accessToken,
			});
			setLoading(false);
			setSubmittedSuccessfully(true);
			setTimeout(() => {
				navigate('/dashboard', { state: { from: location } });
			}, 3000);
			return result;
		} catch (err) {
			setError(err.message);
			setLoading(false);
			setSubmittedSuccessfully(false);
			throw err;
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<div className='mt-auto self-end w-full px-4 lg:px-10'>
				<CustomButton
					className='justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'
					onClick={() => navigate('/dashboard', { state: { from: location } })}
				>
					Back to the Dashboard
				</CustomButton>
			</div>
			{isSubmittedSuccessfully && <DisplaySuccessMessage />}
			{submitError && <DisplayErrorMsg message={submitError} />}
			{!isSubmittedSuccessfully && (
				<EditForm
					location={location.state}
					handleSubmit={handleSubmit}
					formFieldConfig={formFieldConfig}
					isLoading={isLoading}
				/>
			)}
		</>
	);
};

export default UpdateDisplay;
