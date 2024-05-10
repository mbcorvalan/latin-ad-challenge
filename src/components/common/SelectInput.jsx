/**
 * Renders a select input component with options.
 * @param {Object} props - The properties passed to the select input component.
 * @param {string} props.name - The name of the select input, used for form submission and label association.
 * @param {string} props.value - The current value of the select input.
 * @param {Function} props.onChange - The function to call when the value of the select input changes.
 * @param {string} [props.error] - An error message to display if there is an error.
 * @param {Array<string>} props.options - The options for the select input.
 * @returns {JSX.Element} A div wrapping a label and a select input element.
 */
import PropTypes from 'prop-types';
import { formatLabel } from '../../utils/formatLabel';

const SelectInput = ({ name, value, onChange, error, options }) => (
	<div className='mb-4'>
		<label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
			{formatLabel(name)}:
		</label>
		<select
			className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
			name={name}
			value={value}
			onChange={onChange}
		>
			{options.map(option => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
		{error && <span className='error'>{error}</span>}
	</div>
);

SelectInput.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	error: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectInput;
