/**
 * Renders a dynamic form with various input types based on configuration provided.
 * This component is flexible and can handle text inputs, text areas, and select inputs based on the `formFieldConfig`.
 * It manages state changes, submissions, and also displays loading states.
 *
 * @param {Object} props - The properties passed to the CreateForm component.
 * @param {Object} props.formData - The current state values of the form fields.
 * @param {Object} props.errors - Errors for the form fields.
 * @param {Function} props.handleChange - Function to handle changes to each form field.
 * @param {Function} props.handleSubmit - Function to execute when the form is submitted.
 * @param {Object} props.formFieldConfig - Configuration object that specifies the type and options for each field.
 * @param {boolean} props.isLoading - Boolean indicating if the form is currently submitting.
 * @returns {JSX.Element} A form element populated with specified fields and a submit button.
 */

import TextInput from '../common/TextInput';
import TextAreaInput from '../common/TextAreaInput';
import SelectInput from '../common/SelectInput';
import PropTypes from 'prop-types';
import CustomButton from '../common/CustomButton';

const CreateForm = ({
	errors,
	formData,
	handleChange,
	handleSubmit,
	formFieldConfig,
	isLoading,
}) => {
	return (
		<div>
			<form
				onSubmit={handleSubmit}
				className='max-w-lg w-full mx-auto px-4 sm:px-6 lg:px-8'
			>
				{Object.entries(formFieldConfig).map(([key, { type, options }]) => {
					const inputProps = {
						name: key,
						value: formData[key],
						onChange: handleChange,
						error: errors[key],
						className:
							'shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500',
					};

					switch (type) {
						case 'textarea':
							return <TextAreaInput key={key} {...inputProps} />;
						case 'select':
							return (
								<SelectInput key={key} {...inputProps} options={options} />
							);
						default:
							return <TextInput key={key} {...inputProps} />;
					}
				})}
				<CustomButton
					type='submit'
					disabled={isLoading}
					className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'
				>
					{isLoading ? 'Submitting...' : 'Submit'}
				</CustomButton>
			</form>
		</div>
	);
};

CreateForm.propTypes = {
	formData: PropTypes.object.isRequired,
	errors: PropTypes.object,
	handleChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	formFieldConfig: PropTypes.objectOf(
		PropTypes.shape({
			type: PropTypes.string.isRequired,
			options: PropTypes.arrayOf(PropTypes.string),
		}),
	).isRequired,
	isLoading: PropTypes.bool.isRequired,
};

export default CreateForm;
