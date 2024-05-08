import PropTypes from 'prop-types';

const TextAreaInput = ({ name, value, onChange, error }) => (
	<div>
		<label>
			{name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1')}:
		</label>
		<textarea name={name} value={value} onChange={onChange} />
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
