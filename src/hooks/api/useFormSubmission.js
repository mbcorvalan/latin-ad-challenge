/**
 * Custom hook that handles the submission process of form data.
 * It uses other hooks to transform and submit the data, encapsulating the process for easy reuse.
 * The form data is first transformed using a dedicated transformation function, and then submitted.
 * Any errors during submission are handled and logged internally.
 *
 * @returns {Object} An object containing:
 *   - handleSubmit: Function to be called with form data for submission.
 *   - isLoading: Boolean indicating if the submission is in progress.
 *   - error: Error object representing any error that occurred during the submission process.
 */

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
