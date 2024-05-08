import PropTypes from 'prop-types';

const CustomButton = ({ onClick, type, disabled, children }) => {
	return (
		<button onClick={onClick} disabled={disabled} type={type}>
			{children}
		</button>
	);
};

CustomButton.propTypes = {
	onClick: PropTypes.func,
	type: PropTypes.string,
	disabled: PropTypes.bool,
	children: PropTypes.node.isRequired,
};

export default CustomButton;
