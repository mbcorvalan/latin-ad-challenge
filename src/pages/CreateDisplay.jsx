import { useDisplayForm } from '../hooks/form/useDisplayForm';
import CreateForm from '../components/form/CreateForm';
import { formFieldConfig } from '../utils/formFieldConfig';
import DisplayErrorMsg from '../components/display/DisplayErrorMsg';
import DisplaySuccessMessage from '../components/display/DisplaySuccessMessage';
import { useNavigate, useLocation } from 'react-router-dom';
import CustomButton from '../components/common/CustomButton';

const CreateDisplay = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const {
		formData,
		handleChange,
		handleSubmit,
		isLoading,
		errors,
		isSubmittedSuccessfully,
		submitError,
	} = useDisplayForm();

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
			<CreateForm
				formData={formData}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				formFieldConfig={formFieldConfig}
				isLoading={isLoading}
				errors={errors}
			/>
		</>
	);
};

export default CreateDisplay;
