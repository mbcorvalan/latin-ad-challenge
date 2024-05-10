import { useTransformData } from '../utils/useTransformData';
import { useSubmitData } from './useSubmitData';

export const useFormSubmission = () => {
	const transformFormData = useTransformData();
	const { submitData, isLoading, error } = useSubmitData();

	const handleSubmit = async formData => {
		const transformedData = transformFormData(formData);
		try {
			await submitData(transformedData);
		} catch (error) {
			console.error('Failed to submit:', error);
			throw error;
		}
	};

	return { handleSubmit, isLoading, error };
};
