/**
 * Component that renders an error message with dynamic visibility based on the presence of an error.
 * If an error message is provided, the component displays a styled paragraph with the error message.
 * Otherwise, the component is hidden. It supports receiving a ref for potential use with focusing or other operations.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.errorMsg - The error message to display.
 * @param {React.RefObject} [props.errRef] - Optional React ref object for the DOM element.
 * @returns {JSX.Element} A JSX element that conditionally renders an error message based on its presence.
 */

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
