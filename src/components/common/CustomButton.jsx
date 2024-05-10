/**
 * Renders a customizable button component.
 * @param {Object} props - The properties passed to the button component.
 * @param {Function} props.onClick - The function to call when the button is clicked.
 * @param {string} [props.type='button'] - The type of the button.
 * @param {boolean} [props.disabled=false] - Indicates if the button is disabled.
 * @param {string} [props.className] - The CSS class names applied to the button.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @returns {JSX.Element} A button element.
 */
import PropTypes from 'prop-types';

const CustomButton = ({
	onClick,
	type = 'button',
	disabled = false,
	className,
	children,
}) => {
	return (
		<button
			className={className}
			onClick={onClick}
			disabled={disabled}
			type={type}
		>
			{children}
		</button>
	);
};

CustomButton.propTypes = {
	onClick: PropTypes.func,
	type: PropTypes.string,
	disabled: PropTypes.bool,
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default CustomButton;
