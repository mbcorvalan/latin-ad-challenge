import { useDisplayForm } from '../hooks/form/useDisplayForm';
import CreateForm from '../components/form/CreateForm';
import { formFieldConfig } from '../utils/formFieldConfig';
import DisplayError from '../components/display/DisplayError';
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
			{submitError && <DisplayError message={submitError} />}
			<CreateForm
				formData={formData}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				formFieldConfig={formFieldConfig}
				isLoading={isLoading}
				errors={errors}
			/>

			{isSubmittedSuccessfully && <DisplaySuccessMessage />}

			<CustomButton
				onClick={() => navigate('/dashboard', { state: { from: location } })}
			>
				Volver al dashboard
			</CustomButton>
		</>
	);
};

export default CreateDisplay;
