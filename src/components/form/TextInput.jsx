import PropTypes from 'prop-types';

const TextInput = ({ name, value, onChange, error }) => (
	<div>
		<label>
			{name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1')}:
		</label>
		<input type='text' name={name} value={value} onChange={onChange} />
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
