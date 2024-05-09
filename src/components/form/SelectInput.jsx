import PropTypes from 'prop-types';

const SelectInput = ({ name, value, onChange, error, options }) => (
	<div className='mb-4'>
		<label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
			{name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1')}:
		</label>
		<select name={name} value={value} onChange={onChange}>
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
