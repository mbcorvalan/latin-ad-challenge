import PropTypes from 'prop-types';

export default function DisplayProduct({ displayId, children }) {
	return (
		<div>
			<a href={`/display/${displayId}`}>{children}</a>
		</div>
	);
}

DisplayProduct.propTypes = {
	displayId: PropTypes.number.isRequired,
	children: PropTypes.node.isRequired,
};
