/**
 * Renders a text input component.
 * @param {Object} props - The properties passed to the text input component.
 * @param {string} props.name - The name of the input, used for form submission and label association.
 * @param {string} props.value - The current value of the text input.
 * @param {Function} props.onChange - The function to call when the value of the text input changes.
 * @param {string} [props.error] - An error message to display if there is an error.
 * @returns {JSX.Element} A div wrapping a label and a text input element.
 */
import PropTypes from 'prop-types';
import { formatLabel } from '../../utils/formatLabel';

const TextInput = ({ name, value, onChange, error }) => (
	<div className='mb-4'>
		<label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
			{formatLabel(name)}:
		</label>
		<input
			className='shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
			type='text'
			name={name}
			value={value}
			onChange={onChange}
		/>
		{error && <span className='error'>{error}</span>}
	</div>
);

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	error: PropTypes.string,
};

export default TextInput;
