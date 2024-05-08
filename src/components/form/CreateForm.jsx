import TextInput from './TextInput';
import TextAreaInput from './TextAreaInput';
import SelectInput from './SelectInput';
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
		<form onSubmit={handleSubmit}>
			{Object.entries(formFieldConfig).map(([key, { type, options }]) => {
				const commonProps = {
					name: key,
					value: formData[key],
					onChange: handleChange,
					error: errors && errors[key], // Ensuring safe access to error messages
				};

				switch (type) {
					case 'textarea':
						return <TextAreaInput key={key} {...commonProps} />;
					case 'select':
						return <SelectInput key={key} {...commonProps} options={options} />;
					default:
						return <TextInput key={key} {...commonProps} />;
				}
			})}
			<CustomButton type='submit' disabled={isLoading}>
				{isLoading ? 'Submitting...' : 'Submit'}
			</CustomButton>
		</form>
	);
};

CreateForm.propTypes = {
	formData: PropTypes.object.isRequired,
	errors: PropTypes.object, // Corrected to include errors as a separate prop
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
