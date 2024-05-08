import PropTypes from 'prop-types';

const DisplayError = ({ message }) => {
	if (!message) return null; // Do not render anything if there is no message.

	return (
		<div>
			<p>Error submitting form: {message}</p>
		</div>
	);
};

DisplayError.propTypes = {
	message: PropTypes.string.isRequired,
};

export default DisplayError;
