import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
export default function DisplayProduct({ displayId, children }) {
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate(`/display/${displayId}`);
	};

	return <div onClick={handleNavigate}>{children}</div>;
}

DisplayProduct.propTypes = {
	displayId: PropTypes.number.isRequired,
	children: PropTypes.node.isRequired,
};
