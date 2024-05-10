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

	const resetForm = () => {
		setFormData(initialState);
		setErrors({});
	};

	return {
		formData,
		errors,
		handleChange,
		handleSubmit,
		resetForm,
	};
};

export default useCreateForm;
