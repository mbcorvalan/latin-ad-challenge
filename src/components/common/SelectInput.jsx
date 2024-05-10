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
