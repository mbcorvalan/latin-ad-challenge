/**
 * A form component for editing existing entries, managing state and validation for each field.
 * It supports text inputs, text areas, and selection inputs. The form allows updating various properties
 * like name, description, price, resolution, and type. Changes are submitted when the form is valid.
 *
 * @param {Object} props - The properties passed to the EditForm component.
 * @param {Object} props.initialValues - Initial values for form fields, used to populate the form when loaded.
 * @param {Function} props.handleSubmit - Function to execute when the form is submitted.
 * @param {boolean} props.isLoading - Indicates whether the form is currently submitting data.
 * @returns {JSX.Element} A form element that includes input fields for editing details and a submit button.
 */
import PropTypes from 'prop-types';
import CustomButton from '../common/CustomButton';
import { useState } from 'react';
import { validateField } from '../../utils/validations';
export default function EditForm({ initialValues, handleSubmit, isLoading }) {
	const [formData, setFormData] = useState({
		fields: {
			name: initialValues.name || '',
			description: initialValues.description || '',
			price_per_day: initialValues.price_per_day || '',
			resolution_height: initialValues.resolution_height || '',
			resolution_width: initialValues.resolution_width || '',
			type: initialValues.type || 'indoor',
		},
		errors: {},
	});

	const handleChange = event => {
		const { name, value } = event.target;
		const error = validateField(name, value);

		setFormData(prev => ({
			...prev,
			fields: { ...prev.fields, [name]: value },
			errors: { ...prev.errors, [name]: error },
		}));
	};

	const handleSubmitModified = e => {
		e.preventDefault();
		let isValid = true;
		const newErrors = {};

		Object.entries(formData.fields).forEach(([key, value]) => {
			const error = validateField(key, value);
			if (error) {
				newErrors[key] = error;
				isValid = false;
			}
		});

		if (isValid) {
			handleSubmit(formData.fields);
		} else {
			setFormData(prev => ({ ...prev, errors: newErrors }));
		}
	};

	return (
		<form
			onSubmit={handleSubmitModified}
			className='max-w-lg w-full mx-auto px-4 sm:px-6 lg:px-8'
		>
			<div className='mb-4'>
				<label
					htmlFor='name'
					className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
				>
					Name:
				</label>
				<input
					className='shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
					type='text'
					name='name'
					value={formData.fields.name}
					onChange={handleChange}
				/>
				{formData.errors.name && (
					<p className='text-red-500 text-xs mt-1'>{formData.errors.name}</p>
				)}
			</div>
			<div className='mb-4'>
				<label
					htmlFor='description'
					className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
				>
					Description:
				</label>
				<textarea
					className='shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
					name='description'
					value={formData.fields.description}
					onChange={handleChange}
				/>
				{formData.errors.description && (
					<p className='text-red-500 text-xs mt-1'>
						{formData.errors.description}
					</p>
				)}
			</div>
			<div className='mb-4'>
				<label
					htmlFor='price_per_day'
					className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
				>
					Price Per Day:
				</label>
				<input
					className='shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
					type='text'
					name='price_per_day'
					value={formData.fields.price_per_day}
					onChange={handleChange}
				/>
				{formData.errors.price_per_day && (
					<p className='text-red-500 text-xs mt-1'>
						{formData.errors.price_per_day}
					</p>
				)}
			</div>
			<div className='mb-4'>
				<label
					htmlFor='resolution_height'
					className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
				>
					Resolution Height:
				</label>
				<input
					className='shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
					type='text'
					name='resolution_height'
					value={formData.fields.resolution_height}
					onChange={handleChange}
				/>
				<p className='text-red-500 text-xs mt-1'>
					{formData.errors.resolution_height && (
						<p className='text-red-500 text-xs mt-1'>
							{formData.errors.resolution_height}
						</p>
					)}
				</p>
			</div>
			<div className='mb-4'>
				<label
					htmlFor='resolution_width'
					className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
				>
					Resolution Width:
				</label>
				<input
					className='shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
					type='text'
					name='resolution_width'
					value={formData.fields.resolution_width}
					onChange={handleChange}
				/>
				<p className='text-red-500 text-xs mt-1'>
					{formData.errors.resolution_width && (
						<p className='text-red-500 text-xs mt-1'>
							{formData.errors.resolution_width}
						</p>
					)}
				</p>
			</div>
			<div className='mb-4'>
				<label
					htmlFor='type'
					className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
				>
					Type:
				</label>
				<select
					className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
					name='type'
					value={formData.fields.type}
					onChange={handleChange}
				>
					<option value='indoor'>indoor</option>
					<option value='outdoor'>outdoor</option>
				</select>
			</div>
			<CustomButton
				type='submit'
				disabled={isLoading}
				className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'
			>
				{isLoading ? 'Submitting...' : 'Submit'}
			</CustomButton>
		</form>
	);
}

EditForm.propTypes = {
	initialValues: PropTypes.object.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	isLoading: PropTypes.bool.isRequired,
};
