import { useState } from 'react';

const useCreateForm = (initialState, validate) => {
	const [formData, setFormData] = useState(initialState);
	const [errors, setErrors] = useState({});

	const handleChange = e => {
		const { name, value } = e.target;
		const error = validate(name, value);

		setFormData(prevFormData => ({
			...prevFormData,
			[name]: value,
		}));

		setErrors(prevErrors => ({
			...prevErrors,
			[name]: error,
		}));
	};

	const handleSubmit = callback => e => {
		e.preventDefault();
		const newErrors = {};
		let isValid = true;

		// Validate all fields before submitting
		Object.keys(formData).forEach(key => {
			const error = validate(key, formData[key]);
			if (error) {
				newErrors[key] = error;
				isValid = false;
			}
		});

		setErrors(newErrors);

		if (isValid) {
			callback(formData);
		}
	};

	// Function to reset the form to its initial state
	const resetForm = () => {
		setFormData(initialState);
		setErrors({});
	};

	return {
		formData,
		errors,
		handleChange,
		handleSubmit,
		resetForm, // Include resetForm in the returned object
	};
};

export default useCreateForm;
