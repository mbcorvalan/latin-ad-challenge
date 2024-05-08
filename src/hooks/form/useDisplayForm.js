import useCreateForm from './useCreateForm';
import { useFormSubmission } from '../api/useFormSubmission';
import { validateField } from '../../utils/validations';
import { formFieldConfig } from '../../utils/formFieldConfig';
import { useState } from 'react';

export const useDisplayForm = () => {
	const initialState = Object.keys(formFieldConfig).reduce(
		(acc, key) => ({
			...acc,
			[key]: key === 'type' ? 'indoor' : '',
		}),
		{},
	);

	const { formData, errors, handleChange, handleSubmit, resetForm } =
		useCreateForm(initialState, validateField);

	const [isSubmittedSuccessfully, setSubmittedSuccessfully] = useState(false);
	const [submitError, setSubmitError] = useState('');

	const { handleSubmit: submitForm, isLoading } = useFormSubmission();

	const onSubmit = async formData => {
		console.log('Before setting success', isSubmittedSuccessfully);
		setSubmittedSuccessfully(false);
		setSubmitError('');
		try {
			await submitForm(formData); // Ensure this throws an error on failure
			setSubmittedSuccessfully(true); // This only runs if no error was thrown
			resetForm(); // Reset formData to initialState after successful submission
		} catch (error) {
			console.error('Error during form submission:', error);
			setSubmitError(error.message || 'Error submitting form');
		}
	};

	return {
		formData,
		errors,
		handleChange,
		handleSubmit: handleSubmit(onSubmit),
		isLoading,
		isSubmittedSuccessfully,
		submitError,
	};
};
