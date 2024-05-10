import EditForm from '../components/form/EditForm';
import DisplayErrorMsg from '../components/display/DisplayErrorMsg';
import DisplaySuccessMessage from '../components/display/DisplaySuccessMessage';
import CustomButton from '../components/common/CustomButton';
import useUpdateDisplay from '../hooks/api/useUpdateDisplay';
import { formFieldConfig } from '../utils/formFieldConfig';
import { useNavigate, useLocation } from 'react-router-dom';

const UpdateDisplay = () => {
	const { isLoading, submitError, isSubmittedSuccessfully, handleSubmit } =
		useUpdateDisplay();

	const navigate = useNavigate();

	const location = useLocation();

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
					initialValues={location.state}
					handleSubmit={handleSubmit}
					isLoading={isLoading}
					formFieldConfig={formFieldConfig}
				/>
			)}
		</>
	);
};

export default UpdateDisplay;
