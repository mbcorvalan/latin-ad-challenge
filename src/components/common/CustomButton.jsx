import PropTypes from 'prop-types';

const CustomButton = ({ onClick, type, disabled, className, children }) => {
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
