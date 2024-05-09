import PropTypes from 'prop-types';

const TextAreaInput = ({ name, value, onChange, error }) => (
	<div className='mb-4'>
		<label className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'>
			{name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1')}:
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
