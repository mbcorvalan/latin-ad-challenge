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
		<form
			onSubmit={handleSubmit}
			className='max-w-lg w-full mx-auto px-4 sm:px-6 lg:px-8'
		>
			{Object.entries(formFieldConfig).map(([key, { type, options }]) => {
				const commonProps = {
					name: key,
					value: formData[key],
					onChange: handleChange,
					error: errors && errors[key],
					className:
						'shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500',
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
			<CustomButton
				type='submit'
				disabled={isLoading}
				className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'
			>
				{isLoading ? 'Submitting...' : 'Submit'}
			</CustomButton>
		</form>
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
