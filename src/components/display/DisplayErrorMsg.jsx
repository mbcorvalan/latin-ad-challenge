import PropTypes from 'prop-types';

export default function ErrorMsg({ errorMsg, errRef }) {
	return (
		<p
			ref={errRef}
			className={`${errorMsg ? 'text-red-500 bg-red-100 border border-red-400 p-3 rounded-md m-8' : 'hidden'}`}
			aria-live='assertive'
		>
			{errorMsg}
		</p>
	);
}

ErrorMsg.propTypes = {
	errorMsg: PropTypes.string.isRequired,
	errRef: PropTypes.object,
};
