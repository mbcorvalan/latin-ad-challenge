/**
 * Renders a textarea input component.
 * @param {Object} props - The properties passed to the textarea input component.
 * @param {string} props.name - The name of the textarea, used for form submission and label association.
 * @param {string} props.value - The current value of the textarea.
 * @param {Function} props.onChange - The function to call when the value of the textarea changes.
 * @param {string} [props.error] - An error message to display if there is an error.
 * @returns {JSX.Element} A div wrapping a label and a textarea element.
 */
import PropTypes from 'prop-types';
import { formatLabel } from '../../utils/formatLabel';

const TextAreaInput = ({ name, value, onChange, error }) => (
	<div className='mb-4'>
		<label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
			{formatLabel(name)}:
		</label>
		<textarea
			className='shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
			name={name}
			value={value}
			onChange={onChange}
		/>
		{error && <span className='error'>{error}</span>}
	</div>
);

TextAreaInput.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	error: PropTypes.string,
};

export default TextAreaInput;
